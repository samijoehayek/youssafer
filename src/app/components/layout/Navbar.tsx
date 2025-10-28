// Navbar.tsx (Updated)

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { LanguageSwitcher } from "../ui/LanguageSwitcher";
import { DemoModal } from "../ui/DemoModal"; // ✨ ADD THIS: Import the new modal component

const navLinks = [
  // ... your navLinks array remains the same
  { href: "/#home", label: "Home" },
  { href: "/#our-story", label: "Our Story" },
  { href: "/#features", label: "Features" },
  { href: "/#ecosystem", label: "Ecosystem" },
  { href: "/#services", label: "Services" },
  { href: "/#expertise", label: "Expertise" },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); // ✨ ADD THIS: State for the modal

  const pathname = usePathname();

  // ... all your useEffect hooks remain the same ...
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (pathname === "/") {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActiveSection(entry.target.id);
          });
        },
        { rootMargin: "-50% 0px -50% 0px" }
      );
      navLinks.forEach((link) => {
        const id = link.href.substring(2);
        const element = document.getElementById(id);
        if (element) observer.observe(element);
      });
      return () => observer.disconnect();
    }
  }, [pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // ✨ ADD THIS: Prevent body scroll when modal is open for better UX
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  return (
    <>
      {" "}
      {/* ✨ ADD THIS: Use a fragment to wrap header and modal */}
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          // Note: z-index is 40 now so modal (z-50) is on top
          isScrolled || isMenuOpen ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <nav className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-12">
              <Link href="/" className="flex-shrink-0">
                <Image
                  src="/logo.svg"
                  alt="Your Company Logo"
                  width={120}
                  height={40}
                  priority
                />
              </Link>

              <ul className="hidden lg:flex items-center space-x-8">
                {navLinks.map((link) => {
                  const isActive =
                    pathname === "/" && `/#${activeSection}` === link.href;
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={`transition-colors hover:text-active-blue ${
                          isActive
                            ? "font-bold text-active-blue"
                            : "font-normal text-inactive-gray"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="hidden lg:flex items-center space-x-4">
              <LanguageSwitcher />
              <Link href="/signin" className="font-bold text-active-blue">
                Sign In
              </Link>
              {/* ♻️ CHANGE THIS: Changed from Link to button */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="border border-brand-blue text-brand-blue px-6 py-2 rounded-md hover:bg-brand-blue hover:text-white transition-colors duration-300"
              >
                Request a demo
              </button>
            </div>

            <div className="lg:hidden flex items-center">
              <button onClick={toggleMenu} aria-label="Open main menu">
                <Menu className="h-6 w-6 text-gray-700" />
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-full bg-white z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end p-6">
            <button onClick={toggleMenu} aria-label="Close menu">
              <X className="h-6 w-6 text-gray-700" />
            </button>
          </div>

          <ul className="flex flex-col items-center justify-center h-full space-y-8 -mt-20">
            {navLinks.map((link) => {
              const isActive =
                pathname === "/" && `/#${activeSection}` === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={toggleMenu}
                    className={`text-2xl transition-colors hover:text-active-blue ${
                      isActive
                        ? "font-bold text-active-blue"
                        : "font-normal text-inactive-gray"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}

            <li>
              <LanguageSwitcher />
            </li>

            <li>
              <Link
                href="/signin"
                onClick={toggleMenu}
                className="text-2xl font-bold text-active-blue"
              >
                Sign In
              </Link>
            </li>

            <li>
              <button
                onClick={() => {
                  setIsModalOpen(true);
                  toggleMenu();
                }}
                className="text-2xl border border-brand-blue text-brand-blue px-8 py-3 rounded-md"
              >
                Request a demo
              </button>
            </li>
          </ul>
        </div>
      </header>
      {/* ✨ ADD THIS: Render the modal component */}
      <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
