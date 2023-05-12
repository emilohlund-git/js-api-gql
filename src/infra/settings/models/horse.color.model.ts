import { Field, GraphQLISODateTime, ObjectType } from '@nestjs/graphql';
import { HorseColor as HorseDB } from '@prisma/client';

@ObjectType()
export class HorseColor {
  @Field(() => String)
  id: HorseDB['id'];

  @Field()
  color: string;

  @Field(() => GraphQLISODateTime)
  createdAt: HorseDB['createdAt'];

  @Field(() => GraphQLISODateTime)
  updatedAt: HorseDB['updatedAt']
}