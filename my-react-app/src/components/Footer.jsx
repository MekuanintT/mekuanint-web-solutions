export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-zinc-950/50">
      <div className="container-page py-10">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div className="text-sm font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-sky-300 bg-clip-text text-transparent">
              Mekuanint Web Solutions
            </span>
          </div>
          <p className="text-sm text-zinc-400">© 2026 Mekuanint Web Solutions</p>
        </div>
      </div>
    </footer>
  )
}
