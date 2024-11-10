import { Member } from "@prisma/client";
import httpStatus from "http-status";
import { AppError, prisma } from "../../utils";

const saveMemberIntoDB = async (payload: Member) => {
  const isExistEmail = await prisma.member.findUnique({
    where: {
      email: payload?.email,
    },
  });

  if (isExistEmail) {
    throw new AppError(httpStatus.BAD_REQUEST, "Email already exists!");
  }

  return await prisma.member.create({
    data: payload,
  });
};

export const MemberService = {
  saveMemberIntoDB,
};
