module.exports = function expressAdapter(req, res, controller) {
  const { params, body, query } = req;
  function json(data) {
    res.json(data);
  }
  function send(data) {
    res.send(data);
  }
  function sendStatus(data) {
    res.sendStatus(data);
  }

  return { json, send, sendStatus };
};
