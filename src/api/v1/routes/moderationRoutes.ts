import { Router } from "express";
import {
	moderatePost,
	flagUser,
	getPostById,
	getUserProfile,
	getFlaggedContentStats,
} from "../controllers/moderationController";

const router: Router = Router();

/**
 * @swagger
 * /api/v1/moderation/post/{id}:
 *   get:
 *     summary: Retrieve a post by ID
 *     description: Fetch details of a specific post.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the post to retrieve
 *     responses:
 *       200:
 *         description: Successfully retrieved the post
 *       404:
 *         description: Post not found
 */
router.get("/post/:id", getPostById);

/**
 * @swagger
 * /api/v1/moderation/post/{id}/moderate:
 *   post:
 *     summary: Moderate a post
 *     description: Apply moderation actions to a specific post.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the post to moderate
 *     responses:
 *       200:
 *         description: Post moderated successfully
 */
router.post("/post/:id/moderate", moderatePost);

/**
 * @swagger
 * /api/v1/moderation/user/{id}/profile:
 *   get:
 *     summary: Retrieve a user profile
 *     description: Get details of a specific user.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the user profile
 *     responses:
 *       200:
 *         description: Successfully retrieved the user profile
 */
router.get("/user/:id/profile", getUserProfile);

/**
 * @swagger
 * /api/v1/moderation/user/{id}/flag:
 *   post:
 *     summary: Flag a user
 *     description: Mark a user for review due to inappropriate behavior.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the user to flag
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               reason:
 *                 type: string
 *                 example: "Spam"
 *     responses:
 *       200:
 *         description: User flagged successfully
 */
router.post("/user/:id/flag", flagUser);

/**
 * @swagger
 * /api/v1/moderation/content/flags/stats:
 *   get:
 *     summary: Get flagged content stats
 *     description: Retrieve statistics on flagged posts and users.
 *     responses:
 *       200:
 *         description: Successfully retrieved flagged content stats
 */
router.get("/content/flags/stats", getFlaggedContentStats);

export default router;