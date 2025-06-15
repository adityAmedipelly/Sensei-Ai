import React from "react";
import { SignedOut, SignInButton, UserButton, SignedIn } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, FileText, GraduationCap, LayoutDashboard, PenBox, StarsIcon } from "lucide-react";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { checkUser } from "@/lib/checkUser";

async function  Header(){
  await checkUser();

  return (
    <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 support-[backdrop-filter]:bg-background/60 ">
      <nav className="w-full flex justify-between items-center px-4 h-16">
        
        <div className="mr-auto">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Sensei Logo"
              width={200}
              height={60}
              className="h-12 py-1 w-auto object-contain"
            />
          </Link>
        </div>

        
        <div className="flex items-center space-x-2 md:space-x-4  ">
          <SignedIn>
            {/* Industry Insights Button */}
            <Link href={"/dashboard"}>
              <Button variant="outline" className= "cursor-pointer">
                <LayoutDashboard className="h-4 w-4" />
                <span className="hidden md:block"> Industry Insights</span>
              </Button>
            </Link>

            {/* Growth Tools Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button className= "cursor-pointer">
                  <StarsIcon className="h-4 w-4" />
                  <span className="hidden md:block"> Growth Tools </span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Link href={"/resume"} className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    <span> Build Resume </span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href={"/ai-cover-letter"} className="flex items-center gap-2">
                    <PenBox className="h-4 w-4" />
                    <span> AI Cover Letter </span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href={"/interview"} className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4" />
                    <span> Interview Prep </span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SignedIn>

          
          <SignedOut>
            <SignInButton>
              <Button variant="outline">Sign In</Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-16 h-16",
                  userButtonPopoverCard: "shadow-xl",
                  userPreviewMainIdentifier: "font-semibold",
                },
              }}
              afterSignOutUrl="/"
            />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
}

export default Header;
