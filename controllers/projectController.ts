import {Request, Response} from 'express';
import { Project, Owner} from '../models/projectModel'


export const getProjects = (req: Request, res: Response) => {
    const projects: Project[] = [{
        name: "Project1",
        fullName: "FullProject1",
        description: "Lorem Ipsum",
        language: "Français",
        htmlUrl: "urldemonprojet"
    }];
    const owner: Owner = {
        login: "JohnDoe",
        htmlUrl: "string",
        type: "person",
        avatarUrl: "https://images.musement.com/cover/0001/100/predator-v5-jpg_header-99107.jpeg"
    };

    res.render('projects', {projects, owner})
}