"use client";

import Navbar from "@/component/NavbarPage/NavbarPage";
import Footer from "@/component/FooterPage/FooterPage";
import { usePathname } from "next/navigation";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Routes where navbar & footer should be hidden
  const hiddenRoutes = ["/login", "/signup"];

  const shouldHideLayout = hiddenRoutes.includes(pathname);

  return (
    <>
      {!shouldHideLayout && <Navbar />}
      <main className="flex-grow">{children}</main>
      {!shouldHideLayout && <Footer />}
    </>
  );
}
