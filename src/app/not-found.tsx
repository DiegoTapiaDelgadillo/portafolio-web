import { Button } from "@/components/shared/Button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className=" flex items-center justify-center h-screen">
      <div>
        <h1 className=" text-6xl text-white">404 Page Not Found</h1>
        <div className=" flex justify-center py-8">
          <Link href={"/"}>
            <Button>Back to home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
