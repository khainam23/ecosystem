import { House, Package, Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function HeaderButton({
  icon,
  tooltip,
}: {
  icon: React.ReactNode;
  tooltip: string;
}) {
  return (
    <Tooltip>
      <TooltipTrigger className="mb-2 rounded-xl p-2 transition-all duration-100 hover:-translate-y-1 hover:scale-105 hover:bg-black/5 hover:shadow-md">
        {icon}
      </TooltipTrigger>

      <TooltipContent side="right">{tooltip}</TooltipContent>
    </Tooltip>
  );
}

export default function Header() {
  return (
    <header className="fixed top-1/2 z-50 ml-3 rounded-2xl border border-white/20 bg-white/10 px-1 pt-3 shadow-lg shadow-black/10 backdrop-blur-xl">
      <div className="flex flex-col">
        {/* Trang chủ */}
        <HeaderButton icon={<House />} tooltip="Trang chủ" />

        {/* Dự án */}
        <HeaderButton icon={<Package />} tooltip="Các dự án" />

        {/* Quy trình */}
        <HeaderButton icon={<Info />} tooltip="Quy trình" />
      </div>
    </header>
  );
}
