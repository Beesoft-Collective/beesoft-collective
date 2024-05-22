"use client";
import { useEffect, ReactNode } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

export default function MainLayout({ children }: { children: ReactNode }) {
  useEffect(() => {
    AOS.init({
      once: true, // Only animate once
      offset: 100, // Change animation offset
    });
  }, []);
  return <>{children}</>;
}
