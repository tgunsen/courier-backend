"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const deliverySchema = new mongoose_1.Schema({
    sender: {
        type: String,
        required: true,
    },
    originAddress: {
        type: String,
        required: true,
    },
    deliveryAddress: {
        type: String,
        required: true,
    },
    // deliveryArrivalFrom: {
    //   type: Date,
    //   required: true,
    // },
    // deliveryArrivalUntil: {
    //   type: String,
    //   required: true,
    // },
    // description: {
    //   type: String,
    //   required: true,
    // },
    // hasDeliveryMethod: {
    //   type: String,
    //   required: true,
    // },
    // deliveryStatus: {
    //   type: Boolean,
    //   required: true,
    // },
    // courier: {
    //   type: String,
    //   required: false,
    // }
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("Delivery", deliverySchema);
