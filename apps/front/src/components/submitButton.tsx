"use client";
import React from "react";
import { Button, type ButtonProps } from "./ui/button";
import { useFormStatus } from "react-dom";

export const SubmitButton = ({ children, ...props }: ButtonProps) => {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" aria-disabled={pending} {...props}>
      {pending ? <span className="animate-pulse">Submitting</span> : children}
    </Button>
  );
};
