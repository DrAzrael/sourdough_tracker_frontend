import { useRef, useState } from 'react';
import { BarChart3, Users, ArrowRight, Wheat } from "lucide-react"
import { Button } from "@/components/ui/button"
import Footer from "~/routes/footer"

export default function Login() {
  return (
    <>
      <div className="flex min-h-screen w-full flex-col bg-[#2D1B0A] text-[#DDD4D5]">
        {/* Top Bar */}
        <header className="sticky top-0 z-40 w-full border-b border-[#6F4B2B] bg-[#3E250F]">
          <div className="flex h-16 items-center justify-between px-5 w-full">
            <div className="flex items-center">
              {/* Logo Image Placeholder */}
              <div className="h-12">
                <img src="/logo.svg" alt="Sourdough Tracker Logo" className="h-full w-full object-contain" />
              </div>
            </div>
          </div>
        </header>

        {/* Main Content - Login Box */}
        <main className="flex h-[calc(100vh-4rem)] items-center justify-center p-4">
          <div className="w-full max-w-md p-8 rounded-lg bg-[#3E250F] border border-[#6F4B2B]">
            <div className="flex justify-center mb-6">
              <Wheat className="h-12 w-12 text-[#DDD4D5]" />
            </div>
            <h1 className="text-2xl font-bold text-center mb-6">Welcome Back</h1>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full px-3 py-2 bg-[#2D1B0A] border border-[#6F4B2B] rounded-md focus:outline-none focus:ring-1 focus:ring-[#DDD4D5]"
                  placeholder="your@email.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium mb-1">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  className="w-full px-3 py-2 bg-[#2D1B0A] border border-[#6F4B2B] rounded-md focus:outline-none focus:ring-1 focus:ring-[#DDD4D5]"
                  placeholder="••••••••"
                  required
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-[#6F4B2B] focus:ring-[#DDD4D5] border-[#6F4B2B] rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm">
                    Remember me
                  </label>
                </div>
                
                <a href="#" className="text-sm text-[#B1A6A3] hover:text-[#DDD4D5]">
                  Forgot password?
                </a>
              </div>
              
              <Button
                type="submit"
                className="w-full bg-[#E99B31] text-[#2D1B0A] hover:bg-[#B97413]"
              >
                Sign in
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
            
            <div className="mt-6 text-center text-sm">
              <span className="text-[#B1A6A3]">Don't have an account? </span>
              <a href="/register" className="font-medium text-[#DDD4D5] hover:text-[#B1A6A3]">
                Sign up
              </a>
            </div>
          </div>
        </main>

        {/* Footer */}
        <Footer></Footer>
      </div>
    </>
  );
}