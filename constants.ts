import { 
  Zap, 
  Code2, 
  Palette, 
  LayoutTemplate,
  Shield,
  Globe,
  Puzzle,
  Activity,
  Lock,
  Cpu,
  Layers,
  Box,
  Terminal,
  Server,
  Eye
} from 'lucide-react';
import { FeatureItem, ArchitectureLayer, FAQItem, StatItem, RoadmapItem, TestimonialItem } from './types';

export const LIQUID_CORE_CONTEXT = `
LiquidCore là bản nâng cấp độc quyền (Closed Source) phát triển từ nền tảng LiquidBounce, tập trung tối đa vào hiệu năng (High FPS), bảo mật và trải nghiệm người dùng cao cấp.
LiquidCore hoạt động như một client framework khép kín, tối ưu hóa sâu vào nhân (core) để đạt độ mượt mà tuyệt đối.
Mục tiêu: Hiệu năng FPS cực đại, Bảo mật tuyệt đối, Giao diện Premium, Hệ sinh thái Addon chọn lọc.
Triết lý: Performance First, Security Focused, Exclusive Experience.
Khác biệt: Mã nguồn đóng bảo mật, Anti-Skid protection, Core được viết lại cho FPS cao gấp đôi bản gốc.
`;

export const PHILOSOPHY_ITEMS: FeatureItem[] = [
  {
    title: "Performance First",
    description: "Tối ưu hóa từng dòng lệnh. Client nhẹ hơn, FPS cao hơn, độ trễ thấp hơn.",
    icon: Zap
  },
  {
    title: "Closed Ecosystem",
    description: "Hệ thống khép kín đảm bảo tính ổn định, bảo mật và không có mã độc.",
    icon: Shield
  },
  {
    title: "Developer API",
    description: "API mạnh mẽ hỗ trợ Kotlin/Java cho phép tạo Addon phức tạp mà vẫn an toàn.",
    icon: Code2
  },
  {
    title: "Premium UI/UX",
    description: "Giao diện được thiết kế lại tỉ mỉ, hiệu ứng Blur/Glow mượt mà như native app.",
    icon: Palette
  }
];

export const KEY_FEATURES: FeatureItem[] = [
  {
    title: "FPS Boost Engine",
    description: "Core render được viết lại loại bỏ các đoạn code thừa, giúp tăng FPS lên đến 200% so với client gốc.",
    icon: Activity
  },
  {
    title: "Smart Security",
    description: "Mã nguồn đóng giúp ngăn chặn các hành vi sao chép (skidding) và tích hợp Anti-Leak mạnh mẽ.",
    icon: Lock
  },
  {
    title: "Visual Engine V2",
    description: "Animation mượt mà chuẩn 144Hz+. Hiệu ứng Blur, Shadow được render bằng shader tối ưu.",
    icon: LayoutTemplate
  },
  {
    title: "Cloud Configs",
    description: "Đồng bộ cài đặt cá nhân qua đám mây bảo mật. Không bao giờ mất config của bạn.",
    icon: Globe
  },
  {
    title: "Kotlin Scripting",
    description: "Hỗ trợ viết script bằng Kotlin với hiệu năng biên dịch thời gian thực (JIT compilation).",
    icon: Terminal
  },
  {
    title: "Modular Pipeline",
    description: "Quản lý module thông minh, tự động giải phóng bộ nhớ khi module không hoạt động.",
    icon: Puzzle
  }
];

export const ARCHITECTURE_LAYERS: ArchitectureLayer[] = [
  {
    id: 1,
    name: "Core Engine",
    features: ["Logic trung tâm", "EventBus System", "Tick xử lý tối ưu"],
    color: "border-red-500 bg-red-950/20 text-red-400"
  },
  {
    id: 2,
    name: "Module System",
    features: ["Modular Pipeline", "Lifecycle (Init-Load-Enable)", "Module độc lập"],
    color: "border-orange-500 bg-orange-950/20 text-orange-400"
  },
  {
    id: 3,
    name: "UI/UX Layer",
    features: ["Thiết kế lại toàn bộ", "Hệ thống Theme", "Modern GUI Panels"],
    color: "border-blue-500 bg-blue-950/20 text-blue-400"
  },
  {
    id: 4,
    name: "Addon & Script API",
    features: ["Kotlin/Java Support", "Script Loading", "Hot Reload Module"],
    color: "border-emerald-500 bg-emerald-950/20 text-emerald-400"
  }
];

export const TECH_STACK = [
  { name: "Kotlin", icon: Code2 },
  { name: "ASM", icon: Cpu },
  { name: "OpenGL", icon: LayoutTemplate },
  { name: "Netty", icon: Zap },
  { name: "Encrypted IO", icon: Shield },
];

