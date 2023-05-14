import { Field, GraphQLISODateTime, ObjectType } from '@nestjs/graphql';
import { Image as ImageDB } from '@prisma/client';
import { Facility } from '../../facility/models/facility.model';
import { Horse } from '../../horse/models/horse.model';
import { Partner } from '../../partner/models/partner.model';

@ObjectType()
export class Image {
  @Field(() => String)
  id: ImageDB['id'];

  @Field()
  fileId: string;

  @Field()
  profile: boolean;

  @Field()
  url: string;

  @Field(() => Horse, { nullable: true })
  horse?: Horse;

  @Field(() => Facility, { nullable: true })
  facility?: Facility;

  @Field(() => Partner, { nullable: true })
  partner?: Partner;

  @Field(() => GraphQLISODateTime)
  createdAt: ImageDB['createdAt'];

  @Field(() => GraphQLISODateTime)
  updatedAt: ImageDB['updatedAt']
}
