import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
  className?: string;
  as?: React.ElementType;
}

export const Button = ({
  variant = "primary",
  className = "",
  children,
  as: Component = "button",
  ...props
}: ButtonProps) => {
  const baseStyles =
    "px-6 py-2 rounded font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2 inline-block text-center";
  
  const variants = {
    primary: "bg-primary text-white hover:opacity-90 focus:ring-primary",
    outline:
      "border border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary",
  };

  return (
    <Component
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...(props as any)}
    >
      {children}
    </Component>
  );
};
