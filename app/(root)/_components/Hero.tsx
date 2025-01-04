"use client";

import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();

  return (
    <div className="relative w-full overflow-hidden bg-black min-h-[70vh] lg:min-h-screen">
      {/* Grid background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgb(24, 24, 24) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />

      {/* gradient glow */}
      <div className="absolute top-[-50%] -left-[10%] right-0 h-[200%] w-[120%] rotate-12 bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Content container */}
      <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-24 sm:pt-40 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="mb-8 rounded-full border border-white/20 bg-neutral-500/5 px-4 py-1">
            <span className="bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-sm font-medium text-transparent">
              Powered by Monaco Editor
            </span>
          </div>

          {/* Main heading */}
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            A Powerful{" "}
            <span className="bg-gradient-to-r from-neutral-300 to-neutral-500 bg-clip-text text-transparent">
              code Editor
            </span>{" "}
            in Your Browser
          </h1>

          {/* Subheading */}
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Experience VS Code-like editing capabilities directly in your
            browser. With intelligent completions, powerful language support,
            and customizable themes.
          </p>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={() => router.push("/code-editor")}
              className="h-12 px-6 bg-white hover:bg-zinc-200 text-black font-medium text-base w-full sm:w-auto flex items-center justify-center rounded-lg"
            >
              Try Syntaxium Editor
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
