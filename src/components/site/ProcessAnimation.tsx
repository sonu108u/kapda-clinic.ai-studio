import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, MotionValue, useSpring } from "framer-motion";
import { ArrowDown } from "lucide-react";

// --- CONFIGURATION ---
// Set to "loop" to play the video repeatedly in the background while displaying the process.
// Set to "scroll-sync" later when you have a perfectly optimized one-shot video.
const ANIMATION_MODE: "loop" | "scroll-sync" = "loop";

const STORY = [
  { pIn: 0.02, pOut: 0.14, title: "1. The Analysis", desc: "Every garment is carefully inspected. We identify specific stains and determine the exact care protocol required for the fabric." },
  { pIn: 0.18, pOut: 0.30, title: "2. Precision Extraction", desc: "Premium, gentle detergents penetrate deep into the fibers, breaking down tough stains at the microscopic level without damaging the cloth." },
  { pIn: 0.34, pOut: 0.46, title: "3. Pure Rinse", desc: "The garment is thoroughly rinsed, removing every trace of impurity, leaving the fabric feeling naturally soft and completely refreshed." },
  { pIn: 0.50, pOut: 0.62, title: "4. Controlled Drying", desc: "Air-dried with care to preserve the integrity of the threads. No harsh heat, just natural freshness locked into every weave." },
  { pIn: 0.66, pOut: 0.78, title: "5. Expert Pressing", desc: "Finished with professional high-pressure steam, ensuring perfectly crisp lines and a flawless, elegant drape." },
  { pIn: 0.82, pOut: 0.95, title: "6. Ready For You", desc: "Folded to perfection, delicately packaged, and delivered back to you—looking exactly as it did on day one." }
];

export function ProcessAnimation() {
  if (ANIMATION_MODE === "loop") {
    return <ProcessAnimationLoop />;
  }
  return <ProcessAnimationScrollSync />;
}

// ==========================================
// OPTION 2: LOOPING VIDEO (NO TEXT OVERLAYS)
// ==========================================
function ProcessAnimationLoop() {
  return (
    <section id="process" className="relative h-[80vh] min-h-[600px] w-full bg-zinc-950 flex items-center overflow-hidden">
      {/* Background Looping Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* Added scale-105 to slightly crop the edges and hide AI watermarks usually located in the corners */}
        <video 
          src="/process_video.mp4" 
          className="w-full h-full object-cover scale-105 transform-gpu"
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Very light gradient just to ensure the edges blend well with the dark theme, but keeping the video clear */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 pointer-events-none" />
      </div>
    </section>
  );
}

// ==========================================
// OPTION 1: SCROLL-SYNCED VIDEO (SAVED FOR LATER)
// ==========================================
function ProcessAnimationScrollSync() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [duration, setDuration] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Apply a spring to the scroll progress to smooth out the mouse wheel steps
  const p = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Link video playback time to scroll progress
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let animationFrameId: number;
    let targetTime = 0;
    let currentTime = 0;

    const handleLoadedMetadata = () => {
      if (video.duration && !isNaN(video.duration) && video.duration !== Infinity) {
         setDuration(video.duration);
      }
      video.pause();
    };
    
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('loadeddata', handleLoadedMetadata);
    
    // Check if metadata is already loaded
    if (video.readyState >= 1 && video.duration && video.duration !== Infinity) {
      setDuration(video.duration);
    }
    
    // Force a tiny load to ensure metadata fetches on mobile browsers
    video.load();

    const unsubscribe = p.on("change", (latest) => {
      if (duration > 0) {
        targetTime = latest * duration;
      }
    });

    // Use requestAnimationFrame for ultra-smooth rendering decoupled from React state
    const renderLoop = () => {
      if (video && duration > 0) {
        // Interpolate (lerp) the video time towards the target time
        // This adds a final layer of hardware-synced smoothing
        currentTime += (targetTime - currentTime) * 0.15;
        
        if (Math.abs(targetTime - currentTime) > 0.005) {
          video.currentTime = currentTime;
        }
      }
      animationFrameId = requestAnimationFrame(renderLoop);
    };

    renderLoop();

    return () => {
      cancelAnimationFrame(animationFrameId);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('loadeddata', handleLoadedMetadata);
      unsubscribe();
    };
  }, [p, duration]);

  const indicatorOpacity = useTransform(p, [0, 0.02], [1, 0]);

  return (
    <section ref={containerRef} id="home" className="relative h-[800vh] bg-zinc-950">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">
        
        {/* --- SCROLL-SYNCED VIDEO LAYER --- */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <video 
            ref={videoRef}
            src="/process_video.mp4" 
            className="w-full h-full object-cover opacity-70"
            preload="auto"
            playsInline
            muted
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80" />
        </div>

        {/* --- UI OVERLAYS --- */}
        
        {/* Dynamic Story Text */}
        {STORY.map((s, i) => (
           <TextOverlay key={i} pIn={s.pIn} pOut={s.pOut} title={s.title} text={s.desc} progress={p} />
        ))}

        {/* Global Progress Bar */}
        <div className="absolute bottom-0 left-0 h-1.5 w-full bg-white/10 z-[100]">
          <motion.div className="h-full bg-gold" style={{ scaleX: p, transformOrigin: "left" }} />
        </div>

        {/* Scroll Indicator */}
        <motion.div
          style={{ opacity: indicatorOpacity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/70 z-[100] pointer-events-none"
        >
          <span className="text-[10px] uppercase tracking-widest mb-3 font-semibold text-gold drop-shadow-md">
            Scroll to experience
          </span>
          <ArrowDown className="h-5 w-5 animate-bounce text-gold drop-shadow-md" />
        </motion.div>
        
      </div>
    </section>
  );
}

// Helper component for perfectly clamped text fading
function TextOverlay({ pIn, pOut, title, text, progress }: { key?: React.Key, pIn: number, pOut: number, title: string, text: string, progress: MotionValue<number> }) {
  const opacity = useTransform(progress, (p: number) => {
    if (p < pIn - 0.04) return 0;
    if (p > pOut + 0.04) return 0;
    if (p >= pIn && p <= pOut) return 1;
    if (p < pIn) return (p - (pIn - 0.04)) / 0.04;
    return 1 - (p - pOut) / 0.04;
  });
  
  const y = useTransform(progress, (p: number) => {
    if (p < pIn - 0.04) return 30;
    if (p > pOut + 0.04) return -30;
    if (p >= pIn && p <= pOut) return 0;
    if (p < pIn) return 30 - 30 * ((p - (pIn - 0.04)) / 0.04);
    return 0 - 30 * ((p - pOut) / 0.04);
  });

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute bottom-16 md:bottom-24 left-0 w-full text-center px-6 z-[80] pointer-events-none"
    >
      <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-4 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
        {title}
      </h2>
      <p className="text-lg md:text-2xl text-white/90 max-w-3xl mx-auto font-light drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
        {text}
      </p>
    </motion.div>
  );
}
