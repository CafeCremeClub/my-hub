'use server';

import { cookies } from 'next/headers';
import { SaveCookiesPayload } from '@/types/auth/SaveCookiesPayload';

export async function saveCookies(payload: SaveCookiesPayload) {
  const {
    token,
    shouldCompleteOnboarding,
    shouldCompleteUserInfo,
    shouldCompleteProfileInfo,
  } = payload;

  const cookieStore = await cookies();

  cookieStore.set('token', token, {
    httpOnly: true,
    secure: true,
    sameSite: 'none',
    path: '/',
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });

  if (shouldCompleteOnboarding) {
    cookieStore.set('should-complete-onboarding', 'true', {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });
  }

  if (shouldCompleteUserInfo) {
    cookieStore.set('should-complete-user-info', 'true', {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });
  }

  if (shouldCompleteProfileInfo) {
    cookieStore.set('should-complete-profile-info', 'true', {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });
  }
}
