"use client";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useEffect, useState, type PropsWithChildren } from "react";

type Props = PropsWithChildren;
const DesktopNavbar = (props: Props) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };
  const pathname = usePathname();
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  });
  const isHome = pathname === "/";
  const isScrollDown = scrollPosition > 10;
  return (
    <nav
      className={cn(
        "hidden fixed transition-colors w-full z-50 text-white top-0 md:block",
        {
          "bg-white text-gray-700 shadow-md": isScrollDown || !isHome,
        }
      )}
    >
      <div className="flex items-center px-4 py-4">{props.children}</div>
      <hr className="border-b border-gray-100 opacity-25 " />
    </nav>
  );
};

export default DesktopNavbar;
