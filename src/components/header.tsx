"use client";

import { useState, useLayoutEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import Image from "next/image";

const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16m-7 6h7"
    />
  </svg>
);

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);
  const pathname = usePathname();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { y: -100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          delay: 0.2,
        }
      );
    }, headerRef);
    return () => ctx.revert();
  }, []);

  const linkClasses = (href: string) =>
    `text-md font-semibold transition-colors duration-300 drop-shadow-sm hover:text-red-300 ${
      pathname === href
        ? "underline underline-offset-4 decoration-2 text-red-400"
        : ""
    }`;

  const mobileLinkClasses = (href: string) =>
    `font-semibold block py-2 rounded hover:bg-gray-100 ${
      pathname === href
        ? "underline underline-offset-4 decoration-2 text-red-600"
        : ""
    }`;

  return (
    <header
      ref={headerRef}
      className="absolute top-0 left-0 w-full z-50 p-4 md:p-4 text-[#f9f0e4]
                 bg-white/5 opacity-10 backdrop-blur-xs"
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.jpg"
            alt="Logo"
            width={40}
            height={40}
            className="rounded"
          />
          <span className="font-bold text-white text-lg hidden md:block">
            HCM202
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/ve-du-an">
            <span className={linkClasses("/ve-du-an")}>Về dự án</span>
          </Link>
          <Link href="/doc-lap-dan-toc">
            <span className={linkClasses("/doc-lap-dan-toc")}>
              Vấn đề độc lập dân tộc
            </span>
          </Link>
          <Link href="/cach-mang-giai-phong-dan-toc">
            <span className={linkClasses("/cach-mang-giai-phong-dan-toc")}>
              Cách mạng giải phóng dân tộc
            </span>
          </Link>
          <Link href="/quiz">
            <span className={linkClasses("/quiz")}>Ôn tập</span>
          </Link>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white hover:text-red-300"
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 text-center text-gray-800 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <Link href="/ve-du-an" onClick={() => setIsMenuOpen(false)}>
              <span className={mobileLinkClasses("/ve-du-an")}>Về dự án</span>
            </Link>
            <Link href="/doc-lap-dan-toc" onClick={() => setIsMenuOpen(false)}>
              <span className={mobileLinkClasses("/doc-lap-dan-toc")}>
                Vấn đề độc lập dân tộc
              </span>
            </Link>
            <Link
              href="/cach-mang-giai-phong-dan-toc"
              onClick={() => setIsMenuOpen(false)}
            >
              <span
                className={mobileLinkClasses("/cach-mang-giai-phong-dan-toc")}
              >
                Cách mạng giải phóng dân tộc
              </span>
            </Link>
            <Link href="/quiz" onClick={() => setIsMenuOpen(false)}>
              <span className={mobileLinkClasses("/quiz")}>Ôn tập</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
