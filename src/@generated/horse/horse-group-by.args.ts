import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HorseWhereInput } from './horse-where.input';
import { Type } from 'class-transformer';
import { HorseOrderByWithAggregationInput } from './horse-order-by-with-aggregation.input';
import { HorseScalarFieldEnum } from './horse-scalar-field.enum';
import { HorseScalarWhereWithAggregatesInput } from './horse-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { HorseCountAggregateInput } from './horse-count-aggregate.input';
import { HorseMinAggregateInput } from './horse-min-aggregate.input';
import { HorseMaxAggregateInput } from './horse-max-aggregate.input';

@ArgsType()
export class HorseGroupByArgs {

    @Field(() => HorseWhereInput, {nullable:true})
    @Type(() => HorseWhereInput)
    where?: HorseWhereInput;

    @Field(() => [HorseOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<HorseOrderByWithAggregationInput>;

    @Field(() => [HorseScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof HorseScalarFieldEnum>;

    @Field(() => HorseScalarWhereWithAggregatesInput, {nullable:true})
    having?: HorseScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => HorseCountAggregateInput, {nullable:true})
    _count?: HorseCountAggregateInput;

    @Field(() => HorseMinAggregateInput, {nullable:true})
    _min?: HorseMinAggregateInput;

    @Field(() => HorseMaxAggregateInput, {nullable:true})
    _max?: HorseMaxAggregateInput;
}
