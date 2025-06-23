'use client';

import { login, register } from '@/app/actions/auth';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useSearchParams, useRouter } from 'next/navigation';


export default function AuthPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get('redirect') || '/dashboard';
  const [isLogin, setIsLogin] = useState(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleAction(action: (data: FormData) => Promise<any>, data: FormData) {
    setLoading(true);
    try {
      setErrorMsg(null);
      await action(data);
      toast.success(isLogin ? 'Accesso riuscito!' : 'Registrazione completata!');
      setTimeout(() => {
        router.push(redirectTo); // ← questo lo ottieni dai parametri URL
      }, 500);
    } catch (err: any) {
      const message =
        err?.message || 'Errore durante l\'operazione. Riprova più tardi.';
      setErrorMsg(message);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (loading) return;
    const form = event.currentTarget;
    const formData = new FormData(form);
    await handleAction(isLogin ? login : register, formData);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-zinc-900 dark:to-zinc-800 px-6">
      <div className="w-full max-w-md bg-white/90 dark:bg-zinc-900/90 border border-border dark:border-zinc-700 rounded-3xl p-12 shadow-xl backdrop-blur-sm transition-all duration-500">

        <button
          type="button"
          onClick={() => window.history.back()}
          className="mb-6 text-sm text-gray-500 dark:text-zinc-400 hover:text-primary dark:hover:text-primary transition-colors"
        >
          ← Torna indietro
        </button>

        <h1 className="text-3xl font-extrabold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 drop-shadow-lg">
          {isLogin ? 'Accedi' : 'Registrati'}
        </h1>

        <form onSubmit={onSubmit} className="space-y-6" noValidate>
          {!isLogin && (
            <>
              <Input label="Nome" name="name" placeholder="Mario" required />
              <Input label="Cognome" name="surname" placeholder="Rossi" required />
              <Input label="Indirizzo" name="address" placeholder="Via Roma 123" required />
              <Input label="Cellulare (facoltativo)" name="phone" placeholder="3331234567" type="tel" />
            </>
          )}
          <Input label="Email" name="email" placeholder="email@example.com" type="email" required />
          <Input label="Password" name="password" placeholder="••••••••" type="password" required />

          {errorMsg && (
            <p
              className="text-sm text-red-600 dark:text-red-500 text-center animate-fadeIn"
              role="alert"
              aria-live="assertive"
            >
              {errorMsg}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 mt-4 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold shadow-lg transition-transform duration-300 ${
              loading ? 'opacity-60 cursor-not-allowed' : 'hover:scale-105 hover:shadow-2xl'
            }`}
          >
            {loading ? (isLogin ? 'Accesso...' : 'Registrazione...') : (isLogin ? 'Accedi' : 'Registrati')}
          </button>
        </form>

        <div className="mt-8 flex justify-center gap-4 text-sm text-textSecondary dark:text-zinc-400">
          {isLogin ? (
            <>
              <span>Non hai un account?</span>
              <button
                type="button"
                onClick={() => {
                  setErrorMsg(null);
                  setIsLogin(false);
                }}
                className="px-4 py-1 rounded-full bg-blue-100 dark:bg-purple-800 text-blue-700 dark:text-purple-300 font-semibold hover:bg-blue-200 dark:hover:bg-purple-700 transition"
              >
                Registrati
              </button>
            </>
          ) : (
            <>
              <span>Hai già un account?</span>
              <button
                type="button"
                onClick={() => {
                  setErrorMsg(null);
                  setIsLogin(true);
                }}
                className="px-4 py-1 rounded-full bg-purple-100 dark:bg-blue-800 text-purple-700 dark:text-blue-300 font-semibold hover:bg-purple-200 dark:hover:bg-blue-700 transition"
              >
                Accedi
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function Input({
  label,
  name,
  placeholder,
  type = 'text',
  required = false,
}: {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block mb-1 text-sm text-textSecondary dark:text-zinc-400" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="w-full px-5 py-3 rounded-lg bg-white dark:bg-zinc-800 border border-border dark:border-zinc-700 text-textPrimary dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 shadow-inner focus:outline-none focus:ring-4 focus:ring-blue-500 focus:border-transparent transition"
        autoComplete={name}
      />
    </div>
  );
}
