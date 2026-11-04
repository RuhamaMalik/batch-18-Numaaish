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


const currentLocation = (req, res, next) => {
    let location = req.query.location
    if (!location) {
        res.json({ success: false, msg: 'Enter your location!' })
    } else if (location !== 'karachi') {
        res.json({ success: false, msg: 'Bhai karachi mai akar orer karo!' })
    }else{
        next();
    }
}

module.exports = { ageCheck, currentLocation}