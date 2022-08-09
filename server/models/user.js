const { Schema, default: mongoose } = require('mongoose')
const crypto = require('crypto')

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    max: 32
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true
  },
  hash_password: {
    type: String,
    required: true,
    trim: true,
  },
  salt: String,
  role: {
    type: String,
    default: 'subscriber',
  },
  resetPasswordLink: {
    data: String,
    default: ''
  }
}, { timestamps: true })

//virtual fields which are actual fields from client
userSchema.virtual('password')
.set(function (password) {
  //store original password
  this._password = password
  this.salt = this.makeSalt()
  this.hash_password = this.encryptedPassword(password)
})
.get(function () {
  return this._password
})

userSchema.methods = {
  makeSalt: function () {
    return Math.round(new Date().valueOf()) + Math.random() + ''
  },
  encryptedPassword: function (password) {
    if(!password) return ''
    try {
      return crypto.pbkdf2Sync(password, this.salt, 32, 32, 'sha512').toString('hex')
    } catch (error) {
      return ''
    }
  },
  authenticate: function (password) {
    return this.hash_password === this.encryptedPassword(password)
  }
}

module.exports = mongoose.model('User', userSchema)