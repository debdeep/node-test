export const adminAuthCheck = (req, res, next) => {
    console.log('Admin Auth Check Middleware');
    const token = "123456789";
    const isAdmin = token === "123456789"; // Example check, replace with real logic
    if (!isAdmin) {
        return res.status(401).json({ message: 'Forbidden: Admins only' });
    } else {
        console.log('Admin Auth Check Passed');
        next();
    }
};