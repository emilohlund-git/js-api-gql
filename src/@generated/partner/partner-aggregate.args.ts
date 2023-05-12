import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PartnerWhereInput } from './partner-where.input';
import { Type } from 'class-transformer';
import { PartnerOrderByWithRelationInput } from './partner-order-by-with-relation.input';
import { PartnerWhereUniqueInput } from './partner-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PartnerCountAggregateInput } from './partner-count-aggregate.input';
import { PartnerMinAggregateInput } from './partner-min-aggregate.input';
import { PartnerMaxAggregateInput } from './partner-max-aggregate.input';

@ArgsType()
export class PartnerAggregateArgs {

    @Field(() => PartnerWhereInput, {nullable:true})
    @Type(() => PartnerWhereInput)
    where?: PartnerWhereInput;

    @Field(() => [PartnerOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PartnerOrderByWithRelationInput>;

    @Field(() => PartnerWhereUniqueInput, {nullable:true})
    cursor?: PartnerWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PartnerCountAggregateInput, {nullable:true})
    _count?: PartnerCountAggregateInput;

    @Field(() => PartnerMinAggregateInput, {nullable:true})
    _min?: PartnerMinAggregateInput;

    @Field(() => PartnerMaxAggregateInput, {nullable:true})
    _max?: PartnerMaxAggregateInput;
}
