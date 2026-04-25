"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { ArrowLeft, ChevronLeft, ChevronRight, Star, Info, ShieldCheck, X, Loader2 } from "lucide-react";
import { Avatar, Button } from "@heroui/react";
import { motion, AnimatePresence } from "framer-motion";
import RoleProtectedRoute from "@/components/RoleProtectedRoute";

export default function CheckoutPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const hotelId = searchParams.get("hotelId");
  const checkIn = searchParams.get("checkIn");
  const checkOut = searchParams.get("checkOut");
  const adults = parseInt(searchParams.get("adults") || "1");
  const children = parseInt(searchParams.get("children") || "0");
  const infants = parseInt(searchParams.get("infants") || "0");
  const pets = parseInt(searchParams.get("pets") || "0");

  const [hotel, setHotel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isGatewayOpen, setIsGatewayOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("upi"); // upi, cards, netbanking
  const [isExitConfirmationOpen, setIsExitConfirmationOpen] = useState(false);
  const [showCancelledToast, setShowCancelledToast] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  useEffect(() => {
    const fetchHotel = async () => {
      try {
        const response = await fetch("/api/hotels/recommended");
        const data = await response.json();
        const found = data.find(h => h.id === hotelId);
        setHotel(found);
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };
    if (hotelId) fetchHotel();
  }, [hotelId]);

  const nights = Math.round((new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24));
  const basePrice = hotel ? (hotel.price.amount || hotel.price) * nights : 0;
  const taxes = Math.round(basePrice * 0.05); // 5% mock tax
  const total = basePrice + taxes;

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
  };

  const handleExit = () => {
    setIsExitConfirmationOpen(false);
    setIsGatewayOpen(false);
    setShowCancelledToast(true);
    setTimeout(() => setShowCancelledToast(false), 4000);
  };

  const handlePaymentSuccess = () => {
    setIsGatewayOpen(false);
    setShowSuccessToast(true);
    setTimeout(() => {
      router.replace("/user/bookings");
    }, 2000);
  };

  return (
    <RoleProtectedRoute allowedRoles={["user", "admin", "owner"]}>
      {loading ? (
        <div className="min-h-screen bg-[#050505] flex items-center justify-center text-white">Loading...</div>
      ) : !hotel ? (
        <div className="min-h-screen bg-[#050505] flex items-center justify-center text-white">Booking details not found</div>
      ) : (
        <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden">
      
      {/* Notification Toasts */}
      <AnimatePresence mode="wait">
        {showCancelledToast && (
          <motion.div 
            key="cancelled"
            initial={{ opacity: 0, scale: 0.9, y: -20, x: "-50%" }}
            animate={{ opacity: 1, scale: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, scale: 0.9, y: -20, x: "-50%" }}
            className="fixed top-8 left-1/2 z-[300] bg-white border border-rose-100 shadow-2xl rounded-2xl p-4 flex items-center gap-4 min-w-[400px]"
          >
            <div className="bg-rose-500 p-2 rounded-full">
               <X size={16} className="text-white" />
            </div>
            <div className="flex-1">
              <p className="text-black font-black text-sm">Payment cancelled</p>
              <p className="text-zinc-500 text-[13px]">There was a problem paying for your reservation. Please try again.</p>
            </div>
          </motion.div>
        )}

        {showSuccessToast && (
          <motion.div 
            key="success"
            initial={{ opacity: 0, scale: 0.9, y: -20, x: "-50%" }}
            animate={{ opacity: 1, scale: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, scale: 0.9, y: -20, x: "-50%" }}
            className="fixed top-8 left-1/2 z-[300] bg-white border border-emerald-100 shadow-2xl rounded-2xl p-4 flex items-center gap-4 min-w-[400px]"
          >
            <div className="bg-emerald-500 p-2 rounded-full">
               <ShieldCheck size={16} className="text-white" />
            </div>
            <div className="flex-1">
              <p className="text-black font-black text-sm">Payment successful!</p>
              <p className="text-zinc-500 text-[13px]">Your reservation at {hotel.name} is confirmed. Redirecting...</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
        
        {/* Header */}
        <div className="flex items-center gap-4 sm:gap-6 mb-8 sm:mb-12">
          <button 
            onClick={() => router.back()}
            className="p-2 sm:p-3 hover:bg-white/10 rounded-full transition-all border border-white/5"
          >
            <ArrowLeft size={20} className="sm:w-6 sm:h-6" />
          </button>
          <h1 className="text-2xl sm:text-4xl font-black tracking-tighter">Confirm and pay</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
          
          {/* Left Column: Payment Details */}
          <div className="flex-1 space-y-8 sm:space-y-12">
            
            <section>
              <h2 className="text-xl sm:text-2xl font-bold mb-6">Proceed to payment</h2>
              <div className="bg-white/5 border border-white/10 p-4 sm:p-6 rounded-3xl flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-2xl shrink-0">
                  <ShieldCheck size={24} className="text-white" />
                </div>
                <div>
                  <p className="font-bold text-[16px] sm:text-[17px] mb-1">Razorpay secure checkout</p>
                  <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed">
                    You’ll be directed to Razorpay to complete your payment securely. We support all major cards, Netbanking, and UPI.
                  </p>
                </div>
              </div>
            </section>

            <section className="pt-8 border-t border-white/10">
              <p className="text-[10px] sm:text-xs text-zinc-500 leading-relaxed mb-6">
                By selecting the button below, I agree to the <span className="underline font-bold text-zinc-300">booking terms</span> and the host's house rules.
              </p>
              <Button 
                className="w-full bg-white text-black font-black h-14 sm:h-16 rounded-2xl text-base sm:text-lg hover:scale-[1.01] active:scale-95 transition-all shadow-2xl"
                onClick={() => setIsGatewayOpen(true)}
              >
                Continue to Razorpay
              </Button>
            </section>

          </div>

          {/* Right Column: Checkout Card */}
          <div className="w-full lg:w-[450px]">
            <div className="lg:sticky lg:top-12 bg-[#111111] border border-white/10 rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 shadow-2xl overflow-hidden">
               
               {/* Property Summary */}
               <div className="flex gap-4 mb-6 sm:mb-8">
                  <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shrink-0 border border-white/10">
                    <img src={hotel.images?.[0] || hotel.image} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-[9px] sm:text-[10px] uppercase font-black text-zinc-500 tracking-widest mb-1">{hotel.type}</p>
                    <h3 className="font-bold text-sm sm:text-[15px] leading-snug mb-2">{hotel.name}</h3>
                    <div className="flex items-center gap-1 text-[11px] sm:text-xs font-bold">
                       <Star size={12} className="fill-white text-white" />
                       <span>{hotel.rating}</span>
                       <span className="text-zinc-500 font-medium">({hotel.reviewCount} reviews)</span>
                    </div>
                  </div>
               </div>

               <div className="h-[1px] w-full bg-white/10 mb-6 sm:mb-8" />

               {/* Details Stacks */}
               <div className="space-y-6">
                 <div className="flex justify-between items-center text-xs sm:text-sm">
                   <div>
                     <p className="font-black uppercase text-[9px] sm:text-[10px] text-zinc-500 tracking-tighter mb-0.5">Dates</p>
                     <p className="font-bold">{formatDate(checkIn)} – {formatDate(checkOut)}</p>
                   </div>
                   <button onClick={() => router.back()} className="text-[11px] sm:text-xs font-bold underline underline-offset-4 hover:text-zinc-400">Change</button>
                 </div>

                 <div className="flex justify-between items-center text-xs sm:text-sm">
                   <div>
                     <p className="font-black uppercase text-[9px] sm:text-[10px] text-zinc-500 tracking-tighter mb-0.5">Guests</p>
                     <p className="font-bold">
                       {adults + children} guest{adults + children > 1 ? 's' : ''}
                       {infants > 0 && `, ${infants} infant${infants > 1 ? 's' : ''}`}
                     </p>
                   </div>
                   <button onClick={() => router.back()} className="text-[11px] sm:text-xs font-bold underline underline-offset-4 hover:text-zinc-400">Change</button>
                 </div>
               </div>

               <div className="h-[1px] w-full bg-white/10 my-6 sm:my-8" />

               {/* Price Breakdown */}
               <h3 className="font-black text-[10px] sm:text-[12px] uppercase tracking-widest text-zinc-500 mb-4 sm:mb-6">Price details</h3>
               <div className="space-y-4 text-sm sm:text-[15px]">
                 <div className="flex justify-between font-medium">
                   <span className="text-zinc-400 underline outline-offset-4 decoration-zinc-800">
                     ₹{hotel.price.amount || hotel.price} x {nights} nights
                   </span>
                   <span>₹{basePrice.toLocaleString("en-IN")}</span>
                 </div>
                 <div className="flex justify-between font-medium">
                   <span className="text-zinc-400 underline outline-offset-4 decoration-zinc-800">Taxes & Service fees</span>
                   <span>₹{taxes.toLocaleString("en-IN")}</span>
                 </div>
                 
                 <div className="h-[1px] w-full bg-white/10 pt-4" />
                 
                 <div className="flex justify-between font-black text-lg pt-2 mt-2">
                   <span>Total (INR)</span>
                   <span>₹{total.toLocaleString("en-IN")}</span>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* 💳 CUSTOM RAZORPAY GATEWAY SIMULATION */}
      <AnimatePresence>
        {isGatewayOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[400] bg-black/60 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4"
          >
             <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-white rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden flex flex-col lg:flex-row w-full max-w-[1000px] h-[95vh] lg:h-[650px] shadow-[0_40px_100px_rgba(0,0,0,0.5)] relative border border-white/20"
             >
                {/* Airbnb Branded Sideba (Red) */}
                <div className="w-full lg:w-[35%] bg-[#FF385C] p-6 lg:p-10 flex flex-row lg:flex-col justify-between items-center lg:items-start text-white relative shrink-0">
                   <div>
                     <div className="flex items-center gap-2 mb-4 lg:mb-12">
                        <svg viewBox="0 0 32 32" className="w-8 h-8 lg:w-10 lg:h-10 fill-white"><path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 2.472.96 3.396l.01.415.001.228c0 4.062-2.877 6.478-6.357 6.478-2.224 0-4.556-1.258-6.709-3.386l-.257-.26-.172-.179h-.011l-.176.185c-2.044 2.1-4.392 3.42-6.72 3.636l-.24.01c-3.48 0-6.357-2.416-6.357-6.478 0-1.218.257-2.316.892-3.86l.139-.327.054-.128c1.02-2.368 5.163-11.026 7.135-14.921l.525-1.022C12.537 1.963 13.992 1 16 1zm0 3.125c-1.05 0-1.748.513-2.616 2.054L13 6.942c-2.34 4.606-5.46 11.096-6.335 13.13-.538 1.25-.75 2.11-.75 2.928 0 2.23 1.516 3.353 3.47 3.353.957 0 1.83-.24 2.593-.726l.135-.088c.954-.64 2.095-1.8 3.328-3.328l.215-.268.344-.43v.383c0 .883.313 1.62.906 2.148l.128.107c.854.673 1.8 1.01 2.753 1.01 1.954 0 3.47-1.123 3.47-3.353 0-.01-.001-.02-.001-.03 0-.825-.213-1.688-.75-2.937-.88-2.05-4.004-8.547-6.34-13.155l-.382-.733c-.868-1.541-1.566-2.054-2.617-2.054zm0 11.23a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z"></path></svg>
                        <span className="text-xl lg:text-2xl font-black">Airbnb</span>
                     </div>
                     <div className="bg-white/10 backdrop-blur-md rounded-xl lg:rounded-2xl p-3 lg:p-6 border border-white/20">
                        <p className="text-[9px] lg:text-[12px] font-black uppercase tracking-widest opacity-70 mb-1">Price Summary</p>
                        <p className="text-xl lg:text-3xl font-black">₹{total.toLocaleString("en-IN")}</p>
                     </div>
                   </div>
                   
                   <div className="hidden lg:flex items-center gap-3 opacity-70 text-[11px] font-bold tracking-wide">
                      <span>Secured by</span>
                      <span className="italic font-black text-[13px]">Razorpay</span>
                   </div>

                   {/* Abstract Deco - Hidden on Mobile */}
                   <div className="hidden lg:block absolute bottom-10 right-0 opacity-20 pointer-events-none">
                      <div className="flex gap-2 items-end">
                         <div className="w-12 h-20 bg-white rounded-t-xl" />
                         <div className="w-12 h-32 bg-white rounded-t-xl" />
                         <div className="w-12 h-16 bg-white rounded-t-xl" />
                      </div>
                   </div>
                </div>

                {/* Main Interaction Area (White) */}
                <div className="flex-1 flex flex-col sm:flex-row text-black overflow-y-auto">
                   {/* Left Nav */}
                   <div className="w-full sm:w-[45%] bg-[#F7F7F7] border-b sm:border-b-0 sm:border-r border-zinc-200 overflow-x-auto">
                      <div className="p-2 sm:p-4 flex sm:flex-col space-x-2 sm:space-x-0 sm:space-y-2 mt-0 sm:mt-12">
                         <button 
                          onClick={() => setPaymentMethod("upi")}
                          className={`flex-1 sm:w-full text-left p-4 sm:p-6 rounded-xl sm:rounded-2xl flex items-center justify-between transition-all shrink-0 ${paymentMethod === 'upi' ? 'bg-white shadow-xl ring-1 ring-zinc-200' : 'hover:bg-zinc-200/50'}`}
                         >
                            <span className="font-bold text-sm sm:text-base">UPI</span>
                            <div className="hidden xs:flex gap-1">
                               <img src="https://img.icons8.com/color/48/google-pay.png" className="w-4 sm:w-5" />
                               <img src="https://img.icons8.com/color/48/phone-pe.png" className="w-4 sm:w-5" />
                               <img src="https://img.icons8.com/color/48/paytm.png" className="w-4 sm:w-5" />
                            </div>
                         </button>
                         <button 
                          onClick={() => setPaymentMethod("cards")}
                          className={`flex-1 sm:w-full text-left p-4 sm:p-6 rounded-xl sm:rounded-2xl flex items-center justify-between transition-all shrink-0 ${paymentMethod === 'cards' ? 'bg-white shadow-xl ring-1 ring-zinc-200' : 'hover:bg-zinc-200/50'}`}
                         >
                            <span className="font-bold text-sm sm:text-base">Cards</span>
                            <div className="hidden xs:flex gap-1">
                               <img src="https://img.icons8.com/color/48/visa.png" className="w-4 sm:w-5" />
                               <img src="https://img.icons8.com/color/48/mastercard.png" className="w-4 sm:w-5" />
                            </div>
                         </button>
                         <button 
                          onClick={() => setPaymentMethod("netbanking")}
                          className={`flex-1 sm:w-full text-left p-4 sm:p-6 rounded-xl sm:rounded-2xl flex items-center justify-between transition-all shrink-0 ${paymentMethod === 'netbanking' ? 'bg-white shadow-xl ring-1 ring-zinc-200' : 'hover:bg-zinc-200/50'}`}
                         >
                            <span className="font-bold text-sm sm:text-base whitespace-nowrap">Netbanking</span>
                            <div className="hidden xs:flex gap-1">
                               <img src="https://img.icons8.com/color/48/bank.png" className="w-4 sm:w-5" />
                            </div>
                         </button>
                      </div>
                   </div>

                   {/* Right Content */}
                   <div className="flex-1 flex flex-col p-6 sm:p-10 relative overflow-y-auto">
                     <div className="flex justify-between items-start mb-8 sm:mb-12">
                        <h3 className="text-zinc-400 font-bold uppercase text-[9px] sm:text-[10px] tracking-[0.2em]">Payment Options</h3>
                        <div className="flex gap-2">
                           <button 
                            onClick={() => setIsExitConfirmationOpen(true)}
                            className="p-1.5 hover:bg-zinc-100 rounded-lg text-zinc-400 transition-colors"
                           >
                            <X size={20} />
                           </button>
                        </div>
                     </div>

                     <div className="flex-1">
                        {paymentMethod === "upi" ? (
                           <div className="flex flex-col items-center">
                              <div className="flex justify-between w-full mb-8">
                                 <span className="font-black text-lg">UPI QR</span>
                                 <div className="flex items-center gap-2 text-zinc-500 font-mono text-sm bg-zinc-100 px-3 py-1 rounded-full">
                                    <Loader2 size={12} className="animate-spin" /> 11:32
                                 </div>
                              </div>
                              <div className="p-6 bg-zinc-50 rounded-[2.5rem] border-2 border-zinc-100 shadow-inner mb-6">
                                 <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=AirbnbPaymentMock" className="w-32 h-32 opacity-80" />
                              </div>
                              <p className="text-[13px] text-zinc-500 text-center mb-8">Scan the QR using any UPI App</p>
                              <div className="flex gap-4 opacity-50 grayscale hover:grayscale-0 transition-all">
                                 <img src="https://img.icons8.com/color/48/google-pay.png" className="w-8" />
                                 <img src="https://img.icons8.com/color/48/phone-pe.png" className="w-8" />
                                 <img src="https://img.icons8.com/color/48/paytm.png" className="w-8" />
                              </div>
                           </div>
                        ) : paymentMethod === "cards" ? (
                           <div className="space-y-6">
                              <h4 className="font-black text-lg">Add a new card</h4>
                              <div className="space-y-4">
                                 <div className="border-2 border-zinc-100 rounded-2xl p-4 focus-within:border-black transition-colors">
                                    <label className="block text-[10px] uppercase font-black text-zinc-400 mb-1">Card Number</label>
                                    <input type="text" placeholder="#### #### #### ####" className="w-full text-lg font-bold focus:outline-none" />
                                 </div>
                                 <div className="flex gap-4">
                                    <div className="flex-1 border-2 border-zinc-100 rounded-2xl p-4 focus-within:border-black transition-colors">
                                       <label className="block text-[10px] uppercase font-black text-zinc-400 mb-1">Expiry</label>
                                       <input type="text" placeholder="MM / YY" className="w-full text-lg font-bold focus:outline-none" />
                                    </div>
                                    <div className="flex-1 border-2 border-zinc-100 rounded-2xl p-4 focus-within:border-black transition-colors">
                                       <label className="block text-[10px] uppercase font-black text-zinc-400 mb-1">CVV</label>
                                       <input type="password" placeholder="***" className="w-full text-lg font-bold focus:outline-none" />
                                    </div>
                                 </div>
                                 <div className="flex items-center gap-3 py-4">
                                    <input type="checkbox" id="save-card" className="w-5 h-5 rounded-md border-2 border-zinc-300" />
                                    <label htmlFor="save-card" className="text-zinc-500 font-bold text-sm">Save this card as per RBI guidelines</label>
                                 </div>
                                 <Button 
                                  className="w-full bg-[#121212] text-white py-8 h-auto rounded-2xl font-black text-lg transition-all active:scale-95"
                                  onClick={handlePaymentSuccess}
                                 >
                                    Continue
                                 </Button>
                              </div>
                           </div>
                        ) : (
                           <div className="space-y-8 overflow-y-auto max-h-[450px] no-scrollbar pr-2">
                              <div className="relative">
                                 <div className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"><Info size={18} /></div>
                                 <input type="text" placeholder="Search for Banks" className="w-full bg-zinc-100 rounded-2xl py-4 pl-12 pr-4 font-bold focus:outline-none focus:ring-1 ring-zinc-300 transition-all" />
                              </div>
                              <div>
                                 <h4 className="font-bold text-zinc-400 uppercase text-[10px] tracking-widest mb-6">Suggested Banks</h4>
                                 <div className="space-y-4">
                                    {["State Bank of India", "HDFC Bank", "ICICI Bank", "Kotak Mahindra Bank", "Axis Bank"].map(bank => (
                                       <div 
                                        key={bank}
                                        className="group p-4 bg-white border border-zinc-100 rounded-2xl flex items-center justify-between cursor-pointer hover:border-black hover:shadow-lg transition-all"
                                       >
                                          <div className="flex items-center gap-4">
                                             <div className="w-10 h-10 bg-zinc-100 rounded-xl flex items-center justify-center font-black text-zinc-500 group-hover:bg-zinc-800 group-hover:text-white transition-all">
                                                {bank[0]}
                                             </div>
                                             <span className="font-bold">{bank}</span>
                                          </div>
                                          <ChevronRight size={18} className="text-zinc-300 group-hover:text-black transition-colors" />
                                       </div>
                                    ))}
                                 </div>
                              </div>
                           </div>
                        )}
                     </div>

                     <div className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-black uppercase text-rose-500 tracking-tighter flex items-center gap-2">
                        <Loader2 size={10} className="animate-spin" /> This page will timeout in 14:20 minutes
                     </div>
                   </div>
                </div>

                {/* 🔒 EXIT CONFIRMATION OVERLAY */}
                <AnimatePresence>
                   {isExitConfirmationOpen && (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 z-[500] bg-white/80 backdrop-blur-md flex items-center justify-center p-12"
                      >
                         <motion.div 
                          initial={{ scale: 0.9, y: 10 }}
                          animate={{ scale: 1, y: 0 }}
                          className="bg-white p-12 rounded-[2.5rem] shadow-[0_50px_150px_rgba(0,0,0,0.15)] border border-zinc-100 flex flex-col items-center max-w-[500px]"
                         >
                            <div className="w-24 h-16 bg-rose-50 rounded-2xl flex items-center justify-center mb-10 overflow-hidden relative border border-rose-100">
                               <div className="absolute inset-0 bg-rose-500/5 animate-pulse" />
                               <div className="flex flex-col items-center">
                                  <div className="w-8 h-10 border-2 border-rose-500 rounded-md relative flex items-center justify-center">
                                     <div className="w-full h-0.5 bg-rose-500 rounded-full" />
                                  </div>
                               </div>
                            </div>
                            <h4 className="text-2xl font-black mb-4">Are you sure you want to exit?</h4>
                            <p className="text-zinc-500 font-medium text-center mb-10 leading-relaxed">
                               You will be taken back to the Airbnb website and your primary reservation will not be confirmed.
                            </p>
                            <div className="w-full space-y-4">
                               <Button 
                                onClick={() => setIsExitConfirmationOpen(false)}
                                className="w-full bg-white border border-zinc-200 text-black py-7 rounded-2xl font-black text-lg hover:bg-zinc-50"
                               >
                                  Continue to payment
                               </Button>
                               <Button 
                                onClick={handleExit}
                                className="w-full bg-[#121212] text-white py-7 rounded-2xl font-black text-lg transition-all active:scale-95"
                               >
                                  Yes, exit
                               </Button>
                            </div>
                         </motion.div>
                      </motion.div>
                   )}
                </AnimatePresence>
             </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    )}
  </RoleProtectedRoute>
);
}
