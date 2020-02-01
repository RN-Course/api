/** @format */

const {
  loginProxy
} = require("../Proxies");
const {
  protectedRoute,
  signToken
} = loginProxy;
module.exports = function expressAdapter(
  controller
) {
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

    if (req.path === "/login") {
      // TODO: send the response with the new access token

      signToken(controller, httpRequest)
        .then((data) => {
          res.send(data);
        })
        .catch((err) => {
          res.send(err);
        });
    } else if (req.path == "/signup") {
      // DONE
      let signup = await controller(
        adapted
      );
      res.json(signup);
      console.log(signup); // logging in new user response
    } else {
      let response = await controller(
        adapted
      );
      res.json(response);
    }
  };
};
