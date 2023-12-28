import { Poppins } from "next/font/google"
import Image from "next/image"

import { cn } from "@/lib/utils"

const font = Poppins ({
    subsets: ['latin'],
    weight: ["200", "300", "400", "500", "600", "700", "800"],
})

export const Logo = () => {
    return (
        <div className="flex flex-col items-center gap-y-4">
            <div className="flex flex-col items-center">
                <p className={cn(
                    "text-xl font-semibold",
                    font.className
                )}>
                    AuthenLens
                </p>
            </div>
        </div>
    )
}