import { Cloud } from "lucide-react"

export default function XBPageLoader() {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center p-6 text-center animate-in fade-in duration-300">
      <div className="relative mb-4">
        <div className="w-12 h-12 rounded-2xl bg-[#0B5FFF]/10 border border-[#0B5FFF]/30 flex items-center justify-center text-[#0B5FFF] animate-pulse">
          <Cloud className="w-6 h-6" />
        </div>
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#0B5FFF] to-[#00D4FF] opacity-30 blur-sm animate-spin" />
      </div>
      <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
        Loading XB Cloud Module...
      </span>
    </div>
  )
}
