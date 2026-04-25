"use client";

import { useParams, useRouter } from "next/navigation";
import RoleProtectedRoute from "@/components/RoleProtectedRoute";
import {
  Card,
  Button,
  Modal,
  Input,
} from "@heroui/react";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

export default function HotelDetails() {
  const { id } = useParams();
  const router = useRouter();

  // 🏨 Mock Data
  const hotel = {
    id,
    name: "Sea View Resort",
    city: "Goa",
    address: "Beach Road",
    price: 2500,
    description: "Beautiful beachside resort with sea view.",
    image: "https://picsum.photos/600/300",
    amenities: { ac: true, wifi: true, parking: true },
  };

  // 🖼 Hotel Image
  const [image, setImage] = useState(hotel.image);

  // 🛏 Rooms (with images)
  const [rooms, setRooms] = useState([
    {
      id: 1,
      type: "Deluxe",
      price: 2500,
      capacity: 2,
      images: [],
    },
  ]);

  const [isOpen, setIsOpen] = useState(false);
  const [editingRoom, setEditingRoom] = useState(null);

  // 📤 Hotel Image Upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImage(URL.createObjectURL(file));
  };

  // ➕ Add Room
  const openAddModal = () => {
    setEditingRoom(null);
    setIsOpen(true);
  };


  // ✏️ Edit Room
  const openEditModal = (room) => {
    setEditingRoom(room);
    setIsOpen(true);
  };

  // 💾 Save Room
  const handleSaveRoom = (data) => {
    if (editingRoom) {
      setRooms((prev) =>
        prev.map((r) =>
          r.id === editingRoom.id ? { ...r, ...data } : r
        )
      );
    } else {
      setRooms((prev) => [
        ...prev,
        {
          id: Date.now(),
          ...data,
          images: data.images || [],
        },
      ]);
    }

    setIsOpen(false);
  };

  // ❌ Delete Room
  const handleDeleteRoom = (id) => {
    if (!confirm("Delete this room?")) return;
    setRooms((prev) => prev.filter((r) => r.id !== id));
  };

  return (
    <RoleProtectedRoute allowedRoles={["owner"]}>
      <div className="p-6 w-5xl max-w-5xl mx-auto">

        {/* 🔙 Back */}
        <Button variant="light" onClick={() => router.back()}>
          ← Back
        </Button>

        {/* 🏨 Title */}
        <h1 className="text-3xl font-semibold mt-3">
          {hotel.name}
        </h1>
        <p className="text-gray-500">{hotel.city}</p>

        {/* 🖼 Hotel Image */}
        <div className="mt-4">
          <img
            src={image}
            className="w-full h-80 object-cover rounded-lg"
          />
        </div>
        <div className="flex items-center gap-2 p-2">
          Update Image
          <Input
            
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
          />
        </div>

        {/* 📄 Info */}
        <Card className="p-4 mt-6">
          <h2 className="text-xl font-semibold mb-2">
            Description
          </h2>
          <p>{hotel.description}</p>
          <p className="mt-2 text-sm text-gray-500">
            {hotel.address}
          </p>
          <p className="mt-2 font-medium">
            ₹{hotel.price} / night
          </p>
        </Card>

        {/* ⚡ Amenities */}
        <Card className="p-4 mt-4">
          <h2 className="text-xl font-semibold mb-2">
            Amenities
          </h2>
          <div className="flex gap-4">
            {hotel.amenities.ac && <span>AC</span>}
            {hotel.amenities.wifi && <span>WiFi</span>}
            {hotel.amenities.parking && <span>Parking</span>}
          </div>
        </Card>

        {/* 🛏 Rooms */}
        <Card className="p-4 mt-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Rooms</h2>
            <Button className="bg-black text-white" onClick={openAddModal}>
              + Add Room
            </Button>
          </div>

          <div className="flex flex-col gap-3">
            {rooms.map((room) => (
              <div
                key={room.id}
                className="border p-3 rounded"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">{room.type}</p>
                    <p className="text-sm text-gray-500">
                      Capacity: {room.capacity}
                    </p>
                    <p className="font-semibold">
                      ₹{room.price}
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      onClick={() => openEditModal(room)}
                    >
                      Edit
                    </Button>

                    <Button
                      size="sm"
                      className="bg-red-500 text-white"
                      onClick={() => handleDeleteRoom(room.id)}
                    >
                      Delete
                    </Button>
                  </div>
                </div>

                {/* 📸 Room Images */}
                <div className="flex gap-2 mt-3 flex-wrap">
                  {room.images?.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      className="w-20 h-16 object-cover rounded"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* 🧾 Modal */}
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <Modal.Backdrop>
            <Modal.Container>
              <Modal.Dialog>
                <Modal.Heading>
                  {editingRoom ? "Edit Room" : "Add Room"}
                </Modal.Heading>

                <RoomForm
                  defaultValues={editingRoom}
                  onSubmit={handleSaveRoom}
                />

                <Modal.CloseTrigger />
              </Modal.Dialog>
            </Modal.Container>
          </Modal.Backdrop>
        </Modal>

      </div>
    </RoleProtectedRoute>
  );
}

function RoomForm({ defaultValues, onSubmit }) {
  const { register, handleSubmit, setValue, reset } = useForm({
    defaultValues: {
      type: "",
      price: "",
      capacity: "",
      images: [],
    },
  });

  const [images, setImages] = useState([]);

  // 🔄 Load edit values
  useEffect(() => {
    if (defaultValues) {
      reset(defaultValues);
      setImages(defaultValues.images || []);
    }
  }, [defaultValues, reset]);

  // 📤 Upload
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);

    const newImages = files.map((file) =>
      URL.createObjectURL(file)
    );

    const updated = [...images, ...newImages];

    setImages(updated);
    setValue("images", updated);
  };

  // ❌ Remove
  const removeImage = (index) => {
    const updated = images.filter((_, i) => i !== index);
    setImages(updated);
    setValue("images", updated);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-3 mt-4"
    >
      <Input
        placeholder="Room Type"
        {...register("type", { required: true })}
      />

      <Input
        type="number"
        placeholder="Price"
        {...register("price", { required: true })}
      />

      <Input
        type="number"
        placeholder="Capacity"
        {...register("capacity", { required: true })}
      />

      {/* 📸 Upload */}
      <div className="flex items-center gap-2">
        Upload Room Images
        <Input
          type="file"
          multiple
          accept="image/*"
          onChange={handleImageUpload}
        />
      </div>
        

      {/* Preview */}
      <div className="flex gap-2 flex-wrap">
        {images.map((img, index) => (
          <div key={index} className="relative">
            <img
              src={img}
              className="w-20 h-16 object-cover rounded"
            />
            <button
              type="button"
              className="absolute top-0 right-0 bg-black text-white text-xs px-1"
              onClick={() => removeImage(index)}
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-end mt-3">
        
        <Button type="submit" className="bg-black text-white">
          Save
        </Button>
      </div>
    </form>
  );
}