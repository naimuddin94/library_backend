import express from "express";
import { BookRoutes } from "../module/Book/book.routes";
import { BorrowRoutes } from "../module/Borrow/borrow.routes";
import { MemberRoutes } from "../module/Member/member.routes";
import { IRoutes } from "../types";

const router = express.Router();

const moduleRoutes: IRoutes[] = [
  {
    path: "/members",
    route: MemberRoutes,
  },
  {
    path: "/books",
    route: BookRoutes,
  },
  {
    path: "/",
    route: BorrowRoutes,
  },
];

moduleRoutes.forEach((item) => router.use(item.path, item.route));

export default router;
