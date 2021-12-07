function createCookieFromToken (user, statusCode, req, res) {
    const token = user.generateVerificationToken();

    const cookieOptions = {
        expires: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000),
        httpOnly: true, secure: req.secure || req.headers["x-forwarded-proto"] === "https"
    };

    res.cookie("jwt", token, cookieOptions);
    res.status(statusCode).json({status: "success", token, data: {user}});
};

export default createCookieFromToken