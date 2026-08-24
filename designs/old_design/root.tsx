import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root.ts";
import "./app.css";
import { HeaderProps } from "./models/header.models.ts";
import { Header } from "./components/global/header.components.tsx";
import { FooterProps } from "./models/footer.models.ts";
import { Footer } from "./components/global/footer.components.tsx";
import { useEffect, useState } from "react";
import { i18n, initializeI18n } from "@/lib/language/deno-config.ts";
import { I18nextProvider } from "react-i18next";
import { SpinnerPage } from "./components/global/other-views.components.tsx";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href:
      "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Manrope:wght@300;400;500;600;700;800&display=swap",
  },
  {
    rel: "stylesheet",
    href:
      "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap",
  },
];

const headerData: HeaderProps = {
  brand: "THOMAS_KONGOLO",
  navItems: [
    { href: "#01_ABOUT", label: "01_ABOUT" },
    { href: "#02_SKILLS", label: "02_SKILLS" },
    { href: "#03_EXPERIENCE", label: "03_EXPERIENCE" },
    { href: "#04_CONTACT", label: "04_CONTACT" },
  ],
  ctaHref: "#04_CONTACT",
  ctaLabel: "GET_IN_TOUCH",
};

const footerData: FooterProps = {
  brand: "THOMAS KONGOLO",
  copyright: "© 2024 THOMAS KONGOLO | SYSTEM_OPERATIONAL",
  links: [
    { href: "#", label: "GITHUB" },
    { href: "#", label: "LINKEDIN" },
    { href: "#", label: "STACK_OVERFLOW" },
  ],
};

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-surface text-on-surface">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export function MainLayout({ children }: { children: React.ReactNode }) {

  return (
    <Layout>
      <header>
        <Header {...headerData} />
      </header>
      <div className="bg-surface text-on-surface selection:bg-primary/30 selection:text-primary">
        <main>
          {children}
        </main>
      </div>
      <footer>
        <Footer {...footerData} />
      </footer>
    </Layout>
  );
}

export default function App() {
  return (
    <Outlet />
  )
  
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404
      ? "The requested page could not be found."
      : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
