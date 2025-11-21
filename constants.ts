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
  Terminal,
  Server,
  Eye,
  Box,
  CheckCircle2,
  Crosshair, 
  Move, 
  Settings, 
  Ghost, 
  FileCode, 
  EyeOff,
  GitCommit
} from 'lucide-react';
import { FeatureItem, ArchitectureLayer, FAQItem, StatItem, RoadmapItem, BypassItem, BenchmarkItem, StealthFeature, ChangelogItem, TestimonialItem } from './types';

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
    color: "border-blue-500 bg-blue-950/20 text-blue-400"
  },
  {
    id: 2,
    name: "Module System",
    features: ["Modular Pipeline", "Lifecycle (Init-Load-Enable)", "Module độc lập"],
    color: "border-cyan-500 bg-cyan-950/20 text-cyan-400"
  },
  {
    id: 3,
    name: "UI/UX Layer",
    features: ["Thiết kế lại toàn bộ", "Hệ thống Theme", "Modern GUI Panels"],
    color: "border-sky-500 bg-sky-950/20 text-sky-400"
  },
  {
    id: 4,
    name: "Addon & Script API",
    features: ["Kotlin/Java Support", "Script Loading", "Hot Reload Module"],
    color: "border-indigo-500 bg-indigo-950/20 text-indigo-400"
  }
];

export const TECH_STACK = [
  { name: "Kotlin", icon: Code2 },
  { name: "ASM", icon: Cpu },
  { name: "OpenGL", icon: LayoutTemplate },
  { name: "Netty", icon: Zap },
  { name: "Encrypted IO", icon: Shield },
];

export const BYPASS_DATA: BypassItem[] = [
  {
    server: "Hypixel",
    status: "Bypassing",
    rate: 95,
    icon: Eye,
    color: "from-blue-600 to-cyan-500",
    details: ["Watchdog V2 Full Bypass", "NoRotate Rotation", "Dynamic Velocity", "Scaffold Legit Mode", "Ping Spoofing"]
  },
  {
    server: "GrimAC",
    status: "Stable",
    rate: 90,
    icon: Shield,
    color: "from-sky-600 to-blue-500",
    details: ["Reach 3.0 - 3.1 Check", "Velocity Horizontal", "BadPackets Patched", "Simulation Fix", "Interact Check Fix"]
  },
  {
    server: "Vulcan",
    status: "Undetected",
    rate: 98,
    icon: Zap,
    color: "from-indigo-500 to-purple-500",
    details: ["Combat & Movement Check", "Timer Disabler", "FastPlace Native", "Omni-Sprint Bypass", "AimAssist V2"]
  },
  {
    server: "Intave",
    status: "Good",
    rate: 85,
    icon: Server,
    color: "from-cyan-600 to-teal-500",
    details: ["HitBox Expansion safe", "Velocity Vertical", "AimAssist Randomization", "ClickPattern Humanized", "Physics Simulation"]
  },
  {
    server: "NCP / Matrix",
    status: "Perfect",
    rate: 100,
    icon: Box,
    color: "from-blue-500 to-indigo-600",
    details: ["Full Disabler Available", "Fly Vanilla Mode", "Speed Hop/Ground", "Criticals Packet", "Step / Phase"]
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
    phase: "Q1 2024",
    title: "Foundation & Core Rewrite",
    date: "January - March",
    status: "completed",
    items: [
      "Viết lại Core Rendering Engine (OpenGL 3.0+)",
      "Tối ưu hóa EventBus System",
      "Tích hợp module Kotlin Scripting cơ bản",
      "Ra mắt phiên bản Alpha Test nội bộ"
    ]
  },
  {
    phase: "Q2 2024",
    title: "Stability & Anti-Cheat",
    date: "April - June",
    status: "completed",
    items: [
      "Nâng cấp Bypass cho Hypixel Watchdog",
      "Vá lỗi Memory Leak trên các máy RAM thấp",
      "Hệ thống module Combat V2 (Killaura, Velocity)",
      "Public Beta Release cho nhóm nhỏ"
    ]
  },
  {
    phase: "Q3 2024",
    title: "Cloud & Ecosystem",
    date: "July - September",
    status: "in-progress",
    items: [
      "Triển khai Cloud Configs System",
      "Ra mắt Marketplace cho Scripts/Addons",
      "Hỗ trợ Auto-Update không cần tải lại launcher",
      "Tích hợp Voice Chat Native"
    ]
  },
  {
    phase: "Q4 2024",
    title: "Advanced Visuals & AI",
    date: "October - December",
    status: "upcoming",
    items: [
      "Visual Engine V3 (Real-time Shadows, Bloom)",
      "AI Assist cho Auto-Config (Smart Bypass)",
      "Mở rộng hỗ trợ Minecraft 1.21+",
      "Hệ thống giải đấu (Tournament System) tích hợp"
    ]
  }
];

