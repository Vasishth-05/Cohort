const JWT_ADMIN_SECRET = process.env.JWT_ADMIN_SECRET;
const JWT_USER_SECRET = process.env.JWT_USER_SECRET;
const DB = process.env.DB_URL;

module.exports = {
    JWT_ADMIN_SECRET : JWT_ADMIN_SECRET,
    JWT_USER_SECRET : JWT_USER_SECRET,
    DB: DB
}