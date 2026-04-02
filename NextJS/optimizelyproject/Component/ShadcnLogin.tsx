import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ShadcnLogin = () => {
  return (
    <div className="w-full flex justify-center">
      <Card className="w-[30%]">
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
          <CardAction>
            <Button variant="link" className="hover:cursor-pointer">
              Sign Up
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-3">
                <Label>Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your mail"
                  required
                />
              </div>
              <div className="flex flex-col gap-3">
                <Label>Password</Label>
                <Input type="email" placeholder="Enter password" />
              </div>
            </div>
          </form>
        </CardContent>

        <CardFooter className="w-full flex-col border gap-5 ">
          <Button className="w-full hover:cursor-pointer">Login</Button>

          <Button variant="outline" className="w-full hover:cursor-pointer">
            Login With Google
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ShadcnLogin;
