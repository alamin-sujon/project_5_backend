"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoutes = void 0;
const express_1 = require("express");
const auth_controlller_1 = require("./auth.controlller");
const route = (0, express_1.Router)();
// route.post('/register', authControllers.registerUser);
route.post('/login', auth_controlller_1.authControllers.loginUser);
exports.authRoutes = route;
