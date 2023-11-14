const mongoose = require('mongoose');

const schema = mongoose.Schema(
  {
    email: String,
    password: String,
    is_active: Boolean,
    first_name: String,
    last_name: String,
    phone_number: String,
  },
  {
    timestamps: true,
    // timestamps: {
    //   createdAt: 'created_at',
    //   updatedAt: 'update_at',
    // },
  }
);
