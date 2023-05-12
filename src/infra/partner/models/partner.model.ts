import { Field, GraphQLISODateTime, ObjectType } from '@nestjs/graphql';
import { Partner as PartnerDB } from '@prisma/client';
import { Image } from '../../image/models/image.model';

@ObjectType()
export class Partner {
  @Field(() => String, { nullable: true })
  id: PartnerDB['id'];

  @Field()
  name: string;

  @Field({ nullable: true })
  website?: string;

  @Field()
  description: string;

  @Field(() => Image, { nullable: true })
  image?: Image;

  @Field(() => GraphQLISODateTime)
  createdAt: PartnerDB['createdAt'];

  @Field(() => GraphQLISODateTime)
  updatedAt: PartnerDB['updatedAt']
}