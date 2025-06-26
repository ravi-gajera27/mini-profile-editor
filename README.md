# Next.js Profile Editor

A modern profile management application built with Next.js 15, featuring public profile viewing and private profile editing with real-time updates.

## 🚀 Features

- **Server & Client Components**: Profile view uses Server Components for optimal SEO, while the edit form uses Client Components for interactivity
- **App Router Structure**: Modern Next.js app directory structure with organized route groups
- **Form Validation**: React Hook Form with Zod schema validation
- **State Management**: Zustand for global UI state, React Query for server state
- **Modern UI**: shadcn/ui components with Tailwind CSS
- **Real-time Updates**: Optimistic updates with loading states and error handling
- **Toast Notifications**: Success/error feedback using Zustand global state
- **Responsive Design**: Mobile-first design that works on all devices

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui + Radix UI
- **Form Handling**: React Hook Form + Zod validation
- **State Management**: 
  - Zustand (Global UI state)
  - React Query (Server state)
- **Icons**: Lucide React

## 📁 Project Structure

```
├── app/
│   ├── (public)/
│   │   └── profile/
│   │       └── page.tsx          # Public profile view (Server Component)
│   ├── (private)/
│   │   └── edit-profile/
│   │       └── page.tsx          # Edit profile page (Client Component)
│   ├── api/
│   │   └── profile/
│   │       └── route.ts          # GET/PUT API endpoints
│   ├── globals.css
│   ├── layout.tsx                # Root layout with providers
│   └── page.tsx                  # Home page
├── components/
│   ├── ui/                       # shadcn/ui components
│   ├── providers/
│   │   └── query-client-provider.tsx
│   └── edit-profile-form.tsx     # Main edit form component
├── lib/
│   └── utils.ts                  # Utility functions
├── store/
│   └── ui-store.ts              # Zustand store for UI state
├── types/
│   └── profile.ts               # TypeScript types and Zod schemas
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd nextjs-profile-editor
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📖 Usage

### Viewing Profile
- Navigate to `/profile` to see the public profile view
- This page is rendered as a Server Component for optimal SEO
- Displays all profile information in a clean, professional layout

### Editing Profile
- Navigate to `/edit-profile` to modify profile information
- Form includes validation for all fields using Zod schema
- Real-time feedback with loading states and error handling
- Success/error notifications via toast messages

### API Endpoints

- `GET /api/profile` - Fetch current profile data
- `PUT /api/profile` - Update profile data with validation

## 🔧 Key Implementation Details

### Server vs Client Components
- **Profile Page**: Server Component for SEO optimization and fast initial load
- **Edit Form**: Client Component for form interactivity and state management

### Form Validation
```typescript
// Zod schema for type-safe validation
export const profileSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  bio: z.string().max(500, 'Bio must be less than 500 characters').optional(),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().regex(/^\+?[\d\s-()]+$/, 'Please enter a valid phone number').optional(),
  location: z.string().min(2, 'Location must be at least 2 characters').optional(),
});
```

### State Management
- **Zustand**: Global UI state (toast notifications)
- **React Query**: Server state management with caching and optimistic updates

### API Route Handler
```typescript
// app/api/profile/route.ts
export async function PUT(request: NextRequest) {
  const body = await request.json();
  const validationResult = profileSchema.safeParse(body);
  
  if (!validationResult.success) {
    return NextResponse.json({
      success: false,
      error: 'Invalid input data',
    }, { status: 400 });
  }
  
}
```

## 🎨 UI Components

The project uses shadcn/ui components for a consistent design system:

- `Card` - Container components
- `Input` & `Textarea` - Form inputs
- `Button` - Action buttons with variants
- `Label` - Form labels
- `Badge` - Status indicators
- `Toast` - Notification system

## 🚦 Loading & Error States

- Form submission shows loading spinner
- React Query handles loading states for data fetching
- Error boundaries for graceful error handling
- Toast notifications for user feedback

## 📱 Responsive Design

- Mobile-first approach using Tailwind CSS
- Responsive grid layouts
- Touch-friendly form controls
- Optimized for all screen sizes

## 🧪 Best Practices Implemented

- **TypeScript**: Full type safety throughout the application
- **Component Separation**: Clear separation between Server and Client Components
- **Form Validation**: Client and server-side validation
- **Error Handling**: Comprehensive error handling and user feedback
- **Code Organization**: Clean project structure with logical grouping
- **Performance**: Optimized loading and caching strategies
- **Accessibility**: Semantic HTML and proper ARIA labels

## 🔮 Bonus Features Implemented

- ✅ Loading and error states with React Query
- ✅ Toast notifications on success/error
- ✅ TailwindCSS for styling and layout
- ✅ Ready for Vercel deployment

```bash
# Build for production
npm run build

# Start production server
npm start
```


## 📄 License

This project is created for educational purposes as part of a Next.js development assessment.

---

Built with ❤️ using Next.js 15, TypeScript, and modern React patterns.