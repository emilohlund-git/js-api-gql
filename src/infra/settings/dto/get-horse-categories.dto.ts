import { Field, InputType, Int } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { HorseCategoryOrderByWithRelationInput } from '../../../@generated/horse-category/horse-category-order-by-with-relation.input';
import { HorseCategoryWhereUniqueInput } from '../../../@generated/horse-category/horse-category-where-unique.input';
import { HorseCategoryWhereInput } from '../../../@generated/horse-category/horse-category-where.input';

@InputType()
export class GetHorseCategoriesArgs {
  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => HorseCategoryWhereUniqueInput, { nullable: true })
  cursor?: Prisma.HorseCategoryWhereUniqueInput;

  @Field(() => HorseCategoryWhereInput, { nullable: true })
  where?: Prisma.HorseCategoryWhereInput;

  @Field(() => HorseCategoryOrderByWithRelationInput, { nullable: true })
  orderBy?: Prisma.HorseCategoryOrderByWithRelationInput;
}