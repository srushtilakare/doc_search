'use client'

import { useState } from 'react'
import { Mail, Lock, Eye, EyeOff } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate login
    setTimeout(() => {
      setIsLoading(false)
      // Redirect to home after login
      window.location.href = '/'
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent/20 mb-4">
            <span className="text-2xl">📄</span>
          </div>
          <h1 className="text-3xl font-bold mb-2">DocSearch</h1>
          <p className="text-muted-foreground">Sign in to your account</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              Email address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-secondary/30 border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-foreground mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full pl-10 pr-10 py-2.5 rounded-lg bg-secondary/30 border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Remember me */}
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded border-border bg-secondary/30" />
              <span className="text-sm text-muted-foreground">Remember me</span>
            </label>
            <Link href="/forgot-password" className="text-sm text-accent hover:text-accent/80 transition-colors">
              Forgot password?
            </Link>
          </div>

          {/* Submit */}
          <Button
            type="submit"
            disabled={isLoading || !email || !password}
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground disabled:opacity-50 disabled:cursor-not-allowed py-2.5 font-medium"
          >
            {isLoading ? 'Signing in...' : 'Sign in'}
          </Button>
        </form>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-background text-muted-foreground">Or continue with</span>
          </div>
        </div>

        {/* Social */}
        <div className="grid grid-cols-2 gap-3">
          <Button
            type="button"
            variant="outline"
            className="border-border bg-card hover:bg-secondary/50 text-foreground"
          >
            Google
          </Button>
          <Button
            type="button"
            variant="outline"
            className="border-border bg-card hover:bg-secondary/50 text-foreground"
          >
            GitHub
          </Button>
        </div>

        {/* Sign up link */}
        <p className="text-center text-sm text-muted-foreground mt-6">
          Don&apos;t have an account?{' '}
          <Link href="/signup" className="text-accent hover:text-accent/80 transition-colors font-medium">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}
