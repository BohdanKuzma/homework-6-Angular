import { Component, OnInit } from '@angular/core';
import { IBlog } from 'src/app/interfaces/post.interface';
import { IUser } from 'src/app/interfaces/user.interface';
import { BlogServiceService } from 'src/app/services/blog-service/blog-service.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  public newArrBlogs: Array<IBlog> = [];
  public newArrUsers: Array<IUser> = [];


  public newPostTitle!: string;
  public newPostMessage!: string;

  public newUserName!: string;
  public newUserEmail!: string;
  public newUserPassword!: string;

  public editStatus = false;
  public onlineStatus = false;

  public currentEditID!: number;

  public currentName = '';

  public email!: string;
  public password!: string;


  constructor(
    private blogservices: BlogServiceService
  ) { }

  ngOnInit(): void {
    this.getInfo();

  }

  getInfo(): void {
    this.newArrBlogs = this.blogservices.getData();
    this.newArrUsers = this.blogservices.getUser();
  }


  addPost(): void {
    const newPost: IBlog = {
      id: 1,
      postedBy: this.currentName,
      topic: this.newPostMessage,
      date: new Date(),
      message: this.newPostMessage
    }
    if (this.newArrBlogs.length > 0) {
      const id = this.newArrBlogs.slice(-1)[0].id;
      newPost.id = id as number + 1;
    }
    this.blogservices.addBlog(newPost)
    this.getInfo()
    this.reset()

  }

  deletePost(id: number): void {
    this.blogservices.deletePost(id)
    this.getInfo()
  }

  editPost(post: IBlog, id: number): void {
    this.editStatus = true;
    this.newPostTitle = post.topic;
    this.newPostMessage = post.message;
    this.currentEditID = id;
  }

  updatePost(): void {
    const newPost: IBlog = {
      id: this.currentEditID,
      postedBy: 'bohdan',
      topic: this.newPostTitle,
      date: new Date(),
      message: this.newPostMessage
    }


    this.blogservices.editPost(newPost, this.currentEditID)
    this.reset()
  }


  logIn(): void {
    this.onlineStatus = true;
    for (const user of this.newArrUsers) {
      if (this.email.toLowerCase() == user.email.toLowerCase() && this.password.toLowerCase() == user.password.toLowerCase()) {
        this.currentName = user.username;
      }
      else if (this.email.toLowerCase() == 'admin' && this.password.toLowerCase() == 'admin') {
        this.currentName = 'admin';
      }
    }
    this.reset()
  }

  logOut(): void {
    this.onlineStatus = false;
    this.currentName = '';
    this.reset()


  }

  /////////////////////////////////////////////////////////////////////////////////////////////////////


  addUser(): void {
    const newUser: IUser = {
      id: 1,
      username: this.newUserName,
      email: this.newUserEmail,
      password: this.newUserPassword
    }
    if (this.newArrUsers.length > 0) {
      const id = this.newArrUsers.slice(-1)[0].id;
      newUser.id = id as number + 1;
    }

    for (const user of this.newArrUsers) {
      if (user.email.toLowerCase() == newUser.email.toLowerCase() || user.username == newUser.username.toLowerCase()) {
        alert('Такий користувач вже існує')
        return
      }
    }
    this.blogservices.addUser(newUser)
    this.getInfo()
    this.reset()
  }

  reset(): void {
    this.newPostTitle = '';
    this.newPostMessage = '';
    this.editStatus = false;
    this.newUserName = '';
    this.newUserEmail = '';
    this.newUserPassword = '';
    this.email = '';
    this.password = '';
  }
}


