interface DefaultButtonProps {
  className: string;
  children: React.ReactNode;
  theme: string;
  isDisabled: boolean;
  onClick: () => void;
}

export default function Button({
  className,
  children,
  isDisabled,
  onClick,
}: Partial<DefaultButtonProps>) {
  const currentTheme = {};

  return (
    <>
      {isDisabled ? (
        <button disabled>{children}</button>
      ) : (
        <button className={className} onClick={onClick} {...currentTheme}>
          {children}
        </button>
      )}
    </>
  );
}
