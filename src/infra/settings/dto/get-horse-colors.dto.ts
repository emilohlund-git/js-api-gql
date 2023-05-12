import { Field, InputType, Int } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { HorseColorOrderByWithRelationInput } from 'src/@generated/horse-color/horse-color-order-by-with-relation.input';
import { HorseColorWhereUniqueInput } from 'src/@generated/horse-color/horse-color-where-unique.input';
import { HorseColorWhereInput } from 'src/@generated/horse-color/horse-color-where.input';

@InputType()
export class GetHorseColorsArgs {
  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => HorseColorWhereUniqueInput, { nullable: true })
  cursor?: Prisma.HorseColorWhereUniqueInput;

  @Field(() => HorseColorWhereInput, { nullable: true })
  where?: Prisma.HorseColorWhereInput;

  @Field(() => HorseColorOrderByWithRelationInput, { nullable: true })
  orderBy?: Prisma.HorseColorOrderByWithRelationInput;
}