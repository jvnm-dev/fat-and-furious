import { Training } from "@prisma/client";

import { capitalize, formatDuration } from "@/lib/utils";
import Image from "next/image";

type TrainingCardProps = {
  training: Training;
};

export const TrainingCard = ({ training }: TrainingCardProps) => {
  return (
    <div className="flex justify-between border-yellow-400 border-2 p-4 rounded-xl mt-4 cursor-pointer hover:shadow-md hover:shadow-amber-200">
      <div className="justify-between items-center flex-1">
        <h3 className="text-xl text-yellow-400">{training.name}</h3>
        <h5 className="text-yellow-100">{capitalize(training.type)}</h5>
        <h5 className="text-yellow-100">{formatDuration(training.duration)}</h5>
      </div>
      {!!training.image && (
        <div className="relative flex-1">
          <div className="absolute bottom-[7px] right-0 w-full h-full">
            <Image
              src={training.image}
              alt={training.name}
              width={146}
              height={80}
            />
          </div>
        </div>
      )}
    </div>
  );
};
