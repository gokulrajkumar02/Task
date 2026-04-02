import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { User } from "lucide-react";

const LoginDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="p-2 bg-gray-300 rounded-3xl cursor-pointer">
          <User className="text-white" />
        </div>
      </DialogTrigger>
      <DialogContent className="[&>button]:text-white [&>button]:hover:cursor-pointer sm:max-w-lg h-[70%] border border-black p-0 overflow-hidden flex flex-col gap-0"
      >
        <div
          className="flex-1 flex flex-col items-center justify-center text-white text-center gap-5 border"
          style={{ background: `url('/loginBG.jpg')`, backgroundSize: "cover" ,backgroundRepeat: "no-repeat"}}
        >
          <img
            src="/DistrictApp.jpg"
            alt="App logo"
            className="w-40 h-20 object-cover border border-black"
          />
          <span className="w-[60%] font-light">
            Experience the best in Dining, Movies, and Events
          </span>
        </div>
        <div className="flex-1 p-0 m-0">
          <DialogHeader className="h-full flex items-center  p-5 border border-black">
            <DialogTitle className="text-[25px] font-semibold">Enter your mobile number</DialogTitle>
            <span className="text-sm font-semibold text-gray-600">If you don't have an account yet, we'll create one for you</span>
          </DialogHeader>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;
