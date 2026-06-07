import useClipboard from "../../hooks/useClipboard";
import { useState, useEffect } from "react";
import Toolbar from "./Toolbar";
import { useDebounce } from "use-debounce";
import { CheckCircle, MessageSquare } from "lucide-react";
import { updateTextContent } from "../../api/text";


export default function TextEditor({ textContent, roomId }) {
  const [text, setText] = useState(textContent || "");
  const { copied, copy } = useClipboard();
  const [debouncedText] = useDebounce(text, 500);
  const [isTyping, setIsTyping] = useState(false);
  const [saved, setSaved] = useState(false);

  

  useEffect(() => {
    const updatedText = async () => {
      try {
        await updateTextContent(roomId, debouncedText);
        setSaved(true);
        setIsTyping(false);
      } catch (error) {
        console.log(error);
      }
    };
    updatedText();
  }, [debouncedText]);

  const handleChange = (e) => {
    setText(e.target.value);
    setIsTyping(true);
    setSaved(false);
  };

  return (
    <div className="min-h-screen px-4 py-6 flex flex-col items-center bg-gradient-to-br from-white via-stone-200 to-neutral-700 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">

      <div className="w-full max-w-4xl lg:max-w-5xl xl:max-w-6xl flex flex-col gap-3 mt-3">

       
        <Toolbar roomId={roomId} text={text} copy={() => copy(text)} copied={copied} />

       
        <div className="relative rounded-2xl shadow-md hover:shadow-lg transition p-3 border-b-2 bg-stone-100 dark:bg-gray-800 dark:border-gray-700">

         
          <div className="flex items-center gap-2 mb-2 text-lg font-medium text-gray-800 dark:text-gray-200">
            {isTyping && (
              <>
                <MessageSquare size={18} className="animate-pulse text-green-600" />
                <span className="text-sm md:text-xl font-medium text-gray-700 dark:text-gray-300">Typing...</span>
              </>
            )}
            {!isTyping && saved && (
              <>
                <CheckCircle size={18} className="text-blue-500" />
                <span className="text-sm md:text-xl font-medium text-gray-700 dark:text-gray-300">Saved</span>
              </>
            )}
          </div>

         
          <textarea
            value={text}
            onChange={handleChange}
            placeholder="Start typing..."
            className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] p-2 rounded bg-stone-100 dark:bg-gray-900 text-gray-900 dark:text-gray-200 outline-2 resize-none focus:ring-2 focus:ring-green-300 dark:focus:ring-green-500"
          />
        </div>

      </div>
    </div>
  );
}