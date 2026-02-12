import { CohereClient } from "cohere-ai";

/**
 * AI Service to generate meal plans using Cohere API
 */

/**
 * Generate meal plan based on user preferences
 * @param {Object} params - User preferences
 * @param {string} params.goal - User's goal (Lose weight, Gain weight, Maintain weight)
 * @param {string} params.preference - Dietary preference (Veg, Non-Veg, Vegan, Keto)
 * @param {number} params.meals - Number of meals per day
 * @param {string} params.ingredients - Available ingredients (optional)
 * @returns {Promise<string>} - Generated meal plan
 */
export async function generateMealPlan({ goal, preference, meals, ingredients }) {
  const apiKey = import.meta.env.VITE_COHERE_API_KEY;
  
  if (!apiKey) {
    throw new Error('Cohere API key not configured. Please add VITE_COHERE_API_KEY to your .env file');
  }

  // Initialize Cohere client
  const cohere = new CohereClient({
    token: apiKey,
  });

  // Build the prompt for the AI
  const prompt = `You are a smart AI nutritionist and chef.

Generate a daily meal plan with the following requirements:
- Goal: ${goal}
- Dietary Preference: ${preference}
- Number of meals: ${meals}
${ingredients ? `- Available ingredients: ${ingredients}` : ''}

For each meal (Breakfast, Lunch, Dinner, and Snacks if applicable), provide:
1. Recipe Name
2. Short Description (one line)
3. Cooking Steps (3-5 short steps)

Format the output in clear text as follows:

Breakfast:
- Recipe Name: [Name]
- Description: [Description]
- Steps: 1) [Step 1] 2) [Step 2] 3) [Step 3]

Lunch:
- Recipe Name: [Name]
- Description: [Description]
- Steps: 1) [Step 1] 2) [Step 2] 3) [Step 3]

Dinner:
- Recipe Name: [Name]
- Description: [Description]
- Steps: 1) [Step 1] 2) [Step 2] 3) [Step 3]

${meals > 3 ? 'Snack 1:\n- Recipe Name: [Name]\n- Description: [Description]\n- Steps: 1) [Step 1] 2) [Step 2] 3) [Step 3]\n' : ''}
${meals > 4 ? 'Snack 2:\n- Recipe Name: [Name]\n- Description: [Description]\n- Steps: 1) [Step 1] 2) [Step 2] 3) [Step 3]\n' : ''}

Ensure the meals are appropriate for the goal (${goal}) and follow ${preference} dietary preferences.`;

  try {
    // Allow override via env var for accounts with specific model access
    const envModel = import.meta.env.VITE_COHERE_MODEL;
    const candidateModels = [];
    if (envModel) candidateModels.push(envModel);
    // Try a set of commonly used Cohere models (may vary by account)
    candidateModels.push('command-r-plus', 'command', 'command-light', 'command-medium', 'command-xlarge-nightly');

    let lastError = null;

    for (const model of candidateModels) {
      try {
        const response = await cohere.chat({
          model,
          message: prompt,
          temperature: 0.7,
          preamble: 'You are a professional nutritionist and chef who creates personalized meal plans.',
        });

        if (response && (response.text || response.output)) {
          return response.text ?? response.output ?? String(response);
        }
      } catch (err) {
        lastError = err;
        const msg = err?.message || JSON.stringify(err);
        const status = err?.status || err?.response?.status;

        // If it's a model-not-found or deprecation issue, try the next candidate
        if (
          (msg && (msg.toLowerCase().includes('removed') || msg.toLowerCase().includes('not found'))) ||
          status === 404
        ) {
          console.warn(`Model ${model} unavailable (${msg || status}), trying next model.`);
          continue;
        }

        // Non-model-related error — rethrow
        throw err;
      }
    }

    // None of the chat models worked — give a clear actionable error
    const guidance = `No available Cohere chat models worked.\n` +
      `1) Check your Cohere dashboard for available model IDs: https://dashboard.cohere.com/models\n` +
      `2) If you have access to a model, set it in frontend/.env as VITE_COHERE_MODEL=<model-id>\n` +
      `3) If needed, contact Cohere support to enable model access.\n` +
      `Last error: ${lastError?.message || JSON.stringify(lastError)}`;

    console.error(guidance);
    throw new Error(guidance);
  } catch (error) {
    console.error('Unexpected error generating meal plan:', error);
    throw error;
  }
}
