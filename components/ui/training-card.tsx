import { Training } from "@/lib/types/training";
import { formatDuration } from "@/lib/utils";

type TrainingCardProps = {
  training: Training;
};

export const TrainingCard = ({ training }: TrainingCardProps) => {
  const computeApproximateEndTime = (duration: number) => {
    const now = new Date();
    const endTime = new Date(now.getTime() + duration * 60 * 1000);
    return endTime.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
    });
  };

  return (
    <div className="flex flex-col border-yellow-400 border-2 p-4 rounded-xl mt-4 cursor-pointer">
      <div className="flex justify-between items-center">
        <h3 className="text-xl text-yellow-400">
          {training.name}{" "}
          {training.recommended && (
            <span className="text-green-400 text-xs">Recommended</span>
          )}
        </h3>
        <span className="text-yellow-100">
          {formatDuration(training.duration)}
        </span>
      </div>

      <div className="flex justify-between items-center mt-4">
        <span className="text-yellow-100">{training.type}</span>
        <span className="text-yellow-100">
          Ends at {computeApproximateEndTime(training.duration)}
        </span>
      </div>
    </div>
  );
};