export const BYPASS_DATA = [
  {
    server: "Hypixel",
    status: "Bypassing",
    rate: 95,
    icon: Eye,
    color: "from-red-500 to-orange-600"
  },
  {
    server: "GrimAC",
    status: "Stable",
    rate: 90,
    icon: Shield,
    color: "from-orange-500 to-yellow-600"
  },
  {
    server: "Vulcan",
    status: "Undetected",
    rate: 98,
    icon: Zap,
    color: "from-purple-500 to-pink-600"
  },
  {
    server: "Intave",
    status: "Good",
    rate: 85,
    icon: Server,
    color: "from-blue-500 to-cyan-600"
  },
  {
    server: "NCP / Matrix",
    status: "Perfect",
    rate: 100,
    icon: Box,
    color: "from-emerald-500 to-green-600"
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "LiquidCore có mã nguồn mở (Open Source) không?",
    answer: "Không. LiquidCore hiện là dự án Closed Source. Điều này giúp chúng tôi bảo vệ các thuật toán tối ưu hóa độc quyền, ngăn chặn hành vi sao chép trái phép và đảm bảo an toàn tuyệt đối cho người dùng."
  },
  {
    question: "Client có miễn phí không?",
    answer: "LiquidCore Core là miễn phí. Tuy nhiên, một số tính năng nâng cao hoặc quyền truy cập sớm (Early Access) có thể dành riêng cho thành viên hỗ trợ dự án."
  },
  {
    question: "Tại sao tôi nên dùng LiquidCore thay vì LiquidBounce?",
    answer: "LiquidBounce rất tốt, nhưng LiquidCore đưa mọi thứ lên tầm cao mới: FPS cao hơn, ít lỗi hơn, giao diện đẹp hơn và hệ thống bảo mật tốt hơn hẳn."
  },
  {
    question: "Làm thế nào để viết Addon cho LiquidCore?",
    answer: "Chúng tôi cung cấp SDK và tài liệu chi tiết cho lập trình viên. Addon của bạn sẽ chạy trên môi trường sandbox an toàn và hiệu quả."
  },
  {
    question: "Máy yếu có chạy được 60FPS không?",
    answer: "Chắc chắn! LiquidCore được sinh ra cho máy yếu. Với 'FPS Boost Engine', bạn sẽ thấy sự khác biệt rõ rệt ngay lần khởi động đầu tiên."
  }
];

export const STATS_DATA: StatItem[] = [
  { label: "Active Users", value: 15000, suffix: "+", prefix: "" },
  { label: "Average FPS Boost", value: 120, suffix: "%", prefix: "+" },
  { label: "Custom Modules", value: 200, suffix: "+", prefix: "" },
  { label: "Uptime Stability", value: 99, suffix: "%", prefix: "" },
];

export const ROADMAP_DATA: RoadmapItem[] = [
  {
    phase: "Phase 1",
    title: "Core Foundation",
    date: "Q3 2023 - Completed",
    status: "completed",
    items: [
      "Viết lại Core Rendering Engine",
      "Hệ thống Module Pipeline mới",
      "Tối ưu hóa Netty Networking",
      "Ra mắt bản Closed Beta đầu tiên"
    ]
  },
  {
    phase: "Phase 2",
    title: "Cloud Era",
    date: "Q4 2024 - In Progress",
    status: "in-progress",
    items: [
      "Hệ thống Cloud Configs (Sync settings)",
      "Marketplace cho Scripts & Addons",
      "Tích hợp Anti-Leak V2",
      "Hỗ trợ Voice Chat native"
    ]
  },
  {
    phase: "Phase 3",
    title: "AI Integration",
    date: "Q2 2025 - Upcoming",
    status: "upcoming",
    items: [
      "AI Auto-Config (Tự chỉnh bypass)",
      "Smart Killaura (Humanized Aim)",
      "Hệ thống phát hiện Admin in-game",
      "Mở rộng hỗ trợ Minecraft 1.21+"
    ]
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    name: "ShadowHunter",
    role: "Top 10 Skywars",
    content: "Chuyển từ client khác sang LiquidCore là quyết định sáng suốt nhất. FPS cực kỳ ổn định và các module hỗ trợ combat rất mượt, không bị khựng."
  },
  {
    name: "DevAlex",
    role: "Plugin Developer",
    content: "Hệ thống API rất clean và dễ tiếp cận. Tôi đã viết được vài addon riêng để custom giao diện theo ý thích mà không gặp khó khăn gì."
  },
  {
    name: "JustAGamer",
    role: "Casual Player",
    content: "Máy mình cấu hình yếu nhưng chạy LiquidCore vẫn mượt mà. Tính năng Cloud Configs cực tiện, ra quán net chỉ cần login là xong."
  }
];