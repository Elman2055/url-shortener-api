import validateUrl from "../utils/validator";
import { v4 as uuidv4 } from "uuid";
import { Request, Response } from "express";

interface UrlDatabase {
  [shortcode: string]: string;
}

const urlDatabase: UrlDatabase = {};

export const shortenUrl = (req: Request, res: Response) => {
  const { url } = req.body;

  if (!validateUrl(url)) {
    return res.status(400).json({ error: "Invalid URL" });
  }

  const shortcode = uuidv4().substring(0, 6);
  urlDatabase[shortcode] = url;

  res.status(200).json({
    shortcode,
    redirect: `${req.protocol}://${req.get("host")}/${shortcode}`,
  });
};

export const redirectUrl = (req: Request, res: Response) => {
  const { shortcode } = req.params;
  const originalUrl = urlDatabase[shortcode];

  if (originalUrl) {
    return res.redirect(302, originalUrl);
  } else {
    return res.status(404).json({ error: "Not found" });
  }
};
