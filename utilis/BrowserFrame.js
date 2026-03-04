export default function BrowserFrame({ children, title, className = "", highlight = false }) {
  return (
    <div
      className={`rounded-xl border ${
        highlight ? "border-[#22c55e]" : "border-white/15"
      } overflow-hidden bg-[#111] ${className}`}
    >
      <div className="flex items-center gap-2 px-4 py-3 bg-[#0d0d0d] border-b border-white/10">
        <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        {title && (
          <span className="ml-2 text-white/35 text-xs font-mono">{title}</span>
        )}
      </div>
      {children}
    </div>
  );
}