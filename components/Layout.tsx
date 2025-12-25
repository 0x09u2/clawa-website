import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/router";

type Theme = "light" | "dark";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [theme, setTheme] = useState<Theme>("light");
  const router = useRouter();

  // Load saved theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    setTheme(savedTheme ?? "light");
  }, []);

  // Apply theme to DOM + persist
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggle theme
  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <>
      {/* NAV */}
      <nav className="nav">
        <div className="nav-left">
          <Link href="/">Clawa</Link>
        </div>

        <div className="nav-right">
          <div className="nav-links">
            <Link href="/" className={router.pathname === "/" ? "active" : ""}>
              Home
            </Link>
            <Link
              href="/docs"
              className={router.pathname === "/docs" ? "active" : ""}
            >
              Docs
            </Link>
            <Link
              href="/clawist"
              className={router.pathname === "/clawist" ? "active" : ""}
            >
              Clawist
            </Link>
            <Link
              href="/governance"
              className={router.pathname === "/governance" ? "active" : ""}
            >
              Governance
            </Link>
            <Link
              href="/cip"
              className={router.pathname === "/cip" ? "active" : ""}
            >
              CIP
            </Link>
          </div>

          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>
      </nav>

      {/* PAGE CONTENT */}
      <main>{children}</main>

      {/* FOOTER */}
      <footer className="footer">
        <span>Clawa is an open-source, community-governed ecosystem.</span>

        <div className="footer-links">
          {/* GitHub */}
          <a
            href="https://github.com/0x09u2/clawa-website"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0.3C5.37 0.3 0 5.67 0 12.3c0 5.3 3.44 9.8 8.21 11.38.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.06-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.1-.75.08-.74.08-.74 1.22.09 1.86 1.25 1.86 1.25 1.08 1.85 2.83 1.32 3.52 1.01.11-.78.42-1.32.76-1.62-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.82 1.1.82 2.22 0 1.6-.02 2.88-.02 3.27 0 .32.21.7.83.58C20.57 22.1 24 17.6 24 12.3 24 5.67 18.63 0.3 12 0.3z" />
            </svg>
          </a>

          {/* Discord */}
          <a href="#" target="_blank" rel="noreferrer" aria-label="Discord">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.369A19.791 19.791 0 0 0 16.885 3a14.13 14.13 0 0 0-.635 1.3 18.27 18.27 0 0 0-4.5 0 14.13 14.13 0 0 0-.635-1.3 19.736 19.736 0 0 0-3.432 1.369C4.533 8.045 3.9 11.6 4.158 15.107a19.9 19.9 0 0 0 6.07 3.091 14.8 14.8 0 0 0 1.272-2.074 12.6 12.6 0 0 1-2.004-.96c.168-.124.332-.255.492-.392a14.13 14.13 0 0 0 8.024 0c.16.137.324.268.492.392a12.6 12.6 0 0 1-2.004.96c.368.73.795 1.42 1.272 2.074a19.9 19.9 0 0 0 6.07-3.091c.31-3.76-.43-7.29-2.29-10.738z" />
            </svg>
          </a>

          {/* X */}
          <a href="#" target="_blank" rel="noreferrer" aria-label="X">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26L22.5 21.75h-6.937l-5.434-7.086L3.884 21.75H.574l7.73-8.835L1.5 2.25h7.063l4.913 6.44z" />
            </svg>
          </a>
        </div>
      </footer>
    </>
  );
}