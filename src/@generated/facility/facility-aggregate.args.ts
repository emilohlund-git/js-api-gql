import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FacilityWhereInput } from './facility-where.input';
import { Type } from 'class-transformer';
import { FacilityOrderByWithRelationInput } from './facility-order-by-with-relation.input';
import { FacilityWhereUniqueInput } from './facility-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FacilityCountAggregateInput } from './facility-count-aggregate.input';
import { FacilityMinAggregateInput } from './facility-min-aggregate.input';
import { FacilityMaxAggregateInput } from './facility-max-aggregate.input';

@ArgsType()
export class FacilityAggregateArgs {

    @Field(() => FacilityWhereInput, {nullable:true})
    @Type(() => FacilityWhereInput)
    where?: FacilityWhereInput;

    @Field(() => [FacilityOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<FacilityOrderByWithRelationInput>;

    @Field(() => FacilityWhereUniqueInput, {nullable:true})
    cursor?: FacilityWhereUniqueInput;

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
