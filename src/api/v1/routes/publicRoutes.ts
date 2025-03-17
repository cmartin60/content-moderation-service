import { Router } from "express";
import { getPostById, getUserProfile } from "../controllers/moderationController";

const router: Router = Router();

/**
 * @swagger
 * /api/v1/moderation/post/{id}:
 *   get:
 *     summary: Retrieve a post by ID
 *     description: Fetch details of a specific post.
 *     tags:
 *       - Public
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           example: "12345"
 *         description: The unique ID of the post.
 *     responses:
 *       200:
 *         description: Successfully retrieved the post.
 */
router.get("/post/:id", getPostById);

/**
 * @swagger
 * /api/v1/moderation/user/{id}/profile:
 *   get:
 *     summary: Retrieve a user profile
 *     description: Get details of a specific user.
 *     tags:
 *       - Public
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           example: "user123"
 *         description: The unique ID of the user profile.
 *     responses:
 *       200:
 *         description: Successfully retrieved the user profile.
 */
router.get("/user/:id/profile", getUserProfile);

export default router;
