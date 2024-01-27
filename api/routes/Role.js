import express from "express";
import Role from "../models/Role.js";
import {
  createRole,
  deleteRole,
  getAllRoles,
  updateRole,
} from "../controllers/roleController.js";

const router = express.Router();
// Create a role
router.post("/create", createRole);

// Get all roles
router.get("/getAll", getAllRoles);

// Update a role
router.put("/update/:id", updateRole);

// Delete a role
router.delete("/delete/:id", deleteRole);

export default router;
