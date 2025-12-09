import React from "react";

type ButtonProps<T extends React.ElementType> = {
  as?: T;
  variant?: "primary" | "outline";
  className?: string;
  children?: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "variant" | "className" | "children">;

export const Button = <T extends React.ElementType = "button">({
  as,
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps<T>) => {
  const Component = as || "button";
  
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
      {...props}
    >
      {children}
    </Component>
  );
};
