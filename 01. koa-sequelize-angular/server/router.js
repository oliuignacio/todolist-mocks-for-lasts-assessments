'use strict';

const Router = require("koa-router");
const router = new Router();
const controller = require("./controller");

router.get("/", controller.getToDoList);
router.get("/todolist", controller.getToDoList);
router.post("/todolist", controller.postToDoList);

module.exports = router;
