import { GoogleGenAI } from "@google/genai";
import { InsightResponse } from "../types";

const apiKey = process.env.API_KEY || '';
// Initialize loosely to allow for missing keys in dev without crashing immediately
const ai = new GoogleGenAI({ apiKey });

export const generateDailyInsight = async (): Promise<InsightResponse> => {
  if (!apiKey) {
    throw new Error("API Key is missing. Please configure your environment.");
  }

  try {
    const model = "gemini-2.5-flash";
    const prompt = `
      You are a futuristic visionary. Write a single, short, profound, and abstract insight about the future of humanity, technology, or digital consciousness. 
      It should be cryptic but inspiring. Max 40 words.
      Also provide a 1-2 word topic category.
      
      Return strictly JSON: { "content": "string", "topic": "string" }
    `;

    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      }
    });

    const text = response.text;
    if (!text) throw new Error("No content generated");

    const data = JSON.parse(text) as InsightResponse;
    return data;
  } catch (error) {
    console.error("Gemini generation error:", error);
    throw error;
  }
};