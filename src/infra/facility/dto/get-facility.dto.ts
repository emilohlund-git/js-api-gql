import { Field, InputType, Int } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FacilityOrderByWithRelationInput } from 'src/@generated/facility/facility-order-by-with-relation.input';
import { FacilityWhereUniqueInput } from 'src/@generated/facility/facility-where-unique.input';
import { FacilityWhereInput } from 'src/@generated/facility/facility-where.input';

@InputType()
export class GetFacilityArgs {
  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => FacilityWhereUniqueInput, { nullable: true })
  cursor?: Prisma.FacilityWhereUniqueInput;

  @Field(() => FacilityWhereInput, { nullable: true })
  where?: Prisma.FacilityWhereInput;

  @Field(() => FacilityOrderByWithRelationInput, { nullable: true })
  orderBy?: Prisma.FacilityOrderByWithRelationInput;
}