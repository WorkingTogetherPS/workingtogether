# Working Together Property Services Website

Professional website for Working Together Property Services - Liverpool's trusted property services company.

## 🚀 Getting Started

### Running the Website

1. Open terminal/command prompt
2. Navigate to the project:
   ```bash
   cd D:\ClaudeProjects\workingtogether
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser to: **http://localhost:3000**

### Stopping the Server

Press `Ctrl+C` in the terminal where the server is running.

## 📁 Project Structure

```
workingtogether/
├── app/
│   ├── page.tsx          # Main website page
│   ├── layout.tsx        # App layout wrapper
│   └── globals.css       # Global styles
├── components/
│   └── ui/
│       ├── tubelight-navbar.tsx  # Animated navigation
│       ├── gallery6.tsx          # Services carousel
│       ├── button.tsx            # Button component
│       └── carousel.tsx          # Carousel component
├── public/
│   ├── WTLOGO2.png       # Main logo (header)
│   ├── WTLOGO.png        # Alternative logo
│   ├── bathroom-hero.jpg # Hero background image
│   ├── mediawall.jpg     # Media wall service image
│   └── renovation.png    # Renovation/about section image
├── lib/
│   └── utils.ts          # Utility functions
└── old-html-site/        # Original HTML version (backup)
```

## 🎨 Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Animated navigation with tubelight effect
- ✅ Hero section with blurred animated background image
- ✅ Services gallery showcasing 4 main services with scroll animations
- ✅ About section with renovation imagery
- ✅ Contact section with Lucide icons (properly aligned)
- ✅ Booking consultation form
- ✅ Contact form
- ✅ Phone number in header and footer (07595 938285)
- ✅ Smooth scroll animations throughout
- ✅ Professional footer with contact information

## 📧 Contact Information

- **Email:** workingtogetherps@gmail.com
- **Phone:** 07595 938285
- **Service Area:** Liverpool and surrounding areas

## 🛠️ Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion (animations)
- Lucide React (icons)

## 📝 Making Changes

All main content is in `app/page.tsx`. Edit this file to update:
- Text content
- Images
- Contact information
- Services

After making changes, the browser will automatically reload.

## 🔧 Building for Production

To create a production build:
```bash
npm run build
npm start
```

## 📦 Dependencies

All dependencies are listed in `package.json`. To reinstall:
```bash
npm install
```

## 💡 Tips

- Logo is in `/public/WTLOGO2.png`
- Images in `/public/` folder are accessible at `/filename.ext`
- Hero background can be changed by replacing `/public/bathroom-hero.jpg`
- Phone number: 07595 938285
- Email: workingtogetherps@gmail.com

## ⚠️ Known Limitations

- **Contact Forms**: Currently use `mailto:` links which open the user's email client. For automatic email sending, consider integrating EmailJS or similar service.

---

Built with ❤️ for Working Together Property Services
