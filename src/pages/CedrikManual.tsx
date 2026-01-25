import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlayCircle, ChevronLeft, ChevronRight, Youtube } from "lucide-react";
import cedrikLogo from "@/assets/cedrik-logo.png";
import auspiciaLogo from "@/assets/Auspicia.png.jpg";
import performanceImage from "@/assets/Performance.png";
import gettingStartedThumb from "@/assets/Thumbnail GS.png";
import adminDashboardThumb from "@/assets/Thumbnail Admin.png";
import discoverCedrikThumb from "@/assets/Thumbnail Cedrik.png";
import Antigravity from "@/components/ui/Antigravity";
import SplitText from "@/components/ui/SplitText";

export default function CedrikManual() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [heroAnimKey, setHeroAnimKey] = useState(0);
  const [overviewAnimKey, setOverviewAnimKey] = useState(0);
  const [performanceAnimKey, setPerformanceAnimKey] = useState(0);
  const [capabilitiesAnimKey, setCapabilitiesAnimKey] = useState(0);

  useEffect(() => {
    // Check if desktop (screen width >= 1280px)
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1280);
    };

    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  const videos = [
    {
      title: "Getting Started",
      desc: "A quick, engaging walkthrough showing how to create your account, log in seamlessly, and explore the core features of CEDRIK in minutes.",
      thumbnail: gettingStartedThumb,
      youtubeUrl: "https://youtu.be/RcacgDBXpb8",
    },
    {
      title: "Admin Dashboard Overview",
      desc: "A focused overview of the admin dashboard, showcasing essential tools for managing users efficiently.",
      thumbnail: adminDashboardThumb,
      youtubeUrl: "https://youtu.be/lgbkcKbmvLQ",
    },
    {
      title: "Discover CEDRIK Labs",
      desc: "Explore six interactive scenarios designed to build cybersecurity awareness and practical skills through guided, hands-on learning experiences.",
      thumbnail: discoverCedrikThumb,
      youtubeUrl: "https://youtu.be/PGiZDxH50rY",
    }
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

  const replaySection = (label: string) => {
    switch (label) {
      case "Home":
        setHeroAnimKey((prev) => prev + 1);
        break;
      case "Overview":
        setOverviewAnimKey((prev) => prev + 1);
        break;
      case "CEDRIK Walkthrough":
        setOverviewAnimKey((prev) => prev + 1);
        break;
      case "Performance Analysis":
        setPerformanceAnimKey((prev) => prev + 1);
        break;
      case "Capabilities":
        setCapabilitiesAnimKey((prev) => prev + 1);
        break;
      default:
        break;
    }
  };
  return (
    <div id="home" className="min-h-screen bg-[#0b0714] text-white px-3 sm:px-5 lg:px-8 py-12 relative overflow-hidden">
      {/* Atmospheric background */}
      <div className="fixed inset-0 bg-gradient-to-b from-[#1b0b2e] via-[#0b0714] to-[#050308] pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,rgba(106,13,173,0.28),transparent_55%),radial-gradient(circle_at_25%_80%,rgba(40,10,70,0.45),transparent_45%)] pointer-events-none" />

      {/* Single Fixed Antigravity Background - Desktop Only */}
      {isDesktop && (
        <div className="fixed inset-0 z-0 opacity-40 pointer-events-none">
          <Antigravity
            particleCount={80}
            particleSize={0.24}
            magnetRadius={4}
            waveSpeed={0.12}
            waveAmplitude={0.16}
            color="#6a0dad"
            className="w-full h-full"
          />
        </div>
      )}

      {/* Top Right Navbar */}
      <nav
        aria-label="Section navigation"
        className="fixed top-4 right-4 z-40"
      >
        <div className="flex items-center gap-2 bg-black/40 border border-white/10 backdrop-blur-xl rounded-full px-3 py-2 shadow-[0_12px_30px_rgba(0,0,0,0.35)]">
          <button
            type="button"
            className="md:hidden px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] text-white/80 rounded-full border border-white/10 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300/60"
            aria-expanded={isNavOpen}
            aria-controls="cedrik-nav-menu"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            Menu
          </button>
          <div className="hidden md:flex items-center gap-2">
            {[
              { label: "Home", href: "#home" },
              { label: "CEDRIK Walkthrough", href: "#overview" },
              { label: "Performance Analysis", href: "#performance" },
              { label: "Capabilities", href: "#capabilities" },
            ].map((item) => (
              <div key={item.label} className="group">
                <a
                  href={item.href}
                  className="relative block px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] text-white/80 rounded-full border border-transparent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300/60 hover:text-white hover:bg-white/10"
                  onClick={() => replaySection(item.label)}
                >
                  <span className="relative z-10">{item.label}</span>
                </a>
              </div>
            ))}
          </div>
        </div>
        <div
          id="cedrik-nav-menu"
          className={`md:hidden mt-2 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-xl shadow-[0_18px_40px_rgba(0,0,0,0.4)] overflow-hidden ${isNavOpen ? "block" : "hidden"}`}
        >
          {[
            { label: "Home", href: "#home" },
            { label: "CEDRIK Walkthrough", href: "#overview" },
            { label: "Performance Analysis", href: "#performance" },
            { label: "Capabilities", href: "#capabilities" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block px-4 py-3 text-xs uppercase tracking-[0.22em] text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              onClick={() => {
                replaySection(item.label);
                setIsNavOpen(false);
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Hero / Intro */}
      <section className="relative mt-6">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 lg:px-12 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center relative z-10">
        <div className="relative z-10 space-y-6">
          <p className="uppercase tracking-[0.4em] text-purple-200/70 text-xs">
            Cedrik Manual
          </p>
          <div className="space-y-4 flex flex-col items-center lg:items-start">
            <div className="flex items-center gap-4">
              <img
                src={cedrikLogo}
                alt="Cedrik logo"
                className="h-16 w-16 sm:h-20 sm:w-20 object-contain drop-shadow-[0_0_18px_rgba(145,70,220,0.3)]"
              />
              <span className="text-4xl sm:text-5xl lg:text-6xl font-semibold bg-gradient-to-r from-purple-200 via-purple-100 to-slate-100 bg-clip-text text-transparent">
                CEDRIK
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-semibold text-white leading-[1.3] sm:leading-[1.28] lg:leading-[1.22] text-center lg:text-left">
              <SplitText
                key={heroAnimKey}
                text="Cybersecurity Education through Responsive Integrated Knowledge"
              />
            </h1>
            <p className="text-purple-100/80 text-lg max-w-xl text-justify">
              An AI-powered learning experience that transforms cybersecurity education through guided pathways, real-world defense workflows, and hands-on lab environments.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button
              className="bg-purple-600/90 hover:bg-purple-600 text-purple-50 font-semibold px-6"
              onClick={() => {
                window.location.href = "https://139.162.47.27/";
              }}
            >
              Try CEDRIK Now
            </Button>
            <Button
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6"
              onClick={() => {
                document.getElementById("overview")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View Walkthrough
            </Button>
          </div>
        </div>

        <Card className="relative z-10 bg-white/5 backdrop-blur-xl border-white/10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-purple-800/10 opacity-60" />
          <CardContent className="p-8 space-y-5 relative">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-purple-100">
                What is Cedrik?
              </h2>
              <span className="text-xs uppercase tracking-[0.3em] text-purple-200/60">
                Overview
              </span>
            </div>
            <p className="text-purple-100/75 leading-relaxed text-justify">
              CEDRIK: Cybersecurity Education through Responsive Integrated Knowledge is a capstone project designed to address the gaps in traditional cybersecurity education. The project proposes the development of a prototype platform that integrates Artificial Intelligence (AI) and sandbox-based learning environments for more adaptive, practical, and secure cybersecurity education.
            </p>
            <div className="h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent" />
            <p className="text-slate-200/70 text-sm">
              This manual provides a structured walkthrough of Cedrik's core features,
              scenarios, and setup guide.
            </p>
          </CardContent>
        </Card>
        </div>
      </section>

      {/* Video Walkthroughs Carousel */}
      <section id="overview" className="overview-section max-w-5xl mx-auto mt-16 relative pb-28 scroll-mt-24 z-10">
        <h2 className="text-5xl sm:text-6xl font-black tracking-tight text-center mb-12">
          {overviewAnimKey > 0 ? (
            <SplitText key={overviewAnimKey} text="CEDRIK Walkthrough" />
          ) : (
            "CEDRIK Walkthrough"
          )}
        </h2>
          <p className="text-purple-100/70 text-center max-w-2xl mx-auto -mt-6 mb-10">
            {overviewAnimKey > 0 ? (
              <SplitText
                key={overviewAnimKey + 1}
                text="Walkthroughs highlighting key flows and hands-on guidance across the platform."
              />
            ) : (
              "Walkthroughs highlighting key flows and hands-on guidance across the platform."
            )}
          </p>

          <div className="relative">
            {/* Carousel Container */}
            <div className="carousel-3d">
              {videos.map((item, i) => (
                <Card
                  key={i}
                  className={`carousel-card ${getSlidePosition(i)} bg-white/5 backdrop-blur-xl border-white/10 hover:border-purple-400/50 transition-all duration-300 group overflow-hidden`}
                >
                  <CardContent className="p-8 space-y-6">
                    <div className="aspect-video bg-gradient-to-br from-purple-600/20 to-purple-800/20 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300 relative overflow-hidden">
                      {item.thumbnail && (
                        <img
                          src={item.thumbnail}
                          alt={`${item.title} preview`}
                          className="absolute inset-0 w-full h-full object-cover scale-105 opacity-60"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <button
                        type="button"
                        className="relative z-10"
                        onClick={() => {
                          if (item.youtubeUrl) {
                            window.open(item.youtubeUrl, "_blank", "noopener,noreferrer");
                          }
                        }}
                        aria-label={`Play ${item.title} on YouTube`}
                      >
                        <PlayCircle className="w-20 h-20 text-white drop-shadow-lg transition-transform duration-200 group-hover:scale-105" />
                      </button>
                    </div>
                    <h3 className="font-bold text-2xl text-center text-white">{item.title}</h3>
                    <p className="text-slate-400 text-center">
                      {item.desc}
                    </p>
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
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${i === currentSlide
                      ? "bg-gradient-to-r from-purple-300 to-purple-400 w-8"
                      : "bg-white/30 hover:bg-white/50"
                    }`}
                />
              ))}
            </div>
          </div>

          <Card className="walkthrough-banner mt-72 sm:mt-80 md:mt-96 lg:mt-[28rem] bg-white/5 backdrop-blur-xl border-white/10 overflow-hidden">
            <div className="relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(106,13,173,0.4),transparent_60%),radial-gradient(circle_at_85%_55%,rgba(160,90,255,0.22),transparent_55%)]" />
              <div className="absolute -right-28 -top-28 h-72 w-72 rounded-full bg-purple-500/25 blur-3xl" />
              <div className="absolute -left-32 -bottom-10 h-60 w-60 rounded-full bg-fuchsia-400/20 blur-3xl" />
              <CardContent className="relative p-8 sm:p-10 lg:p-14">
                <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] items-center">
                  <div className="space-y-5 text-center sm:text-left">
                    <p className="text-xs uppercase tracking-[0.35em] text-purple-200/70">
                      Full Walkthrough
                    </p>
                    <div className="flex items-center justify-center sm:justify-start gap-3">
                      <img
                        src={auspiciaLogo}
                        alt="Auspicia Systems logo"
                        className="h-10 w-10 rounded-xl border border-white/10 bg-white/5 p-1.5"
                      />
                      <div className="text-sm uppercase tracking-[0.3em] text-purple-100/70">
                        Auspicia Systems
                      </div>
                    </div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white">
                      Deep dive into every CEDRIK workflow
                    </h3>
                    <p className="text-purple-100/75 text-sm sm:text-base leading-relaxed">
                      Explore the complete playlist from Auspicia with guided sessions that
                      cover onboarding, labs, admin controls, and security demonstrations.
                    </p>
                  </div>
                  <div className="flex flex-col items-center sm:items-start lg:items-end gap-6">
                    <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3">
                      <Youtube className="h-4 w-4 text-red-400" />
                      <span className="text-[10px] uppercase tracking-[0.32em] text-purple-200/70">
                        YouTube
                      </span>
                      <span className="h-5 w-px bg-white/15" />
                      <span className="text-sm font-semibold text-white">Auspicia</span>
                    </div>
                    <Button
                      className="w-full sm:w-auto bg-gradient-to-r from-purple-500 via-purple-600 to-purple-800 hover:from-purple-600 hover:via-purple-700 hover:to-purple-900 border-0 font-semibold px-6 py-6 h-auto rounded-full shadow-[0_16px_40px_rgba(128,68,255,0.35)]"
                      onClick={() => {
                        window.open(
                          "https://www.youtube.com/playlist?list=PL-cy2GCLoxfLnMkoohCqadjggkXj8V5WO",
                          "_blank",
                          "noopener,noreferrer"
                        );
                      }}
                    >
                      Watch the Full Walkthrough
                    </Button>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
      </section>

      {/* Performance Analysis */}
      <section id="performance" className="performance-section max-w-5xl mx-auto mt-12 space-y-8 relative scroll-mt-24 z-10">
        <div className="text-center space-y-4">
          <div className="performance-kicker">Benchmark Report</div>
          <h2 className="text-4xl sm:text-5xl font-bold performance-title">
            {performanceAnimKey > 0 ? (
              <SplitText key={performanceAnimKey} text="Performance Analysis" />
            ) : (
              "Performance Analysis"
            )}
          </h2>
          <p className="text-purple-100/70 max-w-2xl mx-auto performance-subtitle">
            {performanceAnimKey > 0 ? (
              <SplitText
                key={performanceAnimKey + 1}
                text="A quick look at system accuracy and reliability highlights, aligned with CEDRIK's learning and security objectives."
              />
            ) : (
              "A quick look at system accuracy and reliability highlights, aligned with CEDRIK's learning and security objectives."
            )}
          </p>
        </div>
        <Card className="performance-card bg-white/5 backdrop-blur-xl border-white/10 overflow-hidden">
          <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-purple-500/10 to-purple-800/20" />
              <img
                src={performanceImage}
                alt="Performance analysis preview"
                className="relative w-full h-full object-cover"
              />
            </div>
            <div className="performance-content p-8 sm:p-10 space-y-5">
              <div className="performance-chip">TruthfulQA</div>
              <h3 className="text-2xl font-semibold text-white performance-card-title">
                TruthfulQA Performance Snapshot
              </h3>
              <p className="text-purple-100/75 leading-relaxed performance-card-copy">
                Review a concise benchmark report that summarizes how CEDRIK performs on
                TruthfulQA, presented with the same visual language as the manual.
              </p>
              <Button
                className="performance-cta bg-purple-600/90 hover:bg-purple-600 text-purple-50 font-semibold"
                onClick={() => {
                  window.open("/CEDRIK_TruthfulQA_Simple.html", "_blank", "noopener,noreferrer");
                }}
              >
                Open Performance Report
              </Button>
            </div>
          </div>
        </Card>
      </section>

      {/* Feature Guide */}
      <section id="capabilities" className="max-w-5xl mx-auto mt-40 space-y-8 relative scroll-mt-24 z-10">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">
          {capabilitiesAnimKey > 0 ? (
            <SplitText key={capabilitiesAnimKey} text="CEDRIK Advantage" />
          ) : (
            "CEDRIK Advantage"
          )}
        </h2>
        <p className="text-purple-100/70 text-center max-w-2xl mx-auto -mt-8">
          {capabilitiesAnimKey > 0 ? (
            <SplitText
              key={capabilitiesAnimKey + 1}
              text="A curated blend of AI guidance, practical labs, and admin oversight built for defense-ready learning."
            />
          ) : (
            "A curated blend of AI guidance, practical labs, and admin oversight built for defense-ready learning."
          )}
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: "🤖",
              title: "AI Learning Companion",
              desc: "Guided onboarding, smart chats, and tailored explanations that adapt to you.",
            },
            {
              icon: "🔐",
              title: "Secure Access Flow",
              desc: "Account recovery and safety controls that reinforce good security habits.",
            },
            {
              icon: "🧪",
              title: "Hands-on Labs",
              desc: "Real-world practice with DVWA, WebGoat, and OWASP Juice Shop.",
            },
            {
              icon: "🌐",
              title: "Web Defense Skills",
              desc: "See SQL injection, XSS, and app-hardening techniques in action.",
            },
            {
              icon: "📡",
              title: "Network Insight",
              desc: "Learn scanning, service discovery, and practical hardening tactics.",
            },
            {
              icon: "🧭",
              title: "Admin Governance",
              desc: "Role-based oversight with reporting, audits, and platform control.",
            }
          ].map((feature, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-purple-400/50 transition-all duration-300 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-slate-400 text-justify">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto mt-24 text-center text-slate-500 text-sm relative z-10">
        © {new Date().getFullYear()} Cedrik Systems · Cybersecurity AI
      </footer>

    </div>
  );
}

