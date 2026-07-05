import {FaGithub,FaLinkedin,FaStackOverflow} from 'react-icons/fa';

function copyRightText(brand: string) {
  const year = new Date().getFullYear();
  return `© ${year} ${brand}. All rights reserved.`;
}

function getSocialIcon(label: string) {
  switch (label.toLowerCase()) {
    case 'github':
      return <FaGithub />;
    case 'linkedin':
      return <FaLinkedin />;
    case 'stackoverflow':
      return <FaStackOverflow />;
    default:
      return null;
  }
}

export default function Footer({brand,social_links}: { brand: string , social_links: any[] }){

    return (
        <footer className="bg-[#191c22] border-t border-slate-800/30">
            <div className="flex flex-col md:flex-row justify-between items-center px-12 max-w-7xl mx-auto py-12">
                <div className="mb-8 md:mb-0">
                    <div className="text-sm font-semibold text-slate-200 tracking-widest uppercase mb-2">
                        {brand}
                    </div>
                    <div className="text-[10px] tracking-[0.2em] uppercase text-slate-500">
                        { copyRightText(brand) }
                    </div>
                </div>
                <div className="flex gap-10">
                    {
                        social_links.map((link) => (
                            <a
                                key={link['provider']}
                                className="text-lg text-slate-500 hover:text-[#ffba38] transition-colors duration-200 opacity-80 hover:opacity-100"
                                href={link['link']}
                            >
                                {getSocialIcon(link['provider'])}
                            </a>
                        ))
                    }
                </div>
            </div>
        </footer>
    )
}