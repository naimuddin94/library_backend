"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberRoutes = void 0;
const express_1 = __importDefault(require("express"));
const middleware_1 = require("../../middleware");
const member_controller_1 = require("./member.controller");
const member_validation_1 = require("./member.validation");
const router = express_1.default.Router();
router
    .route("/")
    .get(member_controller_1.MemberController.getAllMembers)
    .post((0, middleware_1.validateRequest)(member_validation_1.MemberValidation.create), member_controller_1.MemberController.createMember);
router
    .route("/:memberId")
    .get(member_controller_1.MemberController.getMember)
    .put((0, middleware_1.validateRequest)(member_validation_1.MemberValidation.update), member_controller_1.MemberController.updateMember)
    .delete(member_controller_1.MemberController.deleteMember);
exports.MemberRoutes = router;
