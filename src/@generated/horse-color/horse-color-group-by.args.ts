import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HorseColorWhereInput } from './horse-color-where.input';
import { Type } from 'class-transformer';
import { HorseColorOrderByWithAggregationInput } from './horse-color-order-by-with-aggregation.input';
import { HorseColorScalarFieldEnum } from './horse-color-scalar-field.enum';
import { HorseColorScalarWhereWithAggregatesInput } from './horse-color-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { HorseColorCountAggregateInput } from './horse-color-count-aggregate.input';
import { HorseColorMinAggregateInput } from './horse-color-min-aggregate.input';
import { HorseColorMaxAggregateInput } from './horse-color-max-aggregate.input';

@ArgsType()
export class HorseColorGroupByArgs {

    @Field(() => HorseColorWhereInput, {nullable:true})
    @Type(() => HorseColorWhereInput)
    where?: HorseColorWhereInput;

    @Field(() => [HorseColorOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<HorseColorOrderByWithAggregationInput>;

    @Field(() => [HorseColorScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof HorseColorScalarFieldEnum>;

    @Field(() => HorseColorScalarWhereWithAggregatesInput, {nullable:true})
    having?: HorseColorScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => HorseColorCountAggregateInput, {nullable:true})
    _count?: HorseColorCountAggregateInput;

    @Field(() => HorseColorMinAggregateInput, {nullable:true})
    _min?: HorseColorMinAggregateInput;

    @Field(() => HorseColorMaxAggregateInput, {nullable:true})
    _max?: HorseColorMaxAggregateInput;
}
