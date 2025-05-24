🎬 WebReel
WebReel is a modern video-sharing platform that enables users to upload, share, and discover engaging video content. Built with the latest web technologies, WebReel offers a seamless and interactive experience for content creators and viewers alike.


🔗 Live Demo: web-reel-w7tg.vercel.app

🚀 Features
User Authentication: Secure sign-up and login functionalities.

Video Upload: Easily upload videos in various formats.

Content Discovery: Explore trending and recent videos.

User Engagement: Like, comment, and share videos.

Responsive Design: Optimized for desktops, tablets, and mobile devices.

🛠️ Tech Stack
Frontend: Next.js with TypeScript

Styling: Tailwind CSS & DaisyUI

Authentication: NextAuth.js

Deployment: Vercel

📦 Installation
Clone the Repository:

bash
Copy
Edit
git clone https://github.com/epiitom/WebReel.git
cd WebReel
Install Dependencies:

Using npm:

bash
Copy
Edit
npm install
Or using yarn:

bash
Copy
Edit
yarn install
Configure Environment Variables:

Create a .env.local file in the root directory and add the necessary environment variables:

env
Copy
Edit
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret
Note: Replace your_nextauth_secret with a secure secret. Ensure that values are not enclosed in quotes unless necessary.

Run the Development Server:

Using npm:

bash
Copy
Edit
npm run dev
Or using yarn:

bash
Copy
Edit
yarn dev
Open http://localhost:3000 in your browser to view the application.

🚀 Deployment
WebReel is deployed on Vercel, which offers seamless integration with GitHub repositories.

To deploy your own version:

Push to GitHub: Ensure your project is committed and pushed to a GitHub repository.

Import to Vercel:

Navigate to Vercel and sign in.

Click on "New Project" and import your GitHub repository.

Configure the project settings as needed.

Set Environment Variables:

In the Vercel dashboard, go to your project settings and add the necessary environment variables under the "Environment Variables" section.

Deploy: Vercel will automatically build and deploy your project. A unique URL will be generated for your live site.

