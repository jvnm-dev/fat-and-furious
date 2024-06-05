-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL,
    "email" VARCHAR,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Training" (
    "id" INTEGER NOT NULL,
    "name" VARCHAR,
    "duration" INTEGER,
    "type" VARCHAR,
    "image" VARCHAR,

    CONSTRAINT "Training_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Exercise" (
    "id" INTEGER NOT NULL,
    "training_id" INTEGER,
    "name" VARCHAR,
    "image" VARCHAR,

    CONSTRAINT "Exercise_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" INTEGER NOT NULL,
    "user_id" INTEGER,
    "created_at" TIMESTAMP(6),

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SessionExercise" (
    "id" INTEGER NOT NULL,
    "id_session" INTEGER,
    "id_exercise" INTEGER,

    CONSTRAINT "SessionExercise_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Exercise" ADD CONSTRAINT "Exercise_training_id_fkey" FOREIGN KEY ("training_id") REFERENCES "Training"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "SessionExercise" ADD CONSTRAINT "SessionExercise_id_exercise_fkey" FOREIGN KEY ("id_exercise") REFERENCES "Exercise"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "SessionExercise" ADD CONSTRAINT "SessionExercise_id_session_fkey" FOREIGN KEY ("id_session") REFERENCES "Session"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
