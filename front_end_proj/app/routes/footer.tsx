// components/footer.tsx
import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-[#6F4B2B] bg-[#2D1B0A]">
      <div className="py-8 md:py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 px-5">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold text-[#DDD4D5]">Source Code</h3>
            <a href="#" className="text-[#B1A6A3] hover:text-[#DDD4D5]">
              Fron End
            </a>
            <a href="#" className="text-[#B1A6A3] hover:text-[#DDD4D5]">
              Back End
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold text-[#DDD4D5]">Technologies Used</h3>
            <a href="https://tsx.is/" className="text-[#B1A6A3] hover:text-[#DDD4D5]">
              Tsx
            </a>
            <a href="https://tailwindcss.com/" className="text-[#B1A6A3] hover:text-[#DDD4D5]">
              Tailwind CSS
            </a>
            <a href="https://lucide.dev/guide/packages/lucide-react" className="text-[#B1A6A3] hover:text-[#DDD4D5]">
              Lucide React 
            </a>
            <a href="https://reactrouter.com/" className="text-[#B1A6A3] hover:text-[#DDD4D5]">
            React Router
            </a>
            <a href="https://vite.dev/" className="text-[#B1A6A3] hover:text-[#DDD4D5]">
            Vite
            </a>
          </div>
          
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold text-[#DDD4D5]">Legal</h3>
            <a href="#" className="text-[#B1A6A3] hover:text-[#DDD4D5]">
              Privacy Policy
            </a>
            <a href="#" className="text-[#B1A6A3] hover:text-[#DDD4D5]">
              Terms of Service
            </a>
            <a href="#" className="text-[#B1A6A3] hover:text-[#DDD4D5]">
              Cookie Policy
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold text-[#DDD4D5]">Contact</h3>
            <a href="https://discordapp.com/users/860345134071676938" className="text-[#B1A6A3] hover:text-[#DDD4D5]">
              Discord
            </a>
            <a href="https://mail.google.com/mail/?view=cm&to=aleksysz069@gmail.com.com" className="text-[#B1A6A3] hover:text-[#DDD4D5]">
              E-mail
            </a>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-[#6F4B2B] pt-8 px-5 md:flex-row">
          <div className="flex items-center gap-2">
            {/* Footer Logo */}
            <div className="h-8 w-fit">
              <img src="/logo.svg" alt="Sourdough Tracker Logo" className="h-full w-full object-contain" />
            </div>
          </div>
          <p className="text-center text-sm text-[#B1A6A3]">
            © {new Date().getFullYear()} Sourdough Tracker - Not affiliated with Roblox or Breadwinner World.
          </p>
        </div>
      </div>
    </footer>
  );
}