# AI Ingredient-Based Food Suggestion 🍽️

An intelligent meal planning application that generates personalized daily meal plans using AI, based on your health goals, dietary preferences, and available ingredients.

## 🌟 Features

- **AI-Powered Meal Plans**: Leverages OpenAI's GPT to create customized meal suggestions
- **Goal-Oriented**: Supports weight loss, weight gain, muscle building, and weight maintenance
- **Dietary Flexibility**: Vegetarian, Non-Vegetarian, Vegan, Keto, and Paleo options
- **Ingredient-Based**: Optional input for available ingredients
- **Detailed Recipes**: Each meal includes name, description, and step-by-step cooking instructions
- **User-Friendly Interface**: Clean, modern, and responsive design
- **No Backend Required**: Direct API integration from the frontend
- **Print & Share**: Easy export options for your meal plans

## 🚀 Quick Start

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd AI-Ingredient-Based-Food-Suggestion
```

2. **Navigate to frontend**
```bash
cd frontend
```

3. **Install dependencies**
```bash
npm install
```

4. **Configure API key**
```bash
# Copy the example file
cp .env.example .env

# Open .env and add your OpenAI API key
# VITE_OPENAI_API_KEY=sk-your-actual-key-here
```

5. **Start the development server**
```bash
npm run dev
```

6. **Open in browser**
   - Visit `http://localhost:5173`
   - Start generating meal plans!

## 🔑 API Key Setup

You'll need an OpenAI API key to use this application:

1. Visit [OpenAI Platform](https://platform.openai.com/api-keys)
2. Create an account or sign in
3. Generate a new API key
4. Copy the key (starts with `sk-`)
5. Add it to `frontend/.env`:
   ```
   VITE_OPENAI_API_KEY=sk-your-actual-key-here
   ```
6. Restart the dev server

📖 See [API_KEY_GUIDE.md](API_KEY_GUIDE.md) for detailed instructions

## 📱 How to Use

1. **Configure your environment** (one-time setup):
   - Add your OpenAI API key to `frontend/.env`
   - Restart the development server

2. **Select your preferences**:
   - Goal (Lose/Gain/Maintain weight, Build muscle)
   - Dietary preference (Veg, Non-Veg, Vegan, Keto, Paleo)
   - Number of meals per day (3-5)
   - Available ingredients (optional)
3. **Click "Generate Meal Plan"**
4. **View your personalized meal plan** with recipes and cooking steps
5. **Print or copy** your plan for easy reference

## 📋 Example Output

```
Breakfast: 🌅
- Recipe Name: Protein-Packed Veggie Omelette
- Description: High-protein breakfast with colorful vegetables
- Steps: 1) Beat eggs 2) Sauté veggies 3) Cook omelette 4) Serve hot

Lunch: ☀️
- Recipe Name: Quinoa Power Bowl
- Description: Nutrient-dense bowl with quinoa and roasted vegetables
- Steps: 1) Cook quinoa 2) Roast vegetables 3) Combine and season

Dinner: 🌙
- Recipe Name: Grilled Chicken with Steamed Broccoli
- Description: Lean protein with fiber-rich vegetables
- Steps: 1) Season chicken 2) Grill until done 3) Steam broccoli 4) Serve
```

## 🛠️ Technology Stack

- **Frontend**: React 19
- **Build Tool**: Vite
- **AI Service**: OpenAI GPT-3.5-turbo
- **Styling**: CSS3 with modern animations
- **API Calls**: Native Fetch API

## 📁 Project Structure

```
AI-Ingredient-Based-Food-Suggestion/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── MealPlanner.jsx      # Input form component
│   │   │   ├── MealPlanner.css
│   │   │   ├── MealDisplay.jsx      # Results display component
│   │   │   └── MealDisplay.css
│   │   ├── services/
│   │   │   └── aiService.js         # OpenAI API integration
│   │   ├── App.jsx                  # Main app component
│   │   ├── App.css
│   │   ├── index.css                # Global styles
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
├── README.md
└── API_KEY_GUIDE.md
```
**Current Setup** (Secure for Development):
- API key stored in `.env` file (never committed to git)
- Key is bundled into the client-side code during build
- Suitable for personal use and small projects

**⚠️ Important Notes**:
- Never commit your `.env` file to version control
- The `.env` file is already in `.gitignore`
- For production apps with multiple users, implement a backend server

**For Production Deployment**:
- Use a backend server to securely store and use API keys
- Implement user authentication
- Add rate limiting to prevent API abuse
- Consider using serverless functions (Vercel, Netlify Functions)
- Never expose API keys in client-side code for public apps
- Add rate limiting to prevent abuse
- Implement user authentication
- Consider using API key rotation

## 💰 Cost Information

Using GPT-3.5-turbo:
- Approximately $0.002 per meal plan
- $5 credit ≈ 2,500 meal plans
- New accounts often receive free trial credits

See [API_KEY_GUIDE.md](API_KEY_GUIDE.md) for more details.

## 🏗️ Building for Production

```bash
cd frontend
npm run build
```

The optimized files will be in the `dist/` folder, ready to deploy to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## 🎨 Customization

### Changing the AI Model

Edit [aiService.js](frontend/src/services/aiService.js):
```javascript
model: 'gpt-4', // Change from 'gpt-3.5-turbo'
```

### Adding More Dietary Options

Edit [MealPlanner.jsx](frontend/src/components/MealPlanner.jsx):
```javascript
<option value="Mediterranean">Mediterranean</option>
<option value="Gluten-Free">Gluten-Free</option>
```

### Customizing Meal Count

Edit the select options in [MealPlanner.jsx](frontend/src/components/MealPlanner.jsx)

## 🐛 Troubleshooting

**"API key is required" error**
- Make sure you've entered your OpenAI API key
- Verify the key starts with `sk-`

**"Failed to generate meal plan" error**
- Check your internet connection
- Verify your OpenAI account has available credits
- Check OpenAI's status: https://status.openai.com/

**Slow generation**
- Normal for first request (may take 10-30 seconds)
- Depends on OpenAI's server load
- Consider using a faster model or adjusting max_tokens

## 📝 License

MIT License - Feel free to use this project for personal or commercial purposes.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Support

For issues or questions:
1. Check the troubleshooting section
2. Review [API_KEY_GUIDE.md](API_KEY_GUIDE.md)
3. Open an issue on GitHub

---

**Made with ❤️ using React, Vite, and OpenAI**

Happy meal planning! 🍴✨
