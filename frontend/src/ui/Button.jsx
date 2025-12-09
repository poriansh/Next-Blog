import { SpinnerMini } from "./Spinner";

const btnType = {
  primary: "btn--primary",
  secondary: "btn--secondary",
  outline: "btn--outline",
  danger: "btn--danger",
};

function Button({
  children,
  onClick,
  variant = "primary",
  isLoading,
  type = "button",
  ...props
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn flex items-center gap-3 justify-center ${btnType[variant]}`}
      {...props}
    >
      {children}
      {isLoading && <SpinnerMini />}
    </button>
  );
}

export default Button;
