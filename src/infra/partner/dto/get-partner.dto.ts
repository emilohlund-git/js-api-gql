import { Field, InputType, Int } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PartnerOrderByWithRelationInput } from '../../../@generated/partner/partner-order-by-with-relation.input';
import { PartnerWhereUniqueInput } from '../../../@generated/partner/partner-where-unique.input';
import { PartnerWhereInput } from '../../../@generated/partner/partner-where.input';

@InputType()
export class GetPartnersArgs {
  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => PartnerWhereUniqueInput, { nullable: true })
  cursor?: Prisma.PartnerWhereUniqueInput;

  @Field(() => PartnerWhereInput, { nullable: true })
  where?: Prisma.PartnerWhereInput;

  @Field(() => PartnerOrderByWithRelationInput, { nullable: true })
  orderBy?: Prisma.PartnerOrderByWithRelationInput;
}