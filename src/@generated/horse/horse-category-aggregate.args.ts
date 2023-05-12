import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HorseCategoryWhereInput } from '../horse-category/horse-category-where.input';
import { Type } from 'class-transformer';
import { HorseCategoryOrderByWithRelationInput } from '../horse-category/horse-category-order-by-with-relation.input';
import { HorseCategoryWhereUniqueInput } from '../horse-category/horse-category-where-unique.input';
import { Int } from '@nestjs/graphql';
import { HorseCategoryCountAggregateInput } from '../horse-category/horse-category-count-aggregate.input';
import { HorseCategoryMinAggregateInput } from '../horse-category/horse-category-min-aggregate.input';
import { HorseCategoryMaxAggregateInput } from '../horse-category/horse-category-max-aggregate.input';

@ArgsType()
export class HorseCategoryAggregateArgs {

    @Field(() => HorseCategoryWhereInput, {nullable:true})
    @Type(() => HorseCategoryWhereInput)
    where?: HorseCategoryWhereInput;

    @Field(() => [HorseCategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<HorseCategoryOrderByWithRelationInput>;

    @Field(() => HorseCategoryWhereUniqueInput, {nullable:true})
    cursor?: HorseCategoryWhereUniqueInput;

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
