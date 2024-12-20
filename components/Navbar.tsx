import { auth, signOut, signIn } from "@/auth";
import { LogOutIcon, PlusCircleIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Navbar = async () => {
  const session = await auth();
  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans text-black">
      <nav className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <Link href="/">
            <h1 className="font-handlee text-2xl font-bold">archan<span className="text-primary">Blogs</span></h1>
          </Link>
          <Link href="https://archan.dev">
            <h1 className="font-work-sans hover:underline">Portfolio</h1>
          </Link>
        </div>
        <div className="flex items-center gap-5">
          {session && session?.user ? (
            <>
              <Link href={"/blog/create"}>
                <span className="max-sm:hidden">Create</span>
                <PlusCircleIcon className="size-6 sm:hidden" />
              </Link>

              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
              >
                <button type="submit" className="max-sm:hidden">
                  Logout
                </button>
                <button type="submit" className="sm:hidden">
                  <LogOutIcon className="size-6 text-red-500" />
                </button>
              </form>

              <Link href={`/user/${session?.id}`}>
                <span className="max-sm:hidden">{session?.user?.name}</span>
                <Avatar className="size-10 sm:hidden">
                  <AvatarImage
                    src={session?.user?.image || ""}
                    alt={session?.user?.name || ""}
                  />
                  <AvatarFallback>AV</AvatarFallback>
                </Avatar>
              </Link>
            </>
          ) : (
            <form
              action={async () => {
                "use server";
                await signIn("github");
              }}
            >
              <button type="submit">Login</button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
