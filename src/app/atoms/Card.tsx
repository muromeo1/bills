import Item from "./Card/Item";

interface CardProps {
  children: React.ReactNode;
}

const Card = ({ children }: CardProps) => {
  return (
    <div className="bg-gray-800 rounded-xl drop-shadow-lg flex flex-col gap-1">
      {children}
    </div>
  );
};

const Header = ({ children }: CardProps) => {
  return (
    <div className="w-full items-center mt-6 rounded-t-xl text-center">
      {children}
    </div>
  );
};

const Body = ({ children }: CardProps) => {
  return (
    <div className="h-full my-5 w-full grid grid-cols-2 text-center items-center">
      {children}
    </div>
  );
};

Card.Header = Header;
Card.Body = Body;
Card.Item = Item;

export default Card;
