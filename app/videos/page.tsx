"use client";

import React, { useEffect, useState } from "react";
import VideoFeed from "../components/VideoFeed";
import { IVideo } from "@/models/Video";
import { apiClient } from "../../lib/api-client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Upload, Loader2 } from "lucide-react";
import Link from "next/link";

export default function VideosPage() {
  const [videos, setVideos] = useState<IVideo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    // Redirect to home if not logged in
    if (!session) {
      router.push("/");
      return;
    }

    const fetchVideos = async () => {
      try {
        setIsLoading(true);
        const data = await apiClient.getVideos();
        setVideos(data);
      } catch (error) {
        console.error("Error fetching videos:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchVideos();
  }, [session, router]);

  if (!session) {
    return null; // Don't render anything while redirecting
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
          >
            Your Videos
          </motion.h1>
          
          <Link
            href="/upload"
            className="btn btn-primary group"
          >
            <Upload className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            Upload Video
          </Link>
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
          </div>
        ) : videos.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <h2 className="text-2xl font-semibold mb-4">No videos yet</h2>
            <p className="text-gray-400 mb-8">Start sharing your moments with the world!</p>
            <Link
              href="/upload"
              className="btn btn-primary btn-lg group"
            >
              <Upload className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Upload Your First Video
            </Link>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <VideoFeed videos={videos} />
          </motion.div>
        )}
      </div>
    </div>
  );
} 