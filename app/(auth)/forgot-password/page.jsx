"use client";
import PublicRoute from "../../../components/PublicRoute";
import { useForm } from "react-hook-form";
import { Input, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ForgotPassword() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Reset request for:", data.email);
    const fakeToken = "abc123";
    router.push(`/reset-password/${fakeToken}`);
  };

  return (
    <PublicRoute>
      <div className="relative min-h-screen w-full overflow-hidden flex flex-col justify-center items-center px-6 bg-black z-0">
        {/* Background Image - High Quality Nature Theme matching Landing Page */}
        <div 
          className="absolute inset-0 z-[-1] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&w=2000&q=80')"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/95" />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        </div>

        {/* Form Container */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 w-full max-w-md mt-16 md:mt-0"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <motion.p 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
              className="text-sm tracking-[0.2em] font-medium mb-2 uppercase drop-shadow-lg text-white/70"
            >
              Account Recovery
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
              className="text-4xl font-black tracking-tighter drop-shadow-2xl text-white uppercase"
            >
              Recover
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
              className="text-sm text-white/50 mt-2"
            >
              Enter your email to receive a reset link
            </motion.p>
          </div>

          {/* Reset Card */}
          <div className="bg-white/10 backdrop-blur-2xl p-8 rounded-3xl border border-white/20 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              
              <div className="flex flex-col w-full gap-2">
                <label className="text-white/90 font-semibold uppercase tracking-wider text-[11px] ml-1" htmlFor="email">
                  Email
                </label>
                <div className="relative w-full">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
                    <Mail size={18} className={errors.email ? "text-red-400" : "text-white/50"} />
                  </div>
                  <Input 
                    id="email" 
                    placeholder="name@example.com" 
                    className={`w-full bg-white/10 border border-white/20 hover:border-white/40 focus:border-white/50 focus:bg-white/20 backdrop-blur-md shadow-inner transition-all h-14 rounded-xl text-white placeholder:text-white/50 pl-11 pr-4 ${errors.email && '!border-red-500/70 !bg-red-500/10'}`}
                    {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email" }})}
                  />
                </div>
                {errors.email && (
                  <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="text-red-300 text-xs font-semibold ml-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span> {errors.email.message}
                  </motion.p>
                )}
              </div>

              <Button 
                type="submit" 
                isLoading={isSubmitting} 
                isDisabled={isSubmitting}
                size="lg"
                className="w-full bg-white text-black font-bold rounded-2xl py-6 shadow-2xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 mt-2"
              >
                {!isSubmitting && (
                  <>
                    Send Reset Link <ArrowRight size={18} />
                  </>
                )}
              </Button>
            </form>

            <div className="mt-8 text-center pt-6 border-t border-white/10">
              <p className="text-sm text-white/60">
                Remember your password?{" "}
                <Link href="/login" className="text-white font-bold hover:underline transition-all drop-shadow-sm">
                  Login
                </Link>
              </p>
            </div>          
          </div>
        </motion.div>
      </div>
    </PublicRoute>
  );
}