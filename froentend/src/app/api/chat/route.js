import { GoogleGenerativeAI } from "@google/generative-ai";

// Function to get response from OpenAI model
const getChatbotResponse = async (message) => {
  const aiApiKey = process.env.AI_API_KEY;

  try {
    const genAI = new GoogleGenerativeAI(aiApiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent(message);
    return result.response.text(); 
  } catch (error) {
    console.error("Error with Google Generative AI:", error);
    return "Sorry, there was an error processing your message.";
  }
};

// Handle POST requests
export const POST = async (req) => {
  const { message } = await req.json(); // Get message from the request body

  const chatbotReply = await getChatbotResponse(message);

  return new Response(JSON.stringify({ response: chatbotReply }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};
