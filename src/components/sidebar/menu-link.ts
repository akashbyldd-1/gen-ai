import type { IconType } from "react-icons";
import { Brain, House, MessageCircleMore } from "lucide-react";

interface MenuLink {
  label: string;
  icon: IconType | React.ElementType;
  path: string;
}

export interface SidebarProps {
  sidebarLinks: MenuLink[];
}

export const sidebarLinks = [
  // { label: "Home", path: "/", icon: House },
  { label: "AI Summarizer", path: "/ai-summarize", icon: Brain },
  { label: "Chatbot", path: "/chatbot", icon: MessageCircleMore },
];
