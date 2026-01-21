import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlayCircle, ChevronLeft, ChevronRight } from "lucide-react";
import cedrikLogo from "@/assets/cedrik-logo.png";
import gettingStartedVideo from "@/assets/Getting-Started.mp4";
import gettingStartedThumb from "@/assets/Thumbnail GS.png";
import adminDashboardVideo from "@/assets/Admin-Dashboard-Overview.mp4";
import adminDashboardThumb from "@/assets/Thumbnail Admin.png";
import discoverCedrikVideo from "@/assets/Discover-Cedrik.mp4";
import discoverCedrikThumb from "@/assets/Thumbnail Cedrik.png";
import aiInActionVideo from "@/assets/AI-in-Action.mp4";
import secureAccessRecoveryVideo from "@/assets/Secure-Access-Recovery.mp4";
import webAppSecurityDvwaVideo from "@/assets/Web Application Security (DVWA).mp4";
import wordpressSecurityTestingVideo from "@/assets/WordPress Security Testing.mp4";
import networkPenetrationTestVideo from "@/assets/Network Penetration Test.mp4";
import owaspWebGoatVideo from "@/assets/OWASP WebGoat.mp4";
import owaspJuiceVideo from "@/assets/OWASP Juice.mp4";
import adminSideVideo from "@/assets/Admin Side.mp4";
import superAdminSideVideo from "@/assets/Super Admin Side.mp4";
import Antigravity from "@/components/ui/Antigravity";

