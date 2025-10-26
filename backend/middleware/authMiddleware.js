import jwt from "jsonwebtoken";

export const protect = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // "Bearer <token>"
  if (!token) return res.status(401).json({ message: "No token, authorization denied" });

  try {
    // console.log("Authorization header:", req.headers.authorization);
    // console.log("Raw token:", token);

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // console.log("Decoded token:", decoded);
    req.user = decoded.id; // attach user ID to request
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};
