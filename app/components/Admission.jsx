"use client";
import React from "react";
import { AcademicCapIcon } from "@heroicons/react/24/outline";

export default function Admission() {
  return (
    <div className="max-w-5xl mx-auto my-12 px-4 sm:px-6 lg:px-8">
      {/* Banner / Big Notice */}
      <div className="bg-indigo-600 text-white rounded-xl p-6 sm:p-10 shadow-lg text-center">
        {/* Heading with Icon */}
        <div className="flex flex-col items-center mb-4">
          <AcademicCapIcon className="h-12 w-12 mb-2 text-white" />
          <h2 className="text-2xl sm:text-3xl font-bold">
            ভর্তি বিজ্ঞপ্তি
          </h2>
        </div>

        <p className="text-sm sm:text-base mb-6">
          রাহমতপুর আদর্শ গার্লস হাই স্কুলে নতুন শিক্ষার্থীদের জন্য ভর্তি প্রক্রিয়া শুরু হয়েছে। 
          অনলাইন ও অফলাইন উভয় মাধ্যমে আবেদন করতে পারবেন। নিচের বাটনগুলো ব্যবহার করুন।
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
          <a
            href="/online-admission"
            className="px-6 py-3 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition"
          >
            অনলাইন আবেদন
          </a>

          <a
            href="/offline-admission-form"
            className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-full hover:bg-yellow-600 transition"
          >
            অফলাইন ফর্ম
          </a>

          <a
            href="/admission-guidelines"
            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 transition"
          >
            ভর্তি নির্দেশিকা
          </a>

          <a
            href="/fee-structure"
            className="px-6 py-3 bg-purple-500 text-white font-semibold rounded-full hover:bg-purple-600 transition"
          >
            ফি তথ্য
          </a>

          <a
            href="/contact-admission"
            className="px-6 py-3 bg-pink-500 text-white font-semibold rounded-full hover:bg-pink-600 transition"
          >
            ভর্তি অফিসের সাথে যোগাযোগ
          </a>
        </div>
      </div>
    </div>
  );
}
