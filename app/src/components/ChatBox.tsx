import { useId } from "react";
import { SendIcon } from "lucide-react";
import clsx from "clsx";

export type ChatBoxProps = {
  text: string;
  onChange: (newText: string) => void;
  placeholder: string;
  className?: string;
}

export function ChatBox({ text, onChange, placeholder, className }: ChatBoxProps) {
  return (
    <div
      className={clsx("px-4 py-3 rounded-4xl bg-white focus:border-none focus:outline-none h-min content-center justify-center flex flex-row w-2xl gap-2 focus-within:outline-blue-400 focus-within:outline", className)}
    >
      <input
        id={useId()}
        className="grow resize-none outline-none"
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
