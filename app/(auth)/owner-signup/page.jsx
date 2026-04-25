"use client";
import { useForm } from "react-hook-form";
import { Input, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Mail, Lock, User, Building2, AlignLeft, MapPin, Map, ArrowRight } from "lucide-react";

export default function OwnerSignup() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    const ownerRequest = {
      ...data,
      role: "owner",
      status: "pending",
    };
    console.log("Owner Request:", ownerRequest);
    router.push("/login");
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden flex flex-col justify-center items-center px-6 py-24 bg-black z-0">
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
        className="relative z-10 w-full max-w-2xl"
      >
        {/* Header */}
        <div className="text-center mb-10">
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-sm tracking-[0.2em] font-medium mb-2 uppercase drop-shadow-lg text-white/70"
          >
            PARTNER WITH US
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-black tracking-tighter drop-shadow-2xl text-white uppercase"
          >
            Become a Host
          </motion.h1>
        </div>

        {/* Signup Card */}
        <div className="bg-white/10 backdrop-blur-2xl p-8 md:p-10 rounded-3xl border border-white/20 shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
            
            {/* 👤 Personal Info */}
            <div className="space-y-4">
              <h3 className="font-medium text-sm tracking-widest text-white/40 uppercase mb-4 border-b border-white/10 pb-2">
                1. Personal Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col w-full gap-2">
                  <label className="text-white/90 font-semibold uppercase tracking-wider text-[11px] ml-1">Name</label>
                  <div className="relative w-full">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
                      <User size={18} className={errors.name ? "text-red-400" : "text-white/50"} />
                    </div>
                    <Input 
                      placeholder="Enter your name" 
                      className={`w-full bg-white/10 border border-white/20 hover:border-white/40 focus:border-white/50 focus:bg-white/20 backdrop-blur-md shadow-inner transition-all h-14 rounded-xl text-white placeholder:text-white/50 pl-11 pr-4 ${errors.name && '!border-red-500/70 !bg-red-500/10'}`}
                      {...register("name", { required: "Name is required" })}
                    />
                  </div>
                  {errors.name && (
                    <p className="text-red-300 text-xs font-semibold ml-1 flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>{errors.name.message}</p>
                  )}
                </div>

                <div className="flex flex-col w-full gap-2">
                  <label className="text-white/90 font-semibold uppercase tracking-wider text-[11px] ml-1">Email</label>
                  <div className="relative w-full">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
                      <Mail size={18} className={errors.email ? "text-red-400" : "text-white/50"} />
                    </div>
                    <Input 
                      placeholder="name@example.com" 
                      className={`w-full bg-white/10 border border-white/20 hover:border-white/40 focus:border-white/50 focus:bg-white/20 backdrop-blur-md shadow-inner transition-all h-14 rounded-xl text-white placeholder:text-white/50 pl-11 pr-4 ${errors.email && '!border-red-500/70 !bg-red-500/10'}`}
                      {...register("email", { required: "Email is required" })}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-300 text-xs font-semibold ml-1 flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>{errors.email.message}</p>
                  )}
                </div>
              </div>
            </div>

            {/* 🏨 Hotel Info */}
            <div className="space-y-4">
              <h3 className="font-medium text-sm tracking-widest text-white/40 uppercase mb-4 border-b border-white/10 pb-2">
                2. Hotel Details
              </h3>
              <div className="flex flex-col w-full gap-2">
                <label className="text-white/90 font-semibold uppercase tracking-wider text-[11px] ml-1">Hotel Name</label>
                <div className="relative w-full">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
                    <Building2 size={18} className={errors.hotelName ? "text-red-400" : "text-white/50"} />
                  </div>
                  <Input 
                    placeholder="Enter hotel name" 
                    className={`w-full bg-white/10 border border-white/20 hover:border-white/40 focus:border-white/50 focus:bg-white/20 backdrop-blur-md shadow-inner transition-all h-14 rounded-xl text-white placeholder:text-white/50 pl-11 pr-4 ${errors.hotelName && '!border-red-500/70 !bg-red-500/10'}`}
                    {...register("hotelName", { required: "Hotel name required" })}
                  />
                </div>
                {errors.hotelName && (
                  <p className="text-red-300 text-xs font-semibold ml-1 flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>{errors.hotelName.message}</p>
                )}
              </div>
              <div className="flex flex-col w-full gap-2 mt-2">
                <label className="text-white/90 font-semibold uppercase tracking-wider text-[11px] ml-1">Description</label>
                <div className="relative w-full">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
                    <AlignLeft size={18} className={errors.description ? "text-red-400" : "text-white/50"} />
                  </div>
                  <Input 
                    placeholder="Describe your hotel" 
                    className={`w-full bg-white/10 border border-white/20 hover:border-white/40 focus:border-white/50 focus:bg-white/20 backdrop-blur-md shadow-inner transition-all h-14 rounded-xl text-white placeholder:text-white/50 pl-11 pr-4 ${errors.description && '!border-red-500/70 !bg-red-500/10'}`}
                    {...register("description", { required: "Description required" })}
                  />
                </div>
                {errors.description && (
                  <p className="text-red-300 text-xs font-semibold ml-1 flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>{errors.description.message}</p>
                )}
              </div>
            </div>

            {/* 📍 Location */}
            <div className="space-y-4">
              <h3 className="font-medium text-sm tracking-widest text-white/40 uppercase mb-4 border-b border-white/10 pb-2">
                3. Location
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col w-full gap-2">
                  <label className="text-white/90 font-semibold uppercase tracking-wider text-[11px] ml-1">City</label>
                  <div className="relative w-full">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
                      <Map size={18} className={errors.city ? "text-red-400" : "text-white/50"} />
                    </div>
                    <Input 
                      placeholder="City" 
                      className={`w-full bg-white/10 border border-white/20 hover:border-white/40 focus:border-white/50 focus:bg-white/20 backdrop-blur-md shadow-inner transition-all h-14 rounded-xl text-white placeholder:text-white/50 pl-11 pr-4 ${errors.city && '!border-red-500/70 !bg-red-500/10'}`}
                      {...register("city", { required: "City required" })}
                    />
                  </div>
                  {errors.city && (
                    <p className="text-red-300 text-xs font-semibold ml-1 flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>{errors.city.message}</p>
                  )}
                </div>

                <div className="flex flex-col w-full gap-2">
                  <label className="text-white/90 font-semibold uppercase tracking-wider text-[11px] ml-1">Address</label>
                  <div className="relative w-full">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
                      <MapPin size={18} className={errors.address ? "text-red-400" : "text-white/50"} />
                    </div>
                    <Input 
                      placeholder="Full address" 
                      className={`w-full bg-white/10 border border-white/20 hover:border-white/40 focus:border-white/50 focus:bg-white/20 backdrop-blur-md shadow-inner transition-all h-14 rounded-xl text-white placeholder:text-white/50 pl-11 pr-4 ${errors.address && '!border-red-500/70 !bg-red-500/10'}`}
                      {...register("address", { required: "Address required" })}
                    />
                  </div>
                  {errors.address && (
                    <p className="text-red-300 text-xs font-semibold ml-1 flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>{errors.address.message}</p>
                  )}
                </div>
              </div>
            </div>

            {/* 🔐 Security */}
            <div className="space-y-4">
              <h3 className="font-medium text-sm tracking-widest text-white/40 uppercase mb-4 border-b border-white/10 pb-2">
                4. Security
              </h3>
              <div className="flex flex-col w-full gap-2">
                <label className="text-white/90 font-semibold uppercase tracking-wider text-[11px] ml-1">Password</label>
                <div className="relative w-full">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
                    <Lock size={18} className={errors.password ? "text-red-400" : "text-white/50"} />
                  </div>
                  <Input 
                    type="password" placeholder="Enter password" 
                    className={`w-full bg-white/10 border border-white/20 hover:border-white/40 focus:border-white/50 focus:bg-white/20 backdrop-blur-md shadow-inner transition-all h-14 rounded-xl text-white placeholder:text-white/50 pl-11 pr-4 ${errors.password && '!border-red-500/70 !bg-red-500/10'}`}
                    {...register("password", { required: "Password required", minLength: { value: 6, message: "Minimum 6 characters" }})}
                  />
                </div>
                {errors.password && (
                  <p className="text-red-300 text-xs font-semibold ml-1 flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>{errors.password.message}</p>
                )}
              </div>
            </div>

            <Button 
              type="submit" 
              isLoading={isSubmitting} 
              size="lg"
              className="w-full bg-white text-black font-bold rounded-2xl py-6 shadow-2xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 mt-4"
            >
              {!isSubmitting && (
                <>
                  Submit Application <ArrowRight size={18} />
                </>
              )}
            </Button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}