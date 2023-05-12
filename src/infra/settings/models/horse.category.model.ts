import { Field, GraphQLISODateTime, ObjectType } from '@nestjs/graphql';
import { HorseCategory as HorseDB } from '@prisma/client';

@ObjectType()
export class HorseCategory {
  @Field(() => String)
  id: HorseDB['id'];

  @Field()
  category: string;

  @Field(() => GraphQLISODateTime)
  createdAt: HorseDB['createdAt'];

  @Field(() => GraphQLISODateTime)
  updatedAt: HorseDB['updatedAt']
}