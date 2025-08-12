# Pregnancy Test Website

A modern, responsive web application built with Next.js that provides pregnancy testing information and consultation services.

## Features

- **Interactive Chat Interface**: Chat with medical professionals about pregnancy-related questions
- **User Information Collection**: Secure form to collect user details for consultation
- **Responsive Design**: Mobile-first design that works on all devices
- **Modern UI Components**: Built with Radix UI and Tailwind CSS
- **Multi-language Support**: Language context for internationalization

## Tech Stack

- **Framework**: Next.js 15.2.4
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Form Handling**: React Hook Form with Zod validation

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/TechnovaTech/Pregnancy-Test.git
cd Pregnancy-Test
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── blog/              # Blog pages
│   ├── contexts/          # React contexts
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── ui/               # UI components
│   ├── chat-ui.tsx       # Chat interface component
│   └── theme-provider.tsx
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/               # Static assets
└── styles/               # Additional styles
```

## Key Components

- **ChatUI**: Interactive chat interface for medical consultations
- **Language Context**: Multi-language support system
- **Theme Provider**: Dark/light theme support

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is private and proprietary.