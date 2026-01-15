
import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, ChevronUp, ChevronDown } from 'lucide-react';
import { Message } from '../types';
import { generateAtmosphericResponse } from '../services/gemini';

interface ChatInterfaceProps {
  isOpen: boolean;
  onToggle: () => void;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ isOpen, onToggle }) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', role: 'assistant', content: "Hello! I'm Rajeev's AI assistant. Want to know more about his projects or technical expertise?" }
  ]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg: Message = { id: Date.now().toString(), role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    const response = await generateAtmosphericResponse(input);
    const aiMsg: Message = { id: (Date.now() + 1).toString(), role: 'assistant', content: response };
    
    setMessages(prev => [...prev, aiMsg]);
    setLoading(false);
  };

  return (
    <div className={`fixed bottom-0 right-0 p-4 md:p-6 z-20 transition-all duration-500 ease-in-out ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-[calc(100%-60px)] opacity-90'}`}>
      <div className="w-[320px] md:w-[400px] bg-black/40 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[450px] md:h-[500px]">
        {/* Header */}
        <div 
          className="p-4 border-b border-white/10 flex items-center justify-between cursor-pointer hover:bg-white/5 transition-colors"
          onClick={onToggle}
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            <h3 className="font-display font-medium text-white/90">Portfolio AI</h3>
          </div>
          {isOpen ? <ChevronDown className="w-5 h-5 text-white/50" /> : <ChevronUp className="w-5 h-5 text-white/50" />}
        </div>

        {/* Messages */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                msg.role === 'user' 
                ? 'bg-indigo-600 text-white rounded-br-none' 
                : 'bg-white/10 text-indigo-100 rounded-bl-none border border-white/5 shadow-inner'
              }`}>
                {msg.content}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="bg-white/10 p-3 rounded-2xl animate-pulse flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 animation-delay-200" />
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 animation-delay-400" />
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="p-4 border-t border-white/10 flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask about Rajeev..."
            className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
          />
          <button
            onClick={handleSend}
            disabled={loading}
            className="bg-indigo-600 hover:bg-indigo-500 p-2 rounded-xl transition-colors disabled:opacity-50"
          >
            <Send className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
