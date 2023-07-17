const mongoose = require('mongoose');
const validator = require('validator');
const crypto = require('crypto');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      validate: [validator.isEmail, 'Provide a valid email'],
      trim: true,
      lowercase: true,
      unique: true,
      required: [true, 'Email address is required'],
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      validate: {
        validator: (value) =>
          validator.isStrongPassword(value, {
            minLength: 6,
            minLowercase: 3,
            minNumber: 1,
            minUppercase: 1,
            minSymbols: 1,
          }),
        message: 'Password {VALUE} is not strong enough.',
      },
    },
    confirmPassword: {
      type: String,
      required: [true, 'Please confirm your password'],
      validate: {
        validator: function (value) {
          return value === this.password;
        },
        message: "password don't match!",
      },
    },
    role: {
      type: String,
      enum: ['buyer', 'store-manager', 'admin'],
      default: 'buyer',
    },
    firstName: {
      type: String,
      required: [true, 'Please provide a first name'],
      trim: true,
      minLength: [3, 'Name must at least 3 characters.'],
      maxLength: [100, 'Name is too large'],
    },
    lastName: {
      type: String,
      required: [true, 'Please provide a first name'],
      trim: true,
      minLength: [3, 'Name must be at least 3 characters.'],
      maxLength: [100, 'Name is too large'],
    },
    contactNumber: {
      type: String,
      validate: [
        validator.isMobilePhone,
        'Please provide a valid contact number',
      ],
    },
    shippingAddress: String,
    imageURL: {
      type: String,
      validate: [validator.isURL, 'Please provide a valid url'],
    },
    status: {
      type: String,
      default: 'inactive',
      enum: ['active', 'inactive', 'blocked'],
    },
    confirmationToken: String,
    confirmationTokenExpires: Date,

    passwordChangeAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
  },
  {
    timestamps: true,
  }
);
//pass hash
userSchema.pre('save', function (next) {
  if (!this.isModified('password')) {
    //  only run if password is modified, otherwise it will change every time we save the user!
    return next();
  }
  const password = this.password;

  const hashedPassword = bcrypt.hashSync(password);
  this.password = hashedPassword;
  this.confirmPassword = undefined;
  next();
});

userSchema.methods.comparePassword = function (password, hash) {
  const isPasswordValid = bcrypt.compareSync(password, hash);
  return isPasswordValid;
};

userSchema.methods.generateConfirmationToken = function () {
  const token = crypto.randomBytes(32).toString('hex');
  this.confirmPassword = token;

  const date = new Date();

  date.setDate(date.getDate() + 1);
  this.confirmationTokenExpires = date;

  return token;
};

const User = mongoose.model('user', userSchema);

module.exports = User;
