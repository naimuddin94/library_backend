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

const fetchAllMembersFromDB = async () => {
  return await prisma.member.findMany();
};

const fetchMemberFromDB = async (memberId: string) => {
  return await prisma.member.findUnique({
    where: { memberId },
  });
};

const updateMemberIntoDB = async (memberId: string, data: Partial<Member>) => {
  return await prisma.member.update({
    where: { memberId },
    data,
  });
};

const deleteMemberFromDB = async (memberId: string) => {
  await prisma.member.delete({
    where: { memberId },
  });

  return null;
};

export const MemberService = {
  saveMemberIntoDB,
  fetchAllMembersFromDB,
  fetchMemberFromDB,
  updateMemberIntoDB,
  deleteMemberFromDB,
};
