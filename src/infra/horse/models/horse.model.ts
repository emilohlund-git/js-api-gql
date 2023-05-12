import { Field, GraphQLISODateTime, ObjectType } from '@nestjs/graphql';
import { Horse as HorseDB } from '@prisma/client';
import { Image } from '../../image/models/image.model';

@ObjectType()
export class Horse {
  @Field(() => String)
  id: HorseDB['id'];

  @Field()
  name: string;

  @Field()
  nickname: string;

  @Field()
  category: string;

  @Field(() => [Image], { nullable: true })
  images?: Image[];

  @Field()
  owner: string;

  @Field()
  after: string;

  @Field()
  birthyear: string;

  @Field()
  gender: string;

  @Field()
  color: string;

  @Field(() => GraphQLISODateTime)
  createdAt: HorseDB['createdAt'];

  @Field(() => GraphQLISODateTime)
  updatedAt: HorseDB['updatedAt']
}