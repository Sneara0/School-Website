


import Navbar from "../components/Navbar";
import SchoolInfo from "../components/SchoolInfo";
import Footer from "../components/Footer"; 
import NoticeBoard from "../components/NoticeBoard"


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
         <NoticeBoard lang={lang}/>

            <Footer lang={lang}/>
      </body>
    </html>
  );
}
