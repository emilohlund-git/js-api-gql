import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HorseCategoryCountOrderByAggregateInput } from './horse-category-count-order-by-aggregate.input';
import { HorseCategoryMaxOrderByAggregateInput } from './horse-category-max-order-by-aggregate.input';
import { HorseCategoryMinOrderByAggregateInput } from './horse-category-min-order-by-aggregate.input';

@InputType()
export class HorseCategoryOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    category?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => HorseCategoryCountOrderByAggregateInput, {nullable:true})
    _count?: HorseCategoryCountOrderByAggregateInput;

    @Field(() => HorseCategoryMaxOrderByAggregateInput, {nullable:true})
    _max?: HorseCategoryMaxOrderByAggregateInput;

    @Field(() => HorseCategoryMinOrderByAggregateInput, {nullable:true})
    _min?: HorseCategoryMinOrderByAggregateInput;
}
