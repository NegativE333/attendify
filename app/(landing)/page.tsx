
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CheckSquare } from "lucide-react";
import { Poppins, Ubuntu } from "next/font/google";
import { LoginButton } from "./_components/login-btn";

const font = Poppins({subsets: ['latin'], weight: '600'});
const font2 = Ubuntu({ subsets: ['latin'], weight: '400'});

export default function Home() {
  return (
    <main className="flex h-full flex-col gap-8 items-center justify-center">
      <div>
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-start justify-center mt-8">
          <div className="h-[550px] w-[550px] rounded-full bg-[rgb(255,171,87)] opacity-30 blur-[70px]"></div>
        </div>
      </div>

      <div className="text-orange-800 flex items-center justify-center flex-col gap-2 z-10">
        <h2 className={cn("text-3xl", font2.className)}>
          Welcome to 
        </h2>
        <h1 className={cn("text-5xl text-black", font.className)}>
          Attendify
        </h1>
      </div>

      <div className="flex flex-col items-center justify-center gap-8 z-10 px-4 sm:px-0 text-center">
        <h3 className={cn("text-xl", font2.className)}>
          Transforming Attendance Management with Ease and Insight
        </h3>
        <div className="flex flex-col gap-1 justify-start items-start text-lg rounded-lg p-3 shadow-lg shadow-orange-800/20 sm:w-auto">
            <p className="flex items-center justify-center gap-2">
              <CheckSquare className="h-4 w-4"/>
              Effortless Attendance Tracking
            </p>
            <p className="flex items-center justify-center gap-2">
              <CheckSquare className="h-4 w-4"/>
              Visual Analytics
            </p>
            <p className="flex items-center justify-center gap-2">
              <CheckSquare className="h-4 w-4"/>
              User-Friendly Interface
            </p>
            <p className="flex items-center justify-center gap-2">
              <CheckSquare className="h-4 w-4"/>
              Free to Use
            </p>
            <p className="flex items-center justify-center gap-2">
              <CheckSquare className="h-4 w-4"/>
              Customizable and Flexible
            </p>
            <p className="flex items-center justify-center gap-2">
              <CheckSquare className="h-4 w-4"/>
              Multi-Platform Access
            </p>
        </div>
      </div>

      <div className="z-10">
        <LoginButton />
      </div>

    </main>
  )
}
