import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

export type InputProps = {
  label: string;
  type: React.HTMLInputTypeAttribute;
  defaultValue?: string;
  register: UseFormRegisterReturn;
  error?: boolean;
  errorMessage?: string;
};
