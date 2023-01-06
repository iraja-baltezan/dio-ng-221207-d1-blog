import {ICategory} from './i-category';
export interface IPost {
    id: number;
    title: string;
    body: string;
    featuredImgUrl: string;
    author: string;
    categories: string[];
    createdAt: string;
    updatedAt: string;
}
