import { Field, GraphQLISODateTime, ObjectType } from '@nestjs/graphql';
import { Facility as FacilityDB } from '@prisma/client';
import { Image } from '../../image/models/image.model';

@ObjectType()
export class Facility {
  @Field(() => String)
  id: FacilityDB['id'];

  @Field()
  name: string;

  @Field()
  description: string;

  @Field(() => [Image], { nullable: true })
  images?: Image[];

  @Field(() => GraphQLISODateTime)
  createdAt: FacilityDB['createdAt'];

  @Field(() => GraphQLISODateTime)
  updatedAt: FacilityDB['updatedAt']
}