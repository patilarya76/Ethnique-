const jwt = require("jsonwebtoken");

const adminAuth = (req, res, next) => {

    try {

        const authHeader = req.header("Authorization");

        if (!authHeader) {
            return res.status(401).json({
                success:false,
                message:"No token"
            });
        }

        const token = authHeader.startsWith("Bearer ")
            ? authHeader.split(" ")[1]
            : authHeader;

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        if(decoded.role !== "admin"){
            return res.status(403).json({
                success:false,
                message:"Unauthorized"
            });
        }

        req.admin = decoded;

        next();

    } catch(err){

        res.status(401).json({
            success:false,
            message:"Invalid Token"
        });

    }

}

module.exports = adminAuth;