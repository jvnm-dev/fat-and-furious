export enum TrainingType {
  Strength = "Strength",
  Cardio = "Cardio",
  Mixed = "Mixed",
}

export type Training = {
  name: string;
  duration: number;
  type: TrainingType;
  recommended?: boolean;
};
