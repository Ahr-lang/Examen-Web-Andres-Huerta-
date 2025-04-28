'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import WelcomeCard from '../components/WelcomeCard';

interface User {
  fullName: string;
  email: string;
}

export default function Welcome() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (!userData) {
      router.push('/');
      return;
    }
    setUser(JSON.parse(userData));
  }, [router]);

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <WelcomeCard user={user} />
    </div>
  );
}