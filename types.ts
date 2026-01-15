
export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

export interface AppState {
  isChatOpen: boolean;
  messages: Message[];
  isGenerating: boolean;
}
