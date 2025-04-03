"use client";

import React, { useEffect, useState } from "react";
import createDOMPurify from "dompurify";

type Props = {
  content: string;
  className?: string;
};

const SanitizedContent = (props: Props) => {
  const [cleanHtml, setCleanHtml] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const DOMPurify = createDOMPurify(window);
      setCleanHtml(DOMPurify.sanitize(props.content));
    }
  }, [props.content]);

  return (
    <div
      className={props.className}
      dangerouslySetInnerHTML={{ __html: cleanHtml }}
    />
  );
};

export default SanitizedContent;
