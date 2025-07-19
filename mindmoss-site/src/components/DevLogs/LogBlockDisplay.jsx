export default function LogBlockDisplay({ block }) {
  switch (block.type) {
    case "left-image":
      return (
        <div className="flex gap-4">
          <img src={block.content.imageUrl} className="w-1/3" />
          <p className="w-2/3">{block.content.text}</p>
        </div>
      );
    case "right-image":
      return (
        <div className="flex gap-4">
          <p className="w-2/3">{block.content.text}</p>
          <img src={block.content.imageUrl} className="w-1/3" />
        </div>
      );
    case "full-text":
      return <p>{block.content.text}</p>;
    case "full-image":
      return (
        <img src={block.content.imageUrl} alt="" className="w-full rounded" />
      );
    default:
      return null;
  }
}
