# Deployment Checklist

## ✅ Pre-Deployment Checklist

### Content Review
- [x] Removed duplicate content (Arbisoft experience bullet point)
- [x] Removed exposed API key from README
- [x] Verified all content is consistent across sections
- [x] Checked for placeholder text - all placeholders are intentional (demo links)

### Environment Variables
Required environment variables for production:

```env
# Required for contact form
RESEND_API_KEY=your_resend_api_key_here
RESEND_FROM_EMAIL=Portfolio Contact <your-verified-email@domain.com>

# Optional - for GitHub integration
NEXT_PUBLIC_GITHUB_USERNAME=Raufnarejo505
GITHUB_ACCESS_TOKEN=your_github_token_optional

# Optional - for Supabase contact storage
SUPABASE_URL=your_supabase_url
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
SUPABASE_CONTACT_TABLE=contacts
```

### Configuration Updates Needed

1. **Update site URL in `app/layout.tsx`**:
   - Change `siteUrl` from `"https://abdulrauf.dev"` to your actual domain

2. **Update Calendly URL in `lib/data.ts`**:
   - Verify `CALENDLY_URL` is correct (currently: `"https://calendly.com/raufa0742"`)

3. **Add Project Images** (Optional but recommended):
   - Add images to `public/projects/` folder:
     - `cnn-defect-detection.jpg`
     - `recommendation-system.jpg`
     - `sentiment-analysis.jpg`
     - `churn-prediction.jpg`
     - `etl-pipeline.jpg`

### Build & Test

1. **Test Build Locally**:
   ```bash
   npm run build
   npm run start
   ```

2. **Verify**:
   - [ ] All pages load correctly
   - [ ] Contact form works (test with Resend API key)
   - [ ] All links work (internal and external)
   - [ ] Images load correctly
   - [ ] Dark/light theme toggle works
   - [ ] Mobile responsive design works
   - [ ] Blog articles are readable

### Deployment Platforms

#### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

#### Other Platforms
- Netlify: Similar process, add environment variables
- Self-hosted: Ensure Node.js 18+ and set environment variables

### Post-Deployment

1. **Verify**:
   - [ ] Contact form sends emails correctly
   - [ ] All external links work
   - [ ] Calendly integration works
   - [ ] Site is indexed by search engines (add sitemap if needed)

2. **SEO**:
   - [ ] Update `siteUrl` in `app/layout.tsx` with actual domain
   - [ ] Submit sitemap to Google Search Console
   - [ ] Verify Open Graph tags work (test with social media debuggers)

3. **Analytics** (Optional):
   - Add Google Analytics or similar
   - Add tracking code to `app/layout.tsx`

### Known Placeholders

- Demo links in projects are set to `"#"` - update when you have live demos
- Project images are optional but recommended for better visual appeal
- Resume download link can be added to hero section if needed

## 🚀 Ready for Deployment

The portfolio is ready for deployment once you:
1. Update the `siteUrl` in `app/layout.tsx`
2. Set up environment variables in your hosting platform
3. (Optional) Add project images
4. (Optional) Update demo links when available

