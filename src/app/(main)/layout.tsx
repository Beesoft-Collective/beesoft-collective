"use client";
import { useEffect, ReactNode } from "react";
import "aos/dist/aos.css";

export default function MainLayout({ children }: { children: ReactNode }) {
  useEffect(() => {
    const AOS = require("aos");
    AOS.init({
      once: true, // Only animate once
      offset: 100, // Change animation offset
    });
  }, []);
  return <>{children}</>;
}
