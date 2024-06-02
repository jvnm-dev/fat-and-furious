-- CreateTable
CREATE TABLE "users" (
    "email" VARCHAR NOT NULL,
    "uuid" UUID NOT NULL,

    CONSTRAINT "users_pk" PRIMARY KEY ("uuid")
);

