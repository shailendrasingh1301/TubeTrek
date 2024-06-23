const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => {
      next(err);
    });
  };
};

export { asyncHandler };

// // HOC : Higher order function
// const asyncHandler = (fun) => {
//   async (err, req, res, next) => {
//     try {
//       await fun(err, req, res, next);
//     } catch (error) {
//       req.status(err.code || 500).json({
//         success: false,
//         message: err.message,
//       });
//     }
//   };
// };
