
import { GoogleGenAI } from "@google/genai";

const getAIClient = () => {
  return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

export const generateAtmosphericResponse = async (prompt: string): Promise<string> => {
  try {
    const ai = getAIClient();
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: "You are the AI assistant for Rajeev Prajapati, a world-class Full Stack Developer. Rajeev is an expert in React, Three.js, Node.js, and Cloud Architecture. Your goal is to represent his skills professionally but with a touch of cosmic inspiration. Keep responses under 3 sentences. If someone asks about hiring him, tell them to use the contact button on the main page.",
        temperature: 0.8,
      },
    });

    return response.text || "I'm currently processing the stellar data. How can I help you regarding Rajeev's work?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The cosmic connection is weak. Rajeev is likely coding something amazing right now.";
  }
};
