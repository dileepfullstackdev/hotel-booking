"use client";
import PublicRoute from "../../components/PublicRoute";
import { useForm } from "react-hook-form";
import { Form, TextField, Input, Button, Card, Label, FieldError, Link } from "@heroui/react";
import { useRouter } from "next/navigation";

export default function ForgotPassword() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Reset request for:", data.email);

    // mock
    const fakeToken = "abc123";
    alert("Password reset link sent to email (mock)");

    router.push(`/reset-password/${fakeToken}`);
  };

  return (
    <PublicRoute>
      <div className="flex justify-center items-center h-screen">
        <Card className="w-96 p-6">
          <h2 className="text-2xl mb-4 text-center font-semibold">Forgot Password</h2>
          <p className="text-sm text-gray-500 mb-4 text-center">Enter your email to receive a reset link</p>
          <Form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
            <TextField isInvalid={!!errors.email}>
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Enter your email" {...register("email", {required: "Email is required",pattern: {value: /^\S+@\S+$/i, message: "Invalid email",},})}/>
              <FieldError>{errors.email?.message}</FieldError>
            </TextField>
            <div className="flex items-center justify-center">
              <Button type="submit" isLoading={isSubmitting} isDisabled={isSubmitting}>Send Reset Link</Button>
            </div>
            <p className="text-sm text-center mt-2">Remember your password?{" "}<Link href="/login" className="text-blue-500 underline">Login</Link></p>
          </Form>
        </Card>
      </div>
    </PublicRoute>
  );
}