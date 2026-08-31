'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { SkyLinkLogo } from '@/components/ui/SkyLinkLogo';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Lock, Mail, Eye, EyeOff, ShieldCheck, ArrowRight } from 'lucide-react';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('admin@skylinkglobal.com');
  const [password, setPassword] = useState('••••••••••••');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // UI-only simulation
    setTimeout(() => {
      router.push('/admin/dashboard');
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#07192D] flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Subtle Background Logistics Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10 text-center space-y-3">
        <div className="flex justify-center">
          <SkyLinkLogo variant="light" size="lg" showTagline={true} />
        </div>
        <div className="pt-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-500/10 border border-sky-400/30 px-3 py-1 text-xs font-semibold text-sky-300">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            Operations &amp; Compliance Portal
          </span>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10 px-4">
        <div className="bg-white py-8 px-6 shadow-2xl rounded-2xl sm:px-10 border border-neutral-200">
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <h2 className="text-xl font-bold text-neutral-900">Sign In to Dashboard</h2>
              <p className="text-xs text-neutral-500 mt-0.5">
                Internal portal for trade leads, cargo tracking, and compliance.
              </p>
            </div>

            <Input
              label="Staff Email Address"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              leftIcon={<Mail className="w-4 h-4" />}
            />

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-semibold text-neutral-800">
                  Password
                </label>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-xs text-neutral-500 hover:text-neutral-800 flex items-center gap-1"
                >
                  {showPassword ? (
                    <>
                      <EyeOff className="w-3.5 h-3.5" />
                      <span>Hide</span>
                    </>
                  ) : (
                    <>
                      <Eye className="w-3.5 h-3.5" />
                      <span>Show</span>
                    </>
                  )}
                </button>
              </div>
              <div className="relative">
                <div className="absolute left-3 top-2.5 text-neutral-400 pointer-events-none">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-lg border border-neutral-300 bg-white pl-10 pr-3.5 py-2 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#0284C7]/20 focus:border-[#0284C7]"
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center gap-2 text-neutral-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="rounded border-neutral-300 text-[#0284C7] focus:ring-[#0284C7]"
                />
                <span>Remember this terminal</span>
              </label>
              <span className="text-[#0284C7] hover:underline cursor-pointer">
                Forgot password?
              </span>
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full justify-center shadow-md"
              isLoading={isLoading}
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Sign In to Terminal
            </Button>

            <div className="pt-2 text-center">
              <p className="text-xs text-neutral-400">
                Authorized Personnel Only • IP &amp; Session Monitored
              </p>
            </div>
          </form>
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/"
            className="text-xs font-semibold text-sky-300 hover:text-white transition-colors underline underline-offset-4"
          >
            &larr; Return to Public Website
          </Link>
        </div>
      </div>
    </div>
  );
}
