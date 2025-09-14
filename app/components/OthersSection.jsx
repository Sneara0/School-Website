"use client";
import React from "react";
import { UserIcon, DocumentTextIcon, ExclamationCircleIcon } from "@heroicons/react/24/outline";

export default function OthersSection({ lang }) {
  const items = [
    { name: "শিক্ষার্থী তথ্য", icon: UserIcon },
    { name: "তথ্য কর্মকর্তা অভিযোগ", icon: DocumentTextIcon },
    { name: "প্রতিকার", icon: ExclamationCircleIcon },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-green-100 via-white to-green-50 overflow-hidden">
      {/* Background decorative blobs */}
      <div className="absolute inset-0">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="flex flex-col items-center text-center mb-12 relative z-10">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-green-700 mb-3">
            অন্যান্য তথ্য
          </h2>
          <p className="text-gray-700 text-base sm:text-lg max-w-2xl opacity-80">
            শিক্ষার্থী, অভিযোগ ও প্রতিকার সম্পর্কিত তথ্য এখানে দেখতে পারবেন।
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center justify-center bg-white border-l-4 border-green-600 rounded-3xl p-8 shadow-md hover:shadow-2xl hover:scale-105 transition-transform duration-500 group opacity-0 animate-fadeIn"
                style={{ animationDelay: `${idx * 300}ms`, animationFillMode: "forwards" }}
              >
                <Icon className="h-12 w-12 text-green-600 mb-4 group-hover:text-green-800 transition-colors duration-300" />
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-green-700 transition-colors duration-300">
                  {item.name}
                </h3>
              </div>
            );
          })}
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
      `}</style>
    </section>
  );
}
