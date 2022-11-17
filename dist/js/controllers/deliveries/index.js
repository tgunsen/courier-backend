"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDelivery = exports.updateDelivery = exports.addDelivery = exports.getDeliveries = void 0;
const delivery_1 = __importDefault(require("../../models/delivery"));
const getDeliveries = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deliveries = yield delivery_1.default.find();
        res.status(200).json({ deliveries });
    }
    catch (error) {
        throw error;
    }
});
exports.getDeliveries = getDeliveries;
const addDelivery = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const delivery = new delivery_1.default({
            originAddress: body.originAddress,
            deliveryAddress: body.deliveryAddress,
            deliveryArrivalFrom: body.deliveryArrivalFrom,
            deliveryArrivalUntil: body.deliveryArrivalUntil,
            deliveryStatus: body.deliveryStatus,
            description: body.description,
            hasDeliveryMethod: body.hasDeliveryMethod,
            sender: body.sender,
        });
        const newDelivery = yield delivery.save();
        const allDeliveries = yield delivery_1.default.find();
        res
            .status(201)
            .json({ message: "Delivery added", delivery: newDelivery, deliveries: allDeliveries });
    }
    catch (error) {
        throw error;
    }
});
exports.addDelivery = addDelivery;
const updateDelivery = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id }, body, } = req;
        const updateDelivery = yield delivery_1.default.findByIdAndUpdate({ _id: id }, body);
        const allDeliveries = yield delivery_1.default.find();
        res.status(200).json({
            message: "Delivery ppdated",
            delivery: updateDelivery,
            deliveries: allDeliveries
        });
    }
    catch (error) {
        throw error;
    }
});
exports.updateDelivery = updateDelivery;
const deleteDelivery = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedDelivery = yield delivery_1.default.findByIdAndRemove(req.params.id);
        const allDeliveries = yield delivery_1.default.find();
        res.status(200).json({
            message: "Delivery deleted",
            delivery: updateDelivery,
            deliveries: allDeliveries
        });
    }
    catch (error) {
        throw error;
    }
});
exports.deleteDelivery = deleteDelivery;
