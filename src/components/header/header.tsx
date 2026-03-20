import Link from "next/link";
import { Button } from "../ui/button";
import { ActiveLink } from "../active-link";
import { Logo } from "../logo";

export const Header = () => {
  return (
    <header
      className="fixed m-0 z-50 w-full bg-neutral-silver backdrop-blur
     supports-[backdrop-filter]:bg-background/60"
    >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex h-16 items-center justify-between">
        <Logo modeDark/>
        <nav className="flex items-center gap-6">
          <ActiveLink href="/">Home</ActiveLink>
          <ActiveLink href="/service">Service</ActiveLink>
          <ActiveLink href="/feature">Feature</ActiveLink>
          <ActiveLink href="/product">Product</ActiveLink>
          <ActiveLink href="/testimonial">Testimonial</ActiveLink>
          <ActiveLink href="/faq">FAQ</ActiveLink>
        </nav>
        <nav className="flex items-center gap-6">
        <Link href="/login" className="text-primary">Login</Link>
        <Button asChild>
          <Link href="/signup">Sign up</Link>
        </Button>
        </nav>
      </div>
      </div>
    </header>
  );
};
