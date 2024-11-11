import express from "express";
import { validateRequest } from "../../middleware";
import { MemberController } from "./member.controller";
import { MemberValidation } from "./member.validation";

const router = express.Router();

router
  .route("/")
  .post(
    validateRequest(MemberValidation.create),
    MemberController.createMember
  );

export const MemberRoutes = router;
