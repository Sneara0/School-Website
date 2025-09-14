"use client";
import React from "react";
import { PlayCircleIcon, BookOpenIcon } from "@heroicons/react/24/outline";

export default function Textbooks({ lang }) {
  const classes = [
    { name: "ষষ্ঠ শ্রেণি", href: "/textbooks/sixth" },
    { name: "সপ্তম শ্রেণি", href: "/textbooks/seventh" },
    { name: "অষ্টম শ্রেণি", href: "/textbooks/eighth" },
    { name: "নবম শ্রেণি", href: "/textbooks/ninth" },
    { name: "দশম শ্রেণি", href: "/textbooks/tenth" },
  ];

  return (
    <div className="relative py-20 bg-blue-100">
      {/* Decorative background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading with Icon */}
        <div className="flex flex-col items-center text-center mb-12 relative z-10">
          <BookOpenIcon className="h-12 w-12 text-blue-600 mb-3" />
          <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-700 mb-3">
            পাঠ্যপুস্তক
          </h2>
          <p className="text-gray-700 text-base sm:text-lg max-w-2xl">
            প্রতিটি শ্রেণির জন্য পাঠ্যপুস্তক অনলাইনে অ্যাক্সেস করুন। প্লে বোতাম চাপুন এবং দেখুন।
          </p>
        </div>

        {/* Classes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
          {classes.map((cls, idx) => (
            <a
              key={idx}
              href={cls.href}
              className="flex items-center justify-between bg-white bg-opacity-80 backdrop-blur-md border-l-4 border-blue-600 rounded-3xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 group"
            >
              <span className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                {cls.name}
              </span>
              <PlayCircleIcon className="h-12 w-12 text-blue-600 group-hover:text-blue-800 transition-colors duration-300" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
