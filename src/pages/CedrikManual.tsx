import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlayCircle, ChevronLeft, ChevronRight } from "lucide-react";

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
  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      {/* Animated background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 pointer-events-none" />
      
      {/* Header */}
      <header className="max-w-5xl mx-auto text-center space-y-6 relative">
        <div className="inline-block">
          <h1 className="text-7xl font-black tracking-tighter bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            CEDRIK
          </h1>
          <div className="h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full mt-2" />
        </div>
        <p className="text-slate-400 text-xl font-light">
          Next-Gen Cybersecurity AI Platform
        </p>
      </header>

      {/* Intro */}
      <section className="max-w-4xl mx-auto mt-20 relative">
        <Card className="bg-white/5 backdrop-blur-xl border-white/10 overflow-hidden group hover:bg-white/10 transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          <CardContent className="p-8 space-y-4 relative">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              What is Cedrik?
            </h2>
            <p className="text-slate-300 leading-relaxed text-lg">
              Cedrik is a cybersecurity-focused AI system designed to assist
              developers, analysts, and IT teams with secure coding practices,
              vulnerability analysis, and defensive strategies. This manual
              provides a structured walkthrough of Cedrik's core features.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Video Walkthroughs Carousel */}
      <section className="max-w-5xl mx-auto mt-24 relative">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Interactive Walkthroughs
        </h2>

        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {videos.map((item, i) => (
                <div key={i} className="w-full flex-shrink-0 px-4">
                  <Card className="bg-white/5 backdrop-blur-xl border-white/10 hover:border-purple-500/50 transition-all duration-300 group overflow-hidden mx-auto max-w-2xl">
                    <CardContent className="p-8 space-y-6">
                      <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <PlayCircle className="w-20 h-20 text-white drop-shadow-lg relative z-10" />
                      </div>
                      <h3 className="font-bold text-2xl text-center text-white">{item.title}</h3>
                      <p className="text-slate-400 text-center">
                        {item.desc}
                      </p>
                      <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 border-0 font-semibold">
                        Watch Now
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
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
                    ? "bg-gradient-to-r from-cyan-400 to-purple-400 w-8" 
                    : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Feature Guide */}
      <section className="max-w-4xl mx-auto mt-24 space-y-8 relative">
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
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 group"
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