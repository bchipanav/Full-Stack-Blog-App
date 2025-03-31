"use client";
import React from "react";
import DOMPurify from "dompurify";
type Props = {
  content: string;
  className?: string;
};

const SanitizedContent = (props: Props) => {
  const cleanHtml = DOMPurify.sanitize(props.content);
  return (
    <div
      className={props.className}
      // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
      dangerouslySetInnerHTML={{ __html: cleanHtml }}
    />
  );
};

export default SanitizedContent;
