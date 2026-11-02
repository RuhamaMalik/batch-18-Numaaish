const ageCheck = (req, res, next) => {
    const age = req.query.age;
    if (!age) {
        res.json({ msg: 'Age is required!', success: false })
    } else if (age < 18) {
        res.json({ msg: 'Access Denied!', success: false })
    } else {
        next();
    }
}
module.exports ={ageCheck}