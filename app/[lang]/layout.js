


import Navbar from "../components/Navbar";
import SchoolInfo from "../components/SchoolInfo";
import Footer from "../components/Footer"; 


export default function Layout({ children, params }) {
  const { lang } = params;

  return (
    <html lang={lang}>
      <body className="min-h-screen flex flex-col">
        {/* School Info – Navbar এর উপরে */}
        <SchoolInfo lang={lang} />

        {/* Navbar */}
        <Navbar lang={lang} />
    

        {/* Main Content */}
        <main className="flex-1">{children}</main>
            <Footer lang={lang}/>
      </body>
    </html>
  );
}
