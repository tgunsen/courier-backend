"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
require('dotenv').config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 4000;
app.use((0, cors_1.default)());
app.use(routes_1.default);
mongoose_1.default.connect(process.env.MONGO_URI)
    .then(() => {
    console.log('Database connected..');
});
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}...`);
});
