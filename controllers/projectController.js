"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProjects = void 0;
const getProjects = (req, res) => {
    const projects = [];
    const owner = {
        login: "JohnDoe",
        htmlUrl: "string",
        type: "person",
        avatarUrl: "https://images.musement.com/cover/0001/100/predator-v5-jpg_header-99107.jpeg"
    };
    res.render('projects', { projects, owner });
};
exports.getProjects = getProjects;
