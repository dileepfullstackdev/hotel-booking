"use client";
import PublicRoute from "../../../components/PublicRoute";
import { useForm } from "react-hook-form";
import { Form, TextField, Input, Button, Card, Label, FieldError, Link,} from "@heroui/react";
import { useRouter, useParams } from "next/navigation";

export default function ResetPassword() {
  const router = useRouter();
  const params = useParams();

  const token = params.token; // 🔑 get token from URL

  const { register, handleSubmit, watch, formState: { errors, isSubmitting },} = useForm();

  const password = watch("password");

  const onSubmit = async (data) => {
    console.log("Token:", token);
    console.log("New Password:", data.password);

    // mock
    alert("Password reset successful (mock)");

    router.push("/login");
  };

  return (
    <PublicRoute>
      <div className="flex justify-center items-center h-screen">
        <Card className="w-96 p-6">
          <h2 className="text-2xl mb-4 text-center font-semibold">
            Reset Password
          </h2>
          {!token ? (
            <p className="text-red-500 text-center">
              Invalid reset link
            </p>
          ) : (
            <Form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
              <TextField isInvalid={!!errors.password}>
                <Label htmlFor="password">New Password</Label>
                <Input id="password" type="password" placeholder="Enter new password" {...register("password", { required: "Password required", minLength: {value: 6, message: "Minimum 6 characters",},})}/>
                <FieldError>{errors.password?.message}</FieldError>
              </TextField>
              <TextField isInvalid={!!errors.confirmPassword}>
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input id="confirmPassword" type="password" placeholder="Re-enter password" {...register("confirmPassword", {required: "Confirm your password", validate: (value) =>value === password || "Passwords do not match",})}/>
                <FieldError>{errors.confirmPassword?.message}</FieldError>
              </TextField>
              <div className="flex items-center justify-center">
                  <Button type="submit" isLoading={isSubmitting} isDisabled={isSubmitting}>Reset Password</Button>
              </div>
              <p className="text-sm text-center mt-2">Back to{" "}
                <Link href="/login" className="text-blue-500 underline">Login</Link>
              </p>
            </Form>
          )}
        </Card>
      </div>
    </PublicRoute>
  );
}