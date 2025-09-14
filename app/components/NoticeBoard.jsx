"use client";
import React from "react";
import { BellIcon } from "@heroicons/react/24/outline";

const notices = [
  {
    id: 1,
    title: "বার্ষিক ক্রীড়া প্রতিযোগিতা",
    date: "2025-09-20",
    description: "সকল শিক্ষার্থীকে বার্ষিক ক্রীড়া প্রতিযোগিতায় অংশগ্রহণের জন্য আমন্ত্রণ জানানো হলো।"
  },
  {
    id: 2,
    title: "পরীক্ষার সময়সূচি প্রকাশিত",
    date: "2025-09-18",
    description: "আসন্ন টার্ম পরীক্ষার সময়সূচি প্রকাশ করা হয়েছে।"
  },
  {
    id: 3,
    title: "অভিভাবক-শিক্ষক সভা",
    date: "2025-09-25",
    description: "সকল অভিভাবককে সকাল ১০:০০টায় স্কুল অডিটোরিয়ামে অনুষ্ঠিত PTM-এ অংশগ্রহণের জন্য অনুরোধ করা হলো।"
  }
];

export default function NoticeBoard() {
  return (
    <div className="max-w-5xl mx-auto my-8 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-indigo-600 text-center">
        নোটিশ বোর্ড
      </h2>
      <div className="space-y-4">
        {notices.map((notice) => (
          <div
            key={notice.id}
            className="flex items-start gap-3 p-4 sm:p-6 border-l-4 border-indigo-600 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition"
          >
            {/* Icon */}
            <div className="mt-1">
              <BellIcon className="h-6 w-6 text-indigo-600" />
            </div>

            {/* Notice Content */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold">{notice.title}</h3>
              <p className="text-xs sm:text-sm text-gray-500">{notice.date}</p>
              <p className="mt-2 text-gray-700 text-sm sm:text-base">{notice.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
