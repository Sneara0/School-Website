import Navbar from "../components/Navbar";
import SchoolInfo from "../components/SchoolInfo";
import Footer from "../components/Footer"; 
import NoticeBoard from "../components/NoticeBoard";
import Admission from "../components/Admission";
import Textbook from "../components/Textbook";
import Committee from "../components/Committee";
import ApprovalBoard from "../components/ApprovalBoard";
import OtherSection from "../components/OthersSection";
import AdminPanel from "../components/AdminPanel";

export default async function Layout({ children, params }) {
  const { lang } = await params; 

  return (
    <div className="flex flex-col min-h-screen">
      <SchoolInfo lang={lang} />
      <Navbar lang={lang} />

      <main className="flex-1">{children}</main>

      <NoticeBoard lang={lang} />
      <Admission lang={lang} />
      <Textbook lang={lang} />
      <Committee lang={lang} />
      <ApprovalBoard lang={lang} />
      <OtherSection lang={lang} />
      <AdminPanel lang={lang} />
      <Footer lang={lang} />
    </div>
  );
}
