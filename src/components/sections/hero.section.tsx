import type { SectionProps } from "../../models/models.ts";
import { Button } from "../ui/button";

export default function AboutSection({
  section,
  linkButtonInfo = [],
  imageInfo = [],
}: SectionProps) {
  
  const content = section || null;
  
  // Safe array searching with optional chaining
  const viewProject = linkButtonInfo?.find(button => button?.name === 'viewProjectButton');
  const downloadCV = linkButtonInfo?.find(button => button?.name === 'downloadCVButton');
  const portraitImage = imageInfo?.find(image => image?.name === 'portraitImage');

  return (
    <div className="relative min-h-screen flex items-center pt-20 overflow-hidden circuit-bg">
      {content && (
        <>
          {/* Decorative Glow Background - Now safely self-contained */}
          <div className="absolute top-1/4 right-0 w-1/3 h-1/2 bg-[#00daf3]/5 blur-[120px] rounded-[999px] pointer-events-none" />

          {/* Main Layout Grid - Properly closed and unconstrained */}
          <div className="max-w-7xl mx-auto px-8 w-full grid md:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Left Column: Text & Actions */}
            <div className="md:col-span-7 space-y-8">
              {/* Status badge */}
              <div className="inline-flex items-center gap-3 px-3 py-1 rounded-[999px] bg-[#272a31] border-l-2 border-[#00daf3]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-[999px] bg-[#00daf3] opacity-75" />
                  <span className="relative inline-flex rounded-[999px] h-2 w-2 bg-[#00daf3]" />
                </span>
                <span className="text-xs tracking-[0.2em] text-[#c4c6cc] uppercase">
                  {content.status}
                </span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-bold leading-tight tracking-tighter">
                {content.head_line_one_lead}{" "}
                <span className="text-[#00daf3]">{content.head_line_one_accent}</span>
                <br />
                {content.head_line_two_lead}{" "}
                <span className="text-[#ffba38]">{content.head_line_two_accent}</span>
              </h1>

              <p className="text-xl text-[#c4c6cc] max-w-xl leading-relaxed">
                {content.description}
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                {viewProject && (
                  <Button
                    asChild
                    className="bg-gradient-to-br from-[#00daf3] to-[#0090a1] text-[#00363d] font-bold px-8 py-4 rounded-xl shadow-[0_0_40px_rgba(0,218,243,0.2)] hover:shadow-[0_0_60px_rgba(0,218,243,0.3)] transition-all h-auto"
                  >
                    <a href={viewProject.buttonLink}>
                      {viewProject.buttonName}
                    </a>
                  </Button>
                )}
                
                {downloadCV && (
                  <Button
                    asChild
                    className="bg-gradient-to-br from-[#ffba38] to-[#ff8c00] text-[#00363d] font-bold px-8 py-4 rounded-xl shadow-[0_0_40px_rgba(255,186,56,0.2)] hover:shadow-[0_0_60px_rgba(255,186,56,0.3)] transition-all h-auto"
                  >
                    <a href={downloadCV.buttonLink} download>
                      {downloadCV.buttonName}
                    </a>
                  </Button>
                )}
              </div>
            </div>

            {/* Right Column: Image Display */}
            <div className="md:col-span-5 relative">
              <div className="aspect-square rounded-[999px] overflow-hidden border-8 border-[#1d2026] shadow-2xl relative z-10">
                {portraitImage && (
                  <img
                    alt={portraitImage.name}
                    className="w-full h-full object-cover grayscale contrast-125"
                    src={portraitImage.imageLink}
                  />
                )}
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-[#272a31] p-6 rounded-xl border-l-4 border-[#ffba38] z-20 shadow-xl">
                <div className="text-3xl font-black text-[#ffba38]">
                  {content.value_years}
                </div>
                <div className="text-xs uppercase tracking-widest text-[#c4c6cc]">
                  {content.label_years}
                </div>
              </div>
            </div>

          </div> {/* Grid closing tag fixed here */}
        </>
      )}
    </div>
  );
}
