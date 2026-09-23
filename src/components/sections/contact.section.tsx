import type { ContactContent, SectionProps } from "../../models/models.ts";
import { Send } from 'lucide-react'
import { Button } from "../ui/button";

export default function ContactSection({
  section,
  linkButtonInfo = [],
  imageInfo = [],
}: SectionProps) {
  const content = (section || null) as ContactContent | null;
  void linkButtonInfo;
  void imageInfo;

  return (
    <div className="py-32 bg-[#10131a] scroll-mt-20">
      {content && (
        <div className="max-w-7xl mx-auto px-8">
          <div className="bg-gradient-to-r from-[#1d2026] to-[#272a31] rounded-[2rem] p-12 md:p-24 relative overflow-hidden">
            <div className="absolute inset-0 circuit-bg opacity-10" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter">
                GET_IN_TOUCH
              </h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="contact-name" className="text-[#c4c6cc] text-xs tracking-widest uppercase">
                    {content.form_name_label}
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    className="mt-2 w-full rounded-xl bg-[#10131a] border border-[#44474c]/30 px-4 py-3 text-[#e1e2eb] outline-none focus:border-[#00daf3]"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="text-[#c4c6cc] text-xs tracking-widest uppercase">
                    {content.form_email_label}
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    className="mt-2 w-full rounded-xl bg-[#10131a] border border-[#44474c]/30 px-4 py-3 text-[#e1e2eb] outline-none focus:border-[#00daf3]"
                  />
                </div>
                <div>
                  <label htmlFor="contact-subject" className="text-[#c4c6cc] text-xs tracking-widest uppercase">
                    {content.form_subject_label}
                  </label>
                  <select
                    id="contact-subject"
                    name="subject"
                    required
                    className="mt-2 w-full rounded-xl bg-[#10131a] border border-[#44474c]/30 px-4 py-3 text-[#e1e2eb] outline-none focus:border-[#00daf3]"
                  >
                    {content.form_subject_options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="contact-message" className="text-[#c4c6cc] text-xs tracking-widest uppercase">
                    {content.form_message_label}
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={6}
                    className="mt-2 w-full rounded-xl bg-[#10131a] border border-[#44474c]/30 px-4 py-3 text-[#e1e2eb] outline-none focus:border-[#00daf3] resize-y"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#00daf3] text-[#00363d] font-bold px-10 py-5 rounded-xl text-lg hover:shadow-[0_0_50px_rgba(0,218,243,0.3)] transition-all h-auto"
                >
                  <Send className="size-5" />
                  SEND_MESSAGE
                </Button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// export function ContactSection({ t }: { t: (key: string) => string }) {
//   return (
//     <section className="py-32 bg-[#10131a] scroll-mt-20" id="04_CONTACT">
//       <div className="max-w-7xl mx-auto px-8">
//         <div className="bg-gradient-to-r from-[#1d2026] to-[#272a31] rounded-[2rem] p-12 md:p-24 text-center relative overflow-hidden">
//           <div className="absolute inset-0 circuit-bg opacity-10" />
//           <div className="relative z-10 max-w-2xl mx-auto">
//             <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter">
//               {t('contact.titlePrefix')}{" "}
//               <span className="text-[#00daf3] italic">{t('contact.titleAccent')}</span>{" "}
//               {t('contact.titleSuffix')}
//             </h2>
//             <p className="text-[#c4c6cc] text-lg mb-12">
//               {t('contact.description')}
//             </p>
//             <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
//               <Button
//                 asChild
//                 className="w-full md:w-auto bg-[#00daf3] text-[#00363d] font-bold px-10 py-5 rounded-xl text-lg hover:shadow-[0_0_50px_rgba(0,218,243,0.3)] transition-all h-auto"
//               >
//                 <a href="mailto:hello@thomaskongolo.dev" className="flex items-center gap-3">
//                   <Send className="size-5" />
//                   {t('contact.ctaLabel')}
//                 </a>
//               </Button>
//               <div className="text-[#c4c6cc] text-xs tracking-widest uppercase">
//                 {t('contact.responseTime')}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
