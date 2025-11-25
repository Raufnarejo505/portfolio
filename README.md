This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Contact Form Setup

The contact form requires Resend API key to send emails. To set it up:

1. Create an account at [Resend](https://resend.com)
2. Get your API key from the [API Keys page](https://resend.com/api-keys)
3. Create a `.env.local` file in the root directory:
   ```
   RESEND_API_KEY=your_resend_api_key_here
   RESEND_FROM_EMAIL=Portfolio Contact <onboarding@resend.dev>
   NEXT_PUBLIC_GITHUB_USERNAME=Raufnarejo505
   ```
4. The contact form will send emails to `raufa0742@gmail.com` with attachments (PDF, DOC, DOCX, XLS, XLSX files up to 10MB each)

## Project Images

The portfolio displays images for each featured project. To add project images:

1. Create a `projects` folder in the `public` directory:
   ```bash
   mkdir -p public/projects
   ```

2. Add your project images with these filenames (or update the paths in `lib/data.ts`):
   - `cnn-defect-detection.jpg` - Image Classification for Defect Detection
   - `recommendation-system.jpg` - Recommendation System for E-commerce
   - `sentiment-analysis.jpg` - Sentiment Analysis on Customer Reviews
   - `churn-prediction.jpg` - Customer Churn Prediction Model
   - `etl-pipeline.jpg` - ETL Pipeline for Large Datasets

3. Recommended image specifications:
   - Format: JPG, PNG, or WebP
   - Aspect ratio: 16:9 or 4:3
   - Size: 1200x675px or larger
   - File size: Optimized for web (< 500KB recommended)

4. Update image paths in `lib/data.ts` if you use different filenames.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
