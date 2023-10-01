interface ItemProps {
  title: string;
  content: string;
}

const Item = ({ title, content }: ItemProps) => {
  return (
    <div className="who flex grid grid-row-2">
      <div className="text-xs text-gray-600">{title}</div>
      {content}
    </div>
  );
};

export default Item;
