/** @format */

const { loginProxy } = require("../Proxies")
const { protectedRoute, signToken } = loginProxy
module.exports = function expressAdapter(controller) {
  return async function(req, res) {
    console.log(`the request has been sent from ${req.ip} and the path is ${req.path}`)
    const httpRequest = {
      body: req.body,
      params: req.params,
      query: req.query,
      path: req.path,
      headers: req.headers.headers
    }

    const adapted = Object.freeze({
      httpRequest
    })

    if (req.path === "/login") {
      // TODO: send the response with the new access token

      signToken(controller, httpRequest)
        .then((data) => {
          res.json(data)
        })
        .catch((err) => {
          res.send(err)
        })
    } else if (req.path == "/signup") {
      // DONE
      let signup = await controller(adapted)
      res.json(signup)
      // console.log(signup) // logging in new user response
    } else {
      // if not signup or login
      protectedRoute(controller, adapted.httpRequest)
        .then((res) => {
          // let response = await controller(adapted)
          // res.json(response)
          console.log(res)
        })
        .catch((err) => {
          res.send(err)
        })
      // console.log()
    }
  }
}
