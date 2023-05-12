import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PartnerWhereInput } from './partner-where.input';
import { Type } from 'class-transformer';
import { PartnerOrderByWithAggregationInput } from './partner-order-by-with-aggregation.input';
import { PartnerScalarFieldEnum } from './partner-scalar-field.enum';
import { PartnerScalarWhereWithAggregatesInput } from './partner-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { PartnerCountAggregateInput } from './partner-count-aggregate.input';
import { PartnerMinAggregateInput } from './partner-min-aggregate.input';
import { PartnerMaxAggregateInput } from './partner-max-aggregate.input';

@ArgsType()
export class PartnerGroupByArgs {

    @Field(() => PartnerWhereInput, {nullable:true})
    @Type(() => PartnerWhereInput)
    where?: PartnerWhereInput;

    @Field(() => [PartnerOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PartnerOrderByWithAggregationInput>;

    @Field(() => [PartnerScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof PartnerScalarFieldEnum>;

    @Field(() => PartnerScalarWhereWithAggregatesInput, {nullable:true})
    having?: PartnerScalarWhereWithAggregatesInput;

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
