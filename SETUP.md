# Quick Setup Guide 🚀

## 1. Get Your OpenAI API Key

1. Go to https://platform.openai.com/api-keys
2. Sign in or create an account
3. Click "Create new secret key"
4. Copy the key (starts with `sk-`)
5. **Save it securely** - you won't see it again!

## 2. Configure the Application

1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```

2. Create your environment file:
   ```bash
   cp .env.example .env
   ```

3. Open `frontend/.env` and add your API key:
   ```
   VITE_OPENAI_API_KEY=sk-your-actual-api-key-here
   ```

## 3. Install & Run

```bash
# Install dependencies (first time only)
npm install

# Start the development server
npm run dev
```

## 4. Use the App

1. Open http://localhost:5173
2. Select your preferences:
   - Goal (Lose/Gain/Maintain weight)
   - Diet type (Veg, Non-Veg, Vegan, Keto, Paleo)
   - Number of meals (3-5)
   - Available ingredients (optional)
3. Click "Generate Meal Plan"
4. Get your personalized meal plan with recipes!

## Troubleshooting

**Error: "OpenAI API key not configured"**
- Make sure you created the `.env` file in the `frontend` folder
- Check that the key is properly set: `VITE_OPENAI_API_KEY=sk-...`
- Restart the development server after adding the key

**API key doesn't work**
- Verify you copied the complete key (starts with `sk-`)
- Check your OpenAI account has available credits
- Ensure you're using the correct API key format

**App not loading**
- Make sure you're in the `frontend` folder
- Check that port 5173 is not in use
- Try clearing your browser cache

## Environment File Example

Your `frontend/.env` file should look like this:

```
# OpenAI API Configuration
VITE_OPENAI_API_KEY=sk-proj-abcd1234efgh5678ijkl9012mnop3456qrst7890uvwx1234yzab5678cdef
```

## Security Notes

✅ **Safe**:
- `.env` file is ignored by git (listed in `.gitignore`)
- Your API key stays on your local machine

❌ **Never**:
- Commit the `.env` file to git
- Share your API key publicly
- Use the same key in production apps with multiple users

---

**Ready to go!** Start generating personalized meal plans! 🍽️✨
