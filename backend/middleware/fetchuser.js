const jwt = require('jsonwebtoken');
const secret = "secretkey";

const fetchuser = (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) {
        return res.status(401).send({ error: "Please authenticate using a valid token" });
    }
    try {
        const data = jwt.verify(token, secret);
        req.user = data.user; // Ensure the JWT payload includes `user` with an `id` field
        next();
    } catch (error) {
        return res.status(401).send({ error: "Invalid token. Please authenticate again." });
    }
};

module.exports = fetchuser;
