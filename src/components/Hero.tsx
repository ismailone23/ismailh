"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop min-h-[650px] py-12 md:py-16 flex items-center relative"
      id="hero"
    >
      <div className="relative z-10 grid w-full items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(350px,420px)] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="min-w-0"
        >
          <p className="flex items-center gap-2 mb-8 font-label-caps text-label-caps text-text-muted">
            <span className="size-2 rounded-full bg-primary-container" aria-hidden="true" />
            Available for work
          </p>
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-text-primary mb-6 text-balance">
            Ismail <span className="text-text-muted">Hossain</span>
          </h1>
          <p className="max-w-[20ch] font-headline-md text-[clamp(1.5rem,2.4vw,2rem)] leading-[1.2] font-normal tracking-[-0.02em] text-text-primary mb-4 text-balance">
            Full-stack engineer building useful AI products.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-[54ch] mb-4">
            I build and ship mobile apps, web platforms, and practical AI systems—from React Native subscriptions to computer vision pipelines.
          </p>
          <p className="font-body-md text-sm text-text-muted mb-8">
            MIST · CSE undergraduate <span aria-hidden="true" className="mx-2 text-text-muted">/</span> Dhaka, Bangladesh
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              className="inline-flex items-center justify-center h-11 px-5 rounded-xl bg-primary-container text-surface-container-low font-body-md font-medium hover:opacity-90 active:scale-[0.98] transition-[opacity,transform] duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              href="#projects"
            >
              Projects
            </a>
            <a
              className="inline-flex items-center justify-center h-11 px-5 rounded-xl border border-surface-stroke bg-surface-container-low text-text-primary font-body-md font-medium hover:bg-surface-container transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              href="#contact"
            >
              Contact
            </a>
          </div>
        </motion.div>

        <figure className="w-full max-w-[420px] lg:justify-self-end" aria-label="Illustrative camera-to-tree-detection pipeline from the MIST Mongol Barota project">
          <div className="overflow-hidden rounded-[12px] border border-surface-stroke bg-surface-container-low">
            <div className="flex items-center justify-between border-b border-surface-stroke px-5 py-4 font-label-caps text-label-caps text-text-muted">
              <span>Camera to perception</span>
              <span>ROS 2 / YOLO</span>
            </div>
            <div className="relative m-5 overflow-hidden border border-surface-stroke bg-surface-container-lowest">
              <svg className="block h-auto w-full" viewBox="0 0 380 228" fill="none" aria-hidden="true">
                <path d="M0 188h380M0 200h380M0 212h380" stroke="#242424" />
                <path d="M66 218V40m-10 81L31 103m34-43L38 42m28 52 21-19M184 218V21m-2 86-39-33m41-14 25-36m90 194V52m-1 86-28-22m30-19 22-36" stroke="#585858" strokeWidth="7" strokeLinecap="round" />
                <path d="M8 154 66 66l49 81M126 126l57-84 58 83M242 144l54-77 73 95" stroke="#343434" strokeWidth="2" />
                <rect x="35" y="44" width="77" height="155" stroke="#e5e5e5" strokeWidth="1.5" />
                <rect x="153" y="29" width="77" height="170" stroke="#e5e5e5" strokeWidth="1.5" />
                <rect x="268" y="56" width="65" height="143" stroke="#777" strokeWidth="1.5" />
                <rect x="35" y="27" width="54" height="17" fill="#e5e5e5" />
                <text x="43" y="39" fill="#111" fontFamily="monospace" fontSize="10">tree</text>
                <rect x="153" y="12" width="54" height="17" fill="#e5e5e5" />
                <text x="161" y="24" fill="#111" fontFamily="monospace" fontSize="10">tree</text>
                <path d="M0 190h380" stroke="#aaa" strokeWidth="1" strokeDasharray="3 8" />
              </svg>
              <span className="absolute bottom-3 left-3 font-label-caps text-[11px] text-on-surface-variant">Illustrative detection view</span>
            </div>
            <figcaption className="flex flex-wrap items-center justify-between gap-2 border-t border-surface-stroke px-5 py-4 font-label-caps text-label-caps text-text-muted">
              <span>/camera/image_raw → CvBridge → YOLO</span>
              <a className="font-body-md text-sm text-text-primary underline underline-offset-4 decoration-text-muted hover:decoration-text-primary transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary" href="https://github.com/ismailone23/tree_life_detection" target="_blank" rel="noopener noreferrer">See the pipeline</a>
            </figcaption>
          </div>
        </figure>
      </div>
    </section>
  );
}
