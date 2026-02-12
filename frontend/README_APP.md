# AI Meal Planner 🍽️

An intelligent meal planning web application powered by AI that generates personalized daily meal plans based on your goals, dietary preferences, and available ingredients.

## Features

✨ **Personalized Meal Plans** - Get custom meal plans based on your specific needs
🎯 **Goal-Oriented** - Support for weight loss, weight gain, muscle building, and maintenance
🥗 **Dietary Preferences** - Vegetarian, Non-Vegetarian, Vegan, Keto, and Paleo options
📝 **Detailed Recipes** - Each meal includes recipe name, description, and cooking steps
🖨️ **Print & Share** - Easily print or copy your meal plan
⚡ **No Backend Required** - Direct API integration from the frontend

## Prerequisites

- Node.js (v14 or higher)
- An OpenAI API key ([Get one here](https://platform.openai.com/api-keys))

## Installation

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Configure your API key:
```bash
# Copy the example environment file
cp .env.example .env

# Edit .env and add your OpenAI API key
# VITE_OPENAI_API_KEY=sk-your-actual-key-here
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and visit `http://localhost:5173`

## How to Use

1. **Set up your OpenAI API Key** (one-time setup):
   - Visit [OpenAI Platform](https://platform.openai.com/api-keys)
   - Create an account or sign in
   - Generate a new API key
   - Copy the key (it starts with `sk-`)
   - Add it to your `.env` file: `VITE_OPENAI_API_KEY=sk-your-key-here`
   - Restart the dev server

2. **Enter your preferences**:
   - Select your goal (e.g., Lose weight, Gain weight)
   - Choose dietary preference (Veg, Non-Veg, Vegan, Keto, Paleo)
   - Select number of meals per day (3, 4, or 5)
   - Optionally, list available ingredients

3. **Generate your meal plan**:
   - Click "Generate Meal Plan"
   - Wait for AI to create your personalized plan
   - View your customized daily meal plan

4. **Use your meal plan**:
   - Print the plan for easy reference
   - Copy to clipboard to share or save
   - Create a new plan anytime

## User Inputs

- **Goal**: Your fitness/health objective
  - Lose weight
  - Gain weight
  - Maintain weight
  - Build muscle

- **Preference**: Your dietary restrictions/preferences
  - Vegetarian
  - Non-Vegetarian
  - Vegan
  - Keto
  - Paleo

- **Number of Meals**: How many meals you want per day (3-5)

- **Ingredients** (Optional): List of ingredients you have available

## Example Output

Each meal in your plan will include:

```
Breakfast: 🌅
- Recipe Name: Veggie Oats Porridge
- Description: Healthy oats with vegetables to start your day
- Steps: 1) Cook oats 2) Add veggies 3) Serve warm

Lunch: ☀️
- Recipe Name: Quinoa Salad
- Description: Protein-rich salad with mixed veggies
- Steps: 1) Cook quinoa 2) Chop veggies 3) Mix and serve

Dinner: 🌙
- Recipe Name: Grilled Tofu with Steamed Veggies
- Description: Light dinner for weight loss with protein and fiber
- Steps: 1) Grill tofu 2) Steam vegetables 3) Serve
```

## Technologies Used

- **React** - UI framework
- **Vite** - Build tool and dev server
- **OpenAI API** - AI-powered meal plan generation
- **CSS3** - Modern styling and animations

## Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── MealPlanner.jsx       # Form component for user inputs
│   │   ├── MealPlanner.css       # Styling for meal planner
│   │   ├── MealDisplay.jsx       # Display component for meal plans
│   │   └── MealDisplay.css       # Styling for meal display
│   ├── services/
│   │   └── aiService.js          # OpenAI API integration
│   ├── App.jsx                   # Main app component
│   ├── App.css                   # App-level styling
│   ├── index.css                 # Global styles
│   └── main.jsx                  # App entry point
├── package.json
└── vite.config.js
```

## Security Note

⚠️ **Important**: This application requires you to enter your OpenAI API key directly in the browser. The key is used only for making API calls and is not stored anywhere. For production use, consider:

- Implementing a backend server to securely handle API keys
- Using environment variables
- Implementing rate limiting
- Adding user authentication

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder, ready to deploy to any static hosting service.

## Contributing

Feel free to submit issues or pull requests to improve the application!

## License

MIT License - Feel free to use this project for personal or commercial purposes.

---

Made with ❤️ using React and OpenAI
