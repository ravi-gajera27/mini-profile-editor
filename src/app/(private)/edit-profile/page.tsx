"use client";
import { EditProfileForm } from '@/components/edit-profile-form';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Eye, Shield } from 'lucide-react';

// Server Component that renders the edit profile page
export default function EditProfilePage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">
          Edit Your Profile
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Update your profile information below. Changes will be reflected on your public profile page.
        </p>
        
        {/* Status Badges */}
        <div className="flex justify-center gap-3">
          <Badge variant="outline" className="flex items-center gap-1">
            <Shield className="h-3 w-3" />
            Private editing area
          </Badge>
          <Link href="/profile">
            <Badge variant="secondary" className="flex items-center gap-1 hover:bg-secondary/80 cursor-pointer">
              <Eye className="h-3 w-3" />
              View public profile
            </Badge>
          </Link>
        </div>
      </div>

      {/* Edit Form */}
      <div className="max-w-2xl mx-auto">
        <EditProfileForm />
      </div>

      {/* Helper Text */}
      <div className="max-w-2xl mx-auto">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="text-sm font-medium text-blue-900 mb-2">
            💡 Tips for a great profile:
          </h3>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• Use a professional email address</li>
            <li>• Write a concise but engaging bio</li>
            <li>• Include your current location if relevant</li>
            <li>• Keep your phone number format consistent</li>
          </ul>
        </div>
      </div>
    </div>
  );
}