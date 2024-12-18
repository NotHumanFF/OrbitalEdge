"use client";

import React from 'react'
import { signIn } from "next-auth/react";
import Link from 'next/link';

const Signup: React.FC = () => {
  return (
    <div className="hero min-h-screen">
        <video className="absolute top-0 left-0 w-full h-full object-cover" src="startups_light_blue.mp4" autoPlay loop muted/>
        <div className="hero-content flex-col lg:flex-row-reverse gap-10">
            <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold font-mono">Signup now!</h1>
                <p className="py-6 font-mono">
                Launch your journey and let your ideas soar through the infinite expanse of interstellar space.
                </p>
                <div className='flex justify-center lg:justify-start items-center gap-1'>
                    <p className='py-0 font-mono'>Already have an account?</p>
                    <Link href="/login" className="link link-primary">Login here!</Link>
                </div>
            </div>
            <div className="card backdrop-blur-md bg-white/10 border border-white/20 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body">
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered backdrop-blur-md bg-white/10 border border-white/20"
                    required
                />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered backdrop-blur-md bg-white/10 border border-white/20"
                    required
                />
                <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                    </a>
                </label>
                </div>
                <div className="form-control mt-6">
                <button className="btn btn-primary">Sign Up</button>
                </div>
                <div className="divider text-sm text-gray-400">or</div>
                <button
                    onClick={() => signIn("google")}
                    type="button"
                    className="btn btn-outline btn-primary flex items-center justify-center gap-2 mt-2"
                >
                    <img src="/google-icon.svg" alt="Google Icon" className="w-6 h-6"/>
                    Sign up with Google
                </button>
            </form>
            </div>
        </div>
    </div>
  )
}

export default Signup;