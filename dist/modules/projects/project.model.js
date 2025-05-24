"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project = void 0;
const mongoose_1 = require("mongoose");
const authorSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
});
const projectSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    author: {
        type: authorSchema,
        required: true,
    },
    coreFeatures: {
        type: [String],
    },
    liveUrl: {
        type: String,
        required: true,
    },
    githubClient: {
        type: String,
    },
    githubServer: {
        type: String,
    },
    technologies: {
        type: [String],
        required: true,
    },
}, { timestamps: true });
exports.Project = (0, mongoose_1.model)('Project', projectSchema);
