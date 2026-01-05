type HeaderProps = {
  title: string;
};

export default function Header({ title }: HeaderProps) {
  return (
    <header className="
      w-full
      flex items-center justify-center
      py-4
      bg-[var(--color-header-bg)]
    ">
      <h1 className="
        text-[length:var(--font-size-header)]
        leading-[var(--line-height-header)]
        font-semibold
        tracking-wide
      ">
        {title}
      </h1>
    </header>
  );
}
