
import { GoogleGenAI, Type } from "@google/genai";
import { AuditResult } from "../types";

export const performDesignAudit = async (url: string, description: string): Promise<AuditResult> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  const prompt = `
    Analyze this website/product description for conversion optimization and design quality:
    URL/Name: ${url}
    Description: ${description}

    Act as a world-class Conversion Rate Optimization (CRO) expert and UI/UX Designer.
    Provide a score (0-100), a concise professional critique, and exactly 3 actionable high-impact recommendations to increase revenue.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            score: { type: Type.NUMBER },
            critique: { type: Type.STRING },
            recommendations: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          },
          required: ["score", "critique", "recommendations"]
        }
      }
    });

    const result = JSON.parse(response.text || '{}');
    return {
      score: result.score || 0,
      critique: result.critique || "Unable to generate critique.",
      recommendations: result.recommendations || []
    };
  } catch (error) {
    console.error("Gemini Audit Error:", error);
    throw new Error("Falha ao analisar o site. Tente novamente.");
  }
};
