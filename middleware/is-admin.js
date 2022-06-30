module.exports = (req, res, next) => {
    if (!req.user || !req.user.admin)
    {
        return res.redirect('/login');
    // } else if (!req.user.admin) {
    //     return res.redirect('/login');
    }
    next();
}