import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FacilityWhereInput } from './facility-where.input';
import { Type } from 'class-transformer';
import { FacilityOrderByWithAggregationInput } from './facility-order-by-with-aggregation.input';
import { FacilityScalarFieldEnum } from './facility-scalar-field.enum';
import { FacilityScalarWhereWithAggregatesInput } from './facility-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { FacilityCountAggregateInput } from './facility-count-aggregate.input';
import { FacilityMinAggregateInput } from './facility-min-aggregate.input';
import { FacilityMaxAggregateInput } from './facility-max-aggregate.input';

@ArgsType()
export class FacilityGroupByArgs {

    @Field(() => FacilityWhereInput, {nullable:true})
    @Type(() => FacilityWhereInput)
    where?: FacilityWhereInput;

    @Field(() => [FacilityOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<FacilityOrderByWithAggregationInput>;

    @Field(() => [FacilityScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof FacilityScalarFieldEnum>;

    @Field(() => FacilityScalarWhereWithAggregatesInput, {nullable:true})
    having?: FacilityScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => FacilityCountAggregateInput, {nullable:true})
    _count?: FacilityCountAggregateInput;

    @Field(() => FacilityMinAggregateInput, {nullable:true})
    _min?: FacilityMinAggregateInput;

    @Field(() => FacilityMaxAggregateInput, {nullable:true})
    _max?: FacilityMaxAggregateInput;
}
