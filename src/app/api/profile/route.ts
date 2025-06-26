import { NextRequest, NextResponse } from 'next/server';
import { profileSchema, type ProfileData } from '@/types/profile';

// Mock database - in a real app, this would be in a database
let mockProfile: ProfileData = {
  name: 'Ravi Gajera',
  bio: 'Full-stack developer passionate about building amazing web applications.',
  email: 'gajeraravi42@gmail.com',
  phone: '+91 9999999999',
  location: 'India',
};

// GET /api/profile - Fetch profile data
export async function GET() {
  try {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return NextResponse.json({
      success: true,
      data: mockProfile,
    });
  } catch (error) {
    console.log('Error fetching profile:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to fetch profile',
    }, { status: 500 });
  }
}

// PUT /api/profile - Update profile data
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate input with Zod schema
    const validationResult = profileSchema.safeParse(body);
    
    if (!validationResult.success) {
      return NextResponse.json({
        success: false,
        error: 'Invalid input data',
        details: validationResult.error.errors,
      }, { status: 400 });
    }
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Update mock database
    mockProfile = validationResult.data;
    
    return NextResponse.json({
      success: true,
      data: mockProfile,
    });
  } catch (error) {
    console.log('Error updating profile:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to update profile',
    }, { status: 500 });
  }
}