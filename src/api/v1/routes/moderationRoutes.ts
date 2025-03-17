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
 *       400:
 *         description: Invalid post ID format.
 *       404:
 *         description: Post not found.
 */
router.get("/post/:id", getPostById);

/**
 * @swagger
 * /api/v1/moderation/post/{id}/moderate:
 *   post:
 *     summary: Moderate a post (Internal Use Only)
 *     description: Apply moderation actions to a specific post.
 *     tags:
 *       - Internal
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           example: "67890"
 *         description: The ID of the post to moderate.
 *       - in: body
 *         name: action
 *         required: true
 *         description: The moderation action to take.
 *         schema:
 *           type: object
 *           properties:
 *             action:
 *               type: string
 *               enum: ["flag", "remove", "restrict"]
 *               example: "flag"
 *     responses:
 *       200:
 *         description: Post moderated successfully.
 *       400:
 *         description: Missing or invalid action parameter.
 *       403:
 *         description: Unauthorized access.
 *       404:
 *         description: Post not found.
 */
router.post("/post/:id/moderate", moderatePost);

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
 *       404:
 *         description: User not found.
 */
router.get("/user/:id/profile", getUserProfile);

/**
 * @swagger
 * /api/v1/moderation/user/{id}/flag:
 *   post:
 *     summary: Flag a user (Internal Use Only)
 *     description: Mark a user for review due to inappropriate behavior.
 *     tags:
 *       - Internal
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           example: "user789"
 *         description: The ID of the user to flag.
 *       - in: body
 *         name: reason
 *         required: true
 *         description: The reason for flagging the user.
 *         schema:
 *           type: object
 *           properties:
 *             reason:
 *               type: string
 *               example: "Hate speech"
 *     responses:
 *       200:
 *         description: User flagged successfully.
 *       400:
 *         description: Missing or invalid reason parameter.
 *       403:
 *         description: Unauthorized access.
 *       404:
 *         description: User not found.
 */
router.post("/user/:id/flag", flagUser);

/**
 * @swagger
 * /api/v1/moderation/content/flags/stats:
 *   get:
 *     summary: Get flagged content statistics (Internal Use Only)
 *     description: Retrieve statistics on flagged posts and users.
 *     tags:
 *       - Internal
 *     responses:
 *       200:
 *         description: Successfully retrieved flagged content stats.
 *       403:
 *         description: Unauthorized access.
 */
router.get("/content/flags/stats", getFlaggedContentStats);

export default router;