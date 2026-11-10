import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-slate-800 text-white">
      <nav className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="text-2xl font-bold tracking-tight sm:text-3xl">
          Ronaldo Venancio
        </div>

        <ul className="flex gap-6 text-base sm:gap-8 sm:text-lg">
          <li>
            <Link
              href="/projects"
              className="transition hover:text-blue-300"
            >
              Projects
            </Link>
          </li>
          
          <li>
            <Link
              href="/"
              className="transition hover:text-blue-300"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/about"
              className="transition hover:text-blue-300"
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}