export default function CedrikManual() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeVideo, setActiveVideo] = useState<{
    title: string;
    src: string;
    details?: string;
  } | null>(null);

  useEffect(() => {
    if (activeVideo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeVideo]);
  
  const videos = [
    {
      title: "Getting Started",
      desc: "A quick, engaging walkthrough showing how to create your account, log in seamlessly, and explore the core features of CEDRIK in minutes.",
      src: gettingStartedVideo,
      thumbnail: gettingStartedThumb,
    },
    {
      title: "Admin Dashboard Overview",
      desc: "A focused overview of the admin dashboard, showcasing essential tools for managing users efficiently.",
      src: adminDashboardVideo,
      thumbnail: adminDashboardThumb,
    },
    {
      title: "Discover CEDRIK Labs",
      desc: "Explore six interactive scenarios designed to build cybersecurity awareness and practical skills through guided, hands-on learning experiences.",
      src: discoverCedrikVideo,
      thumbnail: discoverCedrikThumb,
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
              Brief Overview
            </Button>
            <Button className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6">
              View Walkthrough
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
      <section className="max-w-5xl mx-auto mt-24 relative pb-28">
        <div className="absolute inset-y-0 left-1/2 w-screen -translate-x-1/2 z-0 opacity-55 pointer-events-none">
          <Antigravity
            particleCount={320}
            particleSize={0.24}
            magnetRadius={9}
            waveSpeed={0.6}
            waveAmplitude={0.35}
            color="#1b7a3a"
            className="w-full h-full"
          />
        </div>
        <div className="relative z-10">
          <h2 className="text-5xl sm:text-6xl font-black tracking-tight text-center mb-12">
            Take a Quick Look
          </h2>
          <p className="text-emerald-100/70 text-center max-w-2xl mx-auto -mt-6 mb-10">
            Quick previews of key features, workflows, and dashboards you can explore in minutes.
          </p>

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
                      {item.thumbnail && (
                        <img
                          src={item.thumbnail}
                          alt={`${item.title} preview`}
                          className="absolute inset-0 w-full h-full object-cover blur-md scale-105 opacity-70"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <PlayCircle className="w-20 h-20 text-white drop-shadow-lg relative z-10" />
                    </div>
                    <h3 className="font-bold text-2xl text-center text-white">{item.title}</h3>
                    <p className="text-slate-400 text-center">
                      {item.desc}
                    </p>
                    <Button
                      className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 border-0 font-semibold"
                      onClick={() => {
                        if (item.src) setActiveVideo({ title: item.title, src: item.src });
                      }}
                    >
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
        </div>
      </section>

      {/* CEDRIK Walkthrough */}
      <section className="max-w-6xl mx-auto mt-36 pt-8 space-y-10 relative z-10">
        <div className="text-center space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold">CEDRIK Walkthrough</h2>
          <p className="text-emerald-100/70 max-w-2xl mx-auto">
            Walkthroughs highlighting key flows and hands-on guidance across the platform.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          {[
            {
              title: "AI in Action",
              desc: "A quick demo highlighting account setup, smart chats, customizable AI responses, and personalized controls all in one seamless flow.",
              src: aiInActionVideo,
              details:
                "This video demonstrates the complete user journey within the AI system, starting with account creation and secure login to confirm that onboarding and authentication work properly. It then showcases default chat functionality by creating multiple new chats, asking basic identity questions, and highlighting clear separation between conversations. Chat management features are demonstrated through editing and renaming chats for better organization. The video then introduces advanced AI customization by switching response styles, comparing Professor Cedrik’s WHY-focused explanations with Hackerman Pancho’s HOW-focused and ethical responses within dedicated chat sessions. User control is further shown through chat deletion, followed by UI personalization via Dark Mode to enhance accessibility and comfort. Finally, the walkthrough concludes with support access and a logout–login sequence to confirm that changes and settings persist across sessions.",
            },
            {
              title: "Secure Access Recovery",
              desc: "A step-by-step walkthrough showing how users can safely reset their password, regain access to their account, and continue using CEDRIK AI.",
              src: secureAccessRecoveryVideo,
              details:
                "This video demonstrates how users access the Settings menu to update their username and change their password, highlighting account customization options and best practices for maintaining security within the system.",
            },
            {
              title: "Web Application Security (DVWA)",
              desc: "A hands-on security exercise demonstrating common web vulnerabilities, SQL Injection and XSS using DVWA, highlighting real attack techniques, proper mitigations, and effective detection strategies.",
              src: webAppSecurityDvwaVideo,
              details:
                "This video demonstrates hands-on web application security testing using DVWA, focusing on common vulnerabilities such as SQL Injection and Cross-Site Scripting (XSS). In the first challenge, the application is accessed using default credentials, the database is reset, and the security level is set to low. SQL injection techniques are then used to bypass authentication and extract all user records from the database. This section highlights how improper input handling can lead to severe data exposure and emphasizes mitigation strategies such as prepared statements, input validation and sanitization, least-privilege database access, and continuous monitoring through logs, IDS, WAF, and SIEM solutions.\n\nThe second challenge expands on SQL Injection by demonstrating error-based and UNION-based attacks. Single-quote inputs are used to trigger database errors, authentication is bypassed using logical conditions, database structure is identified through ORDER BY clauses, and sensitive credentials are extracted using UNION SELECT queries. The video explains how these attacks exploit weak query handling and stresses the importance of secure development practices, including parameterized queries, strict input whitelisting, stored procedures, proper escaping of special characters, and proactive monitoring for suspicious query patterns and database anomalies.\n\nThe third challenge focuses on Cross-Site Scripting (XSS) vulnerabilities, showcasing reflected and stored XSS attacks using script tags and event handlers to execute malicious code and access sensitive information such as session cookies. It demonstrates how injected scripts can affect individual users or all visitors when stored XSS is present. The section concludes with recommended defenses, including input sanitization and output encoding, implementation of strict Content Security Policy headers, secure cookie attributes, and comprehensive monitoring using WAF rules, IDS alerts, CSP violation reports, and log analysis to detect and respond to XSS attempts.",
            },
            {
              title: "WordPress Security Testing",
              desc: "A focused security exercise demonstrating how WordPress usernames can be enumerated using scanning tools, REST API endpoints, and author-based URLs, along with key mitigation and monitoring techniques.",
              src: wordpressSecurityTestingVideo,
              details:
                "This video demonstrates a practical WordPress security assessment focused on user enumeration, showing how attackers can identify valid usernames through automated scanning tools, exposed application interfaces, and publicly accessible author information. It explains how these weaknesses can be mitigated by restricting user information exposure, disabling unnecessary endpoints, hiding usernames with security plugins, and using unique administrator accounts that are not publicly identifiable. The walkthrough also highlights detection and monitoring practices, including reviewing server logs for repeated enumeration attempts, configuring firewall rules to detect scanning behavior, and blocking suspicious sources that repeatedly probe for user information.",
            },
            {
              title: "Network Penetration Test",
              desc: "A hands-on network security assessment demonstrating how port scanning and service enumeration expose vulnerable services, followed by vulnerability research and recommended hardening measures.",
              src: networkPenetrationTestVideo,
              details:
                "This video shows a network penetration testing exercise that demonstrates how exposed services and open ports can increase an organization’s attack surface. The assessment begins with a basic network scan to identify reachable hosts, followed by service version detection to determine which applications are running and whether they are outdated or vulnerable. Multiple open ports are identified, and one exposed service is analyzed further to research known vulnerabilities, highlighting how attackers can move from reconnaissance to exploitation. The documentation emphasizes mitigation strategies such as closing unnecessary ports, disabling unused services, enforcing strict firewall rules, keeping systems patched, segmenting networks to protect critical assets, and replacing insecure protocols. It also highlights the importance of detection and monitoring through intrusion detection and prevention systems, firewall log analysis, alerts for scanning behavior, honeypots for reconnaissance detection, and traffic analysis to identify abnormal network activity.",
            },
            {
              title: "OWASP WebGoat",
              desc: "A practical web security exercise demonstrating how HTTP-based applications can expose sensitive data, using the WebGoat HTTP Basics lesson to analyze requests, responses, and common security weaknesses.",
              src: owaspWebGoatVideo,
              details:
                "This video shows a web security exercise using the HTTP Basics lesson in OWASP WebGoat to demonstrate how unsecured HTTP communication can expose sensitive information. The walkthrough shows form submission using a standard HTTP request, observation of the server’s response through browser developer tools, and successful completion of the lesson by analyzing request methods and response data. It highlights how form data is transmitted in plaintext and how response headers and payloads can reveal sensitive details such as session information and application behavior. These emphasizes the importance of mitigating these risks by enforcing encrypted connections, validating and sanitizing user input, applying secure HTTP headers, and protecting forms against unauthorized requests. It also outlines the role of monitoring and detection, including logging form submissions, tracking abnormal request patterns, using web application firewalls to block suspicious activity, and generating alerts for repeated or automated access to sensitive endpoints.",
            },
            {
              title: "OWASP Juice",
              desc: "A hands-on web application security exercise demonstrating real-world attack scenarios in OWASP Juice Shop, covering authentication bypass, data extraction, and cross-site scripting vulnerabilities.",
              src: owaspJuiceVideo,
              details:
                "This video shows a hands-on web application security assessment using OWASP Juice Shop to demonstrate common real-world vulnerabilities, including authentication bypass, data extraction, and cross-site scripting attacks. The walkthrough shows how weak input handling can allow attackers to bypass login controls, access sensitive user information, and inject malicious scripts that execute in user browsers or persist within the application. It explains the security impact of these vulnerabilities and emphasizes proper mitigation techniques such as using parameterized queries, enforcing strict input validation and output encoding, applying Content Security Policy headers, sanitizing data before storage, and securing authentication mechanisms and cookies. The documentation also highlights the importance of detection and monitoring through application logs, web application firewall rules, database activity monitoring, and centralized alerting to identify SQL injection and XSS patterns, failed login attempts, and suspicious script activity.",
            },
            {
              title: "Admin Management",
              desc: "A guided walkthrough showing how administrators create new users, manage and edit user accounts, and assign admin roles highlighting full control and efficient system management.",
              src: adminSideVideo,
              details:
                "This video demonstrates the administrative capabilities for managing system users, including creating new user and administrator accounts and editing existing accounts as needed. It highlights how administrators can assign roles, update user information, and manage access levels to ensure proper authorization and control within the system. The walkthrough emphasizes the importance of role-based access management, accurate user administration, and maintaining system integrity by ensuring that only authorized individuals are granted administrative privileges.",
            },
            {
              title: "Super Admin Control",
              desc: "A powerful overview highlighting advanced super admin capabilities from full user and admin management to report generation, memory creation, and system archiving for total platform control.",
              src: superAdminSideVideo,
              details:
                "This video demonstrates the extended capabilities of the Super Admin role, which includes all standard administrative functions along with advanced system-level controls. In addition to creating and managing user and administrator accounts, the Super Admin can view detailed user grade records within the CEDRIK Labs environment, manage and archive system memory, review comprehensive audit logs, and create or assign additional Super Admin accounts. This walkthrough highlights the highest level of access within the platform, emphasizing oversight, accountability, and governance through detailed monitoring, record management, and controlled delegation of super administrative privileges.",
            }
          ].map((item, i) => (
            <Card
              key={i}
              className="bg-white/5 backdrop-blur-xl border-white/10 hover:border-emerald-400/50 transition-all duration-300 overflow-hidden group h-full flex flex-col"
            >
              <div className="relative aspect-video">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-emerald-400/10 to-teal-500/20" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.25),transparent_55%)]" />
                <div className="absolute inset-0 bg-black/35 group-hover:bg-black/20 transition-colors duration-300" />
                <PlayCircle className="absolute inset-0 m-auto w-14 h-14 text-white/90 drop-shadow-lg" />
              </div>
              <CardContent className="p-6 space-y-3 flex flex-col flex-1">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-slate-400 text-justify flex-1">
                  {item.desc}
                </p>
                <Button
                  className="w-full mt-auto bg-white/10 hover:bg-white/20 border border-white/10 text-white"
                  onClick={() => {
                    if (item.src) {
                      setActiveVideo({
                        title: item.title,
                        src: item.src,
                        details: item.details,
                      });
                    }
                  }}
                >
                  View Walkthrough
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Feature Guide */}
      <section className="max-w-4xl mx-auto mt-40 space-y-8 relative">
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

      {activeVideo?.src && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-8 py-6">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setActiveVideo(null)}
          />
          <div className="relative w-full max-w-5xl max-h-[85vh] bg-gradient-to-br from-emerald-900/80 via-[#0b1f16]/90 to-slate-900/90 border border-emerald-300/20 rounded-2xl shadow-[0_30px_90px_rgba(0,0,0,0.6)] overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.18),transparent_55%)]" />
            <div className="relative flex items-center justify-between px-6 py-4 border-b border-emerald-200/10">
              <div>
                <p className="text-emerald-200/80 text-xs uppercase tracking-[0.35em]">
                  Video Playback
                </p>
                <h3 className="text-xl font-semibold text-white">
                  {activeVideo.title}
                </h3>
              </div>
              <button
                className="text-emerald-100/80 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-full w-9 h-9"
                onClick={() => setActiveVideo(null)}
                aria-label="Close video"
              >
                x
              </button>
            </div>
            {activeVideo.details ? (
              <div className="relative p-6 grid gap-5 lg:grid-cols-[1.25fr_0.9fr] items-start">
                <div className="space-y-3">
                  <div className="aspect-video rounded-xl overflow-hidden border border-emerald-200/10 shadow-[0_18px_40px_rgba(16,185,129,0.25)] max-h-[40vh]">
                    <video
                      src={activeVideo.src}
                      className="w-full h-full object-contain"
                      controls
                      autoPlay
                      playsInline
                    />
                  </div>
                  <p className="text-emerald-100/70 text-xs">
                    Tip: Use full screen for the best overview experience.
                  </p>
                </div>
                <div className="rounded-xl border border-emerald-200/10 bg-black/25 px-4 py-3 sm:px-5 sm:py-4 max-h-[36vh] lg:max-h-[60vh] overflow-y-auto">
                  <p className="text-emerald-200/80 text-[11px] uppercase tracking-[0.35em]">
                    Documentation
                  </p>
                  <p className="text-emerald-100/75 text-sm leading-relaxed text-justify whitespace-pre-line mt-2">
                    {activeVideo.details}
                  </p>
                </div>
              </div>
            ) : (
              <div className="relative p-6 space-y-4">
                <div className="aspect-video rounded-xl overflow-hidden border border-emerald-200/10 shadow-[0_18px_40px_rgba(16,185,129,0.25)] max-h-[55vh]">
                  <video
                    src={activeVideo.src}
                    className="w-full h-full object-contain"
                    controls
                    autoPlay
                    playsInline
                  />
                </div>
                <p className="text-emerald-100/70 text-sm">
                  Tip: Use full screen for the best overview experience.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
