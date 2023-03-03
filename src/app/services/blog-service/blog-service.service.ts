import { Injectable } from '@angular/core';
import { IBlog } from 'src/app/interfaces/post.interface';
import { IUser } from 'src/app/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class BlogServiceService {

  public arrBlogs: Array<IBlog> = [
    {
      id: 1,
      postedBy: 'admin',
      topic: 'theme',
      date: new Date(),
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sed, esse excepturi quos aliquid fugit exercitationem quia error dignissimos numquam a, repudiandae laboriosam similique molestias inventore eligendi unde neque culpa!'

    },

    {
      id: 2,
      postedBy: 'oleh',
      topic: 'theme1',
      date: new Date(),
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sed, esse excepturi quos aliquid fugit exercitationem quia error dignissimos numquam a, repudiandae laboriosam similique molestias inventore eligendi unde neque culpa!'

    },
    {
      id: 3,
      postedBy: 'roma',
      topic: 'theme2',
      date: new Date(),
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sed, esse excepturi quos aliquid fugit exercitationem quia error dignissimos numquam a, repudiandae laboriosam similique molestias inventore eligendi unde neque culpa!'

    }
  ]

  public arrUsers: Array<IUser> = [
    {
      id: 1,
      username: 'bohdan',
      email: 'bb',
      password: 'bb'
    },
    {
      id: 2,
      username: 'oleh',
      email: 'ol',
      password: 'ol'
    },
    {
      id: 3,
      username: 'roma',
      email: 'rr',
      password: 'rr'
    }
  ]

  constructor() { }

  getData(): IBlog[] {
    return this.arrBlogs
  }

  getUser(): IUser[] {
    return this.arrUsers
  }

  addBlog(post: IBlog): void {
    this.arrBlogs.push(post)
  }

  deletePost(index: number): void {
    this.arrBlogs.splice(index, 1)
  }

  editPost(post: IBlog, id: number): void {
    const index = this.arrBlogs.findIndex(post => post.id === id)
    this.arrBlogs.splice(index, 1, post)
  }


  /////////////////////////////////////////////////

  addUser(user: IUser): void {
    this.arrUsers.push(user)
  }
}
