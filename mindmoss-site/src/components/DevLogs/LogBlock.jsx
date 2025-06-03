// components/LogBlock.jsx
export default function LogBlock({ block }) {
  const { type, content } = block;

  const commonClasses = "my-4 p-4 bg-highlight text-black rounded-xl shadow-md";

  switch (type) {
    case "left-image":
      return (
        <div className={`${commonClasses} flex flex-col md:flex-row`}>
          <img
            src={content.imageUrl}
            alt=""
            className="w-full md:w-1/2 rounded-lg object-cover"
          />
          <p className="md:ml-4 mt-4 md:mt-0">{content.text}</p>
        </div>
      );

    case "right-image":
      return (
        <div
          className={`${commonClasses} flex flex-col md:flex-row justify-between`}
        >
          <p className="md:mr-4 mt-4 md:mt-0">{content.text}</p>
          <img
            src={content.imageUrl}
            alt=""
            className="w-full md:w-1/2 rounded-lg object-cover"
          />
        </div>
      );

    case "full-text":
      return (
        <div className={commonClasses}>
          <p>{content.text}</p>
        </div>
      );

    case "full-image":
      return (
        <div className={`${commonClasses} p-0`}>
          <img
            src={content.imageUrl}
            alt=""
            className="w-full rounded-xl object-cover"
          />
        </div>
      );

    default:
      return <div className={commonClasses}>Unknown block type</div>;
  }
}
