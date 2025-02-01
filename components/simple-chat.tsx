"use client";

import { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Suggested questions with their corresponding answers
const suggestedQuestionsAndAnswers = [
  {
    question: "What is my revenue from last month?",
    answer: "You made $10,567 USD in revenue last month",
  },
  {
    question: "What's my profit from last year?",
    answer: "Last year you made a profit of $33,359 USD",
  },
  {
    question: "How many new customers did I get this week?",
    answer: "You acquired 4 new customers this week, keep it going!",
  },
  {
    question: "What's my best-selling product?",
    answer: 'Your best selling product is "Falcon Heavy"',
  },
];

export function SimpleChat() {
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>(
    []
  );
  const [input, setInput] = useState("");
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (text: string) => {
    if (text.trim()) {
      setMessages((prev) => [...prev, { text, isUser: true }]);

      // Find the matching question and answer
      const matchingQA = suggestedQuestionsAndAnswers.find(
        (qa) => qa.question === text
      );

      // Prepare the response
      const response = matchingQA
        ? matchingQA.answer
        : "Try Billmatic to unlock the AI features!";

      // Simulate a delay before responding
      setTimeout(() => {
        setMessages((prev) => [...prev, { text: response, isUser: false }]);
      }, 1000);

      setInput("");
    }
  };

  return (
    <div className="flex flex-col h-[400px] max-w-md mx-auto border rounded-lg overflow-hidden">
      <div
        ref={scrollAreaRef}
        className="flex-grow p-4 overflow-y-auto max-h-[300px]"
      >
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-4 ${
              message.isUser ? "text-right" : "text-left"
            } motion-preset-focus-sm `}
          >
            <span
              className={`inline-block p-2 rounded-lg ${
                message.isUser
                  ? "bg-primary text-white"
                  : "bg-secondary text-gray-800"
              }`}
            >
              {message.text}
            </span>
          </div>
        ))}
      </div>
      <div className="p-4 border-t">
        <div className="flex overflow-scroll gap-2 mb-4">
          {suggestedQuestionsAndAnswers.map(({ question }, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              onClick={() => handleSend(question)}
            >
              {question}
            </Button>
          ))}
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend(input);
          }}
          className="flex gap-2"
        >
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your question..."
            className="flex-grow"
          />
          <Button type="submit">Send</Button>
        </form>
      </div>
    </div>
  );
}
