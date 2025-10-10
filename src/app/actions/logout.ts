'use server';

import { cookies } from 'next/headers';

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete('token');
  cookieStore.delete('should-complete-onboarding');
  cookieStore.delete('should-complete-user-info');
  cookieStore.delete('should-complete-profile-info');
}
