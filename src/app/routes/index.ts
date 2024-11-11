import express from "express";
import { MemberRoutes } from "../module/Member/member.routes";
import { IRoutes } from "../types";

const router = express.Router();

const moduleRoutes: IRoutes[] = [
  {
    path: "/members",
    route: MemberRoutes,
  },
];

moduleRoutes.forEach((item) => router.use(item.path, item.route));

export default router;
