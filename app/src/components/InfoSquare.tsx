export type InfoSquareProps = {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
};

export function InfoSquare({ title, icon, children }: InfoSquareProps) {
  return (
    <div
      className="bg-white rounded-4xl height p-4 flex flex-col"
    >
      <h2 className="gap-2 flex flex-row items-center justify-start text-xl font-semibold">
        {icon}
        {title}
      </h2>
      <div className="flex flex-col grow">
        {children}
      </div>
    </div>
  );
}
