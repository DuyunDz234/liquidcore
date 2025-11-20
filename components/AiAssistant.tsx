import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Bot, Loader2 } from 'lucide-react';
import { askLiquidCoreAI } from '../services/geminiService';
import { ChatMessage } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

const MotionDiv = motion.div as any;

export const AiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Xin chào! Tôi là trợ lý AI của LiquidCore. Bạn muốn hỏi gì về kiến trúc module hay hiệu năng của client?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    const response = await askLiquidCoreAI(userMsg);

    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setLoading(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg transition-all duration-300 ${
          isOpen ? 'bg-slate-800 rotate-90' : 'bg-cyan-500 hover:bg-cyan-400 animate-pulse hover:animate-none'
        }`}
      >
        {isOpen ? <X className="text-white w-6 h-6" /> : <MessageCircle className="text-black w-6 h-6" />}
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <MotionDiv
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 w-[350px] md:w-[400px] h-[500px] bg-slate-900/95 backdrop-blur-md border border-cyan-500/30 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-slate-800/50 border-b border-slate-700 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center">
                <Bot className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <h3 className="font-bold text-white text-sm">LiquidCore AI Support</h3>
                <p className="text-xs text-green-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span> Online
                </p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-slate-700">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-cyan-600 text-white rounded-tr-none'
                        : 'bg-slate-800 text-slate-200 rounded-tl-none border border-slate-700'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-slate-800 p-3 rounded-2xl rounded-tl-none border border-slate-700">
                    <Loader2 className="w-4 h-4 text-cyan-400 animate-spin" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-slate-800/30 border-t border-slate-700">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Hỏi về LiquidCore..."
                  className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  disabled={loading}
                />
                <button
                  onClick={handleSend}
                  disabled={loading || !input.trim()}
                  className="p-2 bg-cyan-600 hover:bg-cyan-500 disabled:bg-slate-700 disabled:cursor-not-allowed text-white rounded-lg transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <p className="text-[10px] text-slate-500 mt-2 text-center">
                AI được cung cấp bởi Gemini 2.5 Flash.
              </p>
            </div>
          </MotionDiv>
        )}
      </AnimatePresence>
    </>
  );
};