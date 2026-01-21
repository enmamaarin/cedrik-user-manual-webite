import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlayCircle, ChevronLeft, ChevronRight } from "lucide-react";
import cedrikLogo from "@/assets/cedrik-logo.png";
import Antigravity from "@/components/ui/Antigravity";

export default function CedrikManual() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const videos = [
    { title: "Getting Started", desc: "Core features and setup walkthrough" },
    { title: "Security Analysis", desc: "Threat detection and vulnerability scanning" },
    { title: "Advanced Features", desc: "Deep dive into AI-powered security tools" }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % videos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const getSlidePosition = (index: number) => {
    if (index === currentSlide) return "pos-active";
    if (index === (currentSlide + 1) % videos.length) return "pos-next";
    if (index === (currentSlide - 1 + videos.length) % videos.length) return "pos-prev";
    return "pos-hidden";
  };
  return (
    <div className="min-h-screen bg-[#07140f] text-white px-3 sm:px-5 lg:px-8 py-12 relative overflow-hidden">
      {/* Atmospheric background */}
      <div className="fixed inset-0 bg-gradient-to-b from-[#0d241a] via-[#07140f] to-[#050a08] pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,rgba(68,140,109,0.25),transparent_55%),radial-gradient(circle_at_25%_80%,rgba(18,72,56,0.35),transparent_45%)] pointer-events-none" />
      
      {/* Hero / Intro */}
      <section className="max-w-screen-2xl mx-auto mt-6 px-4 sm:px-8 lg:px-12 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center relative">
        {/* Antigravity Background */}
        <div className="absolute inset-0 z-0 opacity-60 pointer-events-none">
          <Antigravity
            particleCount={280}
            particleSize={0.45}
            magnetRadius={12}
            waveSpeed={0.65}
            waveAmplitude={0.55}
            color="#167429"
            className="w-full h-full"
          />
        </div>
        <div className="relative z-10 space-y-6">
          <p className="uppercase tracking-[0.4em] text-emerald-200/70 text-xs">
            Cedrik Manual
          </p>
          <div className="space-y-4 flex flex-col items-center lg:items-start">
            <div className="flex items-center gap-4">
              <img
                src={cedrikLogo}
                alt="Cedrik logo"
                className="h-16 w-16 sm:h-20 sm:w-20 object-contain drop-shadow-[0_0_18px_rgba(110,220,170,0.25)]"
              />
              <span className="text-4xl sm:text-5xl lg:text-6xl font-semibold bg-gradient-to-r from-emerald-200 via-emerald-100 to-slate-100 bg-clip-text text-transparent">
                CEDRIK
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-semibold text-white leading-[1.3] sm:leading-[1.28] lg:leading-[1.22] text-center lg:text-left">
              Cybersecurity Education through Responsive Integrated Knowledge
            </h1>
            <p className="text-emerald-100/80 text-lg max-w-xl">
              A structured, human-friendly guide to Cedrik's learning paths,
              defensive workflows, and hands-on exercises for teams and students.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-emerald-500/90 hover:bg-emerald-500 text-emerald-950 font-semibold px-6">
              Explore the Manual
            </Button>
            <Button className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6">
              View Modules
            </Button>
          </div>
        </div>

        <Card className="relative z-10 bg-white/5 backdrop-blur-xl border-white/10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/10 opacity-60" />
          <CardContent className="p-8 space-y-5 relative">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-emerald-100">
                What is Cedrik?
              </h2>
              <span className="text-xs uppercase tracking-[0.3em] text-emerald-200/60">
                Overview
              </span>
            </div>
            <p className="text-emerald-100/75 leading-relaxed">
              Cedrik is a cybersecurity-focused AI system designed to assist
              developers, analysts, and IT teams with secure coding practices,
              vulnerability analysis, and defensive strategies.
            </p>
            <div className="h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent" />
            <p className="text-slate-200/70 text-sm">
              This manual provides a structured walkthrough of Cedrik's core features,
              practical scenarios, and onboarding guidance.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Video Walkthroughs Carousel */}
      <section className="max-w-5xl mx-auto mt-24 relative pb-16">
        <h2 className="text-5xl sm:text-6xl font-black tracking-tight text-center mb-12">
          Take a Quick Look
        </h2>

        <div className="relative">
          {/* Carousel Container */}
          <div className="carousel-3d">
            {videos.map((item, i) => (
              <Card
                key={i}
                className={`carousel-card ${getSlidePosition(i)} bg-white/5 backdrop-blur-xl border-white/10 hover:border-emerald-400/50 transition-all duration-300 group overflow-hidden`}
              >
                <CardContent className="p-8 space-y-6">
                  <div className="aspect-video bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <PlayCircle className="w-20 h-20 text-white drop-shadow-lg relative z-10" />
                  </div>
                  <h3 className="font-bold text-2xl text-center text-white">{item.title}</h3>
                  <p className="text-slate-400 text-center">
                    {item.desc}
                  </p>
                  <Button className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 border-0 font-semibold">
                    Watch Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full p-3 hover:bg-white/20 transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full p-3 hover:bg-white/20 transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {videos.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === currentSlide 
                    ? "bg-gradient-to-r from-emerald-300 to-teal-300 w-8" 
                    : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Feature Guide */}
      <section className="max-w-4xl mx-auto mt-32 space-y-8 relative">
        <h2 className="text-4xl font-bold text-center mb-12">Core Capabilities</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { icon: "🛡️", title: "Secure Coding", desc: "Real-time guidance and best practices" },
            { icon: "🔍", title: "Threat Analysis", desc: "Advanced threat modeling and detection" },
            { icon: "🎯", title: "Attack Surface", desc: "Comprehensive vulnerability mapping" },
            { icon: "🏗️", title: "Architecture", desc: "Defensive system design recommendations" }
          ].map((feature, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-emerald-400/50 transition-all duration-300 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-slate-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto mt-24 text-center text-slate-500 text-sm relative">
        © {new Date().getFullYear()} Cedrik Systems · Cybersecurity AI
      </footer>
    </div>
  );
}
