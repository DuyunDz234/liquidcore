import { GoogleGenAI } from "@google/genai";
import { LIQUID_CORE_CONTEXT } from '../constants';

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const askLiquidCoreAI = async (userQuestion: string): Promise<string> => {
  if (!apiKey) {
    return "API Key chưa được cấu hình. Vui lòng kiểm tra cài đặt.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Câu hỏi của người dùng: ${userQuestion}`,
      config: {
        systemInstruction: `Bạn là trợ lý ảo thông minh cho dự án "LiquidCore". 
        Hãy trả lời các câu hỏi dựa trên thông tin sau đây. Giữ câu trả lời ngắn gọn, súc tích, chuyên nghiệp và thân thiện (dùng tone 'Dev' hoặc 'Gamer').
        
        THÔNG TIN VỀ LIQUIDCORE:
        ${LIQUID_CORE_CONTEXT}
        
        Nếu thông tin không có trong đoạn trên, hãy trả lời là bạn chưa có thông tin đó.`,
      }
    });

    return response.text || "Xin lỗi, tôi không thể trả lời lúc này.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Đã xảy ra lỗi khi kết nối với hệ thống AI.";
  }
};
