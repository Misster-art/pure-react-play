import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

const phoneSchema = z.object({
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
});

type PhoneForm = z.infer<typeof phoneSchema>;

const Login = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [showVerification, setShowVerification] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PhoneForm>({
    resolver: zodResolver(phoneSchema),
  });

  const onSubmitPhone = (data: PhoneForm) => {
    console.log("Phone submitted:", data);
    setShowVerification(true);
  };

  const onVerificationComplete = () => {
    console.log("Verification code:", verificationCode);
    navigate("/dashboard");
  };

  const networkProviders = [
    { id: 1, name: "MTN", image: "/lovable-uploads/ed317539-a5ea-42c0-ac16-8337341b1b62.png" },
    { id: 2, name: "Etesalat", image: "/placeholder.svg" },
    { id: 3, name: "Roshan", image: "/placeholder.svg" },
    { id: 4, name: "AWCC", image: "/placeholder.svg" },
    { id: 5, name: "Salaam", image: "/placeholder.svg" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-ios-lightGray dark:bg-gray-900 px-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <DropdownMenu>
            <DropdownMenuTrigger className="inline-flex items-center justify-center px-4 py-2 text-lg font-semibold text-ios-darkGray dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors">
              {selectedOption || "Select Network Provider"}
              <ChevronDown className="ml-2 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-72 p-0 bg-white dark:bg-gray-800 rounded-xl shadow-lg border-none">
              <Card className="border-none shadow-none bg-transparent">
                <CardContent className="p-2">
                  {networkProviders.map((provider) => (
                    <DropdownMenuItem
                      key={provider.id}
                      onClick={() => setSelectedOption(provider.name)}
                      className="flex items-center space-x-3 p-3 cursor-pointer rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      <img
                        src={provider.image}
                        alt={provider.name}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <span className="text-base font-medium text-ios-darkGray dark:text-white">
                        {provider.name}
                      </span>
                    </DropdownMenuItem>
                  ))}
                </CardContent>
              </Card>
            </DropdownMenuContent>
          </DropdownMenu>
          <p className="mt-2 text-sm text-ios-coolGray dark:text-gray-400">Please sign in to continue</p>
        </div>

        {!showVerification ? (
          <form onSubmit={handleSubmit(onSubmitPhone)} className="mt-8 space-y-6">
            <div className="space-y-4 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-ios-coolGray dark:text-gray-300 mb-1">
                  Phone Number
                </label>
                <input
                  {...register("phone")}
                  type="tel"
                  className="w-full px-4 py-3.5 rounded-xl border border-[#E5E5EA] dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-primary bg-[#FAFAFA] dark:bg-gray-700 dark:text-white"
                  placeholder="Enter your phone number"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-[#FF3B30]">{errors.phone.message}</p>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-3.5 px-4 rounded-xl text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-200"
            >
              Continue
            </button>
          </form>
        ) : (
          <div className="mt-8 space-y-6">
            <div className="space-y-4 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm">
              <div className="text-center">
                <h3 className="text-lg font-medium text-ios-darkGray dark:text-white mb-2">Enter Verification Code</h3>
                <p className="text-sm text-ios-coolGray dark:text-gray-400 mb-4">
                  We've sent a code to your phone
                </p>
                <div className="flex justify-center">
                  <InputOTP
                    maxLength={6}
                    value={verificationCode}
                    onChange={(value) => setVerificationCode(value)}
                    onComplete={onVerificationComplete}
                    className="gap-2"
                  >
                    <InputOTPGroup>
                      {Array.from({ length: 6 }).map((_, index) => (
                        <InputOTPSlot 
                          key={index} 
                          index={index}
                          className="w-10 h-10 border-2 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white" 
                        />
                      ))}
                    </InputOTPGroup>
                  </InputOTP>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;