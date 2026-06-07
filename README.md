# LearnX - Student Dashboard

A modern learning dashboard built using Next.js, Tailwind CSS, Supabase, and Framer Motion.

## Features

- Modern Bento Grid Layout
- Responsive Sidebar Navigation
- Dynamic Course Cards
- Supabase Database Integration
- Server-Side Data Fetching
- Loading State Handling
- Error Handling
- Animated Progress Bars
- Framer Motion Animations
- Responsive Design

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Supabase
- Framer Motion
- Lucide React

## Database Schema

courses

- id
- title
- progress
- icon_name
- created_at

## Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Architecture

The project uses:

- Next.js Server Components for data fetching
- Supabase PostgreSQL as backend
- Reusable UI components
- Component-based architecture
- Responsive Bento Grid dashboard

## Challenges Faced

- Connecting Supabase with Next.js
- Handling loading and error states
- Creating reusable dashboard components
- Deploying environment variables on Vercel

## Live Demo

Vercel Deployment:
https://student-dashboard-sigma-five.vercel.app/

## GitHub Repository

https://github.com/Anshi-G/student-dashboard
