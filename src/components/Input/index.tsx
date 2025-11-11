import clsx from "clsx";

type InputProps = {
  id?: string;
  type?: string;
  placeholder?: string;
  label?: string;
  error?: string;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "filled" | "outlined";
  fullWidth?: boolean;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({
  id,
  type = "text",
  placeholder,
  label,
  error,
  size = "md",
  variant = "default",
  fullWidth = false,
  disabled = false,
  onChange,
}: InputProps) {
  const labelClasses = clsx(
    "block mb-2 font-medium",
    {
      "text-sm": size === "sm",
      "text-base": size === "md",
      "text-lg": size === "lg",
    },
    disabled && "text-gray-400",
    error && "text-red-600",
  );

  const inputClasses = clsx(
    // 기본 스타일
    "rounded border focus:outline-none focus:ring-2 transition-all",

    // fullWidth 적용
    fullWidth ? "w-full" : "w-auto",

    // 사이즈별 스타일
    {
      "px-2 py-1 text-sm": size === "sm",
      "px-3 py-2 text-base": size === "md",
      "px-4 py-3 text-lg": size === "lg",
    },

    // 변형별 스타일
    {
      "border-gray-300 focus:border-blue-500 focus:ring-blue-200":
        variant === "default" && !error,
      "border-transparent bg-gray-100 focus:bg-white focus:border-blue-500 focus:ring-blue-200":
        variant === "filled" && !error,
      "border-gray-300 bg-transparent focus:border-blue-500 focus:ring-blue-200":
        variant === "outlined" && !error,
    },

    // 에러 상태
    error && "border-red-500 focus:border-red-500 focus:ring-red-200",

    // 비활성화 상태
    disabled && "bg-gray-100 text-gray-400 cursor-not-allowed",
  );

  const errorClasses = "mt-1 text-sm text-red-600";
  return (
    <div>
      {label && (
        <label htmlFor={id} className={labelClasses}>
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
        className={inputClasses}
      />
      {error && <p className={errorClasses}>{error}</p>}
    </div>
  );
}
