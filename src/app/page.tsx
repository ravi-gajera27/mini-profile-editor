import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { User, Edit, Eye, ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">
          Welcome to Profile Editor
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          A modern profile management system built with Next.js, featuring public profile viewing 
          and private profile editing with real-time updates.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="group hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="h-5 w-5 text-blue-600" />
              View Profile
            </CardTitle>
            <CardDescription>
              See how your profile appears to the public with a clean, professional layout.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/profile">
              <Button className="cursor-pointer w-full group-hover:bg-primary/90">
                View Public Profile
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="group hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Edit className="h-5 w-5 text-green-600" />
              Edit Profile
            </CardTitle>
            <CardDescription>
              Update your information with form validation and real-time feedback.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/edit-profile">
              <Button variant="outline" className="cursor-pointer w-full group-hover:bg-accent">
                Edit Your Profile
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      {/* Technical Features */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <User className="h-6 w-6" />
          Technical Features
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white p-4 rounded-lg border">
            <h3 className="font-medium text-gray-900 mb-2">Server & Client Components</h3>
            <p className="text-sm text-gray-600">
              Profile view uses Server Components for SEO, edit form uses Client Components for interactivity.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border">
            <h3 className="font-medium text-gray-900 mb-2">Form Validation</h3>
            <p className="text-sm text-gray-600">
              React Hook Form with Zod schema validation for robust form handling.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border">
            <h3 className="font-medium text-gray-900 mb-2">State Management</h3>
            <p className="text-sm text-gray-600">
              Zustand for global UI state and React Query for server state management.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border">
            <h3 className="font-medium text-gray-900 mb-2">Modern UI</h3>
            <p className="text-sm text-gray-600">
              shadcn/ui components with Tailwind CSS for a polished design system.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border">
            <h3 className="font-medium text-gray-900 mb-2">API Routes</h3>
            <p className="text-sm text-gray-600">
              Next.js App Router API routes for GET/PUT operations with proper error handling.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border">
            <h3 className="font-medium text-gray-900 mb-2">Loading States</h3>
            <p className="text-sm text-gray-600">
              React Query provides loading states, error handling, and toast notifications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}