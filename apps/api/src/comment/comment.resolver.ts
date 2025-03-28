import { Resolver } from '@nestjs/graphql';

import { CommentEntity } from './entities/comment.entity';
import { CommentService } from './comment.service';

@Resolver(() => CommentEntity)
export class CommentResolver {
  constructor(private readonly commentService: CommentService) {}
}
