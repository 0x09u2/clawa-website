import GovernanceBadge from "./GovernanceBadge"
import { ReactNode, useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

type Theme = "light" | "dark";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [theme, setTheme] = useState<Theme>("light");
  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  /* ---------- THEME ---------- */
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    setTheme(savedTheme ?? "light");
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  /* ---------- ACTIVE LINK ---------- */
  const isActive = (path: string) =>
    router.pathname === path ? "nav-link active" : "nav-link";

  /* ---------- CLOSE MENU ON OUTSIDE CLICK ---------- */
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target as Node)
      ) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  /* ---------- CLOSE MENU ON ROUTE CHANGE ---------- */
  useEffect(() => {
    setMenuOpen(false);
  }, [router.pathname]);

  /* ---------- LOCK BODY SCROLL ---------- */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  /* ---------- ESC KEY ---------- */
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setMenuOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      {/* NAV */}
      <nav className="nav">
        <div className="nav-left">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            Clawa
          </Link>
        </div>

        <div className="nav-right" ref={menuRef}>
          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            <Link href="/" className={isActive("/")} onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link href="/docs" className={isActive("/docs")} onClick={() => setMenuOpen(false)}>
              Docs
            </Link>
            <Link href="/clawist" className={isActive("/clawist")} onClick={() => setMenuOpen(false)}>
              Clawist
            </Link>
            <Link href="/governance" className={isActive("/governance")} onClick={() => setMenuOpen(false)}>
              Governance
            </Link>
            <Link href="/cip" className={isActive("/cip")} onClick={() => setMenuOpen(false)}>
              CIP
            </Link>
          </div>

          {/* Theme toggle */}
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? "🌞" : "🌙"}
          </button>

          {/* Mobile menu toggle */}
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* GOVERNANCE STATUS BANNER */}
      <div className="gov-banner">
        <span className="gov-badge">Early Governance</span>
        <span className="gov-text">
          Clawa governance is live and evolving through open community participation.
        </span>
      </div>

      {/* PAGE CONTENT */}
      <main>{children}</main>

      {/* FOOTER */}
      <footer className="footer">
        <span>Clawa is an open-source, community-governed ecosystem.</span>

        <GovernanceBadge />

        <div className="footer-links">
          <a
            href="https://github.com/0x09u2/clawa-website"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0.3C5.37 0.3 0 5.67 0 12.3c0 5.3 3.44 9.8 8.21 11.38..." />
            </svg>
          </a>

          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Discord">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.369..." />
            </svg>
          </a>

          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="X">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25..." />
            </svg>
          </a>
        </div>

        <span style={{ fontSize: "12px", opacity: 0.7 }}>
          Governance status: Early-stage · Open participation
        </span>
      </footer>
    </>
  );
}