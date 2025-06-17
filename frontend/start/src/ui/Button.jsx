
const btnType = {
  primary: "btn--primary",
  secondary: "btn--secondary",
  outline: "btn--outline",
  danger: "btn--danger",
};

function Button({children, onClick, variant = "primary", }) {
  return (
    <button onClick={onClick} className={`btn ${btnType[variant]}`}>
      {children}
    </button>
  );
}

export default Button;
