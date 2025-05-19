"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { Home, User, Film, LogOut, LogIn } from "lucide-react";
import { useNotification } from "./Notification";

export default function Header() {
  const { data: session } = useSession();
  const { showNotification } = useNotification();

  const handleSignOut = async () => {
    try {
      await signOut();
      showNotification("Signed out successfully", "success");
    } catch {
      showNotification("Failed to sign out", "error");
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-gradient-to-r from-blue-900 to-purple-900 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and brand name */}
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-xl transition-all duration-200 hover:scale-105"
            prefetch={true}
            onClick={() => showNotification("Welcome to ImageKit ReelsPro", "info")}
          >
            <div className="bg-white text-blue-900 p-2 rounded-full">
              <Home className="w-5 h-5" />
            </div>
            <span className="hidden sm:inline"> ReelsPro</span>
          </Link>

          {/* User menu */}
          <div className="relative group">
            <button
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
            >
              <User className="w-5 h-5" />
              <span className="hidden md:inline">
                {session ? session.user?.email?.split("@")[0] : "Account"}
              </span>
            </button>

            {/* Dropdown menu */}
            <div className="absolute right-0 mt-2 w-64 origin-top-right rounded-md bg-white text-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200">
              <div className="py-2">
                {session ? (
                  <>
                    <div className="px-4 py-3 border-b border-gray-100">
                      <p className="text-sm text-gray-500">Signed in as</p>
                      <p className="font-medium truncate">{session.user?.email}</p>
                    </div>
                    
                    <Link
                      href="/upload"
                      className="flex items-center gap-3 px-4 py-3 text-sm hover:bg-gray-100 transition-colors duration-150"
                      onClick={() => showNotification("Welcome to Admin Dashboard", "info")}
                    >
                      <Film className="w-4 h-4" />
                      <span>Video Upload</span>
                    </Link>
                    
                    <button
                      onClick={handleSignOut}
                      className="flex items-center gap-3 px-4 py-3 text-sm w-full text-left text-red-600 hover:bg-red-50 transition-colors duration-150"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Sign Out</span>
                    </button>
                  </>
                ) : (
                  <Link
                    href="/login"
                    className="flex items-center gap-3 px-4 py-3 text-sm hover:bg-gray-100 transition-colors duration-150"
                    onClick={() => showNotification("Please sign in to continue", "info")}
                  >
                    <LogIn className="w-4 h-4" />
                    <span>Login</span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}