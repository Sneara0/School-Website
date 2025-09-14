import translations from "../../i18n/translations";

export default function About({ params }) {
  const { lang } = params;
  const t = translations[lang].about;

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-center mb-4">{t.title}</h1>
      <p className="text-justify leading-7">{t.content}</p>
    </div>
  );
}
