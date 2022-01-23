const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthenticatedError } = require("../errors");

const register = async (req, res) => {
  // const {name, email, password} = req.body
  // if(!name || !email || !password) {
  //      throw new BadRequestError("please provide eve rything!!!")
  // }
  const user = await User.create({ ...req.body });
  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token });
};

const login = async (req, res) => {
    const {email, password} = req.body
    if(!email || !password) {
        throw new BadRequestError("please provide eve rything!!!")
    }
    const user = await User.findOne({email})
    if(!user) {
        throw new UnauthenticatedError("Invalid credentials")
    }  
  
    const isPasswordCorrect = await user.comparePassword(password)
    if(!isPasswordCorrect) {
        throw new UnauthenticatedError("Invalid credentials")
    }

    const token = user.createJWT()
    res.status(StatusCodes.OK).json({ user: { name: user.name }, token })
};

module.exports = {
  register,
  login,
};
