import ElectricBorder from "@/components/ElectricBorder";

export default function BrowserFrame({ children, title, className = "", highlight = false, electro= false }) {
  return (
    <>
    {electro ? (
      <ElectricBorder
      color="#66FF00"
      speed={1}
      chaos={0.12}
      thickness={2}
      style={{ borderRadius: 16 }}
    >
    <div
      className={`border-2 flex flex-col ${highlight ? "border-[#22c55e]" : "border-white/5"} overflow-hidden bg-[#111] ${className}`}
    >
      <div className="flex-shrink-0 flex items-center gap-2 px-4 py-3 bg-[#0d0d0d] border-b border-white/10">
        <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        {title && (
          <span className="ml-2 text-[#EEFF00] text-xs font-mono">{title}</span>
        )}
      </div>
      <div className="flex-1 min-h-0">
        {children}
      </div>
    </div>
    </ElectricBorder>
    ) : 
    (
      <div
      className={`border-2 flex flex-col ${highlight ? "border-[#22c55e]" : "border-white/5"} overflow-hidden bg-[#111] ${className}`}
    >
      <div className="flex-shrink-0 flex items-center gap-2 px-4 py-3 bg-[#0d0d0d] border-b border-white/10">
        <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        {title && (
          <span className="ml-2 text-white/35 text-xs font-mono">{title}</span>
        )}
      </div>
      <div className="flex-1 min-h-0 bg-black">
        {children}
      </div>
    </div>
    )
    
    }
    </>
  );
}