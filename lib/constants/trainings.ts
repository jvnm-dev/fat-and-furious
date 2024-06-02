import { Training, TrainingType } from "@/lib/types/training";

export const trainings: Training[] = [
  {
    name: "Chest & Triceps",
    type: TrainingType.Strength,
    duration: 60,
  },
  {
    name: "Biceps & Shoulders",
    type: TrainingType.Strength,
    duration: 60,
  },
  {
    name: "Back & Abs",
    type: TrainingType.Strength,
    duration: 60,
  },
  {
    name: "Trekking",
    type: TrainingType.Cardio,
    duration: 120,
  },
  {
    name: "Indoor Cycling",
    type: TrainingType.Cardio,
    duration: 15,
  },
  {
    name: "Outdoor Cycling",
    type: TrainingType.Cardio,
    duration: 60,
  },
  {
    name: "Full Body",
    type: TrainingType.Mixed,
    duration: 60,
  },
];
