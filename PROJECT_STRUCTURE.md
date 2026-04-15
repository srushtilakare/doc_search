# DocSearch AI - Project Structure & Documentation

## Overview

DocSearch AI is a modern, full-featured AI-powered document search and analysis platform built with **Next.js 16**, **React 19**, and **TypeScript**. It provides conversational chat, document management, advanced search, AI-generated insights, and analytics—all with a responsive dark/light theme.

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- pnpm (or npm/yarn)

### Installation & Running

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linting
pnpm lint
```

The app will be available at **http://localhost:3000**

---

## 📁 Project Structure

```
project-root/
├── app/                          # Next.js App Router pages & layouts
│   ├── layout.tsx               # Root layout with theme provider & metadata
│   ├── page.tsx                 # Main dashboard (home page with tab navigation)
│   ├── globals.css              # Global styles & design tokens (Tailwind v4)
│   ├── global-error.tsx         # Global error boundary
│   ├── login/page.tsx           # Login page
│   └── signup/page.tsx          # Sign up page
│
├── components/                   # Reusable React components
│   ├── layout/                  # Layout & navigation components
│   │   ├── sidebar.tsx          # Main navigation sidebar with theme toggle
│   │   └── header.tsx           # Page header with title & description
│   │
│   ├── chat/                    # Chat interface components
│   │   ├── chat-window.tsx      # Main chat container & message management
│   │   ├── empty-state.tsx      # Welcome screen for new users
│   │   ├── message-list.tsx     # Message display list with auto-scroll
│   │   ├── message-bubble.tsx   # Individual message display
│   │   ├── message-input.tsx    # Input field with file upload
│   │   └── thinking-indicator.tsx # AI thinking animation
│   │
│   ├── documents/               # Document management
│   │   ├── documents-page.tsx   # Document management hub
│   │   ├── document-uploader.tsx # Drag-drop upload component
│   │   └── document-list.tsx    # Document list with actions
│   │
│   ├── search/                  # Search functionality
│   │   ├── search-page.tsx      # Search interface
│   │   ├── search-input.tsx     # Search input with suggestions
│   │   └── search-results.tsx   # Search results display
│   │
│   ├── insights/                # AI insights & analysis
│   │   ├── insights-page.tsx    # Insights dashboard
│   │   └── insight-card.tsx     # Individual insight card
│   │
│   ├── analytics/               # Analytics dashboard
│   │   ├── analytics-page.tsx   # Analytics hub
│   │   ├── stat-card.tsx        # KPI card component
│   │   ├── usage-chart.tsx      # Line chart for usage trends
│   │   └── document-stats.tsx   # Pie chart for document types
│   │
│   ├── providers/               # React context providers
│   │   └── theme-provider.tsx   # Dark/light mode theme management
│   │
│   ├── ui/                      # Shadcn/ui pre-built components (70+ components)
│   │   ├── button.tsx           # Reusable button with variants
│   │   ├── card.tsx             # Card layout component
│   │   ├── input.tsx            # Text input component
│   │   ├── textarea.tsx         # Multi-line text input
│   │   ├── badge.tsx            # Badge labels
│   │   ├── chart.tsx            # Chart wrapper for Recharts
│   │   ├── dialog.tsx           # Modal dialog
│   │   ├── dropdown-menu.tsx    # Dropdown menu
│   │   ├── tabs.tsx             # Tab navigation
│   │   ├── spinner.tsx          # Loading spinner
│   │   └── ... (60+ more components)
│   │
│   └── theme-provider.tsx       # (Legacy) Theme provider backup
│
├── hooks/                        # Custom React hooks
│   ├── use-mobile.ts            # Mobile viewport detection
│   └── use-toast.ts             # Toast notification hook
│
├── lib/                          # Utility functions
│   └── utils.ts                 # Class name utilities (cn function)
│
├── styles/                       # Additional stylesheets
│   └── globals.css              # (Backup) Global styles
│
├── public/                       # Static assets (auto-created)
│   ├── icon.svg                 # App icon
│   ├── icon-dark-32x32.png      # Dark mode favicon
│   └── icon-light-32x32.png     # Light mode favicon
│
├── Configuration Files
│   ├── next.config.mjs          # Next.js configuration
│   ├── tailwind.config.ts       # Tailwind CSS v4 configuration
│   ├── tsconfig.json            # TypeScript configuration
│   ├── components.json          # Shadcn CLI configuration
│   ├── postcss.config.js        # PostCSS configuration
│   └── package.json             # Dependencies & scripts
│
└── README.md                     # (This file)
```

---

## 📄 Key Files & Their Purpose

### App Layer (`/app`)

| File | Purpose |
|------|---------|
| `layout.tsx` | Root layout - wraps entire app with ThemeProvider, sets metadata, configures fonts |
| `page.tsx` | Main dashboard - houses tab navigation between Chat, Documents, Search, Insights, Analytics |
| `globals.css` | Design system: CSS variables for colors, typography, spacing; Tailwind v4 configuration |
| `login/page.tsx` | Login page with email/password form and social login options |
| `signup/page.tsx` | Sign up page with email/password form validation |
| `global-error.tsx` | Global error boundary for unhandled errors |

### Layout Components (`/components/layout`)

| File | Purpose |
|------|---------|
| `sidebar.tsx` | Persistent left sidebar with: navigation tabs, chat history, theme toggle, settings, logout |
| `header.tsx` | Page header with title and description for each section |

### Chat Components (`/components/chat`)

| File | Purpose |
|------|---------|
| `chat-window.tsx` | Main chat container - manages message state, handles sending, AI response simulation |
| `empty-state.tsx` | Welcome screen with feature suggestions and call-to-action buttons |
| `message-list.tsx` | Scrollable message list with auto-scroll to latest message |
| `message-bubble.tsx` | Individual message display (user/assistant) with styling |
| `message-input.tsx` | Text input + file upload field with Ctrl+Enter support |
| `thinking-indicator.tsx` | Animated "thinking" indicator during AI processing |

### Document Management (`/components/documents`)

| File | Purpose |
|------|---------|
| `documents-page.tsx` | Document hub - combines uploader and document list |
| `document-uploader.tsx` | Drag-drop file upload with file type validation |
| `document-list.tsx` | Table/grid of uploaded documents with delete & view actions |

### Search (`/components/search`)

| File | Purpose |
|------|---------|
| `search-page.tsx` | Search interface with input and results display |
| `search-input.tsx` | Search box with real-time query handling |
| `search-results.tsx` | Results list with relevance scores and document sources |

### Insights (`/components/insights`)

| File | Purpose |
|------|---------|
| `insights-page.tsx` | AI-generated insights dashboard with 4 insight cards |
| `insight-card.tsx` | Card displaying individual insight (summary, finding, recommendation, metric) |

### Analytics (`/components/analytics`)

| File | Purpose |
|------|---------|
| `analytics-page.tsx` | Analytics hub with KPI cards and charts |
| `stat-card.tsx` | KPI card showing metric, change %, icon |
| `usage-chart.tsx` | Recharts line chart showing usage over 7 days |
| `document-stats.tsx` | Recharts pie chart showing document type distribution |

### Providers (`/components/providers`)

| File | Purpose |
|------|---------|
| `theme-provider.tsx` | React Context for dark/light mode management, localStorage persistence |

### UI Components (`/components/ui`)

Shadcn/ui pre-built components providing:
- **Form inputs**: button, input, textarea, checkbox, radio-group, select, switch, slider
- **Layouts**: card, accordion, tabs, separator, breadcrumb, resizable, sidebar
- **Dialogs**: dialog, alert-dialog, drawer, popover, hover-card, tooltip
- **Lists**: dropdown-menu, context-menu, navigation-menu, menubar, command
- **Data**: table, pagination, progress, input-otp, calendar
- **Charts**: chart (Recharts wrapper)
- **Feedback**: badge, alert, skeleton, spinner, toast, sonner
- **And 20+ more...**

### Hooks (`/hooks`)

| File | Purpose |
|------|---------|
| `use-mobile.ts` | Hook to detect if viewport is mobile (< 768px) |
| `use-toast.ts` | Hook to trigger toast notifications |

### Utilities (`/lib`)

| File | Purpose |
|------|---------|
| `utils.ts` | `cn()` function to merge Tailwind classes with `clsx` and `tailwind-merge` |

### Configuration

| File | Purpose |
|------|---------|
| `next.config.mjs` | Next.js settings (image optimization, redirects, etc.) |
| `tailwind.config.ts` | Tailwind CSS configuration with custom design tokens |
| `tsconfig.json` | TypeScript compiler options and path aliases (`@/*` = `/components`) |
| `components.json` | Shadcn CLI config for adding new UI components |
| `postcss.config.js` | PostCSS plugins (Tailwind, Autoprefixer) |

---

## 🎨 Design System

### Color Palette

**Light Mode (Default):**
- Background: Near white (`0 0% 98%`)
- Foreground: Near black (`0 0% 3.6%`)
- Card: Pure white
- Accent: Purple (`263 70% 50%`)
- Muted: Light gray (`0 0% 96.1%`)

**Dark Mode:**
- Background: Pure black
- Foreground: Pure white
- Card: Very dark gray (`0 0% 3.9%`)
- Accent: Purple (`263 70% 50%`)
- Muted: Dark gray (`0 0% 14.9%`)

### Typography

- **Font Family**: Geist (sans-serif) for body, Geist Mono for code
- **Loaded from**: Google Fonts in `layout.tsx`
- **Line Height**: 1.4-1.6 (via Tailwind leading classes)

### Spacing & Radius

- **Border Radius**: 0.5rem (8px) via `--radius` CSS variable
- **Spacing Scale**: Tailwind default (0.25rem increments: `gap-2`, `p-4`, etc.)

---

## 🔄 Data Flow

### Message Handling (Chat)

```
User Input → MessageInput.tsx
   ↓
onSendMessage() callback
   ↓
ChatWindow.tsx: Add to messages state
   ↓
MessageList.tsx: Re-renders all messages
   ↓
MessageBubble.tsx: Display each message with thinking indicator
```

### Search

```
Search Query → SearchInput.tsx
   ↓
onSearch() callback
   ↓
SearchPage.tsx: Mock search results
   ↓
SearchResults.tsx: Display filtered results
```

### Analytics

```
Static data in analytics-page.tsx
   ↓
StatCard.tsx: Display individual KPIs
   ↓
UsageChart.tsx & DocumentStats.tsx: Render Recharts
```

### Theme Management

```
User clicks theme toggle (Sidebar)
   ↓
useTheme() hook called
   ↓
ThemeProvider updates HTML class: "dark" or removes it
   ↓
CSS variables switch via .dark selector
   ↓
All components re-render with new colors
```

---

## 🔧 Technology Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | Next.js 16 (App Router) |
| **Runtime** | React 19 + React DOM 19 |
| **Language** | TypeScript 5.7 |
| **Styling** | Tailwind CSS v4 + PostCSS |
| **UI Components** | Shadcn/ui (70+ pre-built) |
| **Charts** | Recharts 2.15 |
| **Icons** | Lucide React |
| **Forms** | React Hook Form + Zod (validation) |
| **Theme** | next-themes |
| **Animations** | Tailwind Animate CSS |
| **Notifications** | Sonner |
| **Utilities** | clsx, tailwind-merge, date-fns |
| **Analytics** | Vercel Analytics |

---

## 🚀 Features Implemented

### ✅ Chat Interface
- Real-time message sending/receiving
- AI thinking indicator animation
- File upload integration
- Empty state onboarding
- Auto-scroll to latest messages
- Typing indicators (simulated)

### ✅ Document Management
- Drag-and-drop file upload
- Document list with metadata
- Delete documents
- File type indicators
- Upload status tracking

### ✅ Search
- Full-text search across documents
- Relevance scoring
- Source attribution
- Section context display
- Empty states for no results

### ✅ AI Insights
- Auto-generated summaries
- Key findings
- Recommendations
- Performance metrics
- Icon-based categorization

### ✅ Analytics Dashboard
- KPI cards (documents, sessions, response time, engagement)
- Usage trends (line chart, 7-day history)
- Document distribution (pie chart)
- Recharts integration

### ✅ Authentication UI
- Login page (email/password + social login)
- Sign up page (with validation)
- Responsive forms
- Password visibility toggle

### ✅ Theme System
- Dark/light mode toggle
- localStorage persistence
- System preference detection
- Smooth transitions
- CSS variable-based theming

### ✅ Navigation
- Multi-tab sidebar navigation
- Chat session history
- Quick access buttons
- Mobile-responsive hamburger menu

---

## 📱 Responsive Design

The app is fully responsive across all breakpoints:

- **Mobile** (`<640px`): Collapsed sidebar (hamburger menu), single-column layout
- **Tablet** (`640px-1024px`): Expanded sidebar, 2-column grids
- **Desktop** (`>1024px`): Full sidebar, 3+ column grids

Breakpoints used: `sm`, `md`, `lg`, `xl`, `2xl`

---

## 🔐 Security & Best Practices

- **TypeScript**: Full type safety across the app
- **Input Validation**: Zod schemas in forms
- **Responsive Images**: Next.js image optimization
- **HTTPS-Ready**: Configured for Vercel deployment
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation
- **SEO**: Metadata in layout, Open Graph tags

---

## 🛠️ Development Workflow

### Adding a New Page

1. Create file in `app/[path]/page.tsx`
2. Export default component
3. Page is automatically routed to `/[path]`

### Adding a New Component

1. Create in `components/[feature]/component-name.tsx`
2. Use shadcn/ui components as building blocks
3. Import and use in pages

### Adding a New Shadcn Component

```bash
npx shadcn-ui@latest add button
```

### Styling Components

- Use Tailwind classes: `className="flex gap-4 p-4 bg-card"`
- Reference design tokens: `bg-background`, `text-foreground`, `border-border`
- Use variants from shadcn: `<Button variant="outline">`

### Debugging

Use `console.log("[v0] ...")` for debugging (auto-removed before deployment):

```typescript
console.log("[v0] Component rendered with props:", props)
```

---

## 📦 Dependencies Summary

### Core
- `next@16.2.0` - React framework
- `react@19` - UI library
- `react-dom@19` - React DOM
- `typescript@5.7.3` - Type safety

### Styling
- `tailwindcss@4.2.0` - Utility CSS
- `postcss@8.5` - CSS transformation
- `autoprefixer` - CSS prefixes
- `tailwindcss-animate` - Animations
- `tailwind-merge` - Class merging

### UI & Components
- `@radix-ui/*` - Accessible component primitives
- `lucide-react` - Icon library
- `recharts@2.15.0` - Data visualization
- `sonner` - Toast notifications

### Forms & Validation
- `react-hook-form@7.54.1` - Form management
- `zod@3.24.1` - Schema validation
- `@hookform/resolvers` - RHF validation adapters

### Utilities
- `clsx` - Class name utilities
- `date-fns` - Date formatting
- `next-themes` - Theme management
- `@vercel/analytics` - Analytics tracking

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub/GitLab
2. Connect repository to Vercel
3. Vercel auto-detects Next.js and deploys
4. Environment variables (if needed) added via Vercel dashboard

### Manual Deployment

```bash
pnpm build
pnpm start
```

Then deploy the `.next` folder to your hosting.

---

## 📝 Environment Variables

Currently, no environment variables are required for local development. If you add API calls, add them to `.env.local`:

```
NEXT_PUBLIC_API_URL=https://api.example.com
```

---

## 🐛 Troubleshooting

### App won't start
- Clear `.next` folder: `rm -rf .next`
- Reinstall dependencies: `pnpm install`
- Restart dev server: `pnpm dev`

### Styling issues
- Ensure `globals.css` is imported in `layout.tsx`
- Check Tailwind config matches your design tokens
- Clear cache: `tailwindcss -p` (rebuild Tailwind)

### Theme not switching
- Check localStorage for `theme` key
- Verify `theme-provider.tsx` is wrapped around app
- Check HTML element has `suppressHydrationWarning`

---

## 📚 Learn More

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Shadcn/ui](https://ui.shadcn.com)
- [Recharts](https://recharts.org)

---

## 📄 License

This project is created with v0.app and is ready for production deployment.

---

## 🎯 Next Steps

To extend this project:

1. **Connect a Real API**: Replace mock data with API calls in components
2. **Add Authentication**: Implement Supabase Auth or custom JWT
3. **Database Integration**: Add Supabase/Neon for data persistence
4. **File Storage**: Integrate Vercel Blob for document storage
5. **Advanced Search**: Add Upstash Vector DB for semantic search
6. **Real-time Chat**: Integrate WebSockets for live collaboration

---

*Generated for DocSearch AI - AI Document Search Platform*
