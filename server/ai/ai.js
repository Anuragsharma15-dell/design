import { MAIN_DESIGN_PROMPT } from "../../utils/mainPrompt.js"
import { OpenAI } from "openai/client.js"

const apikeyopeai = sk - proj - EESwKpsRbk88ONGkeEohrWBIvSr1NfmvYD94vLcJLYnPoEdE - bXdra806MxuTJFzKpmAmdY9YGT3BlbkFJ8u8WgkbRuFzVe3T3qKGKir6ruxQEVR3W7p6QMsNXEQH6Z - jd0b56vAYuMzZfySErlGbSrd3i4A
const openai = new OpenAI({
    apiKey: apikeyopeai
})


export async function generatedesign(params) {
    const response = await openai.responses.create({
        model: "gpt-4.1-mini",
        messages: [
            {
                role: "user",
                content: MAIN_DESIGN_PROMPT,

            },


        ]
    })
    console.log(response.output_text);
    console.log(response.max_output_tokens);

}


