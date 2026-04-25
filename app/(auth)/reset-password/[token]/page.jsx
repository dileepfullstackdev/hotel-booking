"use client";
import PublicRoute from "../../../../components/PublicRoute";
import { useForm } from "react-hook-form";
import { Input, Button } from "@heroui/react";
import { useRouter, useParams } from "next/navigation";
import { motion } from "framer-motion";
import { Lock, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ResetPassword() {
  const router = useRouter();
  const params = useParams();
  const token = params.token;

  const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm();
  const password = watch("password");

  const onSubmit = async (data) => {
    alert("Password reset successful (mock)");
    router.push("/login");
  };

  return (
    <PublicRoute>
      <div className="relative min-h-screen w-full overflow-hidden flex flex-col justify-center items-center px-6 bg-black z-0">
        <div 
          className="absolute inset-0 z-[-1] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&w=2000&q=80')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/95" />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          className="relative z-10 w-full max-w-md mt-16 md:mt-0"
        >
          <div className="text-center mb-8">
            <motion.p className="text-sm tracking-[0.2em] font-medium mb-2 uppercase drop-shadow-lg text-white/70">
              SECURE
            </motion.p>
            <motion.h1 className="text-4xl font-black tracking-tighter drop-shadow-2xl text-white uppercase">
              Reset Password
            </motion.h1>
          </div>

          <div className="bg-white/10 backdrop-blur-2xl p-8 rounded-3xl border border-white/20 shadow-2xl">
            {!token ? (
              <div className="text-center py-6">
                <p className="text-red-400 font-semibold uppercase tracking-wider">Invalid reset link</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="flex flex-col w-full gap-2">
                  <label className="text-white/90 font-semibold uppercase tracking-wider text-[11px] ml-1">New Password</label>
                  <div className="relative w-full">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
                      <Lock size={18} className={errors.password ? "text-red-400" : "text-white/50"} />
                    </div>
                    <Input 
                      type="password" placeholder="Enter new password" 
                      className={`w-full bg-white/10 border border-white/20 hover:border-white/40 focus:border-white/50 focus:bg-white/20 backdrop-blur-md shadow-inner transition-all h-14 rounded-xl text-white placeholder:text-white/50 pl-11 pr-4 ${errors.password && '!border-red-500/70 !bg-red-500/10'}`}
                      {...register("password", { required: "Password required", minLength: { value: 6, message: "Minimum 6 characters" }})}
                    />
                  </div>
                  {errors.password && <p className="text-red-300 text-xs font-semibold ml-1">{errors.password.message}</p>}
                </div>

                <div className="flex flex-col w-full gap-2">
                  <label className="text-white/90 font-semibold uppercase tracking-wider text-[11px] ml-1">Confirm Password</label>
                  <div className="relative w-full">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
                      <Lock size={18} className={errors.confirmPassword ? "text-red-400" : "text-white/50"} />
                    </div>
                    <Input 
                      type="password" placeholder="Re-enter password" 
                      className={`w-full bg-white/10 border border-white/20 hover:border-white/40 focus:border-white/50 focus:bg-white/20 backdrop-blur-md shadow-inner transition-all h-14 rounded-xl text-white placeholder:text-white/50 pl-11 pr-4 ${errors.confirmPassword && '!border-red-500/70 !bg-red-500/10'}`}
                      {...register("confirmPassword", { required: "Confirm password", validate: (val) => val === password || "Passwords do not match" })}
                    />
                  </div>
                  {errors.confirmPassword && <p className="text-red-300 text-xs font-semibold ml-1">{errors.confirmPassword.message}</p>}
                </div>

                <Button 
                  type="submit" isLoading={isSubmitting} size="lg"
                  className="w-full bg-white text-black font-bold rounded-2xl py-6 shadow-2xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 mt-2"
                >
                  Reset Password <ArrowRight size={18} />
                </Button>
              </form>
            )}

            <div className="mt-8 text-center pt-6 border-t border-white/10">
              <p className="text-sm text-white/60">
                Back to <Link href="/login" className="text-white font-bold hover:underline transition-all">Login</Link>
              </p>
            </div>          
          </div>
        </motion.div>
      </div>
    </PublicRoute>
  );
}