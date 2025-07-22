const jwt = require("jsonwebtoken");


const verifyToken = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) return res.status(401).send("Acceso denegado");
  try {
    const payload = jwt.verify(token, process.env.SECRET_TOKEN);
    req.payload = payload; 
    next();
  } catch (error) {
    try {
      const payload = jwt.verify(token, process.env.SECRET_TOKEN_REFRESH);
      req.payload = payload;
      next();
    } catch (error) {
      res.status(401).send({ status: "Token expired", error: error.message });
    }
  }
};

const verifyAdmin = (req, res, next) => {
  try {
    const role = req.payload.role;
    if (role !== "admin") {
      return res.status(401).send("No tienes permisos");
    }
    next(); 
  } catch (error) {
    res.status(401).send("Token expired");
  }
};

const getTokens = async (req, res) => {
  try {
    const payload = {
      _id: req.payload._id,
      name: req.payload.name,
      role: req.payload.role,
    };
    const token = generateToken(payload, false);
    const token_refresh = generateToken(payload, true);
    res.status(200).send({ status: "Success", token, token_refresh });
  } catch (error) {
    res.status(500).send({ status: "Failed", error: error.message });
  }
};


module.exports = { verifyToken, verifyAdmin, getTokens };