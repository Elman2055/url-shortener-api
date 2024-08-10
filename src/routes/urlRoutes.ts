import express from "express";
import { shortenUrl, redirectUrl } from "../controllers/urlController";

const router = express.Router();

router.post("/shorten", shortenUrl);
router.get("/:shortcode", redirectUrl);

export default router;
