import { ShieldAlert, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function PendingApproval() {
  return (
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
        className="bg-white/10 backdrop-blur-2xl p-10 rounded-3xl border border-white/20 shadow-2xl max-w-lg text-center"
      >
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-yellow-500/20 rounded-full border border-yellow-500/30">
            <Clock size={40} className="text-yellow-400" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-white uppercase tracking-wider mb-4">
          Under Review
        </h2>
        <p className="text-white/60">
          Your owner request is currently under review. Please wait for admin approval before accessing the dashboard.
        </p>
      </motion.div>
    </div>
  );
}