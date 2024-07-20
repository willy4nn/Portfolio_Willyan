interface ButtonProps {
  content: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      className={`rounded bg-[#2F1D21] px-6 py-4 font-body text-button text-primary-10 drop-shadow-lg transition-all hover:bg-[#2b181e]`}
    >
      {props.content}
    </button>
  );
};

export default Button;
