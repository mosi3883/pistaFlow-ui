function Button({ children, className = '', variant = 'primary', size = 'md', type = 'button', onClick, ...props }) {
  const variants = {
    primary: 'bg-primary hover:bg-sidebar text-white',
    secondary: 'bg-muted hover:bg-slate-800 text-white',
  };
  const sizes = {
    sm: 'h-8 px-2 rounded-md text-sm',
    md: 'h-10 px-4 rounded-lg text-sm',
  };
  return (
    <button
      onClick={onClick}
      type={type}
      className={`flex justify-center items-center transition-colors duration-150 cursor-pointer ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
