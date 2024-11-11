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
exports.MemberService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const utils_1 = require("../../utils");
const saveMemberIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const isExistEmail = yield utils_1.prisma.member.findUnique({
        where: {
            email: payload === null || payload === void 0 ? void 0 : payload.email,
        },
    });
    if (isExistEmail) {
        throw new utils_1.AppError(http_status_1.default.BAD_REQUEST, "Email already exists!");
    }
    return yield utils_1.prisma.member.create({
        data: payload,
    });
});
const fetchAllMembersFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield utils_1.prisma.member.findMany();
});
const fetchMemberFromDB = (memberId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield utils_1.prisma.member.findUniqueOrThrow({
        where: { memberId },
    });
});
const updateMemberIntoDB = (memberId, data) => __awaiter(void 0, void 0, void 0, function* () {
    yield utils_1.prisma.member.findUniqueOrThrow({
        where: { memberId },
    });
    return yield utils_1.prisma.member.update({
        where: { memberId },
        data,
    });
});
const deleteMemberFromDB = (memberId) => __awaiter(void 0, void 0, void 0, function* () {
    yield utils_1.prisma.member.findUniqueOrThrow({
        where: { memberId },
    });
    yield utils_1.prisma.member.delete({
        where: { memberId },
    });
    return null;
});
exports.MemberService = {
    saveMemberIntoDB,
    fetchAllMembersFromDB,
    fetchMemberFromDB,
    updateMemberIntoDB,
    deleteMemberFromDB,
};
