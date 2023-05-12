import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HorseGenderWhereInput } from './horse-gender-where.input';
import { Type } from 'class-transformer';
import { HorseGenderOrderByWithAggregationInput } from './horse-gender-order-by-with-aggregation.input';
import { HorseGenderScalarFieldEnum } from './horse-gender-scalar-field.enum';
import { HorseGenderScalarWhereWithAggregatesInput } from './horse-gender-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { HorseGenderCountAggregateInput } from './horse-gender-count-aggregate.input';
import { HorseGenderMinAggregateInput } from './horse-gender-min-aggregate.input';
import { HorseGenderMaxAggregateInput } from './horse-gender-max-aggregate.input';

@ArgsType()
export class HorseGenderGroupByArgs {

    @Field(() => HorseGenderWhereInput, {nullable:true})
    @Type(() => HorseGenderWhereInput)
    where?: HorseGenderWhereInput;

    @Field(() => [HorseGenderOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<HorseGenderOrderByWithAggregationInput>;

    @Field(() => [HorseGenderScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof HorseGenderScalarFieldEnum>;

    @Field(() => HorseGenderScalarWhereWithAggregatesInput, {nullable:true})
    having?: HorseGenderScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => HorseGenderCountAggregateInput, {nullable:true})
    _count?: HorseGenderCountAggregateInput;

    @Field(() => HorseGenderMinAggregateInput, {nullable:true})
    _min?: HorseGenderMinAggregateInput;

    @Field(() => HorseGenderMaxAggregateInput, {nullable:true})
    _max?: HorseGenderMaxAggregateInput;
}
