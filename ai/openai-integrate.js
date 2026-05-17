// services/generateDesign.js

import OpenAI from "openai";
import { MAIN_DESIGN_PROMPT } from "../utils/mainPrompt.js";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generateDesign(userIdea) {
  try {
    const response = await openai.responses.create({
      model: "gpt-4.1-mini",

      input: `
${MAIN_DESIGN_PROMPT}

USER APP IDEA:
${userIdea}

Generate:
1. Full modern UI/UX structure
2. Responsive layout
3. Component hierarchy
4. Color palette
5. Typography
6. Animations
7. TailwindCSS design system
8. Landing page sections
9. Dashboard design
10. Mobile responsiveness
11. Google Stitch-like premium aesthetics
`,

      temperature: 0.8,
      max_output_tokens: 3000,
    });

    const design = response.output_text;

    console.log("Generated Design:\n");
    console.log(design);

    return {
      success: true,
      design,
    };
  } catch (error) {
    console.error("OpenAI Error:", error);

    return {
      success: false,
      error: error.message,
    };
  }
}

    
