exports.success = (data, message = 'Success') => {
  return {
    success: true,
    message,
    data
  };
};

exports.failure = (message = 'Something went wrong') => {
  return {
    success: false,
    message
  };
};
