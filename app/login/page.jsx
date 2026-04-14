"use client";
import { useAuthStore } from "../../store/useAuthStore";
import { useForm } from "react-hook-form";
import { Form, TextField, Input, Button, Card, Label, FieldError, Link } from "@heroui/react";
import { useRouter } from "next/navigation";
import PublicRoute from "../../components/PublicRoute";


export default function Login() {
  const router = useRouter();
  const {login} = useAuthStore();
  const { register, handleSubmit, formState: { errors, isSubmitting },} = useForm();
  const onSubmit = async (data) => {
    console.log("Login Data:", data);
    login({email:data.email}, "dummy-token");
    alert("Login successful");
    router.push("/dashboard");
  };

  return (
    <PublicRoute>
      <div className="flex justify-center items-center h-screen">
        <Card className="w-96 p-6">
          <h2 className="text-3xl mb-4 text-center font-semibold">Login</h2>
          <Form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
            <TextField isInvalid={!!errors.email}>
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Enter your email" {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email",},})}/>
              <FieldError>{errors.email?.message}</FieldError>
            </TextField>
            <TextField isInvalid={!!errors.password}>
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="Enter password" {...register("password", { required: "Password is required", })} />
              <FieldError>{errors.password?.message}</FieldError>
            </TextField>
            <div className="flex items-center justify-center">
              <Button className="px-8" type="submit" isLoading={isSubmitting} isDisabled={isSubmitting}>Login</Button>
            </div>
            <div className="flex justify-between">
              <p className="text-sm  mt-2">Don’t have an account?{" "}
                  <Link href="/signup" className="text-blue-500 underline">Signup</Link>
              </p>
              <p className="text-sm mt-2">
                  <Link href="/forgot-password" className="text-blue-500 underline">Forgot Password?</Link>
              </p>
            </div>          
          </Form>
        </Card>
      </div>
    </PublicRoute>
  );
}