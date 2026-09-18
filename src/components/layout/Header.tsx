// Header — navigation chính
export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-gray-100 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <span className="font-semibold text-gray-900">Ecosystem</span>
        <nav className="flex gap-6 text-sm text-gray-500">
          <a href="#projects" className="hover:text-gray-900">Projects</a>
          <a href="#workflow" className="hover:text-gray-900">Workflow</a>
          <a href="#about" className="hover:text-gray-900">About</a>
        </nav>
      </div>
    </header>
  )
}
