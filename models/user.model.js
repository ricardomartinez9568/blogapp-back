const mongoose = require('mongoose');

const bcrypt = require('bcrypt')

const jwt = require('jsonwebtoken');


var userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    saltSecret: String
});


userSchema.pre('save',function(next){
    bcrypt.genSalt(10, (err, salt) =>{
        bcrypt.hash(this.password, salt, (err,hash) =>{
            this.password = hash;
            this.saltSecret = salt;
            next();
        });

    });
});

userSchema.methods.verifyPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

userSchema.methods.generateJwt = function () {
    return jwt.sign({ _id: this._id},
        "SECRET#123",
    {
        expiresIn: "2m"
    });
}


mongoose.model('User', userSchema);