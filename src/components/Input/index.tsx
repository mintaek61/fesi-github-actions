// src/components/Input/index.tsx

"use client";

import { useState } from "react";
import { DeleteIconButton } from "@/components/Input/DeleteIconButton";

interface InputProps {
  id?: string;
  name?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: "text" | "password" | "email" | "number"; // 필요한 타입을 추가할 수 있습니다.
  placeholder?: string;
  isError?: boolean;
  errorMessage?: string;
  onDelete?: () => void;
  // 추가적인 props가 필요하다면 여기에 정의할 수 있습니다.
}
export const Input = ({
  id,
  name,
  value: controlledValue,
  defaultValue = "",
  onChange,
  type = "text",
  placeholder,
  isError = false,
  errorMessage,
  onDelete,
}: InputProps) => {
  const [internalValue, setInternalValue] = useState(defaultValue);
  
  // 제어 컴포넌트인지 비제어 컴포넌트인지 확인
  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : internalValue;
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isControlled) {
      onChange?.(e);
    } else {
      setInternalValue(e.target.value);
    }
  };
  
  const handleDelete = () => {
    if (isControlled) {
      onDelete?.();
    } else {
      setInternalValue("");
    }
  };
  
  return (
    <div className="relative inline-block w-full">
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className="p-2 pr-8 border border-gray-300 rounded-md w-full"
      />
      {value && (
        <button
          type="button"
          onClick={handleDelete}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
          aria-label="입력값 지우기"
        >
          <DeleteIconButton />
        </button>
      )}
      {isError && (
        <span className="mt-1 text-sm text-red-500">{errorMessage}</span>
      )}
    </div>
  );
};
