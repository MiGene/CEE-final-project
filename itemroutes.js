const express = require("express");
const itemsController = require("../controller/itemsController");

const router = express.Router();

router.get("/:student_id", itemsController.getStudentInfo);
router.post("/:student_id", itemsController.addTask);
router.delete("/:student_id/tasks/:item_name", itemsController.deleteTask);

module.exports = router;
