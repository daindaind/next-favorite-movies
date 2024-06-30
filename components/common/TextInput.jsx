import { useEffect, useRef } from "react";

const TextInput = ({ register, id, placeholder }) => {
  const textareaRef = useRef(null);

  const handleInput = () => {
    const textarea = textareaRef.current;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.addEventListener("input", handleInput);
      return () => {
        textarea.removeEventListener("input", handleInput);
      };
    }
  }, []);
  return (
    <textarea
      className="resize-none border border-stone-200 rounded p-3 h-full overflow-scroll overflow-x-hidden focus:outline-none"
      ref={textareaRef}
      placeholder={placeholder}
      {...register(id)}
    />
  );
};

export default TextInput;
