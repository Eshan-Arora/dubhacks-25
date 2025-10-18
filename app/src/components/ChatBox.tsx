import { useId, useLayoutEffect, useRef } from "react";
import { SendIcon } from "lucide-react";

export type ChatBoxProps = {
  text: string;
  onChange: (newText: string) => void;
  placeholder: string;
}

export function ChatBox({ text, onChange, placeholder, }: ChatBoxProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const fitTextarea = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = textarea.scrollHeight + "px";
    }
  };

  useLayoutEffect(() => {
    fitTextarea();
  }, [text]);

  // TODO: how to center the text
  return (
    <div
      className="px-4 py-3 rounded-4xl bg-gray-100 focus:border-none focus:outline-none shadow-lg shadow-gray-200 h-min content-center justify-center flex flex-row w-2xl"
    >
      <textarea
        id={useId()}
        ref={textareaRef}
        className="grow resize-none outline-none"
        rows={1}
        value={text}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
      />
      <div className="flex flex-col justify-center content-center">
        <button className="rounded-full text-white bg-black p-2 aspect-square">
          <SendIcon height="1em" width="1em" />
        </button>
      </div>
    </div>
  );
}
