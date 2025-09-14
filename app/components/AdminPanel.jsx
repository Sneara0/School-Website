"use client";
import React from "react";

export default function AdminPanel() {
  const headTeacher = {
    name: "মোঃ আব্দুল হক",
    designation: "প্রধান শিক্ষক",
    photo: "/head_teacher.jpg", 
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-purple-50 via-pink-50 to-yellow-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-purple-700">
            Administration Panel
          </h2>
          <p className="mt-3 text-gray-700 text-base sm:text-lg max-w-2xl mx-auto">
            প্রধান শিক্ষকের তথ্য
          </p>
        </div>

        {/* Head Teacher Card */}
        <div className="flex justify-center">
          <div className="bg-gradient-to-r from-pink-100 via-yellow-100 to-green-100 rounded-3xl shadow-2xl p-8 flex flex-col items-center transition-transform transform hover:scale-105 duration-300 hover:shadow-3xl">
            <img
              src={headTeacher.photo}
              alt={headTeacher.name}
              className="w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover border-4 border-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 shadow-lg"
            />
            <h3 className="mt-6 text-2xl sm:text-3xl font-bold text-gray-900">
              {headTeacher.name}
            </h3>
            <p className="mt-2 text-indigo-700 font-semibold text-lg sm:text-xl">
              {headTeacher.designation}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
