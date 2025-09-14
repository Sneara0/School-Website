// G:\rahmatpur-school\app\components\Footer.jsx

import translations from "../i18n/translations";

export default function Footer({ lang = "en" }) {
  // School info – multilingual support
  const footerInfo = translations[lang]?.footer || {
    schoolName: "Rahmatpur Adarsha Girls High School",
    rights: "All rights reserved.",
  };

  return (
    <footer className="bg-blue-600 text-white mt-auto shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col items-center space-y-2">
        {/* School name */}
        <p className="font-bold text-lg text-center">{footerInfo.schoolName}</p>

        {/* Rights */}
        <p className="text-sm text-center">{`© 2025 ${footerInfo.schoolName}. ${footerInfo.rights}`}</p>

        {/* Designer credit */}
        <p className="text-xs text-gray-200 text-center">Designed by Sneara Parvin</p>
      </div>
    </footer>
  );
}
