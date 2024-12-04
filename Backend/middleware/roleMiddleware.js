// Middleware to check if the user has a specific role
const requireRole = (role) => {
  return (req, res, next) => {
    const { role: userRole } = req.user; // This assumes user data is added to req.user after authentication

    if (userRole !== role) {
      return res
        .status(403)
        .json({ message: "Forbidden: You do not have the required role" });
    }

    next();
  };
};

module.exports = requireRole;
