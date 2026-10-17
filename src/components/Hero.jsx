import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const MARQUEE = ["Design", "Development", "Marketing", "Brand"];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative z-[2] flex min-h-screen w-full flex-col justify-center bg-[#0d0d0c] px-6 pb-[100px] pt-[110px] font-['Space_Grotesk',sans-serif] text-[#f4f1ea] md:px-10"
    >
      {/* Animations used below */}
      <style>{`
        @keyframes hero-reveal { to { transform: translateY(0); } }
        @keyframes hero-rise { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: none; } }
        @keyframes hero-scroll { to { transform: translateX(-50%); } }
        .hero-reveal { transform: translateY(110%); animation: hero-reveal 1s cubic-bezier(.16,1,.3,1) forwards; }
        .hero-rise { opacity: 0; animation: hero-rise .9s forwards; }
        .hero-scroll { animation: hero-scroll 30s linear infinite; }
        @media (prefers-reduced-motion: reduce) {
          .hero-reveal, .hero-rise { animation: none; opacity: 1; transform: none; }
          .hero-scroll { animation: none; }
        }
      `}</style>

      {/* Available for work */}
      <div className="hero-rise mb-10 flex items-center gap-4 [animation-delay:.1s]">
        <span className="h-2 w-2 rounded-full bg-[#ff5b1f]" />
        <span className="text-[13px] uppercase tracking-[0.18em] text-[#9a958a]">
          Available for work — 2026
        </span>
        <span className="h-px max-w-[120px] flex-1 bg-[#f4f1ea]/[.12]" />
      </div>

      {/* Name */}
      <h1 className="text-[clamp(40px,min(14vw,21vh),210px)] font-bold uppercase leading-[0.82] tracking-[-0.04em]">
        <span className="flex overflow-hidden whitespace-nowrap">
          <span className="hero-reveal flex [animation-delay:.2s]">Abelaash</span>
        </span>
        <span className="flex overflow-hidden whitespace-nowrap">
          <span className="hero-reveal flex [animation-delay:.35s]">
            Giritharan<span className="text-[#ff5b1f]">.</span>
          </span>
        </span>
      </h1>

      {/* Intro + buttons */}
      <div className="hero-rise mt-12 flex flex-wrap items-end justify-between gap-6 [animation-delay:.7s]">
        <div className="max-w-[440px]">
          <p className="text-[clamp(20px,2.5vw,26px)] leading-[1.25] tracking-[-0.01em]">
            Web developer{" "}
            <span className="font-['Instrument_Serif',serif] italic text-[#ff5b1f]">&amp;</span>{" "}
            digital marketer building work that{" "}
            <span className="font-['Instrument_Serif',serif] italic text-[#ff5b1f]">performs.</span>
          </p>
          <p className="mt-3.5 max-w-[380px] text-sm leading-relaxed text-[#9a958a]">
            React, Webflow, Drupal &amp; WordPress development — paired with marketing
            strategy at STOP Marketing Agency.
          </p>
        </div>

        <div className="flex flex-wrap gap-3.5">
          <Link
            to="work"
            smooth={true}
            duration={500}
            className="group flex cursor-pointer items-center gap-2.5 rounded-full border border-[#f4f1ea] bg-[#f4f1ea] px-[26px] py-3.5 text-sm font-medium text-[#0d0d0c] transition-all duration-300 hover:border-[#ff5b1f] hover:bg-[#ff5b1f] hover:text-white"
          >
            Selected Work
            <span className="duration-300 group-hover:translate-x-1">
              <HiArrowNarrowRight />
            </span>
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer rounded-full border border-[#f4f1ea]/[.12] px-[26px] py-3.5 text-sm font-medium transition-all duration-300 hover:border-[#f4f1ea]"
          >
            Get in touch
          </Link>
        </div>
      </div>

      {/* Marquee — the hero's bottom padding keeps it from covering the content */}
      <div className="hero-rise absolute bottom-0 left-0 w-full overflow-hidden border-t border-[#f4f1ea]/[.12] py-[18px] [animation-delay:1s]">
        <div className="hero-scroll flex w-max whitespace-nowrap">
          {Array.from({ length: 10 }).map((_, i) => (
            <span
              key={i}
              aria-hidden={i > 0}
              className="font-['Instrument_Serif',serif] text-[22px] uppercase text-[#9a958a]"
            >
              {MARQUEE.map((word) => (
                <React.Fragment key={word}>
                  <span className="px-7">{word}</span>
                  <span className="text-[#ff5b1f]">✦</span>
                </React.Fragment>
              ))}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
