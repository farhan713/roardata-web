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
        <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-md">

                {/* Logo / Branding */}
                <div className="mb-10 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-secondary border border-border shadow-xl mb-6">
                        <Lock className="w-8 h-8 text-primary" />
                    </div>
                    <h1 className="text-3xl font-bold text-black mb-2 tracking-tight">
                        ROAR DATA Admin
                    </h1>
                    <p className="text-black/70">
                        Enter the secure password to manage content
                    </p>
                </div>

                {/* Login Form */}
                <div className="bg-secondary border border-border rounded-2xl p-8 shadow-2xl relative overflow-hidden">
                    {/* Subtle top gradient line */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-primary/50 to-primary opacity-50" />

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label
                                htmlFor="password"
                                className="text-sm font-medium text-black"
                            >
                                Admin Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••••••"
                                className="w-full px-4 py-3 bg-white border border-border rounded-xl text-black placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                                required
                            />
                        </div>

                        {error && (
                            <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-sm font-semibold">
                                {error}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-primary hover:bg-primary/90 focus:ring-4 focus:ring-primary/20 text-white font-bold rounded-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed"
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
