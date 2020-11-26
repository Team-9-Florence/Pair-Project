const {User} = require('../models')
const {compare} = require('../helper/bcrypt')
const {makeToken} = require('../helper/jwt')
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.googleClientSECRET);

class UserController{

  static async register(req,res,next){
    let obj = {
      email : req.body.email,
      password : req.body.password,
    }
    try {
      const data = await User.create(obj)
      res.status(201).json({
        id : data.id,
        email : data.email
      })
    } catch (error) {
      next(error)
    }
  }

  static async login(req,res,next){
    let obj = {
      email : req.body.email,
      password : req.body.password
    }
    try {
      const data = await User.findOne({where: {email : obj.email}})
      if (!data) {
        throw {
          status : 401,
          message: `invalid email`
        }
      } else {
        const compared = compare(obj.password, data.password)
        if (!compared) {
          throw {
            status : 401,
            message: `invalid password`
          }
        } else {
          let obj = {
            id : data.id,
            email : data.email
          }
          const access_token = makeToken(obj)
          res.status(200).json({access_token})
        }
      }
    } catch (error) {
      next(error)
    }
  }

  static async googleLogin(req,res,next){
    try {
      const ticket = await client.verifyIdToken({
        idToken: req.body.googleToken,
        audience: process.env.googleClientID
      });
      const payload = ticket.getPayload();
      const findUser = await User.findOne({where: { email : payload.email}})
      if (findUser) {
        let obj = {
          id : findUser.id,
          email : findUser.email
        }
        const access_token = makeToken(obj)
        res.status(200).json({access_token})
      } else {
        let sign = {
          email : payload.email,
          password : process.env.googlePASSWORD
        }
        const data = await User.create(sign)
        let obj = {
          id : data.id,
          email : data.email
        }
        const access_token = makeToken(obj)
        res.status(201).json({access_token})
      }
    } catch (error) {
      next(error)
    }
  }
}

module.exports = UserController