import { auth } from "@/auth";
import Image from "next/image";
import { TrainingCard } from "@/components/ui/training-card";
import { TrainingType } from "@/lib/types/training";

export default async function Dashboard() {
  const currentMonthAndYearLiteral = new Date().toLocaleString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const authInfo = await auth();
  const userImage = authInfo?.user?.image ?? "";

  return (
    <div className="flex flex-col  h-screen w-screen p-4">
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

      <p className="mt-4 text-yellow-100">
        Choose a training session to start your day
      </p>

      <TrainingCard
        training={{
          name: "Chest & Triceps",
          duration: 60,
          type: TrainingType.Strength,
          recommended: true,
        }}
      />

      <TrainingCard
        training={{
          name: "Biceps & Shoulders",
          duration: 60,
          type: TrainingType.Strength,
        }}
      />

      <TrainingCard
        training={{
          name: "Back & Abs",
          duration: 60,
          type: TrainingType.Strength,
        }}
      />

      <TrainingCard
        training={{
          name: "Trekking",
          duration: 120,
          type: TrainingType.Cardio,
        }}
      />
      <TrainingCard
        training={{
          name: "Trekking",
          duration: 120,
          type: TrainingType.Cardio,
        }}
      />
      <TrainingCard
        training={{
          name: "Trekking",
          duration: 120,
          type: TrainingType.Cardio,
        }}
      />
    </div>
  );
}
