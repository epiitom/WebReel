"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Play, 
  Upload, 
  Share2, 
  Heart, 
  MessageCircle, 
  ArrowRight 
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        
        <div className="container mx-auto px-4 z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Share Your Moments
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Create, share, and discover amazing video content with Reelsit. 
              Your platform for creative expression.
            </p>
            <div className="flex gap-4 justify-center">
              <Link 
                href="/register" 
                className="btn btn-primary btn-lg group"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/" 
                className="btn btn-outline btn-lg"
              >
                Explore Videos
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-l from-purple-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Why Choose Reelsit?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Upload className="w-8 h-8" />,
                title: "Easy Upload",
                description: "Upload your videos with just a few clicks. Support for multiple formats and sizes."
              },
              {
                icon: <Share2 className="w-8 h-8" />,
                title: "Share Instantly",
                description: "Share your content with the world. Get feedback and connect with creators."
              },
              {
                icon: <Play className="w-8 h-8" />,
                title: "High Quality",
                description: "Enjoy crystal clear video quality with our advanced streaming technology."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-colors"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                Engage With Your Audience
              </h2>
              <p className="text-gray-300 mb-8">
                Build your community with likes, comments, and shares. Connect with your audience and grow your following.
              </p>
              <div className="flex gap-6">
                <div className="flex items-center gap-2">
                  <Heart className="w-6 h-6 text-red-500" />
                  <span className="text-gray-300">Likes</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-6 h-6 text-blue-500" />
                  <span className="text-gray-300">Comments</span>
                </div>
                <div className="flex items-center gap-2">
                  <Share2 className="w-6 h-6 text-green-500" />
                  <span className="text-gray-300">Shares</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-1">
                <div className="w-full h-full rounded-xl bg-black/50 backdrop-blur-sm flex items-center justify-center">
                  <Play className="w-16 h-16 text-white/50" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Ready to Start Creating?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of creators sharing their stories on Reelsit. 
              Start your journey today.
            </p>
            <Link 
              href="/register" 
              className="btn btn-primary btn-lg group"
            >
              Create Your Account
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 