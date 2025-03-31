"use client";
import { cn } from "@/lib/utils";
import {
  useRef,
  useState,
  type PropsWithChildren,
  type ReactNode,
} from "react";
import { useOnClickOutside } from "usehooks-ts";

type Props = PropsWithChildren<{
  triggerIcon: ReactNode;
  triggerClassName: string;
}>;
const Sidebar = (props: Props) => {
  const [show, setShow] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(ref as React.RefObject<HTMLElement>, () => setShow(false));
  return (
    <>
      <button
        className={props.triggerClassName}
        type="button"
        onClick={() => setShow((prev) => !prev)}
      >
        {props.triggerIcon}
      </button>
      <div
        ref={ref}
        className={cn(
          "w-60 absolute top-0 z-10 transition-all duration-300 bg-white rounded-r-md min-h-screen",
          { "-left-full": !show, "left-0": show }
        )}
      >
        {props.children}
      </div>
    </>
  );
};

export default Sidebar;
