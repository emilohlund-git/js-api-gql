import { Field, InputType, Int } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { HorseGenderOrderByWithRelationInput } from 'src/@generated/horse-gender/horse-gender-order-by-with-relation.input';
import { HorseGenderWhereUniqueInput } from 'src/@generated/horse-gender/horse-gender-where-unique.input';
import { HorseGenderWhereInput } from 'src/@generated/horse-gender/horse-gender-where.input';

@InputType()
export class GetHorseGendersArgs {
  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => HorseGenderWhereUniqueInput, { nullable: true })
  cursor?: Prisma.HorseGenderWhereUniqueInput;

  @Field(() => HorseGenderWhereInput, { nullable: true })
  where?: Prisma.HorseGenderWhereInput;

  @Field(() => HorseGenderOrderByWithRelationInput, { nullable: true })
  orderBy?: Prisma.HorseGenderOrderByWithRelationInput;
}