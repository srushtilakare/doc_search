'use client'

import { useState } from 'react'
import { Mail, Lock, User, Eye, EyeOff } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert('Passwords do not match')
      return
    }
    setIsLoading(true)
    // Simulate signup
    setTimeout(() => {
      setIsLoading(false)
      // Redirect to home after signup
      window.location.href = '/'
    }, 1000)
  }

  const isFormValid = name && email && password && confirmPassword && password === confirmPassword

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent/20 mb-4">
            <span className="text-2xl">📄</span>
          </div>
          <h1 className="text-3xl font-bold mb-2">DocSearch</h1>
          <p className="text-muted-foreground">Create your account</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
              Full name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-secondary/30 border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
                required
              />
            </div>
          </div>

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
                placeholder="Create a strong password"
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

          {/* Confirm Password */}
          <div>
            <label htmlFor="confirm" className="block text-sm font-medium text-foreground mb-2">
              Confirm password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                id="confirm"
                type={showConfirm ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
                className="w-full pl-10 pr-10 py-2.5 rounded-lg bg-secondary/30 border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {showConfirm ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Terms */}
          <label className="flex items-start gap-2 cursor-pointer">
            <input type="checkbox" className="w-4 h-4 rounded border-border bg-secondary/30 mt-0.5" required />
            <span className="text-sm text-muted-foreground">
              I agree to the{' '}
              <Link href="/terms" className="text-accent hover:text-accent/80 transition-colors">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link href="/privacy" className="text-accent hover:text-accent/80 transition-colors">
                Privacy Policy
              </Link>
            </span>
          </label>

          {/* Submit */}
          <Button
            type="submit"
            disabled={isLoading || !isFormValid}
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground disabled:opacity-50 disabled:cursor-not-allowed py-2.5 font-medium"
          >
            {isLoading ? 'Creating account...' : 'Create account'}
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

        {/* Login link */}
        <p className="text-center text-sm text-muted-foreground mt-6">
          Already have an account?{' '}
          <Link href="/login" className="text-accent hover:text-accent/80 transition-colors font-medium">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}
