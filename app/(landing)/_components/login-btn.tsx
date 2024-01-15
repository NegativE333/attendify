"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export const LoginButton = () => {
    const router = useRouter();

    return(
        <div>
            <Button
                variant="outline"
                className="bg-orange-600/90 hover:bg-orange-600/80 hover:text-white text-white"
                onClick={() => router.push("/auth/login")}
            >
                Mark your attendance
            </Button>
        </div>
    )
}