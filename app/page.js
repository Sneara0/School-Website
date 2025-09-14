import { redirect } from "next/navigation";

export default function RootPage() {
  // Default language English
  redirect("/en");
}
