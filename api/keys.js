import { KEYS } from "../databases/keys.js";

export default function handler(req, res) {
  const token = req.headers.authorization;

  if (token !== "Bearer PinoCrackAdmin") {
    return res.status(401).json({
      status: "error",
      message: "Unauthorized"
    });
  }

  return res.status(200).json({
    status: "success",
    total: KEYS.length,
    data: KEYS
  });
}