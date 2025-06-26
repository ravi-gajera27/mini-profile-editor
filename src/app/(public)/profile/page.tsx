import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Mail, Phone, User, FileText } from 'lucide-react';
import { ProfileData } from '@/types/profile';

// Server Component - fetches data on the server
async function getProfile(): Promise<ProfileData> {
  try {
    const response = await fetch('http://localhost:3000/api/profile', {
      cache: 'no-store', // Always fetch fresh data
    });

    if (!response.ok) {
      throw new Error('Failed to fetch profile');
    }

    const result = await response.json();
    return result.data;
  } catch (error) {
    // Fallback data if API fails
    return {
      name: 'Ravi Gajera',
      bio: 'Full-stack developer passionate about building amazing web applications.',
      email: 'gajeraravi42@gmail.com',
      phone: '+91 9999999999',
      location: 'India',
    };
  }
}

export default async function ProfilePage() {
  const profile = await getProfile();

  return (
    <div className='space-y-6'>
      <div className='text-center'>
        <h1 className='text-3xl font-bold text-gray-900 mb-2'>
          {profile.name}
        </h1>
        <p className='text-gray-600 max-w-2xl mx-auto'>
          Welcome to my profile page. Here you can learn more about me and my
          work.
        </p>
      </div>

      <div className='grid gap-6 md:grid-cols-2'>
        {/* Personal Information Card */}
        <Card>
          <CardHeader>
            <CardTitle className='flex items-center gap-2'>
              <User className='h-5 w-5' />
              Personal Information
            </CardTitle>
          </CardHeader>
          <CardContent className='space-y-4'>
            <div className='flex items-center gap-3'>
              <Mail className='h-4 w-4 text-gray-500' />
              <span className='text-sm text-gray-700'>{profile.email}</span>
            </div>

            {profile.phone && (
              <div className='flex items-center gap-3'>
                <Phone className='h-4 w-4 text-gray-500' />
                <span className='text-sm text-gray-700'>{profile.phone}</span>
              </div>
            )}

            {profile.location && (
              <div className='flex items-center gap-3'>
                <MapPin className='h-4 w-4 text-gray-500' />
                <span className='text-sm text-gray-700'>
                  {profile.location}
                </span>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Bio Card */}
        <Card>
          <CardHeader>
            <CardTitle className='flex items-center gap-2'>
              <FileText className='h-5 w-5' />
              About Me
            </CardTitle>
          </CardHeader>
          <CardContent>
            {profile.bio ? (
              <p className='text-sm text-gray-700 leading-relaxed'>
                {profile.bio}
              </p>
            ) : (
              <p className='text-sm text-gray-500 italic'>
                No bio available yet.
              </p>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Status Badge */}
      <div className='flex justify-center'>
        <Badge variant='secondary' className='px-4 py-2'>
          Profile is public and visible to everyone
        </Badge>
      </div>
    </div>
  );
}
