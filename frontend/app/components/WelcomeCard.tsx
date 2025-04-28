'use client';
import { useRouter } from 'next/navigation';

interface User {
  fullName: string;
  email: string;
}

interface WelcomeCardProps {
  user: User;
}

export default function WelcomeCard({ user }: WelcomeCardProps) {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('user');
    router.push('/');
  };

  return (
    <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-lg">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          ¡Hola, {user.fullName}!
        </h1>
        <p className="text-xl text-gray-600">
          Bienvenido al portal de SkyTech.
        </p>
        <p className="text-md text-gray-500 mt-4">
          Email: {user.email}
        </p>
        <button
          onClick={handleLogout}
          className="mt-6 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
        >
          Cerrar Sesión
        </button>
      </div>
    </div>
    );
  }