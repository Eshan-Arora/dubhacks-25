export type InfoSquareProps = {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
};

export function InfoSquare({ title, icon, children }: InfoSquareProps) {
  return (
    <div
      className="bg-white rounded-4xl height p-4 my-4"
    >
      <h2 className="gap-2 flex flex-row items-center justify-start text-xl">
        {icon}
        {title}
      </h2>
      <div className="">
        {children}
      </div>
    </div>
  );
}
