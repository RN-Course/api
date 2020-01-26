module.exports = function expressAdapter(req, res) {
  const httpRequest = {
    body: req.body,
    params: req.params,
    query: req.query
  };
  const httpResponse = {
    send: chunk => res.send(chunk),
    json: chunk => res.json(chunk),
    sendStatus: status => res.sendStatus(status)
  };

  return Object.freeze({
    httpRequest,
    httpResponse
  });
};
