# Getting Your OpenAI API Key

## Step-by-Step Guide

### 1. Create an OpenAI Account
- Go to [OpenAI Platform](https://platform.openai.com/signup)
- Sign up with your email or use Google/Microsoft account

### 2. Add Payment Method
- Navigate to [Billing](https://platform.openai.com/account/billing)
- Add a payment method (credit/debit card)
- Add initial credits (minimum $5 recommended)

### 3. Generate API Key
- Go to [API Keys](https://platform.openai.com/api-keys)
- Click "Create new secret key"
- Give it a name (e.g., "Meal Planner App")
- **Important**: Copy the key immediately - you won't be able to see it again!
- The key will look like: `sk-proj-...` or `sk-...`

### 4. Security Best Practices
- ⚠️ Never share your API key publicly
- ⚠️ Don't commit it to version control
- ⚠️ Regenerate the key if accidentally exposed
- Monitor your usage on the OpenAI dashboard

## Cost Estimation

Using GPT-3.5-turbo (as configured in this app):
- ~$0.002 per meal plan generation
- $5 credit = approximately 2,500 meal plans

Using GPT-4 (if you modify the code):
- ~$0.03 per meal plan generation
- More expensive but potentially better results

## Free Trial

- New accounts get free credits to start ($5-$18 depending on promotions)
- Perfect for testing the application
- Credits expire after 3 months

## Need Help?

If you encounter issues:
1. Check your billing status
2. Verify the API key is copied correctly
3. Check OpenAI's status page: https://status.openai.com/
4. Review rate limits: https://platform.openai.com/account/rate-limits

---

**Note**: This application makes API calls directly from your browser. Your API key is used client-side and is not stored anywhere. However, for production applications, it's recommended to use a backend server to protect your API key.
