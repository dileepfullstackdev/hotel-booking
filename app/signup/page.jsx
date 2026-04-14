"use client"
import { useForm } from "react-hook-form";
import {Form, FieldError,TextField, Input, Button, Card, Label,Link  } from "@heroui/react";
import { useRouter} from "next/navigation";
import PublicRoute from "../../components/PublicRoute";

export default function Signup(){
    const router = useRouter();
    const {register, handleSubmit, watch, formState: {errors, isSubmitting },} = useForm();
    const password = watch("password");
    const onSubmit = async (data) => {
        console.log("Signup Data:", data);
        alert("Signup successful");
        router.push("/login");
    };

    return(
        <PublicRoute>
            <div className="flex justify-center items-center h-screen">
                <Card className="w-96 p-6">
                        <h2 className="text-3xl mb-4 text-center font-semibold">Signup</h2>
                        <Form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3" >
                            <TextField  isInvalid={!!errors.name}>
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" label="Name" {...register("name", { required: "Name is required"})} placeholder="Enter your name" />
                                <FieldError>{errors.name?.message}</FieldError>
                            </TextField>
                            <TextField  isInvalid={!!errors.email}>
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" {...register("email",{ required:"Email is required", pattern:{ value: /^\S+@\S+$/i, message: "Invalid email",},})} placeholder="Enter your email"/>
                                <FieldError>{errors.email?.message}</FieldError>
                            </TextField>
                            <TextField  isInvalid={!!errors.password}>
                                <Label htmlFor="password">Password</Label>
                                <Input id="password" type="password" {...register("password",{ required: "Password required", minLength:{ value: 6, message: "Minimum 6 characters",},})} placeholder="Enter password"/>
                                <FieldError>{errors.password?.message}</FieldError>
                            </TextField>
                            <TextField  isInvalid={!!errors.confirmPassword}>
                                <Label htmlFor="confirmpassword"> Confirm password</Label>
                                <Input id="confirmpassword" type="password" {...register("confirmPassword",{ required: "Confirm your password", validate:(value)=> value === password || "Passwords do not match"})}  placeholder="Re-enter password"/>
                                <FieldError>{errors.confirmPassword?.message}</FieldError>
                            </TextField>
                            <div className="flex items-center justify-center">
                                <Button className="px-8"  type="submit" isLoading={isSubmitting} isDisabled={isSubmitting}>Signup</Button>
                            </div>
                            <p className="inline text-center">Already have an account?{" "}
                                <Link className="text-blue-500 underline" href="/login">Login</Link>
                            </p>
                        </Form>
                </Card>
            </div>
        </PublicRoute>
    )
}