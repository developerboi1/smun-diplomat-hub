import React from 'react';
import { useToast } from '@/hooks/use-toast';

const DelegateInfo = () => {
  const { toast } = useToast();

  const handleRegisterNow = () => {
    toast({
      title: "Registration Opening Soon!",
      description: "Registration will open on 1st June 2025. We'll notify you when it's available.",
    });
  };

  const handleDownloadBrochure = () => {
    toast({
      title: "Downloading Brochure",
      description: "The conference brochure will be available for download soon.",
    });
  };

  const handleWhatsIncluded = () => {
    const element = document.getElementById('whats-included');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section 
      className="relative flex h-auto min-h-screen w-full flex-col bg-[#0D0F2B] justify-between overflow-x-hidden"
      style={{ fontFamily: 'Newsreader, "Noto Sans", sans-serif' }}
    >
      <div>
        {/* Header */}
        <div className="flex items-center p-4 pb-2 justify-between sticky top-0 bg-[#0D0F2B]/80 backdrop-blur-sm z-10">
          <div className="text-white flex size-10 shrink-0 items-center justify-center rounded-full bg-white/10">
            <svg fill="currentColor" height="24px" viewBox="0 0 256 256" width="24px" xmlns="http://www.w3.org/2000/svg">
              <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
            </svg>
          </div>
          <h2 className="text-white text-xl font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-10" style={{ fontFamily: '"Newsreader", serif' }}>
            Delegate Information
          </h2>
        </div>

        {/* Hero Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F2B] via-transparent to-transparent"></div>
          <div 
            className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat items-center justify-end p-6 text-center"
            style={{
              backgroundImage: `linear-gradient(rgba(13, 15, 43, 0.4) 0%, rgba(13, 15, 43, 1) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDRzhW1dF5uRpAQscp8XpPYN72Q0yghk5wh8qrPVw1QyoSBjkFWR5aqQXrxNxmf7lFYpUq9ylcTegA0Hnq6lBsR5GPl38BlQBU-YLYi9E-hmtZ0rYyKfbDME45gwSUwjEoG3b8v_2JZDYO_Ze5JNyo84j8gMJqOxhHZ6ZBmH3t6jSr5Nm5hYySUDYyEyKJZ0YxVd0u3I2BAxmpaIHnf11HFreGjLB8PwX8YV1Ysf4o6orR-P_E25zkxIZRlb95avABAPzVFHq-JTJs")`
            }}
          >
            <div className="flex flex-col gap-2">
              <h1 className="text-white text-5xl font-extrabold leading-tight tracking-tighter" style={{ fontFamily: '"Newsreader", serif' }}>
                Delegate Information
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-[#FFB300] to-[#FFC300] mx-auto mt-2"></div>
              <p className="text-white/80 text-base font-normal leading-normal mt-4 max-w-md mx-auto">
                Your comprehensive guide to participating in the most prestigious Model United Nations conference in Gujarat.
              </p>
            </div>
          </div>
        </div>

        {/* Registration Process */}
        <div className="px-4 py-8">
          <h2 className="text-white text-3xl font-bold leading-tight tracking-tight px-4 pb-6" style={{ fontFamily: '"Newsreader", serif' }}>
            Registration Process
          </h2>
          <div className="grid grid-cols-[auto_1fr] gap-x-4 px-4">
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center justify-center size-10 rounded-full border-2 border-[#FFB300] text-[#FFB300] font-bold" style={{ fontFamily: '"Newsreader", serif' }}>
                1
              </div>
              <div className="w-px bg-[#FFB300]/30 grow"></div>
            </div>
            <div className="flex flex-1 flex-col pb-8">
              <h3 className="text-white text-xl font-bold leading-normal" style={{ fontFamily: '"Newsreader", serif' }}>
                Step 1: Registration
              </h3>
              <p className="text-white/70 text-base font-normal leading-normal">
                Complete the online registration form with your details.
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center justify-center size-10 rounded-full border-2 border-[#FFB300] text-[#FFB300] font-bold" style={{ fontFamily: '"Newsreader", serif' }}>
                2
              </div>
              <div className="w-px bg-[#FFB300]/30 grow"></div>
            </div>
            <div className="flex flex-1 flex-col pb-8">
              <h3 className="text-white text-xl font-bold leading-normal" style={{ fontFamily: '"Newsreader", serif' }}>
                Step 2: Payment
              </h3>
              <p className="text-white/70 text-base font-normal leading-normal">
                Pay the registration fee of ₹2,500 via the provided methods.
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center justify-center size-10 rounded-full border-2 border-[#FFB300] text-[#FFB300] font-bold" style={{ fontFamily: '"Newsreader", serif' }}>
                3
              </div>
            </div>
            <div className="flex flex-1 flex-col pb-8">
              <h3 className="text-white text-xl font-bold leading-normal" style={{ fontFamily: '"Newsreader", serif' }}>
                Step 3: Confirmation
              </h3>
              <p className="text-white/70 text-base font-normal leading-normal">
                Receive your confirmation email and delegate package.
              </p>
            </div>
          </div>
        </div>

        {/* What's Included */}
        <div id="whats-included" className="px-4 py-8 bg-[#1A1D4F]/30">
          <h2 className="text-white text-3xl font-bold leading-tight tracking-tight px-4 pb-6" style={{ fontFamily: '"Newsreader", serif' }}>
            What's Included
          </h2>
          <div className="grid grid-cols-2 gap-4 px-4">
            <div className="flex flex-col items-center text-center gap-3 p-4 rounded-lg bg-white/5">
              <span className="material-symbols-outlined text-[#FFB300] text-4xl">description</span>
              <p className="text-white text-sm font-medium leading-normal">Conference Materials</p>
            </div>
            <div className="flex flex-col items-center text-center gap-3 p-4 rounded-lg bg-white/5">
              <span className="material-symbols-outlined text-[#FFB300] text-4xl">card_giftcard</span>
              <p className="text-white text-sm font-medium leading-normal">Welcome Kit</p>
            </div>
            <div className="flex flex-col items-center text-center gap-3 p-4 rounded-lg bg-white/5">
              <span className="material-symbols-outlined text-[#FFB300] text-4xl">restaurant</span>
              <p className="text-white text-sm font-medium leading-normal">Lunch & High Tea</p>
            </div>
            <div className="flex flex-col items-center text-center gap-3 p-4 rounded-lg bg-white/5">
              <span className="material-symbols-outlined text-[#FFB300] text-4xl">workspace_premium</span>
              <p className="text-white text-sm font-medium leading-normal">Certificate</p>
            </div>
            <div className="flex flex-col items-center text-center gap-3 p-4 rounded-lg bg-white/5">
              <span className="material-symbols-outlined text-[#FFB300] text-4xl">groups</span>
              <p className="text-white text-sm font-medium leading-normal">Networking</p>
            </div>
            <div className="flex flex-col items-center text-center gap-3 p-4 rounded-lg bg-white/5">
              <span className="material-symbols-outlined text-[#FFB300] text-4xl">photo_camera</span>
              <p className="text-white text-sm font-medium leading-normal">Photography</p>
            </div>
            <div className="flex flex-col items-center text-center gap-3 p-4 rounded-lg bg-white/5 col-span-2">
              <span className="material-symbols-outlined text-[#FFB300] text-4xl">emoji_events</span>
              <p className="text-white text-sm font-medium leading-normal">Awards Ceremony</p>
            </div>
          </div>
        </div>

        {/* Key Information */}
        <div className="px-4 py-8">
          <h2 className="text-white text-3xl font-bold leading-tight tracking-tight px-4 pb-6" style={{ fontFamily: '"Newsreader", serif' }}>
            Key Information
          </h2>
          <div className="space-y-4 px-4">
            <div 
              className="rounded-xl p-6 shadow-lg hover:shadow-[#FFB300]/20 transition-shadow duration-300"
              style={{
                background: "rgba(26, 29, 79, 0.5)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 179, 0, 0.2)"
              }}
            >
              <h3 className="text-white text-2xl font-bold" style={{ fontFamily: '"Newsreader", serif' }}>
                Registration Fee
              </h3>
              <p className="text-[#FFB300] text-xl font-bold mt-1">
                ₹2,500 <span className="text-white/60 font-normal text-sm">per delegate</span>
              </p>
              <button 
                className="mt-4 text-sm font-bold text-white bg-white/10 py-2 px-4 rounded-lg hover:bg-white/20 transition-colors"
                onClick={handleWhatsIncluded}
              >
                What's Included
              </button>
            </div>
            <div 
              className="rounded-xl p-6 shadow-lg hover:shadow-[#FFB300]/20 transition-shadow duration-300"
              style={{
                background: "rgba(26, 29, 79, 0.5)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 179, 0, 0.2)"
              }}
            >
              <h3 className="text-white text-2xl font-bold" style={{ fontFamily: '"Newsreader", serif' }}>
                Early Bird Discount
              </h3>
              <p className="text-white/80 mt-1">
                10% off for registrations before <span className="text-[#FFB300]">15th July 2025</span>
              </p>
            </div>
            <div 
              className="rounded-xl p-6 shadow-lg hover:shadow-[#FFB300]/20 transition-shadow duration-300"
              style={{
                background: "rgba(26, 29, 79, 0.5)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 179, 0, 0.2)"
              }}
            >
              <h3 className="text-white text-2xl font-bold" style={{ fontFamily: '"Newsreader", serif' }}>
                Group Discounts
              </h3>
              <p className="text-white/80 mt-1">Available for groups of 5 or more delegates.</p>
            </div>
            <div 
              className="rounded-xl p-6 shadow-lg hover:shadow-[#FFB300]/20 transition-shadow duration-300"
              style={{
                background: "rgba(26, 29, 79, 0.5)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 179, 0, 0.2)"
              }}
            >
              <h3 className="text-white text-2xl font-bold" style={{ fontFamily: '"Newsreader", serif' }}>
                Payment Methods
              </h3>
              <p className="text-white/80 mt-1">Online payment via Credit/Debit Card or UPI.</p>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center gap-6 px-8 py-10">
          <button 
            className="w-full flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 text-[#1A1D4F] text-base font-bold leading-normal tracking-wide shadow-lg shadow-[#FFB300]/30 hover:shadow-xl hover:shadow-[#FFB300]/40 transition-shadow"
            style={{ backgroundImage: "linear-gradient(to right, #FFB300, #FFC300)" }}
            onClick={handleRegisterNow}
          >
            <span className="truncate">Register Now</span>
          </button>
          <button 
            className="w-full flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-transparent border-2 border-[#FFB300]/50 text-white text-base font-bold leading-normal tracking-wide hover:border-[#FFB300] transition-colors"
            onClick={handleDownloadBrochure}
          >
            <span className="truncate">Download Brochure</span>
          </button>
        </div>

        {/* Important Dates */}
        <div className="px-4 py-8">
          <h2 className="text-white text-3xl font-bold leading-tight tracking-tight px-4 pb-6" style={{ fontFamily: '"Newsreader", serif' }}>
            Important Dates
          </h2>
          <div className="relative px-4">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#FFB300]/20"></div>
            <div className="relative pl-10 mb-8">
              <div className="absolute left-0 top-1.5 flex items-center justify-center size-5 rounded-full bg-[#FFB300] ring-4 ring-[#0D0F2B]"></div>
              <p className="text-white text-lg font-medium leading-normal">Registration Opens</p>
              <p className="text-white/60 text-base font-normal leading-normal">1st June 2025</p>
            </div>
            <div className="relative pl-10 mb-8">
              <div className="absolute left-0 top-1.5 flex items-center justify-center size-5 rounded-full bg-[#FFB300] ring-4 ring-[#0D0F2B]"></div>
              <p className="text-white text-lg font-medium leading-normal">Early Bird Deadline</p>
              <p className="text-white/60 text-base font-normal leading-normal">15th July 2025</p>
            </div>
            <div className="relative pl-10 mb-8">
              <div className="absolute left-0 top-1.5 flex items-center justify-center size-5 rounded-full bg-[#FFB300] ring-4 ring-[#0D0F2B]"></div>
              <p className="text-white text-lg font-medium leading-normal">Regular Registration Ends</p>
              <p className="text-white/60 text-base font-normal leading-normal">31st August 2025</p>
            </div>
            <div className="relative pl-10 mb-8">
              <div className="absolute left-0 top-1.5 flex items-center justify-center size-5 rounded-full bg-[#FFB300] ring-4 ring-[#0D0F2B]"></div>
              <p className="text-white text-lg font-medium leading-normal">Study Guide Release</p>
              <p className="text-white/60 text-base font-normal leading-normal">15th September 2025</p>
            </div>
            <div className="relative pl-10">
              <div className="absolute left-0 top-1.5 flex items-center justify-center size-5 rounded-full bg-[#FFB300] ring-4 ring-[#0D0F2B]"></div>
              <p className="text-white text-lg font-medium leading-normal">Conference Dates</p>
              <p className="text-white/60 text-base font-normal leading-normal">4-5 October 2025</p>
            </div>
          </div>
        </div>

        {/* Conference Guidelines & Contact */}
        <div className="px-8 py-8 space-y-6">
          <div>
            <h2 className="text-white text-3xl font-bold leading-tight tracking-tight pb-3" style={{ fontFamily: '"Newsreader", serif' }}>
              Conference Guidelines
            </h2>
            <div className="space-y-2 text-white/80 text-base">
              <p><span className="font-bold text-white">Dress Code:</span> Formal business attire is required.</p>
              <p><span className="font-bold text-white">Conduct:</span> Maintain a professional and respectful demeanor.</p>
              <p><span className="font-bold text-white">Expectations:</span> Active participation and adherence to rules are essential.</p>
            </div>
          </div>
          <div>
            <h2 className="text-white text-3xl font-bold leading-tight tracking-tight pb-3" style={{ fontFamily: '"Newsreader", serif' }}>
              Contact for Queries
            </h2>
            <div className="space-y-2 text-white/80 text-base">
              <p>Email: <a className="text-[#FFB300] hover:underline" href="mailto:info@gujaratmun.org">info@gujaratmun.org</a></p>
              <p>Phone: <a className="text-[#FFB300] hover:underline" href="tel:+919876543210">+91 98765 43210</a></p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="sticky bottom-0">
        <div className="h-5 bg-gradient-to-t from-[#0D0F2B] to-transparent"></div>
        <div className="flex gap-2 border-t border-white/10 bg-[#0D0F2B] px-4 pb-3 pt-2">
          <a className="flex flex-1 flex-col items-center justify-end gap-1 text-white/50" href="#">
            <span className="material-symbols-outlined">home</span>
            <p className="text-xs font-medium tracking-wide">Home</p>
          </a>
          <a className="flex flex-1 flex-col items-center justify-end gap-1 text-white/50" href="#">
            <span className="material-symbols-outlined">info</span>
            <p className="text-xs font-medium tracking-wide">About</p>
          </a>
          <a className="flex flex-1 flex-col items-center justify-end gap-1 text-white/50" href="#">
            <span className="material-symbols-outlined">groups</span>
            <p className="text-xs font-medium tracking-wide">Committees</p>
          </a>
          <a className="flex flex-1 flex-col items-center justify-end gap-1 text-[#FFB300]" href="#">
            <span className="material-symbols-outlined">person</span>
            <p className="text-xs font-bold tracking-wide">Delegate</p>
          </a>
          <a className="flex flex-1 flex-col items-center justify-end gap-1 text-white/50" href="#">
            <span className="material-symbols-outlined">location_on</span>
            <p className="text-xs font-medium tracking-wide">Venue</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default DelegateInfo;