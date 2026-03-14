import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FoxyHeroProps {
  logo?: {
    icon?: React.ReactNode;
    text: string;
  };
  navigation?: Array<{
    label: string;
    isActive?: boolean;
    onClick?: () => void;
  }>;
  headerCta?: {
    label: string;
    onClick: () => void;
  };
  title: string;
  subtitle: string;
  ctaButtons?: {
    primary: {
      label: string;
      onClick: () => void;
    };
    secondary: {
      label: string;
      onClick: () => void;
    };
  };
  dashboardImage?: string;
  className?: string;
  children?: React.ReactNode;
}

export function FoxyHero({
  logo = { text: "Foxy" },
  navigation = [
    { label: "Home", isActive: true },
    { label: "Features" },
    { label: "Pricing" },
    { label: "Blogs" },
    { label: "Contact" },
  ],
  headerCta,
  title,
  subtitle,
  ctaButtons,
  dashboardImage,
  className,
  children,
}: FoxyHeroProps) {
  // Generate star particles
  const starParticles = Array.from({ length: 13 }, (_, i) => ({
    id: i,
    left: [966, 959, 998, 1006, 1018, 953, 941, 901, 841, 864, 908, 926, 957][i],
    top: [17, 49, 105, 61, 149, 168, 223, 250, 208, 153, 151, 93, 86][i],
  }));

  // Generate horizontal star particles
  const horizontalStars = Array.from({ length: 13 }, (_, i) => ({
    id: i,
    left: [473, 527, 623, 548, 699, 731, 826, 872, 800, 706, 702, 603, 591][i],
    top: [544, 551, 512, 504, 492, 557, 569, 609, 669, 646, 602, 584, 553][i],
  }));

  return (
    <section
      className={cn(
        "relative w-full min-h-screen flex flex-col items-center overflow-hidden",
        className
      )}
      style={{ background: "#0C0414" }}
      role="banner"
      aria-label="Hero section"
    >
      {/* Background Grid/Mask */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <svg
          width="100%"
          height="100%"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          <rect
            width="100%"
            height="100%"
            fill="none"
            stroke="rgba(255, 255, 255, 0.05)"
            strokeWidth="1.4155"
          />
        </svg>
      </div>

      {/* Purple Ambient Light - Large */}
      <motion.div
        className="absolute"
        style={{
          width: "1151px",
          height: "1024px",
          left: "119px",
          top: "0px",
          background: "rgba(50, 0, 86, 0.6)",
          filter: "blur(250px)",
          borderRadius: "50%",
        }}
        animate={{
          opacity: [0.4, 0.7, 0.4],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Top Light Effect Group */}
      <div
        className="absolute"
        style={{
          width: "451.95px",
          height: "476.87px",
          left: "754px",
          top: "-132px",
        }}
      >
        {/* Light Beams */}
        <motion.div
          className="absolute"
          style={{
            width: "204px",
            height: "348.5px",
            left: "46px",
            top: "47px",
            background: "linear-gradient(180deg, #C069FF 0%, rgba(192, 105, 255, 0) 100%)",
            mixBlendMode: "plus-lighter",
            filter: "blur(10.5px)",
            transform: "rotate(13.39deg)",
          }}
          animate={{
            opacity: [0.5, 1, 0.5],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute"
          style={{
            width: "204px",
            height: "348.5px",
            left: "137.95px",
            top: "62.98px",
            background: "linear-gradient(180deg, #C069FF 0%, rgba(192, 105, 255, 0) 100%)",
            mixBlendMode: "plus-lighter",
            filter: "blur(10.5px)",
            transform: "rotate(13.33deg)",
          }}
          animate={{
            opacity: [0.6, 1, 0.6],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
        <motion.div
          className="absolute"
          style={{
            width: "204px",
            height: "348.5px",
            left: "122px",
            top: "86px",
            background: "linear-gradient(180deg, #C069FF 0%, rgba(192, 105, 255, 0) 100%)",
            mixBlendMode: "plus-lighter",
            filter: "blur(10.5px)",
            transform: "rotate(6.01deg)",
          }}
          animate={{
            opacity: [0.7, 1, 0.7],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Purple Glow Ellipse */}
        <motion.div
          className="absolute"
          style={{
            width: "264.72px",
            height: "397.88px",
            left: "0px",
            top: "0px",
            background: "rgba(192, 105, 255, 0.5)",
            filter: "blur(125px)",
            transform: "rotate(37.4deg)",
            borderRadius: "50%",
          }}
          animate={{
            opacity: [0.5, 0.8, 0.5],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Small Center Glow */}
        <div
          className="absolute"
          style={{
            width: "100px",
            height: "100px",
            left: "175px",
            top: "206px",
            background: "#D9D9D9",
            filter: "blur(75px)",
            borderRadius: "50%",
          }}
        />
      </div>

      {/* Star Particles - Vertical Group */}
      {starParticles.map((star, index) => (
        <motion.div
          key={`star-v-${star.id}`}
          className="absolute"
          style={{
            width: "2px",
            height: "2px",
            left: `${star.left}px`,
            top: `${star.top}px`,
            background:
              index >= 6
                ? "linear-gradient(180deg, #C069FF 0%, rgba(192, 105, 255, 0) 100%)"
                : "linear-gradient(180deg, rgba(192, 105, 255, 0.5) 0%, rgba(192, 105, 255, 0) 100%)",
            borderRadius: "50%",
            boxShadow: "0 0 4px rgba(192, 105, 255, 0.8)",
          }}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [1, 2, 1],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-row justify-center items-center px-4"
        style={{
          width: "min(1196px, 95vw)",
          gap: "clamp(20px, 10vw, 217px)",
          marginTop: "28px",
        }}
      >
        {/* Logo */}
        <div className="flex flex-row justify-center items-center" style={{ gap: "7px" }}>
          {logo.icon}
          <span
            style={{
              fontFamily: "Inter, sans-serif",
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: "24px",
              lineHeight: "29px",
              color: "#FFFFFF",
              filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
            }}
          >
            {logo.text}
          </span>
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex flex-row items-center" style={{ gap: "28px" }} aria-label="Main navigation">
          {navigation.map((item, index) => (
            <button
              key={index}
              onClick={item.onClick}
              className="transition-opacity hover:opacity-100"
              style={{
                fontFamily: "Inter, sans-serif",
                fontStyle: "normal",
                fontWeight: 500,
                fontSize: "24px",
                lineHeight: "29px",
                color: item.isActive ? "#FFFFFF" : "rgba(255, 255, 255, 0.5)",
                opacity: item.isActive ? 1 : 0.5,
              }}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Header CTA */}
        {headerCta && (
          <button
            onClick={headerCta.onClick}
            className="flex flex-row justify-center items-center transition-all hover:scale-105"
            style={{
              padding: "6px 16px",
              width: "160px",
              height: "41px",
              background:
                "radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.2) 100%), #551A94",
              borderRadius: "100px",
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
              fontSize: "24px",
              lineHeight: "29px",
              color: "#FFFFFF",
            }}
          >
            {headerCta.label}
          </button>
        )}
      </motion.header>

      {/* Center Content */}
      {children ? (
        <div className="relative z-10 flex-1 flex items-center justify-center w-full">
          {children}
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative z-10 flex flex-col items-center px-4"
          style={{
            width: "min(810px, 90vw)",
            gap: "41px",
            marginTop: "145px",
          }}
        >
          {/* Title and Subtitle */}
          <div className="flex flex-col items-center" style={{ width: "100%", gap: "0px" }}>
            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-center"
              style={{
                fontFamily: "Inter, sans-serif",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "clamp(32px, 5vw, 64px)",
                lineHeight: "1.2",
                background: "linear-gradient(91.84deg, #231233 -12.23%, #F4DFFF 66.73%, #231233 119.29%), #F4DFFF",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {title}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="text-center"
              style={{
                fontFamily: "Inter, sans-serif",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "clamp(16px, 2vw, 20px)",
                lineHeight: "1.2",
                background: "linear-gradient(91.3deg, #231233 -10.75%, #F4DFFF 13.44%, #F4DFFF 96.07%, #231233 103.03%), #F4DFFF",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                marginTop: "10px",
              }}
            >
              {subtitle}
            </motion.p>
          </div>

          {/* CTA Buttons */}
          {ctaButtons && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-row items-center"
              style={{ gap: "34px" }}
            >
              <button
                onClick={ctaButtons.primary.onClick}
                className="flex flex-row justify-center items-center transition-all hover:scale-105"
                style={{
                  padding: "6px 16px",
                  width: "160px",
                  height: "41px",
                  background:
                    "radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.2) 100%), #551A94",
                  borderRadius: "100px",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500,
                  fontSize: "24px",
                  lineHeight: "29px",
                  color: "#FFFFFF",
                }}
              >
                {ctaButtons.primary.label}
              </button>
              <button
                onClick={ctaButtons.secondary.onClick}
                className="flex flex-row justify-center items-center transition-all hover:scale-105"
                style={{
                  padding: "6px 16px",
                  width: "250px",
                  height: "41px",
                  borderRadius: "100px",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500,
                  fontSize: "24px",
                  lineHeight: "29px",
                  color: "#FFFFFF",
                  background: "transparent",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                }}
              >
                {ctaButtons.secondary.label}
              </button>
            </motion.div>
          )}
        </motion.div>
      )}

      {/* Dashboard Section with Light Effects */}
      {dashboardImage && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.2 }}
          className="relative z-10"
          style={{
            width: "min(1100px, 90vw)",
            height: "auto",
            marginTop: "clamp(100px, 15vh, 280px)",
          }}
        >
          {/* Bottom Grid Mask */}
          <svg
            width="100%"
            height="auto"
            style={{
              position: "absolute",
              top: "-150px",
              left: "-200px",
              width: "calc(100% + 400px)",
              height: "auto",
              pointerEvents: "none",
            }}
          >
            <rect
              width="100%"
              height="100%"
              fill="none"
              stroke="rgba(255, 255, 255, 0.47)"
              strokeWidth="1.4155"
            />
          </svg>

          {/* Purple Glow Effects Behind Dashboard */}
          <div className="absolute" style={{ left: "50%", transform: "translateX(-50%)", top: "-56px", width: "836px" }}>
            <motion.div
              className="absolute"
              style={{
                width: "828px",
                height: "76px",
                left: "4px",
                top: "0px",
                background: "rgba(192, 105, 255, 0.5)",
                mixBlendMode: "plus-lighter",
                filter: "blur(70px)",
                borderRadius: "50%",
              }}
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute"
              style={{
                width: "794px",
                height: "76px",
                left: "14px",
                top: "56px",
                background: "rgba(192, 105, 255, 0.5)",
                mixBlendMode: "plus-lighter",
                filter: "blur(70px)",
                borderRadius: "50%",
              }}
              animate={{
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />
            <motion.div
              className="absolute"
              style={{
                width: "812px",
                height: "28px",
                left: "0px",
                top: "56px",
                background: "#C069FF",
                filter: "blur(20px)",
                borderRadius: "50%",
              }}
              animate={{
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          </div>

          {/* Horizontal Star Particles */}
          {horizontalStars.map((star, index) => (
            <motion.div
              key={`star-h-${star.id}`}
              className="absolute"
              style={{
                width: "2px",
                height: "3.43px",
                left: `${star.left - 400}px`,
                top: `${star.top - 480}px`,
                background:
                  index >= 6
                    ? "linear-gradient(180deg, #C069FF 0%, rgba(192, 105, 255, 0) 100%)"
                    : "linear-gradient(180deg, rgba(192, 105, 255, 0.5) 0%, rgba(192, 105, 255, 0) 100%)",
                transform: "rotate(-90deg)",
                borderRadius: "50%",
                boxShadow: "0 0 4px rgba(192, 105, 255, 0.8)",
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [1, 2.5, 1],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
          ))}

          {/* Bottom Reflection */}
          <div
            className="absolute"
            style={{
              width: "688px",
              height: "73.79px",
              left: "50%",
              transform: "translateX(-50%)",
              bottom: "-20px",
              background: "#D9D9D9",
              filter: "blur(70px)",
              borderRadius: "50%",
            }}
          />

          {/* Dashboard Image */}
          <div
            className="relative"
            style={{
              width: "100%",
              height: "auto",
              aspectRatio: "1100 / 783",
              borderRadius: "20px",
              overflow: "hidden",
              background: "linear-gradient(0deg, rgba(0, 0, 0, 0.12), rgba(0, 0, 0, 0.12)), #1a1a2e",
            }}
          >
            <img
              src={dashboardImage}
              alt="Dashboard Preview"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        </motion.div>
      )}

      {/* Multi-Brand Slider */}
      {!dashboardImage && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="relative z-10 w-full overflow-hidden"
          style={{
            marginTop: "clamp(80px, 12vh, 150px)",
            paddingBottom: "80px",
          }}
        >
          {/* Brand Slider Container */}
          <div className="relative w-full">
            {/* Gradient Overlays */}
            <div
              className="absolute left-0 top-0 bottom-0 z-10 pointer-events-none"
              style={{
                width: "200px",
                background: "linear-gradient(90deg, #0C0414 0%, rgba(12, 4, 20, 0) 100%)",
              }}
            />
            <div
              className="absolute right-0 top-0 bottom-0 z-10 pointer-events-none"
              style={{
                width: "200px",
                background: "linear-gradient(270deg, #0C0414 0%, rgba(12, 4, 20, 0) 100%)",
              }}
            />

            {/* Scrolling Brands */}
            <motion.div
              className="flex items-center"
              animate={{
                x: [0, -1920],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
              style={{
                gap: "80px",
                paddingLeft: "80px",
              }}
            >
              {/* Duplicate the brands array for seamless loop */}
              {[...Array(2)].map((_, setIndex) => (
                <React.Fragment key={setIndex}>
                  {/* Wet Room Icon */}
                  <div className="flex-shrink-0 flex items-center justify-center" style={{ width: "180px", height: "80px" }}>
                    <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                      <circle cx="50" cy="50" r="45" fill="none" stroke="#F4DFFF" strokeWidth="3" strokeOpacity="0.3"/>
                      <path d="M30 45 Q35 35, 40 45 T50 45 T60 45 T70 45" stroke="#F4DFFF" strokeWidth="2.5" fill="none" strokeOpacity="0.7"/>
                      <path d="M30 55 Q35 45, 40 55 T50 55 T60 55 T70 55" stroke="#F4DFFF" strokeWidth="2.5" fill="none" strokeOpacity="0.6"/>
                      <path d="M30 65 Q35 55, 40 65 T50 65 T60 65 T70 65" stroke="#F4DFFF" strokeWidth="2.5" fill="none" strokeOpacity="0.5"/>
                      <circle cx="50" cy="25" r="6" fill="#F4DFFF" fillOpacity="0.7"/>
                      <line x1="50" y1="31" x2="50" y2="40" stroke="#F4DFFF" strokeWidth="2" strokeOpacity="0.7"/>
                    </svg>
                  </div>

                  {/* Bathroom Icon */}
                  <div className="flex-shrink-0 flex items-center justify-center" style={{ width: "180px", height: "80px" }}>
                    <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                      <ellipse cx="50" cy="55" rx="30" ry="20" fill="none" stroke="#F4DFFF" strokeWidth="3" strokeOpacity="0.6"/>
                      <rect x="20" y="50" width="60" height="8" rx="2" fill="#F4DFFF" fillOpacity="0.5"/>
                      <line x1="25" y1="58" x2="25" y2="75" stroke="#F4DFFF" strokeWidth="3" strokeOpacity="0.7"/>
                      <line x1="75" y1="58" x2="75" y2="75" stroke="#F4DFFF" strokeWidth="3" strokeOpacity="0.7"/>
                      <circle cx="25" cy="78" r="3" fill="#F4DFFF" fillOpacity="0.7"/>
                      <circle cx="75" cy="78" r="3" fill="#F4DFFF" fillOpacity="0.7"/>
                      <rect x="15" y="30" width="5" height="20" rx="2" fill="#F4DFFF" fillOpacity="0.6"/>
                      <circle cx="17.5" cy="28" r="4" fill="#F4DFFF" fillOpacity="0.7"/>
                    </svg>
                  </div>

                  {/* Kitchen Icon */}
                  <div className="flex-shrink-0 flex items-center justify-center" style={{ width: "180px", height: "80px" }}>
                    <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                      <rect x="25" y="30" width="50" height="45" rx="3" fill="none" stroke="#F4DFFF" strokeWidth="3" strokeOpacity="0.6"/>
                      <rect x="30" y="35" width="18" height="15" rx="2" fill="#F4DFFF" fillOpacity="0.4"/>
                      <rect x="52" y="35" width="18" height="15" rx="2" fill="#F4DFFF" fillOpacity="0.4"/>
                      <rect x="30" y="55" width="40" height="15" rx="2" fill="none" stroke="#F4DFFF" strokeWidth="2" strokeOpacity="0.5"/>
                      <circle cx="65" cy="40" r="2" fill="#F4DFFF" fillOpacity="0.8"/>
                      <circle cx="65" cy="45" r="2" fill="#F4DFFF" fillOpacity="0.8"/>
                      <line x1="35" y1="25" x2="65" y2="25" stroke="#F4DFFF" strokeWidth="2" strokeOpacity="0.6"/>
                    </svg>
                  </div>

                  {/* Media Wall Icon */}
                  <div className="flex-shrink-0 flex items-center justify-center" style={{ width: "180px", height: "80px" }}>
                    <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                      <rect x="20" y="30" width="60" height="40" rx="2" fill="none" stroke="#F4DFFF" strokeWidth="3" strokeOpacity="0.6"/>
                      <rect x="25" y="35" width="50" height="30" fill="#F4DFFF" fillOpacity="0.3"/>
                      <polygon points="45,47 45,53 52,50" fill="#F4DFFF" fillOpacity="0.7"/>
                      <line x1="45" y1="70" x2="55" y2="70" stroke="#F4DFFF" strokeWidth="2.5" strokeOpacity="0.6"/>
                      <line x1="50" y1="70" x2="50" y2="75" stroke="#F4DFFF" strokeWidth="2.5" strokeOpacity="0.6"/>
                      <line x1="40" y1="75" x2="60" y2="75" stroke="#F4DFFF" strokeWidth="3" strokeOpacity="0.6"/>
                    </svg>
                  </div>
                </React.Fragment>
              ))}
            </motion.div>
          </div>

          {/* "Trusted by" Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="text-center mt-12"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "18px",
              fontWeight: 400,
              color: "rgba(244, 223, 255, 0.5)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Our Professional Services
          </motion.p>
        </motion.div>
      )}
    </section>
  );
}
