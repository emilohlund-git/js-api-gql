import { Field, GraphQLISODateTime, ObjectType } from '@nestjs/graphql';
import { HorseGender as HorseDB } from '@prisma/client';

@ObjectType()
export class HorseGender {
  @Field(() => String)
  id: HorseDB['id'];

  @Field()
  gender: string;

  @Field(() => GraphQLISODateTime)
  createdAt: HorseDB['createdAt'];

  @Field(() => GraphQLISODateTime)
  updatedAt: HorseDB['updatedAt']
}