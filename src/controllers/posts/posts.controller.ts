import { Response, Request, Router } from 'express';
import { Post } from './post.interface';

export class PostsController {
  public path = '/posts';
  public router = Router();

  private posts: Array<Post> = [
    {
      author: 'Pawel Sasin',
      content: 'Dolor sit amet',
      title: 'Lorem Ipsum',
    },
  ];

  constructor() {
    this.intializeRoutes();
  }

  public intializeRoutes(): void {
    this.router.get(this.path, this.getAllPosts);
    this.router.post(this.path, this.createAPost);
  }

  public getAllPosts = (request: Request, response: Response) => {
    response.send(this.posts);
  }

  public createAPost = (request: Request, response: Response) => {
    const post: Post = request.body;
    this.posts.push(post);
    response.send(post);
  }
  
}


