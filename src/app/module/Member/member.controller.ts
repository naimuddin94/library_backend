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

export const MemberController = {
  createMember,
};
