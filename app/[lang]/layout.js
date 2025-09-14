


import Navbar from "../components/Navbar";
import SchoolInfo from "../components/SchoolInfo";
import Footer from "../components/Footer"; 
import NoticeBoard from "../components/NoticeBoard";
import Admission from "../components/Admission";
import Textbook from  "../components/Textbook";
import Committee from "../components/Committee"
import ApprovalBoard from "../components/ApprovalBoard"


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
         <Admission lang={lang}/>
         <Textbook lang={lang}/>
         <Committee lang={lang}/>
         <ApprovalBoard lang={lang}/>


            <Footer lang={lang}/>
      </body>
    </html>
  );
}
