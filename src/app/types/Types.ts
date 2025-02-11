export type TProject = {
    title: string;
    description: string;
    projectImages: string;
    tags: string;
}

export type ApiResponse = {
    data: TProject[];
}