import { useSearchParams } from "react-router-dom";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import Login from "../components/login";
import Signup from "../components/signup";

const Auth = () => {
  const [searchParams] = useSearchParams();
  const createNew = searchParams.get("createNew");

  return (
    <div className="mt-36 flex flex-col items-center gap-10 text-white">
      
      {/* Dynamic heading */}
      <h1 className="text-2xl font-bold">
        {createNew
          ? "Hold up… let’s login first"
          : "Login or create an account to continue"}
      </h1>

      {/* Tabs container */}
      <Tabs defaultValue="login" className="w-[400px]">
        
        {/* Tab buttons */}
        <TabsList className="grid grid-cols-2">
          <TabsTrigger value="login"><Login/></TabsTrigger>
          <TabsTrigger value="signup"><Signup/></TabsTrigger>
        </TabsList>

        {/* LOGIN TAB */}
        <TabsContent value="login" className="mt-6">
          <div className="space-y-4">
            <p className="text-gray-400 text-sm">
              Welcome back! Login to your Zyplo account.
            </p>
            <div className="border border-gray-800 rounded-lg p-4">
              Login Form Placeholder
            </div>
          </div>
        </TabsContent>

        {/* SIGNUP TAB */}
        <TabsContent value="signup" className="mt-6">
          <div className="space-y-4">
            <p className="text-gray-400 text-sm">
              New to Zyplo? Create an account in seconds.
            </p>
            <div className="border border-gray-800 rounded-lg p-4">
              Signup Form Placeholder
            </div>
          </div>
        </TabsContent>

      </Tabs>
    </div>
  );
};

export default Auth;
