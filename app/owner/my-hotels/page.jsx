"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import RoleProtectedRoute from "@/components/RoleProtectedRoute";
import {Input, Card, Button, Modal } from "@heroui/react";

export default function MyHotels() {
  const router = useRouter();

  const [hotels, setHotels] = useState([
    {
      id: 1,
      name: "Sea View Resort",
      city: "Goa",
      price: 2500,
      image: null,
    },
    {
      id: 2,
      name: "Hilltop Stay",
      city: "Ooty",
      price: 1800,
      image: null,
    },
  ]);

  const [selectedHotel, setSelectedHotel] = useState(null);
  const [preview, setPreview] = useState(null);

  // 🗑 Delete
  const handleDelete = (id) => {
    const confirmDelete = confirm("Delete this hotel?");
    if (!confirmDelete) return;

    setHotels((prev) => prev.filter((h) => h.id !== id));
  };

  // 💾 Save Image
  const handleSaveImage = () => {
    setHotels((prev) =>
      prev.map((h) =>
        h.id === selectedHotel.id
          ? { ...h, image: preview }
          : h
      )
    );

    setSelectedHotel(null);
    setPreview(null);
  };

  return (
    <RoleProtectedRoute allowedRoles={["owner"]}>
      <div className="min-h-screen bg-black pt-24 pb-12 px-4 sm:px-8">
        <h1 className="text-3xl font-black text-white mb-8 tracking-tighter uppercase">
          My <span className="text-white/40">Hotels</span> 🏨
        </h1>

        {hotels.length === 0 ? (
          <div className="bg-white/5 backdrop-blur-3xl rounded-[2rem] p-12 border border-white/10 text-center">
            <p className="text-white/40 font-medium">No hotels added yet.</p>
          </div>
        ) : (
          <div className="flex flex-col gap-6 max-w-5xl">
            {hotels.map((hotel) => (
              <div
                key={hotel.id}
                className="bg-white/5 backdrop-blur-2xl p-5 sm:p-6 rounded-[2rem] border border-white/10 shadow-2xl flex flex-col sm:flex-row justify-between sm:items-center gap-6 transition-all hover:bg-white/10 cursor-pointer group"
                onClick={() => router.push(`/owner/my-hotels/${hotel.id}`)}
              >
                {/* LEFT */}
                <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center flex-1">
                  {/* 🖼 Image */}
                  <div
                    className="w-full sm:w-40 h-48 sm:h-28 bg-white/5 rounded-2xl cursor-pointer overflow-hidden border border-white/10 relative group/img"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedHotel(hotel);
                      setPreview(hotel.image || null);
                    }}
                  >
                    {hotel.image ? (
                      <img
                        src={hotel.image}
                        alt="hotel"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-110"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center h-full text-[10px] font-black uppercase tracking-widest text-white/20">
                        Add Image
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                       <span className="text-[10px] font-black uppercase text-white bg-black/60 px-3 py-1 rounded-full">Change Photo</span>
                    </div>
                  </div>

                  {/* 🏨 Info */}
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-amber-200 transition-colors">
                      {hotel.name}
                    </h3>
                    <p className="text-sm text-white/50 font-medium flex items-center gap-1.5">
                       {hotel.city}
                    </p>
                    <p className="font-black text-amber-500 text-lg pt-1">
                      ₹{hotel.price.toLocaleString()} <span className="text-[10px] uppercase text-white/40 tracking-widest font-bold">/ night</span>
                    </p>
                  </div>
                </div>

                {/* RIGHT ACTIONS */}
                <div className="flex gap-3 w-full sm:w-auto">
                  <Button
                    className="bg-white text-black font-bold rounded-xl px-6 h-12 shadow-xl hover:scale-105 active:scale-95 transition-all flex-1 sm:flex-none"
                    onClick={(e) =>{
                      e.stopPropagation();
                      router.push(
                        `/owner/my-hotels/${hotel.id}/edit`
                      )
                    }}
                  >
                    Edit
                  </Button>

                  <Button
                    className="bg-white/10 text-white border border-white/20 font-bold rounded-xl px-6 h-12 hover:bg-rose-500/20 hover:border-rose-500/50 transition-all flex-1 sm:flex-none"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(hotel.id);
                    }}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 🔥 IMAGE MODAL */}
      <Modal
        isOpen={!!selectedHotel}
        onClose={() => {
          setSelectedHotel(null);
          setPreview(null);
        }}
      >
        <Modal.Backdrop>
          <Modal.Container size="cover">
            <Modal.Dialog >
              
              <Modal.Heading>Update Hotel Profile Picture</Modal.Heading>

              {/* 🖼 Preview */}
              <div className="w-full h-full bg-gray-200 rounded mb-4 flex items-center justify-center overflow-hidden">
                {preview ? (
                  <img
                    src={preview}
                    alt="preview"
                    className="w-fit h-full  object-cover"
                  />
                ) : (
                  <span className="text-gray-500">No Image</span>
                )}
              </div>

              {/* 📤 Upload */}
              <Input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (!file) return;

                  const url = URL.createObjectURL(file);
                  setPreview(url);
                }}
              />

              {/* ACTIONS */}
              <div className="flex justify-end gap-3 mt-4">
                <Button
                  slot="close"
                  variant="light"
                  onClick={() => {
                    setSelectedHotel(null);
                    setPreview(null);
                  }}
                >
                  Cancel
                </Button>

                <Button
                  className="bg-black text-white"
                  onClick={handleSaveImage}
                >
                  Save
                </Button>
              </div>                
            </Modal.Dialog>
          
          </Modal.Container>            
        </Modal.Backdrop>
      </Modal>
    </RoleProtectedRoute>
  );
}