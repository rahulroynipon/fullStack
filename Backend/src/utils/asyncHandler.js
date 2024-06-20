const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((error) =>
            next(error)
        );
    };
};

export { asyncHandler };

// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(res, res, next);
//     } catch (error) {
//         next(error)
//         });
//     }
// };
