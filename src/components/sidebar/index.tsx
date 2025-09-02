import { cn } from "@/lib/utils";
import Link from "next/link";
import { SidebarProps } from "./menu-link";
import { LogOut } from "lucide-react";

const Sidebar: React.FC<SidebarProps> = ({ sidebarLinks }) => {
  return (
    <>
      <header className="fixed left-0 top-0 flex h-screen w-[var(--sidebar-width)] flex-col bg-white border-r border-gray-200 shadow-lg">
        {/* Logo / Brand */}
        <div className="h-16 flex items-center justify-center border-b border-gray-200">
          <h1 className="text-2xl font-bold text-gray-800"></h1>
        </div>
        <div className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          {sidebarLinks.map((link) => (
            <Link
              key={link.label}
              href={link.path}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors text-[15px] font-medium"
                // isLinkActive(link.path) ? "bg-gray-200 font-semibold" : ""
              )}
            >
              <link.icon className="h-5 w-5" />
              {link.label}
            </Link>
          ))}
        </div>

        {/* footer */}
        <div className="px-4 py-4 border-t border-gray-200">
          <button className="flex items-center w-full px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors font-medium">
            <LogOut className="w-5 h-5 mr-3 text-gray-500" />
            Logout
          </button>
        </div>
      </header>
    </>
  );
};

export default Sidebar;
