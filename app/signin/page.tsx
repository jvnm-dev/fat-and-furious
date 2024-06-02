import Image from "next/image";

import { authenticate } from "@/lib/actions/auth";
import { Button } from "@/components/ui/button";

export default function SignIn() {
  return (
    <div className="flex flex-col justify-between items-center h-screen absolute z-10 w-screen">
      <div className="absolute w-screen h-screen">
        <Image
          src="/images/gym.jpg"
          alt="Background"
          fill
          className="object-cover brightness-50"
        />
      </div>
      <div className="absolute top-[250px] flex flex-col items-center">
        <h1 className="mt-6 text-[60px] text-shadow">Fat and Furious</h1>
        <h2 className="text-[24px] text-shadow">
          Commit to your fitness journey
        </h2>
      </div>

      <form
        className="absolute w-full p-4 bottom-0"
        action={async () => {
          "use server";
          await authenticate();
        }}
      >
        <Button className="mb-8 text-lg w-full p-6 rounded-3xl" type="submit">
          <Image
            width={24}
            height={24}
            src="/icons/google.svg"
            alt="google logo"
            className="mr-2"
          />
          Sign in with Google
        </Button>
      </form>
    </div>
  );
}
