"use client";

import { useParams, useRouter } from "next/navigation";
import RoleProtectedRoute from "@/components/RoleProtectedRoute";
import { Card, Button } from "@heroui/react";
import { useState } from "react";
import { useToast } from "@/components/Toast";

export default function AdminHotelDetails() {
  const { addToast } = useToast();
  const { id } = useParams();
  const router = useRouter();

  // 🔥 Mock data (later from backend)
  const [hotel, setHotel] = useState({
    id: "1",
    name: "Sea View Resort",
    city: "Goa",
    address: "Beach Road, Goa",
    price: 2500,
    description: "Beautiful beachside resort with amazing sea view.",
    owner: {
      name: "Rahul",
      email: "rahul@gmail.com",
    },
    amenities: { ac: true, wifi: true, parking: false },
    status: "pending",
  });

  // ✅ Approve
  const handleApprove = () => {
    setHotel((prev) => ({ ...prev, status: "approved" }));
  };

  // ❌ Reject
  const handleReject = () => {
    setHotel((prev) => ({ ...prev, status: "rejected" }));
  };

  // 🗑️ Delete
  const handleDelete = () => {
    const confirmDelete = confirm("Delete this hotel?");
    if (!confirmDelete) return;

    addToast("Hotel deleted successfully", "success");
    router.push("/admin/manage-hotels");
  };

  return (
    <RoleProtectedRoute allowedRoles={["admin"]}>
      <div className="p-6 flex justify-center">
        <Card className="w-full max-w-3xl p-6 shadow-lg">

          {/* 🏨 Info */}
          <h1 className="text-2xl font-semibold">{hotel.name}</h1>
          <p className="text-gray-500">{hotel.city}</p>

          <p className="mt-2 font-medium">
            ₹{hotel.price} / night
          </p>

          <p className="mt-4">{hotel.description}</p>

          {/* 📍 Address */}
          <p className="mt-2 text-sm text-gray-600">
            {hotel.address}
          </p>

          {/* ⚡ Amenities */}
          <div className="mt-4">
            <h3 className="font-semibold mb-2">Amenities</h3>
            <ul className="list-disc list-inside text-sm">
              {hotel.amenities.ac && <li>AC</li>}
              {hotel.amenities.wifi && <li>WiFi</li>}
              {hotel.amenities.parking && <li>Parking</li>}
            </ul>
          </div>

          {/* 👤 Owner Info */}
          <div className="mt-4 border-t pt-4">
            <h3 className="font-semibold mb-2">Owner Info</h3>
            <p className="text-sm">
              {hotel.owner.name}
            </p>
            <p className="text-sm text-gray-500">
              {hotel.owner.email}
            </p>
          </div>

          {/* 📊 Status */}
          <p className="mt-4">
            Status:{" "}
            <span
              className={
                hotel.status === "approved"
                  ? "text-green-500"
                  : hotel.status === "rejected"
                  ? "text-red-500"
                  : "text-yellow-500"
              }
            >
              {hotel.status}
            </span>
          </p>

          {/* ⚡ Actions */}
          <div className="flex gap-3 mt-6 flex-wrap">
            
            {hotel.status === "pending" && (
              <>
                <Button
                  className="bg-green-500 text-white"
                  onClick={handleApprove}
                >
                  Approve
                </Button>

                <Button
                  className="bg-yellow-500 text-white"
                  onClick={handleReject}
                >
                  Reject
                </Button>
              </>
            )}

            <Button
              className="bg-red-500 text-white"
              onClick={handleDelete}
            >
              Delete
            </Button>

          </div>

        </Card>
      </div>
    </RoleProtectedRoute>
  );
}