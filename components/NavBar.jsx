"use client";
import { Button, Link,Popover } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "../store/useAuthStore";
import { useEffect } from "react";

export default function NavBar(){
    const router =useRouter();
    const {token, logout, loadUser} = useAuthStore();

    useEffect(()=> {
        loadUser();
    }, []);
    const handleLogout = () => {
        logout();
        router.push("/login");
    };

    return(
        <nav className="flex justify-between items-center px-6 py-4 shadow-md">
            <h1 className="text-xl font-bold cursor-pointer" onClick={() => router.push("/")}>HotelBooking</h1>
            <div className="flex gap-4 items-center">
                {token ? (
                <>
                    <Link href="/dashboard">Dashboard</Link>
                    <Popover>
                        <Button className="bg-red-400" >Logout</Button>
                        <Popover.Content className="max-w-64">
                            <Popover.Dialog>
                            <Popover.Heading>Logout?</Popover.Heading>
                            <p className="my-2 text-sm text-muted">
                                Are you sure you want to logout?
                            </p>
                            <Button className="text-red-400 bg-white border-red-400 border-2 px-2 py-1 hover:bg-red-400 hover:text-white" onClick={handleLogout}>Logout</Button>
                            </Popover.Dialog>
                        </Popover.Content>
                    </Popover>
                </>) : (
                <>
                    <Link href="/login">Login</Link>
                    <Link href="/signup">Signup</Link>
                </>
                )}
            </div>
        </nav>
    )
}