import colors from "colors";

const logger = (req, res, next) => {
    const methods = {
        GET: "green",
        POST: "blue",
        PUT: "yellow",
        DELETE: "red"
    }
    const color = methods[req.method] || white;
    console.log(`${req.method} | ${req.protocol}://${req.get('host')}${req.originalUrl}`[color]);
    next();
}

export default logger;