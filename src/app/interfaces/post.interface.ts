import { IUser } from "./user.interface";

export interface IBlog {
    id: number;
    postedBy: any;
    topic: string;
    date: Date;
    message: string;

}