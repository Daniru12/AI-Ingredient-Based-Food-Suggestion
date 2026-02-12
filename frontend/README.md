# AI Meal Planner — Frontend

This frontend is a React + Vite application that generates personalized meal plans using Cohere AI. This README covers setup, how to obtain an API key, environment variables, running the app, and troubleshooting.

## Prerequisites

- Node.js 16+ (LTS recommended)
- npm (comes with Node.js)
- A Cohere API key (instructions below)

## Quick Setup

1. Open a terminal and navigate to the `frontend` folder:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Create your environment file from the example and add your API key:

```bash
# copy example env
cp .env.example .env

# then open .env in a text editor and set your key
# VITE_COHERE_API_KEY=sk-your-key-here
# Optionally set a model you have access to:
# VITE_COHERE_MODEL=command-r-plus
```

4. Start the development server:

```bash
npm run dev
```

5. Open your browser at:

```
http://localhost:5173
```

## Getting a Cohere API Key

1. Create an account at Cohere: https://dashboard.cohere.com/signup
2. Sign in and go to the API keys page: https://dashboard.cohere.com/api-keys
3. Click "Create new API key" and copy the secret key.
4. Paste the secret into `frontend/.env` as `VITE_COHERE_API_KEY`.

Important: Treat this key like a password. Do not commit it to Git.

## Environment Variables

- `VITE_COHERE_API_KEY` (required): Your Cohere API key.
- `VITE_COHERE_MODEL` (optional): If your account has access to a specific model ID, set it here (example: `command-r-plus`). If not set, the app will attempt several common models; if none are available, you'll get a clear error telling you to check your dashboard.

Example `frontend/.env`:

```dotenv
VITE_COHERE_API_KEY=kBXD4dfx6enRbRYjWgQbH5j050MvTzEPrzKrZy0W
VITE_COHERE_MODEL=command-r-plus
```

> The `.env` file is ignored by git in this project. Never commit real keys.

## How the App Uses the Key

This project is a client-side (frontend) app that makes direct API calls to Cohere using the key provided in `VITE_COHERE_API_KEY`. For production or public deployments, we strongly recommend moving API calls to a backend to keep the key secure.

## Common Commands

- Start dev server:

```bash
npm run dev
```

- Build for production:

```bash
npm run build
```

- Preview production build locally:

```bash
npm run preview
```

## Troubleshooting

- Error: `404 model '...' not found`
  - Sign in to https://dashboard.cohere.com/models and confirm which model IDs you have access to.
  - Set `VITE_COHERE_MODEL` in `frontend/.env` to a supported model id.
  - If you still see errors, contact Cohere support to enable model access.

- Error: quota exceeded / 429
  - Check your Cohere billing and usage on https://dashboard.cohere.com/usage
  - Add credits or upgrade your plan

- Dev server not starting or HMR not working:
  - Ensure dependencies are installed (`npm install`)
  - Restart the dev server after editing `.env`

## Security Notes

- This frontend setup uses the API key in the browser. That is convenient for personal/local use but exposes the key to end users if deployed publicly.
- For production, implement a backend (Express, serverless function, etc.) that stores the API key securely and proxies requests.

## Optional: List Available Models (Advanced)

If you'd like, I can add a small script or endpoint that attempts to list the models available to your Cohere account (if the SDK supports it). This helps pick a working `VITE_COHERE_MODEL` value.

---

If you'd like me to add the optional model-list script or convert the app to use a backend proxy for requests, tell me which option you prefer and I'll implement it next.
