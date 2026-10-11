"use client";

import Link from 'next/link';

export default function LandingPage() {

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-0 sm:p-4 font-sans">
      {/* Container simulating mobile device frame */}
      <div className="relative w-full max-w-[430px] h-[932px] max-h-screen sm:max-h-[90vh] bg-[#0A0A0A] rounded-none sm:rounded-[48px] overflow-hidden flex flex-col justify-between shadow-2xl border-0 sm:border border-neutral-800">
      
      
        {/* Background Geometric Grid & Watermark Logo */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-25 overflow-hidden">
          {/* Grid lines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]"></div>
          
          {/* Large Abstract Geometric Watermark Logo in top-right area */}
          <div className="absolute right-[-40px] top-16 w-[400px] h-[400px] rounded-[48px] border-[36px] border-neutral-700/30 rotate-12 flex items-center justify-center blur-[0.5px]">
            <div className="w-56 h-56 border-[24px] border-neutral-600/20 rounded-3xl"></div>
          </div>
        </div>

        {/* Top Header with Logo and Brand Name */}
        <div className="relative z-10 px-6 pt-4 flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-white text-black flex items-center justify-center font-bold shadow-md">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
          <span className="font-semibold text-lg tracking-tight text-white/90">SecureVault</span>
        </div>

        {/* Main Content / Headings */}
        <div className="relative z-10 px-6 my-auto space-y-4 text-left">
          <h1 className="text-4xl sm:text-[42px] font-semibold tracking-tight leading-[1.08] text-white">
            Your <br />
            Passwords, <br />
            Safely Secured
          </h1>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed max-w-sm">
            Store, manage, and protect all your passwords in one secure vault. Built with cutting-edge encryption and trusted privacy technology, your digital life stays safe always.
          </p>
        </div>

        {/* Bottom CTA Area */}
        <div className="relative z-10 px-6 pb-12 pt-4 flex flex-col gap-3">
          <Link
            href="/register"
            className="w-full py-4 rounded-full bg-white hover:bg-neutral-200 text-black text-center font-semibold transition-all shadow-lg active:scale-[0.99] text-base cursor-pointer"
          >
            Get Started
          </Link>
          
          <Link
            href="/login"
            className="w-full py-2.5 rounded-full bg-transparent hover:bg-neutral-900/60 text-neutral-400 hover:text-neutral-200 text-center font-medium transition-colors text-sm cursor-pointer"
          >
            Sign in to existing vault
          </Link>
        </div>

      </div>
    </div>
  );
}