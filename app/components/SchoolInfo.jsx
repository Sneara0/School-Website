import translations from "../i18n/translations";

export default function SchoolInfo({ lang }) {
  const info = translations[lang].schoolInfo;

  return (
    <section className="max-w-5xl mx-auto my-6 p-6 sm:p-10 bg-white rounded-2xl shadow-lg">
      {/* School Name & Motto */}
      <div className="text-center mb-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">{info.name}</h1>
        <p className="text-md sm:text-lg md:text-xl text-gray-600 italic mt-2">{info.motto}</p>
      </div>

      {/* School Info */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 font-medium">
        <li className="border-l-4 border-blue-500 pl-4 py-2 rounded-md shadow-sm">{info.eiin}</li>
        <li className="border-l-4 border-green-500 pl-4 py-2 rounded-md shadow-sm">{info.mpo}</li>
        <li className="border-l-4 border-indigo-500 pl-4 py-2 rounded-md shadow-sm">{info.dinajpurBoard}</li>
        <li className="border-l-4 border-purple-500 pl-4 py-2 rounded-md shadow-sm">{info.technicalBoard}</li>
      </ul>
    </section>
  );
}
