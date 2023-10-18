"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const projectController_1 = require("./controllers/projectController");
const app = (0, express_1.default)();
const port = 3000;
app.get('/projects', projectController_1.getProjects);
app.listen(port, () => {
    console.log(`le serveur est lancé : ${port}`);
});