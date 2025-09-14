"use client";
import { useState } from "react";
import Link from "next/link";
import translations from "../i18n/translations";
import LanguageSwitcher from "./LanguageSwitcher";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar({ lang }) {
  const [isOpen, setIsOpen] = useState(false);
  const t = translations[lang].navbar;

  const links = [
    { label: t.about, href: `/${lang}/about` },
    { label: t.students, href: `/${lang}/students` },
    { label: t.academic, href: `/${lang}/academic` },
    { label: t.notices, href: `/${lang}/notices` },
    { label: t.results, href: `/${lang}/results` },
    { label: t.committee, href: `/${lang}/committee` },
    { label: t.others, href: `/${lang}/others` },
    { label: t.gallery, href: `/${lang}/gallery` },
    { label: t.contact, href: `/${lang}/contact` },
  ];

  return (
    <nav className="bg-gradient-to-r from-blue-800 via-blue-700 to-blue-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          {/* Logo + School Name */}
          <Link href={`/${lang}`} className="flex items-center gap-3">
            <img
              src="/logo (2).png"
              alt="School Logo"
              className="w-12 h-12 rounded-full animate-bounce"
            />
            <span className="text-2xl font-bold hover:text-yellow-300 transition-all duration-500">
              Rahmatpur School
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-6 font-medium text-lg">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative group hover:text-yellow-300 transition-colors duration-300"
              >
                {link.label}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-300 transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Login/Register + Language */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href={`/${lang}/login`}
              className="px-4 py-2 border border-white rounded-full hover:bg-white hover:text-blue-800 transition"
            >
              {t.login}
            </Link>
            <Link
              href={`/${lang}/register`}
              className="px-4 py-2 border border-white rounded-full hover:bg-white hover:text-blue-800 transition"
            >
              {t.register}
            </Link>
            <LanguageSwitcher lang={lang} />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-white"
            >
              {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 space-y-2 pb-4 bg-blue-700 rounded-b-lg shadow-inner">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2 rounded-md hover:bg-blue-600 transition"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 mt-2 px-4">
              <Link
                href={`/${lang}/login`}
                className="px-4 py-2 border border-white rounded-full hover:bg-white hover:text-blue-800 transition"
              >
                {t.login}
              </Link>
              <Link
                href={`/${lang}/register`}
                className="px-4 py-2 border border-white rounded-full hover:bg-white hover:text-blue-800 transition"
              >
                {t.register}
              </Link>
              <LanguageSwitcher lang={lang} />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
