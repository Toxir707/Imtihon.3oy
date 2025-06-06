export const ValidationMiddleware = (schema) => {
    return (req, res, next) => {
      const { error, value } = schema.validate(req.body);
      if (error) {
        return res.status(400).json({
          message: "Validation error",
          details: error.details.map((err) => err.message),
        });
      }
  
      req.validatedBody = value; 
      next();
    };
  };
  