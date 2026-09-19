import { House, Package, Info } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

function HeaderButton({ icon, tooltip }: { icon: React.ReactNode; tooltip: string }) {
  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <Button
            type="button"
            variant="ghost"
            aria-label={tooltip}
            className="mb-2 cursor-pointer rounded-xl text-foreground/80 transition-all duration-100
              hover:-translate-y-1 hover:scale-105 hover:bg-black/5 hover:shadow-md [&_svg]:!size-6"
          >
            {icon}
          </Button>
        }
      />

      <TooltipContent side="right">{tooltip}</TooltipContent>
    </Tooltip>
  );
}

export default function Header() {
  return (
    <header
      className="fixed bottom-3 left-1/2 z-50 -translate-x-1/2 rounded-2xl border border-white/20
        bg-linear-to-b from-black/30 via-white/10 to-white/30 px-2 py-2
        shadow-[0_8px_32px_rgba(0,0,0,0.15)] backdrop-blur-2xl md:top-1/2 md:bottom-auto
        md:left-auto md:ml-3 md:translate-x-0 md:-translate-y-1/2 md:px-1 md:pt-3"
    >
      <div className="flex flex-row md:flex-col gap-2">
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
