import translations from "../i18n/translations";
import { FaSchool } from "react-icons/fa";

export default function SchoolInfo({ lang = "en" }) {
  const info = translations[lang].schoolInfo;

  return (
    <section className="max-w-3xl mx-auto my-6 p-6 sm:p-8 bg-gradient-to-r from-green-50 via-white to-green-100 rounded-3xl shadow-xl relative overflow-hidden">
      {/* Decorative animation */}
      <div className="absolute -top-16 -left-16 w-48 h-48 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      {/* School Name & Motto */}
      <div className="text-center mb-5 relative z-10">
        <div className="flex items-center justify-center space-x-3">
          <FaSchool className="text-green-600 w-7 h-7 sm:w-8 sm:h-8 animate-bounce" />
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-green-800">{info.name}</h1>
        </div>
        <p className="text-sm sm:text-md md:text-lg text-green-700 italic mt-2">{info.motto}</p>
      </div>

      {/* School Info */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700 font-medium relative z-10">
        <li className="flex items-center space-x-2 border-l-4 border-green-400 pl-3 py-2 rounded-lg shadow-sm bg-white hover:shadow-lg transition-all hover:bg-green-50 hover:scale-105 duration-300">
          <span className="font-semibold">{info.eiin}</span>
        </li>
        <li className="flex items-center space-x-2 border-l-4 border-green-500 pl-3 py-2 rounded-lg shadow-sm bg-white hover:shadow-lg transition-all hover:bg-green-50 hover:scale-105 duration-300">
          <span className="font-semibold">{info.mpo}</span>
        </li>
        <li className="flex items-center space-x-2 border-l-4 border-green-600 pl-3 py-2 rounded-lg shadow-sm bg-white hover:shadow-lg transition-all hover:bg-green-50 hover:scale-105 duration-300">
          <span className="font-semibold">{info.dinajpurBoard}</span>
        </li>
        <li className="flex items-center space-x-2 border-l-4 border-green-700 pl-3 py-2 rounded-lg shadow-sm bg-white hover:shadow-lg transition-all hover:bg-green-50 hover:scale-105 duration-300">
          <span className="font-semibold">{info.technicalBoard}</span>
        </li>
      </ul>
    </section>
  );
}
