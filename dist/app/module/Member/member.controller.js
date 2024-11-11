"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const utils_1 = require("../../utils");
const member_service_1 = require("./member.service");
const createMember = (0, utils_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_service_1.MemberService.saveMemberIntoDB(req.body);
    res
        .status(http_status_1.default.CREATED)
        .json(new utils_1.AppResponse(http_status_1.default.CREATED, result, "Member created successfully"));
}));
const getAllMembers = (0, utils_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_service_1.MemberService.fetchAllMembersFromDB();
    res
        .status(http_status_1.default.OK)
        .json(new utils_1.AppResponse(http_status_1.default.OK, result, "Members retrieved successfully"));
}));
const getMember = (0, utils_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { memberId } = req.params;
    const result = yield member_service_1.MemberService.fetchMemberFromDB(memberId);
    res
        .status(http_status_1.default.OK)
        .json(new utils_1.AppResponse(http_status_1.default.OK, result, "Member retrieved successfully"));
}));
const updateMember = (0, utils_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { memberId } = req.params;
    const updateData = req.body;
    const result = yield member_service_1.MemberService.updateMemberIntoDB(memberId, updateData);
    res
        .status(http_status_1.default.OK)
        .json(new utils_1.AppResponse(http_status_1.default.OK, result, "Member updated successfully"));
}));
const deleteMember = (0, utils_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { memberId } = req.params;
    const result = yield member_service_1.MemberService.deleteMemberFromDB(memberId);
    res
        .status(http_status_1.default.OK)
        .json(new utils_1.AppResponse(http_status_1.default.OK, result, "Member successfully deleted"));
}));
exports.MemberController = {
    createMember,
    getAllMembers,
    getMember,
    updateMember,
    deleteMember,
};
