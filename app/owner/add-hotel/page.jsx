"use client";

import { useRouter } from "next/navigation";
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
import RoleProtectedRoute from "@/components/RoleProtectedRoute";

export default function AddHotel() {
  const router = useRouter();

  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: "",
      description: "",
      price: "",
      city: "",
      address: "",
      ac: false,
      wifi: false,
      parking: false,
    },
  });

  const onSubmit = (data) => {
    const newHotel = {
      ...data,
      amenities: {
        ac: data.ac,
        wifi: data.wifi,
        parking: data.parking,
      },
    };

    console.log("New Hotel:", newHotel);

    alert("Hotel added successfully (mock)");
    router.push("/owner/my-hotels");
  };

  return (
    <RoleProtectedRoute allowedRoles={["owner"]}>
      <div className="flex justify-center items-start min-h-screen bg-gray-50 py-10">
        <Card className="w-full max-w-2xl p-8 shadow-lg rounded-2xl">
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Add Hotel 🏨
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
                    <Input {...field} value={field.value || ""} />
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
                    <Input {...field} value={field.value || ""} />
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
                    <Input
                      type="number"
                      {...field}
                      value={field.value || ""}
                    />
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
                    <Input {...field} value={field.value || ""} />
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
                    <Input {...field} value={field.value || ""} />
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
                      onCheckedChange={(val) =>
                        field.onChange(val)
                      }
                      id="ac"
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
                      onCheckedChange={(val) =>
                        field.onChange(val)
                      }
                      id="wifi"
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
                      onCheckedChange={(val) =>
                        field.onChange(val)
                      }
                      id="parking"
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
              Add Hotel
            </Button>
          </Form>
        </Card>
      </div>
    </RoleProtectedRoute>
  );
}