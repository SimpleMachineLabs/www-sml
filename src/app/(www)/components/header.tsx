"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/Button";

const Header = () => {
  const pathname = usePathname();
  return (
    <header className='sticky z-40 top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container flex h-14 max-w-screen-2xl items-center'>
        <Link className='flex flex-1 items-center' href='/'>
          <span className='text-lg tracking-wide font-semibold'>
            simpl
            <span className='text-primary text-lg tracking-wide font-semibold'>
              machine
            </span>
          </span>
        </Link>

        <nav className='flex items-center justify-between space-x-4 md:justify-end'>
          <Link
            href='/docs/introduction'
            className={`
              transition-colors hover:text-foreground/80 ${
                pathname === "/docs/introduction" ||
                pathname === "/docs/installation"
                  ? "text-foreground"
                  : "text-foreground/60"
              }
              
            `}>
            Get Started
          </Link>
          <Link
            href='/docs/api'
            className={`
              transition-colors hover:text-foreground/80 ${
                pathname?.startsWith("/docs/api")
                  ? "text-foreground"
                  : "text-foreground/60"
              }  
            `}>
            Docs
          </Link>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </nav>
      </div>
    </header>
  );
};

export default Header;
