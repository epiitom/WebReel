// tailwind.config.ts
import type { Config } from 'tailwindcss'
import daisyui from 'daisyui'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
      },
    },
  },
  plugins: [
    // Correctly pass the daisyUI configuration object directly to the plugin
    daisyui({
      themes: ["dark"],
      // other daisyUI config options can go here
    }),
  ],
  // Remove the standalone daisyui property from here, as it's now configured within the plugin
}

export default config