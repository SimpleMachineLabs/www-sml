import { db } from "@/app/(web-app)/lib/db";

export const joinWaitList = async (payload: {
  firstName?: string;
  lastName?: string;
  emailAddress: string;
}) => {
  const { firstName, lastName, emailAddress } = payload;
  const record = await db.emailList.findFirst({
    where: {
      email: emailAddress,
    },
  });

  if (record) {
    throw new Error("Already joined waitlist!");
  }

  const createRecord = await db.emailList.create({
    data: {
      firstName,
      lastName,
      email: emailAddress,
    },
  });
  return createRecord;
};
