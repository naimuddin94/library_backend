import httpStatus from "http-status";
import { AppResponse, catchAsync } from "../../utils";
import { MemberService } from "./member.service";

const createMember = catchAsync(async (req, res) => {
  const result = await MemberService.saveMemberIntoDB(req.body);

  res
    .status(httpStatus.CREATED)
    .json(
      new AppResponse(httpStatus.CREATED, result, "Member created successfully")
    );
});

const getAllMembers = catchAsync(async (req, res) => {
  const result = await MemberService.fetchAllMembersFromDB();

  res
    .status(httpStatus.OK)
    .json(
      new AppResponse(httpStatus.OK, result, "Members retrieved successfully")
    );
});

const getMember = catchAsync(async (req, res) => {
  const { memberId } = req.params;
  const result = await MemberService.fetchMemberFromDB(memberId);

  res
    .status(httpStatus.OK)
    .json(
      new AppResponse(httpStatus.OK, result, "Member retrieved successfully")
    );
});

export const MemberController = {
  createMember,
  getAllMembers,
  getMember,
};
