/***
 * JWT: Secure your api
 * ------------------------
 * create token
 * --------------------
 * client:
 * 1) after user login send user basic info to create token
 * 2) In the serverside: install npm i jsonwebtoken
 * 3) import jsonwebtoken
 * 4) jwt.sign(payload,secret,{expires})
 * 5) return token to the client side
 * 
 * 
 * 
 * 6) after receiveing the token store it either httponly cookies or local storage(send best solution)
 * 
 * 7) use a general space onauthstatechange 
 * ---------------------------
 * send token to the server
 * ----------------------------
 * 1) for sensitive api call() send authorization headersn{authorization : bearer ${token}}
 * ------------------------------
 * 2) erify token
 * --------------------------
 * 1) Create a function called verifyJWT (middleware) jekhane token use korte cai sekhane middleware hisabe use korbo
 * 2) This function will have three params: req,res,next
 * 3) First check whether the authorization headers exists
 * 4) if not send 401
 * 5) get the token out of the authorizatioj header
 * 6) call jwt.verify(token ,secret ,(error,decoded))
 * 7) if err=>send 401
 * 8) set decoded  to the req object so that we can retrive it later
 * 9) call the next() to go to the next function
 * ----------------------------------------------------------------
 * 1) check wether token has the email email that matches with the required email.
 * 3) 
 */