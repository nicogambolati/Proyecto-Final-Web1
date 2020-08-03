import { CommentModel } from './comments';

export class DashboardModel {
    id: Number;
    description: string;
    url: string;
    name: string;
    lastName: string;
    createdDate : Date;
    newComment: String;
    likes: Number;
    comments: CommentModel[];
}