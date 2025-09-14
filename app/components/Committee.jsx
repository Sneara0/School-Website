"use client";
import React from "react";
import { UserGroupIcon } from "@heroicons/react/24/outline";

export default function Committee({ lang }) {
  const headings = [
    "শিক্ষক মণ্ডলী",
    "পরিচালনা কমিটি",
    "কর্মচারী",
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-blue-100 via-white to-blue-50 overflow-hidden">
      {/* Floating background blobs */}
      <div className="absolute inset-0">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -top-24 -right-40 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl opacity-15 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="flex flex-col items-center text-center mb-12 relative z-10">
          <UserGroupIcon className="h-12 w-12 text-blue-600 mb-3 animate-bounce" />
          <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-700 mb-3">
            শিক্ষক মণ্ডলী & পরিচালনা কমিটি
          </h2>
          <p className="text-gray-700 text-base sm:text-lg max-w-2xl opacity-80">
            স্কুলের বিভাগসমূহের তথ্য এখানে প্রদর্শিত।
          </p>
        </div>

        {/* Headings Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
          {headings.map((heading, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center bg-blue-50 border-l-4 border-blue-600 rounded-3xl p-8 shadow-md hover:shadow-2xl hover:scale-105 transition-transform duration-500 group opacity-0 animate-fadeIn"
              style={{ animationDelay: `${idx * 300}ms`, animationFillMode: "forwards" }}
            >
              <UserGroupIcon className="h-10 w-10 text-blue-600 mb-4 group-hover:text-blue-800 transition-colors duration-300" />
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                {heading}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }

        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 8s infinite ease-in-out;
        }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </section>
  );
}
