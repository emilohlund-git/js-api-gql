import { Field, InputType, Int } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ImageOrderByWithRelationInput } from 'src/@generated/image/image-order-by-with-relation.input';
import { ImageWhereUniqueInput } from 'src/@generated/image/image-where-unique.input';
import { ImageWhereInput } from 'src/@generated/image/image-where.input';

@InputType()
export class GetImagesArgs {
  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => ImageWhereUniqueInput, { nullable: true })
  cursor?: Prisma.ImageWhereUniqueInput;

  @Field(() => ImageWhereInput, { nullable: true })
  where?: Prisma.ImageWhereInput;

  @Field(() => ImageOrderByWithRelationInput, { nullable: true })
  orderBy?: Prisma.ImageOrderByWithRelationInput;
}