import clsx from "clsx";

export type InfoSquareRootProps = {
  children: React.ReactNode;
};

export function InfoSquareRoot({ children }: InfoSquareRootProps) {
  return (
    <div
      className={clsx("bg-white rounded-4xl height p-4 flex flex-col")}
    >
      {children}
    </div>
  );
}

export type InfoSquareHeadingProps = {
  title: string;
  icon: React.ReactNode;
  className?: string;
}

export function InfoSquareHeading({ title, icon, className }: InfoSquareHeadingProps) {
  return (
    <h2 className={clsx("gap-2 flex flex-row items-center justify-start text-xl font-semibold", className)}>
      {icon}
      {title}
    </h2>
  );
}

export type InfoSquareContentProps = {
  children: React.ReactNode;
};

export function InfoSquareContent({ children }: InfoSquareContentProps) {
  return (
    <div className="flex flex-col grow">
      {children}
    </div>
  );
}
