# Professional Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. This portfolio showcases full-stack development skills and projects with a clean, professional design.

## Features

- ⚡ **Next.js 14** with App Router for optimal performance
- 🎨 **Modern Design** with Tailwind CSS and shadcn/ui components
- 🌙 **Dark/Light Mode** with system preference detection
- 📱 **Fully Responsive** design across all devices
- ♿ **Accessibility Compliant** with proper ARIA labels and keyboard navigation
- 🚀 **Performance Optimized** with Next.js image optimization and lazy loading
- 📧 **Contact Form** with validation and toast notifications
- 🎯 **Smooth Scrolling** navigation with section anchors
- 🎭 **Animated Interactions** and hover effects
- 🔍 **SEO Optimized** with proper meta tags and structure

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Fonts**: Inter & JetBrains Mono
- **Animation**: CSS Transitions & Transforms

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/
│   ├── layout/            # Layout components
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   └── ThemeToggle.tsx
│   ├── providers/         # Context providers
│   │   └── ThemeProvider.tsx
│   ├── sections/          # Page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   └── Contact.tsx
│   └── ui/                # Reusable UI components (shadcn/ui)
├── lib/
│   ├── constants.ts       # Data constants
│   └── utils.ts          # Utility functions
├── types/
│   └── index.ts          # TypeScript type definitions
└── hooks/                # Custom React hooks
```

## Customization

### Personal Information

Update the data in `lib/constants.ts`:

- **Personal details**: Name, title, description
- **Projects**: Add your projects with descriptions, technologies, and links
- **Experience**: Add your work experience and achievements  
- **Skills**: Update your technical skills and proficiency levels
- **Social links**: Update your GitHub, LinkedIn, and other social profiles

### Styling

The design system uses CSS custom properties defined in `app/globals.css`. You can customize:

- **Colors**: Update the color palette in the `:root` and `.dark` selectors
- **Typography**: Modify font families in `app/layout.tsx`
- **Spacing**: Adjust the spacing system using Tailwind classes
- **Animations**: Customize animations in the CSS file

### Components

All components are modular and can be easily customized:

- **Sections**: Modify individual sections in `components/sections/`
- **Layout**: Update navigation and footer in `components/layout/`
- **UI**: Customize reusable components in `components/ui/`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with zero configuration

### Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy the `out` folder to Netlify

### Other Platforms

The project is configured for static export and can be deployed to any static hosting service.

## Performance

The portfolio is optimized for performance:

- **Lighthouse Score**: 95+ on all metrics
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic route-based code splitting
- **Bundle Size**: Optimized with tree shaking and dynamic imports

## Browser Support

- Chrome (latest)
- Firefox (latest) 
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful UI components
- [Lucide](https://lucide.dev/) - Icon library
- [Vercel](https://vercel.com/) - Deployment platform# vikashroy.com
