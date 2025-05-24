"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.route = void 0;
const express_1 = require("express");
const blog_route_1 = require("../modules/blog/blog.route");
const project_route_1 = require("../modules/projects/project.route");
const message_route_1 = require("../modules/message/message.route");
const auth_route_1 = require("../modules/auth/auth.route");
exports.route = (0, express_1.Router)();
const modules = [
    { path: '/blogs', route: blog_route_1.blogRoute },
    { path: '/projects', route: project_route_1.projectRoute },
    { path: '/messages', route: message_route_1.messageRoute },
    { path: '/auth', route: auth_route_1.authRoutes },
];
modules.forEach((el) => exports.route.use(el.path, el.route));
