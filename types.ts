import { LucideIcon } from 'lucide-react';

export interface FeatureItem {
  title: string;
  description: string;
  icon?: LucideIcon;
}

export interface ArchitectureLayer {
  id: number;
  name: string;
  features: string[];
  color: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}