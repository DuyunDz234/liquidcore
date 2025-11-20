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

export interface StatItem {
  label: string;
  value: number;
  suffix: string;
  prefix?: string;
}

export interface RoadmapItem {
  phase: string;
  title: string;
  items: string[];
  status: 'completed' | 'in-progress' | 'upcoming';
  date: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  content: string;
}