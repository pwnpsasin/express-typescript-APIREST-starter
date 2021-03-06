import { Response, Request, Router } from 'express';
import { Post } from './post-interface';

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
    this.router.get(this.path + '/:id', this.getPost);
    this.router.post(this.path, this.createPost);
  }
/**
 * Get all posts
 */
  public getAllPosts = (request: Request, response: Response) => {
    const answer = {
      'page': 2,
      'per_page': 3,
      'total': 12,
      'total_pages': 4,
      'data': this.posts
    };
    response.json(answer);
  }

  /**
   * Get one post by id
   */
  public getPost = (request: Request, response: Response) => {
    // FIXME (psasin): get one record
    response.json(request.params);
  }

  /**
   * Create one post
   */
  public createPost = (request: Request, response: Response) => {
    const post: Post = request.body;
    this.posts.push(post);
    response.send(post);
  }
  
}


