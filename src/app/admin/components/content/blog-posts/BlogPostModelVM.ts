import { BlogPostBriefModel } from '../../../shared/blog-posts/blog-posts.model';

export class BlogPostModelVM {
    id: string;
    createDate: string;
    title: string;
    isPublished: boolean;

    constructor() {
    }

    fill(src: BlogPostBriefModel): BlogPostModelVM {
        if (src) {
            this.id = src.id;
            this.createDate = src.createDate;
            this.title = src.title;
            this.isPublished = src.isPublished;
        }

        return this;
    }
}