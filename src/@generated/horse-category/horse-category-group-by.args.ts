import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HorseCategoryWhereInput } from './horse-category-where.input';
import { Type } from 'class-transformer';
import { HorseCategoryOrderByWithAggregationInput } from './horse-category-order-by-with-aggregation.input';
import { HorseCategoryScalarFieldEnum } from './horse-category-scalar-field.enum';
import { HorseCategoryScalarWhereWithAggregatesInput } from './horse-category-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { HorseCategoryCountAggregateInput } from './horse-category-count-aggregate.input';
import { HorseCategoryMinAggregateInput } from './horse-category-min-aggregate.input';
import { HorseCategoryMaxAggregateInput } from './horse-category-max-aggregate.input';

@ArgsType()
export class HorseCategoryGroupByArgs {

    @Field(() => HorseCategoryWhereInput, {nullable:true})
    @Type(() => HorseCategoryWhereInput)
    where?: HorseCategoryWhereInput;

    @Field(() => [HorseCategoryOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<HorseCategoryOrderByWithAggregationInput>;

    @Field(() => [HorseCategoryScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof HorseCategoryScalarFieldEnum>;

    @Field(() => HorseCategoryScalarWhereWithAggregatesInput, {nullable:true})
    having?: HorseCategoryScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => HorseCategoryCountAggregateInput, {nullable:true})
    _count?: HorseCategoryCountAggregateInput;

    @Field(() => HorseCategoryMinAggregateInput, {nullable:true})
    _min?: HorseCategoryMinAggregateInput;

    @Field(() => HorseCategoryMaxAggregateInput, {nullable:true})
    _max?: HorseCategoryMaxAggregateInput;
}
