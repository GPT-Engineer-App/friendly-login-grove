import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our App</h1>
        <p className="text-xl mb-8">Get started by logging in to your account.</p>
        <Link to="/login">
          <Button size="lg">Go to Login</Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;
