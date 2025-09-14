// app/components/layout/Navbar.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { LanguageSwitcher } from '../ui/LanguageSwitcher';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/features', label: 'Features' },
  { href: '/our-story', label: 'Our Story' },
  { href: '/services', label: 'Services' },
  { href: '/expertise', label: 'Expertise' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-transparent z-50">
      {/* ✅ The `container` and `mx-auto` classes have been removed for a full-width layout. */}
      {/* I've added lg:px-8 for better padding on large screens. */}
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
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`transition-colors hover:text-active-blue ${
                        isActive
                          ? 'font-bold text-active-blue'
                          : 'font-normal text-inactive-gray'
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
            <Link
              href="/signin"
              className="font-bold text-active-blue"
            >
              Sign In
            </Link>
            <Link
              href="/demo"
              className="border border-brand-blue text-brand-blue px-6 py-2 rounded-md hover:bg-brand-blue hover:text-white transition-colors duration-300"
            >
              Request a demo
            </Link>
          </div>

          <div className="lg:hidden flex items-center">
            <button onClick={toggleMenu} aria-label="Open main menu">
              <Menu className="h-6 w-6 text-gray-700" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-white z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} aria-label="Close main menu">
            <X className="h-6 w-6 text-gray-700" />
          </button>
        </div>
        <ul className="flex flex-col items-center justify-center h-full space-y-8 -mt-10">
          {navLinks.map((link) => {
             const isActive = pathname === link.href;
             return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-2xl transition-colors ${
                    isActive ? 'font-bold text-active-blue' : 'font-normal text-inactive-gray'
                  }`}
                  onClick={toggleMenu}
                >
                  {link.label}
                </Link>
              </li>
            )})}
          <li className="pt-8">
            <LanguageSwitcher />
          </li>
          <li>
            <Link href="/signin" className="text-2xl font-bold text-active-blue" onClick={toggleMenu}>
              Sign In
            </Link>
          </li>
          <li>
            <Link
              href="/demo"
              className="text-2xl border border-brand-blue text-brand-blue px-8 py-3 rounded-md"
              onClick={toggleMenu}
            >
              Request a demo
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}