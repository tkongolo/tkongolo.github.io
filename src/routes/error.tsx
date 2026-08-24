import { useTranslation } from 'react-i18next'
import { AlertTriangle, Home } from 'lucide-react'
import { Button } from "../components/ui/button.tsx";
import { Navigate, useParams } from "react-router-dom";


function ErrorPage({ code, title, description, backHome }: {
  code: string
  title: string
  description: string
  backHome: string
}) {

  return (
      <section className="relative min-h-screen flex items-center justify-center circuit-bg">
        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-[#ffba38]/5 blur-[120px] rounded-[999px]" />
        <div className="absolute bottom-1/4 right-1/4 w-1/3 h-1/3 bg-[#00daf3]/5 blur-[100px] rounded-[999px]" />

        <div className="relative z-10 text-center max-w-xl mx-auto px-8 py-24">
          {/* Icon */}
          <div className="mb-8 inline-flex items-center justify-center w-24 h-24 rounded-full bg-[#272a31] border border-[#44474c]/30">
            <AlertTriangle className="size-10 text-[#ffba38]" />
          </div>

          {/* Code */}
          <div className="text-8xl md:text-9xl font-black text-[#00daf3]/10 mb-4 tracking-tighter">
            {code}
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-[#e1e2eb] mb-4 tracking-tighter">
            {title}
          </h1>

          {/* Description */}
          <p className="text-[#c4c6cc] leading-relaxed mb-10 max-w-md mx-auto">
            {description}
          </p>

          {/* Back home */}
          <Button
            asChild
            className="bg-gradient-to-br from-[#00daf3] to-[#00b8d4] text-[#0a0f16] font-bold px-8 py-3 rounded-xl shadow-[0_0_40px_rgba(0,218,243,0.2)] hover:shadow-[0_0_60px_rgba(0,218,243,0.3)] transition-all h-auto"
          >
            <a href="/" className="flex items-center gap-2">
              <Home className="size-4" />
              {backHome}
            </a>
          </Button>
        </div>
      </section>
  )
}

export default function ErrorRoute(){
  const { t } = useTranslation();
  const params = useParams();

  const backHomeText = t('app.buttons.error_backhome') as string;
  const errorPages = t('error.pages', { returnObjects: true }) as any[];
  const selectedError = errorPages.find(err => err['type'] === params.code ) ?? null;

  if (!selectedError) {
    return <Navigate to="/error/404" replace />;
  }

  return (
    <ErrorPage
      code={selectedError['type']}
      title={selectedError['content']['title']}
      description={selectedError['content']['description']}
      backHome={backHomeText}
    />
  )
}
