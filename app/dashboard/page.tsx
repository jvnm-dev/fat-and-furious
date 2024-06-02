import { auth } from "@/auth";
import Image from "next/image";
import { TrainingCard } from "@/components/ui/training-card";
import { trainings } from "@/lib/constants/trainings";

export default async function Dashboard() {
  const currentMonthAndYearLiteral = new Date().toLocaleString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const authInfo = await auth();
  const userImage = authInfo?.user?.image ?? "";

  return (
    <div className="flex flex-col w-screen">
      <div className="p-4 bg-[#0E0C0B]">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl text-yellow-400">Your plan</h1>
            <h2 className="text-2xl text-yellow-100">
              {currentMonthAndYearLiteral}
            </h2>
          </div>
          <div>
            <Image
              src={userImage}
              className="rounded-full ring-2 ring-[#F3CE49]"
              alt="User image"
              width={64}
              height={64}
            />
          </div>
        </div>

        <p className="text-yellow-100 mt-2">
          Choose a training plan to start your workout.
        </p>
      </div>

      <div className="p-4 pt-0 overflow-auto h-[calc(100vh-190px)]">
        {trainings.map((training) => (
          <TrainingCard training={training} key={training.name} />
        ))}
      </div>
    </div>
  );
}
