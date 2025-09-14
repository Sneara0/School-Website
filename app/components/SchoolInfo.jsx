import translations from "../i18n/translations";
import { FaSchool } from "react-icons/fa";

export default function SchoolInfo({ lang = "en" }) {
  const info = translations[lang].schoolInfo;

  return (
    <section className="max-w-3xl mx-auto my-6 p-6 sm:p-8 bg-gradient-to-r from-pink-50 via-white to-yellow-50 rounded-3xl shadow-xl">
      {/* School Name & Motto */}
      <div className="text-center mb-5">
        <div className="flex items-center justify-center space-x-3">
          <FaSchool className="text-red-500 w-7 h-7 sm:w-8 sm:h-8 animate-bounce" />
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-purple-800">{info.name}</h1>
        </div>
        <p className="text-sm sm:text-md md:text-lg text-blue-700 italic mt-2">{info.motto}</p>
      </div>

      {/* School Info */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700 font-medium">
        <li className="flex items-center space-x-2 border-l-4 border-red-400 pl-3 py-2 rounded-lg shadow-sm bg-white hover:shadow-lg transition-shadow hover:bg-red-50">
          <span className="font-semibold">{info.eiin}</span>
        </li>
        <li className="flex items-center space-x-2 border-l-4 border-green-400 pl-3 py-2 rounded-lg shadow-sm bg-white hover:shadow-lg transition-shadow hover:bg-green-50">
          <span className="font-semibold">{info.mpo}</span>
        </li>
        <li className="flex items-center space-x-2 border-l-4 border-indigo-400 pl-3 py-2 rounded-lg shadow-sm bg-white hover:shadow-lg transition-shadow hover:bg-indigo-50">
          <span className="font-semibold">{info.dinajpurBoard}</span>
        </li>
        <li className="flex items-center space-x-2 border-l-4 border-purple-400 pl-3 py-2 rounded-lg shadow-sm bg-white hover:shadow-lg transition-shadow hover:bg-purple-50">
          <span className="font-semibold">{info.technicalBoard}</span>
        </li>
      </ul>
    </section>
  );
}
