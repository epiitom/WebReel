"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { 
  User, 
  Film, 
  LogOut, 
  Upload, 
  Menu,
  X
} from "lucide-react";
import { useNotification } from "./Notification";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const { data: session } = useSession();
  const { showNotification } = useNotification();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  // Handle mounted state
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut();
      showNotification("Signed out successfully", "success");
    } catch {
      showNotification("Failed to sign out", "error");
    }
  };

  const isActive = (path: string) => pathname === path;

  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between h-14 bg-black/40 backdrop-blur-md rounded-2xl px-4 mt-2 border border-white/10">
            {/* Logo and brand name */}
            <Link
              href="/"
              className="flex items-center gap-2 font-bold text-lg transition-all duration-200 hover:scale-105"
              prefetch={true}
            >
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-1.5 rounded-lg shadow-lg">
                <Film className="w-4 h-4 text-white" />
              </div>
              <span className="hidden sm:inline bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent font-extrabold">
                Reelsit
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-5">
              {session ? null : null}
            </nav>

            {/* User menu */}
            <div className="flex items-center gap-3">
              {session ? (
                <div className="relative group">
                  <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-200 backdrop-blur-sm border border-white/10">
                    <User className="w-4 h-4" />
                    <span className="hidden md:inline text-sm">
                      {session.user?.email?.split("@")[0]}
                    </span>
                  </button>

                  {/* Dropdown menu */}
                  <div className="absolute right-0 mt-2 w-56 origin-top-right rounded-lg bg-black/90 backdrop-blur-md text-white shadow-lg ring-1 ring-white/20 invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200">
                    <div className="py-1.5">
                      <div className="px-3 py-2 border-b border-white/10">
                        <p className="text-sm text-gray-300">Signed in as</p>
                        <p className="text-sm font-medium truncate">{session.user?.email}</p>
                      </div>
                      
                      <Link
                        href="/videos"
                        className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-white/10 transition-colors duration-150"
                      >
                        <Film className="w-3.5 h-3.5" />
                        <span>My Videos</span>
                      </Link>

                      <Link
                        href="/upload"
                        className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-white/10 transition-colors duration-150"
                      >
                        <Upload className="w-3.5 h-3.5" />
                        <span>Upload Video</span>
                      </Link>
                      
                      <button
                        onClick={handleSignOut}
                        className="flex items-center gap-2 px-3 py-2 text-sm w-full text-left text-red-400 hover:bg-red-500/10 transition-colors duration-150"
                      >
                        <LogOut className="w-3.5 h-3.5" />
                        <span>Sign Out</span>
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Link
                    href="/login"
                    className="btn btn-primary btn-sm"
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/register"
                    className="btn btn-outline btn-sm"
                  >
                    Register
                  </Link>
                </div>
              )}

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-1.5 rounded-lg hover:bg-white/10 transition-colors"
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-white/10">
          <nav className="px-3 py-2 space-y-1">
            <Link
              href="/"
              className={`block px-3 py-1.5 rounded-lg text-sm ${
                isActive("/") 
                  ? "bg-white/10 text-white" 
                  : "text-gray-300 hover:bg-white/10 hover:text-white"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            {session ? (
              <>
                <Link
                  href="/videos"
                  className={`block px-3 py-1.5 rounded-lg text-sm ${
                    isActive("/videos") 
                      ? "bg-white/10 text-white" 
                      : "text-gray-300 hover:bg-white/10 hover:text-white"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Videos
                </Link>
                <Link
                  href="/upload"
                  className={`block px-3 py-1.5 rounded-lg text-sm ${
                    isActive("/upload") 
                      ? "bg-white/10 text-white" 
                      : "text-gray-300 hover:bg-white/10 hover:text-white"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Upload
                </Link>
                <button
                  onClick={() => {
                    handleSignOut();
                    setIsMenuOpen(false);
                  }}
                  className="w-full text-left px-3 py-1.5 rounded-lg text-sm text-red-400 hover:bg-red-500/10"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="block px-3 py-1.5 rounded-lg text-sm text-gray-300 hover:bg-white/10 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign In
                </Link>
                <Link
                  href="/register"
                  className="block px-3 py-1.5 rounded-lg text-sm text-gray-300 hover:bg-white/10 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </Link>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}