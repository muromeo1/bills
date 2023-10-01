import cn from "classnames";

interface GridProps {
  children: React.ReactNode;
  className?: string;
}

const Grid = ({ children, className }: GridProps) => {
  return (
    <div
      className={cn(
        "lg:h-screen h-full 2xl:px-[40vh] lg:px-[30vh]",
        "md:px-[20vh] p-10 grid xl:grid-cols-3 ",
        "grid-cols-1 gap-6",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Grid;
