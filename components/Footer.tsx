import { profile } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200/60">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-4 px-6 py-10 text-xs text-zinc-500 sm:flex-row sm:items-center">
        <p>
          © {year} {profile.name}. Built with care.
        </p>
        <p className="font-mono">Next.js · Tailwind · Framer Motion</p>
      </div>
    </footer>
  );
}
