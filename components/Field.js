export default function Field({ label, name, type, placeholder, value, onChange }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-white/45 text-xs font-mono">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
        className="bg-[#0d0d0d] border border-white/10 text-white text-sm px-4 py-3 outline-none focus:border-[#22c55e] transition-colors placeholder:text-white/20"
      />
    </div>
  )
}