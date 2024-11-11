import express from "express";
import { validateRequest } from "../../middleware";
import { MemberController } from "./member.controller";
import { MemberValidation } from "./member.validation";

const router = express.Router();

router
  .route("/")
  .get(MemberController.getAllMembers)
  .post(
    validateRequest(MemberValidation.create),
    MemberController.createMember
  );

router
  .route("/:memberId")
  .get(MemberController.getMember)
  .put(validateRequest(MemberValidation.update), MemberController.updateMember)
  .delete(MemberController.deleteMember);

export const MemberRoutes = router;