export const BENCHMARK_DATA: BenchmarkItem[] = [
  { name: "Vanilla Minecraft", fps: 60, latency: 45, color: "bg-slate-600" },
  { name: "Forge Modded", fps: 95, latency: 38, color: "bg-slate-500" },
  { name: "LiquidBounce", fps: 140, latency: 25, color: "bg-blue-900" },
  { name: "LiquidCore", fps: 380, latency: 8, color: "bg-gradient-to-r from-blue-500 via-cyan-400 to-white shadow-[0_0_20px_rgba(6,182,212,0.6)]" },
];

export const STEALTH_FEATURES: StealthFeature[] = [
  { title: "Class Encryption", description: "Mã hóa tên Class và Method thời gian thực, chống decompile.", icon: Lock },
  { title: "String Obfuscation", description: "Mọi chuỗi ký tự đều được mã hóa, không thể tìm thấy bằng hex editor.", icon: FileCode },
  { title: "Native Bridge", description: "Sử dụng JNI để chạy các tác vụ nhạy cảm ở tầng C++, ẩn khỏi Java VM.", icon: Cpu },
  { title: "Self Destruct", description: "Xóa sạch dấu vết khỏi bộ nhớ RAM và File System chỉ với 1 phím bấm.", icon: Ghost },
];

export const CHANGELOG_DATA: ChangelogItem[] = [
  {
    version: "v2.0.4",
    date: "2024-03-15",
    type: "Major",
    changes: [
      "New: FPS Boost Engine V2 (Tăng 40% hiệu năng)",
      "Added: Hỗ trợ Script Kotlin mới",
      "Bypass: Update Hypixel Watchdog configs",
      "Fix: Crash khi load map lớn"
    ]
  },
  {
    version: "v2.0.3",
    date: "2024-02-28",
    type: "Patch",
    changes: [
      "Fix: Lỗi render ESP trên card AMD",
      "Improved: Killaura rotation smooth hơn",
      "Added: Cloud Config Sync Beta"
    ]
  },
  {
    version: "v2.0.0",
    date: "2024-01-10",
    type: "Major",
    changes: [
      "Rebrand: Đổi tên dự án thành LiquidCore",
      "New: Giao diện Modern UI hoàn toàn mới",
      "New: Hệ thống Module Pipeline",
      "Removed: Các module cũ không ổn định"
    ]
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    content: "LiquidCore hoàn toàn thay đổi cách tôi chơi Bedwars. FPS tăng gấp đôi và Bypass Hypixel quá mượt.",
    name: "DragonSlayer",
    role: "Elite Player"
  },
  {
    content: "Giao diện cực kỳ hiện đại và dễ sử dụng. Tôi thích nhất là tính năng Cloud Configs giúp đồng bộ setting mọi nơi.",
    name: "PixelArtist",
    role: "Creative Builder"
  },
  {
    content: "Khả năng bảo mật tuyệt vời. Tôi cảm thấy an tâm hơn hẳn so với việc dùng các bản mod trôi nổi trên mạng.",
    name: "SecurityExpert",
    role: "Tech Reviewer"
  }
];