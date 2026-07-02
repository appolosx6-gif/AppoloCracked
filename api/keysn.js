import { KEYS } from "../databases/keys.js";

export default function handler(req, res) {
  return res.status(200).json({
    status: "success",
    total: KEYS.length,
    data: KEYS
  });
}