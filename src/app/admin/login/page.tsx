'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { authenticateAdmin } from '../actions';
import { Lock, ArrowRight, Loader } from 'lucide-react';

export default function AdminLoginPage() {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            const res = await authenticateAdmin(password);
            if (res.success) {
                // Successful login, middleware will now let us through to /admin
                router.push('/admin');
                router.refresh();
            } else {
                setError(res.error || 'Invalid password');
            }
        } catch (err) {
            setError('An unexpected error occurred. Check the console.');
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-md">

                {/* Logo / Branding */}
                <div className="mb-10 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl mb-6">
                        <Lock className="w-8 h-8 text-brand-500" />
                    </div>
                    <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">
                        ROAR DATA Admin
                    </h1>
                    <p className="text-slate-400">
                        Enter the secure password to manage content
                    </p>
                </div>

                {/* Login Form */}
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
                    {/* Subtle top gradient line */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-600 via-brand-400 to-brand-600 opacity-50" />

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label
                                htmlFor="password"
                                className="text-sm font-medium text-slate-300"
                            >
                                Admin Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••••••"
                                className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 transition-all"
                                required
                            />
                        </div>

                        {error && (
                            <div className="p-3 rounded-lg bg-red-950/50 border border-red-900/50 text-red-500 text-sm">
                                {error}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-brand-500 hover:bg-brand-400 focus:ring-4 focus:ring-brand-500/20 text-slate-950 font-bold rounded-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isLoading ? (
                                <Loader className="w-5 h-5 animate-spin" />
                            ) : (
                                <>
                                    Authenticate
                                    <ArrowRight className="w-5 h-5" />
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
