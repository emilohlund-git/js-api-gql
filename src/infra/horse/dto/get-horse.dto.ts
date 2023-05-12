import { Field, InputType, Int } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { HorseOrderByWithRelationInput } from 'src/@generated/horse/horse-order-by-with-relation.input';
import { HorseWhereUniqueInput } from 'src/@generated/horse/horse-where-unique.input';
import { HorseWhereInput } from 'src/@generated/horse/horse-where.input';

@InputType()
export class GetHorseArgs {
  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => HorseWhereUniqueInput, { nullable: true })
  cursor?: Prisma.HorseWhereUniqueInput;

  @Field(() => HorseWhereInput, { nullable: true })
  where?: Prisma.HorseWhereInput;

  @Field(() => HorseOrderByWithRelationInput, { nullable: true })
  orderBy?: Prisma.HorseOrderByWithRelationInput;
}