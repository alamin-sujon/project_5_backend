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
exports.authServices = void 0;
const AppError_1 = __importDefault(require("../error/AppError"));
const auth_model_1 = require("./auth.model");
const bcrypt_1 = __importDefault(require("bcrypt"));
const registerUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const isUserExist = yield auth_model_1.User.findOne({
        email: payload.email,
    });
    if (isUserExist) {
        throw new AppError_1.default(409, 'User already exists');
    }
    const hashedPassword = yield bcrypt_1.default.hash(payload.password, 10);
    payload.password = hashedPassword;
    const result = yield auth_model_1.User.create(payload);
    return result;
});
const loginUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield auth_model_1.User.findOne({
        email: payload.email,
    });
    if (!user) {
        throw new AppError_1.default(401, 'User not found');
    }
    const isPasswordMatch = yield bcrypt_1.default.compare(payload.password, user.password);
    if (!isPasswordMatch) {
        throw new AppError_1.default(401, 'Incorrect password');
    }
    // const jwtPayload = {
    //   id: user._id,
    //   name: user.name,
    //   email: user.email,
    //   role: user.role,
    // };
    // const accessToken = jwt.sign(jwtPayload, process.env.JWT_SECRET as string, {
    //   expiresIn: '1d',
    // });
    return user;
});
exports.authServices = {
    registerUser,
    loginUser,
};
