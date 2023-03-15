interface DefaultButtonProps {
  className: string;
  children: React.ReactNode;
  theme: { [key: string]: string };
  isDisabled: boolean;
  onClick: () => void;
}

export default function Button({
  className,
  children,
  isDisabled,
  onClick,
  theme = {},
}: Partial<DefaultButtonProps>) {
  const currentTheme = theme;

  return (
    <>
      {isDisabled ? (
        <button className={className} disabled>
          {children}
        </button>
      ) : (
        <button className={className} onClick={onClick} {...currentTheme}>
          {children}
        </button>
      )}
    </>
  );
}
