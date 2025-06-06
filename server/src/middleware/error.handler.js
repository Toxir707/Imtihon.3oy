export const ErrorHandlerMiddleware = (err, req, res, __) => {
    if (err.isException) {
      return res.status(err.status).send({
        message: err.message,
      });
    }
    console.log(err);
    res.status(500).send({
      message: "Internal Server Error",
    });
  };
  