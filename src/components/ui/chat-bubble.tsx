"use client";

export default function ChatBubble({
  message,
  role,
  showTyping = false,
}: {
  message: string;
  role: "user" | "assistant";
  showTyping?: boolean;
}) {
  const isUser = role === "user";

  if (showTyping) {
    return (
      <div className="flex justify-start mb-2">
        <div className="bg-slate-700 rounded-2xl rounded-bl-sm px-4 py-3 max-w-[80%]">
          <div className="flex gap-1 items-center h-4">
            <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:0ms]" />
            <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:150ms]" />
            <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:300ms]" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-2`}>
      <div
        className={`rounded-2xl px-4 py-2 max-w-[80%] text-sm leading-relaxed ${
          isUser
            ? "bg-blue-500 text-white rounded-br-sm"
            : "bg-slate-700 text-slate-100 rounded-bl-sm"
        }`}
      >
        {message}
      </div>
    </div>
  );
}
