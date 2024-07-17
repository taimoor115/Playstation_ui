interface ButtonProps {
  className?: string;
  text?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Button = ({ className, text, onClick, disabled }: ButtonProps) => {
  return (
    <button onClick={onClick} className={className} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
