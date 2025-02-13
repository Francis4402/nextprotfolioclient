export type TProject = {
    _id: string;
    title: string;
    description: string;
    projectImages: string;
    tags: string;
}

export type ProjectDataResponse = {
    data: TProject[];
}

export type TBlog = {
    _id: string;
    title: string;
    description: string;
    blogImages: string;
}

export type BlogsDataResponse = {
    data: TBlog[];
}


export type TMessage = {
    _id: string;
    name: string;
    email: string;
    message: string;
    createdAt: string;
}

export type MessagesDataResponse = {
    data: TMessage[];
}
