import jwt from 'jsonwebtoken'

export const authorizeRequest = (req, res, next) => {
  const tokenRaw = req.header('authorization')
  if (!tokenRaw) {
    res.sendStatus(401)
  }
  const token = tokenRaw.split(' ')[1];
  if (!token) {
    res.sendStatus(403)
  }
  jwt.verify(token, 
    process.env.JWT_SECRET, 
    (err, decoded) => {
    if (err) return res.sendStatus(403);
    req.userID = decoded.id;
    next()
  })
  
  
}