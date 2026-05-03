export default function Background() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-zinc-950" />

      {/* gradient wash */}
      <div className="absolute -left-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-indigo-600/20 blur-[120px]" />
      <div className="absolute -right-56 top-20 h-[34rem] w-[34rem] rounded-full bg-violet-600/16 blur-[140px]" />
      <div className="absolute left-1/2 top-[34rem] h-[40rem] w-[44rem] -translate-x-1/2 rounded-full bg-sky-600/10 blur-[160px]" />

      {/* soft grid */}
      <div className="absolute inset-0 opacity-[0.32] [background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(circle_at_center,black_25%,transparent_70%)]" />

      {/* vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,transparent_0%,rgba(9,9,11,0.55)_55%,rgba(9,9,11,0.92)_100%)]" />
    </div>
  )
}

