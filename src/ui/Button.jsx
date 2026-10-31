function Button({ children, className, variant = 'primary', size = 'md', type = 'button', onClick }) {
  const variants = {
    primary: 'bg-primary hover:bg-blue-700 text-white',
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
    >
      {children}
    </button>
  );
}

export default Button;
