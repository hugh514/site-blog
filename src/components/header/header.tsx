import Link from "next/link";
import { Button } from "../ui/button";

export const Header = () => {
  return (
    <header
      className="fixed m-0 z-50 w-full bg-neutral-silver backdrop-blur
     supports-[backdrop-filter]:bg-background/60"
    >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex h-16 items-center justify-between">
        <Link href="/">Logo</Link>
        <nav className="flex items-center gap-6">
          <Link href="/">Home</Link>
          <Link href="/service">Service</Link>
          <Link href="/feature">Feature</Link>
          <Link href="/product">Product</Link>
          <Link href="/testimonial">Testimonial</Link>
          <Link href="/faq">FAQ</Link>
        </nav>
        <nav className="flex items-center gap-6">
        <Link href="/login" className="text-primary">Login</Link>
        <Button>Sign up</Button>
        </nav>
      </div>
      </div>
    </header>
  );
};
