import React from "react";
import { Logo } from "../logo";
import { Facebook, Instagram, Twitter, Linkedin, Send } from "lucide-react";
import { Button, Input } from "@base-ui/react";

type SocialMediaProps = {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
};

type ColumnProps = {
  title: string;
  links?: { name: string; href: string }[];
  inputActive?: boolean;
};

export const Footer = () => {
  const columns: ColumnProps[] = [
    {
      title: "Company",
      links: [
        { name: "About us", href: "/about" },
        { name: "Contact us", href: "/contact" },
        { name: "Blog", href: "/blog" },
        { name: "Pricing", href: "/pricing" },
        { name: "Testimonials", href: "/testimonials" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "/help" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Legal", href: "/legal" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Status", href: "/status" },
      ],
    },
    {
      title: "Stay up to date",
      inputActive: true,
    },
  ];

  const socialMedia: SocialMediaProps[] = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/hugh514",
      icon: Facebook,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/hugh514",
      icon: Twitter,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/hugh514/",
      icon: Instagram,
    },
    {
      name: "Linkedin",
      href: "https://www.linkedin.com/company/hugh514/",
      icon: Linkedin,
    },
  ];
  return (
    <footer className="border-t border-border bg-card-foreground backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-row items-center justify-between gap-4 md:flex-row">
          <div className="flex flex-col items-start gap-5">
            <Logo />
            <p className="text-sm font-medium text-white">
              © 2026 Hugo Santos. <br /> All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {socialMedia.map((social) => (
                <a key={social.name} href={social.href}>
                  <span
                    className="text-sm font-medium  rounded-full
                   h-10 w-10 flex items-center justify-center text-white bg-slate-500/20 
                   hover:bg-slate-500/70 transition-colors"
                  >
                    <social.icon className="h-5 w-5" />
                  </span>
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            {columns.map((col) => (
              <div key={col.title} className="flex flex-col items-center gap-3">
                <h1 className="font-bold text-white">{col.title}</h1>
                {col.links &&
                  col.links.map((link) => (
                    <a key={link.name} href={link.href}>
                      <span className="text-sm font-medium text-white">
                        {link.name}
                      </span>
                    </a>
                  ))}
                {col.inputActive && (
                  <div
                    className="flex flex-row bg-slate-500/25 
                    p-2 rounded-md text-sm
                  items-center gap-4 text-white"
                  >
                    <Input
                      type="email"
                      placeholder="Your email address"
                      className="w-full bg-transparent border-none"
                    />
                    <Button>
                      <Send className="h-5 w-5" />
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
