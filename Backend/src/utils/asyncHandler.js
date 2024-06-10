const asyncHandler = (fn) => async (req, res, next) => {
    try {
        await fn(res, res, next);
    } catch (error) {
        res.status(error.code || 500).json({
            success: false,
            message: error.message,
        });
    }
};

const asyncHandeler = (requestHandeler) => {
    (req, res, next) => {
        Promise.resolve(requestHandeler(req, res, next)).catch((error) =>
            next(error)
        );
    };
};
