const btnType = {
  primary: "bg-appprimary-100 text-appprimary-700 hover:bg-appprimary-900 hover:text-white",
  secondary: "bg-appsecondary-200  text-appsecondary-500 hover:bg-appsecondary-500 hover:text-appsecondary-0",
  outline: "border border-appsecondary-200 text-appsecondary-500 hover:bg-appsecondary-200",
  red: "bg-red-100  text-red-500 hover:bg-red-500 hover:text-white",
  danger: "border border-red-100 text-red-500",
};

function ButtonIcon({children, onClick, className, variant}) {
  return (
    <button
      onClick={onClick}
      className={`
      ${btnType[variant]}
      ${className} flex items-center justify-center gap-x-1 rounded-md p-1
      [&>svg]:w-5  [&>svg]:h-5 [&>svg]:text-inherit
      text-xs lg:text-sm
      transition-all duration-300 ease-out"`}
    >
      {children}
    </button>
  );
}

export default ButtonIcon;
