export interface Project{
    name: string;
    fullName: string;
    description: string;
    language: string;
    htmlUrl: string;
}


export interface Owner{
    login: string;
    htmlUrl: string;
    type: 'person' | 'organization';
    avatarUrl: string;
}