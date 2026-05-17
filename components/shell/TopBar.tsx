"use client";

import * as React from "react";
import Link from "next/link";
import { LogOut, Settings } from "lucide-react";

import { AppCommand, TopBarSearchTrigger } from "@/components/shell/AppCommand";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DEMO_USER_FIRST_NAME, dicebearAvatar } from "@/lib/constants";

export function TopBar() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", down);
    return () => window.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <AppCommand open={open} onOpenChange={setOpen} />
      <header className="sticky top-0 z-30 flex items-center gap-4 border-b border-border bg-background/80 px-4 py-4 backdrop-blur-md md:px-8">
        <div className="flex flex-1 justify-center md:justify-start">
          <TopBarSearchTrigger onOpen={() => setOpen(true)} />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full border border-border bg-card"
            >
              <Avatar className="h-8 w-8">
                <AvatarImage
                  src={dicebearAvatar(DEMO_USER_FIRST_NAME)}
                  alt=""
                />
                <AvatarFallback>{DEMO_USER_FIRST_NAME.slice(0, 1)}</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 rounded-xl">
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col gap-1">
                <span className="text-sm font-medium">
                  {DEMO_USER_FIRST_NAME}
                </span>
                <span className="text-xs text-muted-foreground">
                  Voter · demo profile
                </span>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/app/profile">
                <Settings className="mr-2 h-4 w-4" />
                Profile settings
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/">
                <LogOut className="mr-2 h-4 w-4" />
                Leave prototype
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
    </>
  );
}
