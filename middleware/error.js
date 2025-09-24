const errorHandler = (error, req, res, next) => {
    res.status(404).json({message: error.message});
}

export default errorHandler;