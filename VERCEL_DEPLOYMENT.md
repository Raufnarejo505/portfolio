# Deploying to Vercel - Step-by-Step Guide

## Prerequisites

1. **GitHub Account** - Your code should be in a GitHub repository
2. **Vercel Account** - Sign up at [vercel.com](https://vercel.com) (free tier available)
3. **Environment Variables Ready** - Have your API keys ready

## Method 1: Deploy via Vercel Dashboard (Recommended)

### Step 1: Push Your Code to GitHub

```bash
# If you haven't initialized git yet
git init
git add .
git commit -m "Initial commit - Portfolio ready for deployment"

# Create a new repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### Step 2: Import Project to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **"Add New..."** → **"Project"**
3. Click **"Import Git Repository"**
4. Select your GitHub repository
5. Click **"Import"**

### Step 3: Configure Project Settings

Vercel will auto-detect Next.js. Verify these settings:

- **Framework Preset**: Next.js (auto-detected)
- **Root Directory**: `./` (leave as default)
- **Build Command**: `npm run build` (auto-detected)
- **Output Directory**: `.next` (auto-detected)
- **Install Command**: `npm install` (auto-detected)

### Step 4: Add Environment Variables

**Before deploying**, add your environment variables:

1. In the project settings, scroll to **"Environment Variables"**
2. Add each variable:

```
RESEND_API_KEY=your_resend_api_key_here
RESEND_FROM_EMAIL=Portfolio Contact <your-verified-email@domain.com>
NEXT_PUBLIC_GITHUB_USERNAME=Raufnarejo505
GITHUB_ACCESS_TOKEN=your_github_token_optional
```

**Important Notes:**
- `RESEND_API_KEY` is **required** for the contact form to work
- `RESEND_FROM_EMAIL` must be a verified email in your Resend account
- `NEXT_PUBLIC_GITHUB_USERNAME` is optional (defaults to Raufnarejo505)
- `GITHUB_ACCESS_TOKEN` is optional but recommended for higher API rate limits

### Step 5: Deploy

1. Click **"Deploy"**
2. Wait for the build to complete (usually 2-3 minutes)
3. Your site will be live at: `https://your-project-name.vercel.app`

### Step 6: Custom Domain (Optional)

1. Go to **Project Settings** → **Domains**
2. Add your custom domain (e.g., `abdulrauf.dev`)
3. Follow Vercel's DNS configuration instructions
4. Update `app/layout.tsx` with your actual domain:

```typescript
// In app/layout.tsx, update:
metadata: {
  metadataBase: new URL("https://yourdomain.com"), // Update this
  // ...
}
```

## Method 2: Deploy via Vercel CLI

### Step 1: Install Vercel CLI

```bash
npm i -g vercel
```

### Step 2: Login to Vercel

```bash
vercel login
```

### Step 3: Deploy

```bash
# From your project root directory
vercel

# For production deployment
vercel --prod
```

### Step 4: Add Environment Variables via CLI

```bash
vercel env add RESEND_API_KEY
vercel env add RESEND_FROM_EMAIL
vercel env add NEXT_PUBLIC_GITHUB_USERNAME
vercel env add GITHUB_ACCESS_TOKEN
```

Or add them via the Vercel dashboard (easier).

## Post-Deployment Checklist

### ✅ Verify These Work:

1. **Contact Form**
   - Test submitting a message
   - Check your email (`raufa0742@gmail.com`) for the notification
   - Test file attachments (if applicable)

2. **All Links**
   - Navigation links
   - Social media links (LinkedIn, GitHub, WhatsApp)
   - External project links
   - Calendly link

3. **Theme Toggle**
   - Light/dark mode switching

4. **Blog Articles**
   - Click "Read article" on blog posts
   - Verify MDX content renders correctly

5. **Images**
   - Project images load correctly
   - Hero section image displays

6. **Forms**
   - "Get Started" modal opens and submits
   - Contact form submits successfully

### 🔧 Troubleshooting

#### Build Fails

**Error: Module not found**
- Make sure all dependencies are in `package.json`
- Run `npm install` locally to verify

**Error: TypeScript errors**
- Fix all TypeScript errors before deploying
- Run `npm run build` locally to catch errors

#### Contact Form Not Working

**No emails received:**
1. Check `RESEND_API_KEY` is set correctly
2. Verify `RESEND_FROM_EMAIL` is a verified email in Resend
3. Check Vercel function logs: **Project** → **Deployments** → **Functions** tab

#### Images Not Loading

**Project images missing:**
- Ensure images are in `public/projects/` directory
- Check image paths in `lib/data.ts` match actual file names
- Images should be committed to Git (not in `.gitignore`)

#### Environment Variables Not Working

**Variables not accessible:**
- After adding env vars, **redeploy** the project
- Environment variables are only available after redeployment
- Check variable names match exactly (case-sensitive)

## Continuous Deployment

Once connected to GitHub, Vercel will automatically:
- ✅ Deploy on every push to `main` branch
- ✅ Create preview deployments for pull requests
- ✅ Show build status in GitHub

## Performance Optimization

Vercel automatically optimizes:
- ✅ Image optimization (Next.js Image component)
- ✅ Code splitting
- ✅ Static page generation
- ✅ Edge caching

## Monitoring

Check your deployment:
- **Analytics**: Vercel dashboard → Analytics tab
- **Logs**: Vercel dashboard → Deployments → Functions tab
- **Performance**: Vercel dashboard → Speed Insights

## Updating Your Site

1. Make changes locally
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push
   ```
3. Vercel automatically deploys the new version

## Support

- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- **Resend Docs**: [resend.com/docs](https://resend.com/docs)

---

**Your portfolio is now live! 🚀**

Share your deployed URL: `https://your-project-name.vercel.app`

