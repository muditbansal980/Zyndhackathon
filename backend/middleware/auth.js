const { getUser } = require("../services/auth.js");
async function authmiddleware(req, res, next) {
    try {
        const sessionId = req.cookies?.uid;
        if (!sessionId) {
            return res.status(401).send("Unauthorized: No session ID");
        }

        const user = getUser(sessionId);
        if (!user) {
            return res.status(401).send("Unauthorized: Invalid session");
        }

        req.user = user; // Attach user info to request object
        next(); // Proceed to the next middleware or route handler
    } catch (error) {
        return res.status(500).send("Server error");
    }
}

module.exports = { authmiddleware };