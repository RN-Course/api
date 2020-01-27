module.exports = function expressAdapter(controller) {
  return async function(req, res) {
    console.log(
      `the request has been sent from ${req.ip} and the path is ${req.path}`
    );
    const httpRequest = {
      body: req.body,
      params: req.params,
      query: req.query,
      path: req.path
    };

    const adapted = Object.freeze({
      httpRequest
    });

    let response = await controller(adapted);
    res.json(response);
  };
};
