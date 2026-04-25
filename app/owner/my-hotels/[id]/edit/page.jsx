"use client";

import { useParams, useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import {
  Form,
  TextField,
  Input,
  Button,
  Card,
  Label,
  FieldError,
  Checkbox,
} from "@heroui/react";
import { useEffect } from "react";
import RoleProtectedRoute from "@/components/RoleProtectedRoute";

export default function EditHotel() {
  const { id } = useParams();
  const router = useRouter();
  const hotel = {
    id: "1",
    name: "Sea View Resort",
    description: "Beautiful beachside resort",
    price: 2500,
    city: "Goa",
    address: "Beach Road",
    amenities: { ac: true, wifi: true, parking: false },
  };

  const {
    register,
    watch,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  // ✅ Load hotel data (mock for now)
  useEffect(() => {
    // ✅ Set form values properly
    reset({
      name: hotel.name,
      description: hotel.description,
      price: hotel.price,
      city: hotel.city,
      address: hotel.address,
      ac: hotel.amenities?.ac ?? false,
      wifi: hotel.amenities?.wifi ?? false,
      parking: hotel.amenities?.parking ?? false,
    });
  }, [reset]);

  const onSubmit = (data) => {
    const updatedHotel = {
      id,
      ...data,
      amenities: {
        ac: data.ac || false,
        wifi: data.wifi || false,
        parking: data.parking || false,
      },
    };

    console.log("Updated Hotel:", updatedHotel);

    alert("Hotel updated successfully (mock)");
    router.push("/owner/my-hotels");
  };

  return (
    <RoleProtectedRoute allowedRoles={["owner"]}>
      <div className="flex justify-center items-start min-h-screen bg-gray-50 py-10">
        <Card className="w-full max-w-2xl p-8 shadow-lg rounded-2xl">
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Edit Hotel 🏨
          </h2>

          <Form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
          >
            {/* 🏨 Details */}
            <div>
              <h3 className="font-semibold text-lg mb-2">
                Hotel Details
              </h3>

              <Controller
                name="name"
                control={control}
                rules={{ required: "Required" }}
                render={({ field }) => (
                  <TextField isInvalid={!!errors.name}>
                    <Label>Hotel Name</Label>
                    <Input {...field} />
                    <FieldError>{errors.name?.message}</FieldError>
                  </TextField>
                )}
              />

              <Controller
                name="description"
                control={control}
                rules={{ required: "Required" }}
                render={({ field }) => (
                  <TextField isInvalid={!!errors.description}>
                    <Label>Description</Label>
                    <Input {...field} />
                    <FieldError>{errors.description?.message}</FieldError>
                  </TextField>
                )}
              />

              <Controller
                name="price"
                control={control}
                rules={{ required: "Required" }}
                render={({ field }) => (
                  <TextField isInvalid={!!errors.price}>
                    <Label>Price</Label>
                    <Input type="number" {...field} />
                    <FieldError>{errors.price?.message}</FieldError>
                  </TextField>
                )}
              />
            </div>

            {/* 📍 Location */}
            <div>
              <h3 className="font-semibold text-lg mb-2">
                Location
              </h3>

              <Controller
                name="city"
                control={control}
                rules={{ required: "Required" }}
                render={({ field }) => (
                  <TextField isInvalid={!!errors.city}>
                    <Label>City</Label>
                    <Input {...field} />
                    <FieldError>{errors.city?.message}</FieldError>
                  </TextField>
                )}
              />

              <Controller
                name="address"
                control={control}
                rules={{ required: "Required" }}
                render={({ field }) => (
                  <TextField isInvalid={!!errors.address}>
                    <Label>Address</Label>
                    <Input {...field} />
                    <FieldError>{errors.address?.message}</FieldError>
                  </TextField>
                )}
              />
            </div>

            {/* ⚡ Amenities */}
            <div>
              <h3 className="font-semibold text-lg mb-2">
                Amenities
              </h3>

              <div className="flex gap-4">
                {/* AC */}
                <Controller
                  name="ac"
                  control={control}
                  render={({ field }) => (
                    <Checkbox
                      checked={!!field.value}
                      onCheckedChange={(val) => field.onChange(val)}
                      id="ac"
                      defaultSelected={hotel.amenities.ac}
                    >
                      <Checkbox.Control>
                        <Checkbox.Indicator />
                      </Checkbox.Control>
                      <Checkbox.Content>
                        <Label htmlFor="ac">AC</Label>
                      </Checkbox.Content>
                    </Checkbox>
                  )}
                />

                {/* WiFi */}
                <Controller
                  name="wifi"
                  control={control}
                  render={({ field }) => (
                    <Checkbox
                      checked={!!field.value}
                      onCheckedChange={field.onChange}
                      id="wifi"
                      defaultSelected={hotel.amenities.wifi}
                    >
                      <Checkbox.Control>
                        <Checkbox.Indicator />
                      </Checkbox.Control>
                      <Checkbox.Content>
                        <Label htmlFor="wifi">WiFi</Label>
                      </Checkbox.Content>
                    </Checkbox>
                  )}
                />

                {/* Parking */}
                <Controller
                  name="parking"
                  control={control}
                  render={({ field }) => (
                    <Checkbox
                      checked={!!field.value}
                      onCheckedChange={field.onChange}
                      id="parking"
                      defaultSelected={hotel.amenities.parking}
                    >
                      <Checkbox.Control>
                        <Checkbox.Indicator />
                      </Checkbox.Control>
                      <Checkbox.Content>
                        <Label htmlFor="parking">Parking</Label>
                      </Checkbox.Content>
                    </Checkbox>
                  )}
                />
              </div>
            </div>

            {/* 🚀 Submit */}
            <Button
              type="submit"
              isLoading={isSubmitting}
              className="bg-black text-white mt-4"
            >
              Update Hotel
            </Button>
          </Form>
        </Card>
      </div>
    </RoleProtectedRoute>
  );
}