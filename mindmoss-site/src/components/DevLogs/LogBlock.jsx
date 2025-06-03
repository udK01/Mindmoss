import { useRef } from "react";

export default function LogBlock({ block, onChange = () => {} }) {
  const { type, content } = block;
  const fileInputRef = useRef();

  const commonClasses = "my-4 p-4 bg-highlight text-black rounded-xl shadow-md";

  const handleTextChange = (e) => {
    onChange({ ...block, content: { ...content, text: e.target.value } });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onChange({
          ...block,
          content: { ...content, imageUrl: reader.result },
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileSelect = () => {
    fileInputRef.current?.click();
  };

  const renderEditableImage = () => (
    <>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        ref={fileInputRef}
        style={{ display: "none" }}
      />
      <img
        src={content.imageUrl || "https://via.placeholder.com/150"}
        alt=""
        onClick={triggerFileSelect}
        className="w-full md:w-1/2 rounded-lg object-cover cursor-pointer"
        title="Click to upload image"
      />
    </>
  );

  switch (type) {
    case "left-image":
      return (
        <div className={`${commonClasses} flex flex-col md:flex-row`}>
          {renderEditableImage()}
          <textarea
            value={content.text}
            onChange={handleTextChange}
            className="md:ml-4 mt-4 md:mt-0 w-full p-2 rounded-lg bg-transparent resize-none"
            rows={5}
            placeholder="Enter text here..."
          />
        </div>
      );

    case "right-image":
      return (
        <div
          className={`${commonClasses} flex flex-col md:flex-row justify-between`}
        >
          <textarea
            value={content.text}
            onChange={handleTextChange}
            className="md:mr-4 mt-4 md:mt-0 w-full p-2 bg-transparent rounded-lg resize-none"
            rows={5}
            placeholder="Enter text here..."
          />
          {renderEditableImage()}
        </div>
      );

    case "full-text":
      return (
        <div className={commonClasses}>
          <textarea
            value={content.text}
            onChange={handleTextChange}
            className="w-full p-2 rounded-lg bg-transparent resize-none"
            rows={5}
            placeholder="Enter text here..."
          />
        </div>
      );

    case "full-image":
      return (
        <div className={`${commonClasses} p-0 flex justify-center`}>
          {renderEditableImage()}
        </div>
      );

    default:
      return <div className={commonClasses}>Unknown block type</div>;
  }
}
