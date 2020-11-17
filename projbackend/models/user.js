const mongoose = require("mongoose");
const { v4: uuidv4 } = require('uuid');
const CryptoJS = require("crypto-js");

const opts = { toJSON: { virtuals: true } };

 const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 32,
        trim: true
    },
    lastname: {
        type: String,
        maxlength: 32,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    userinfo: {
        type: String,
        trim: true
    },

    encry_password: {
        type: String,
        required: true
    },
    salt: { type: String },
    role: {
        type: Number, //USER - 0, ADMIN -1
        default:0
    },
    purchases: {
        type: Array,
        default: []
    }
 },
 { timestamps: true},opts);



 userSchema.virtual("password")
    .set(function(password){
        this._password = password
        this.salt = uuidv4();
        this.encry_password = this.securePassword(password);
    })
    .get(function(){
        return this._password
    })

 userSchema.methods = {

    authenticate: function(plainpassword){
        //console.log(typeof(JSON.stringify(this.securePassword(plainpassword))))
      //  console.log(typeof(this.encry_password))
        //console.log(`secure str - ${JSON.stringify(this.securePassword(plainpassword))}`)
       // console.log(`secure obj - ${this.securePassword(plainpassword)}`)
       // console.log(`encry - ${this.encry_password}`)
        return this.securePassword(plainpassword) == this.encry_password
    },

    securePassword: function(plainpassword){
         if(!plainpassword) return " ";
         try {
            //return CryptoJS.AES.encrypt(plainpassword, this.salt).toString(); //this genereated different encryption everytime, never use this
            return CryptoJS.HmacSHA1(plainpassword, this.salt);
          } catch (err) {
            return ""
          }
     }
 }

module.exports = mongoose.model("User",userSchema);