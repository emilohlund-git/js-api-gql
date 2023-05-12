import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HorseCountOrderByAggregateInput } from './horse-count-order-by-aggregate.input';
import { HorseMaxOrderByAggregateInput } from './horse-max-order-by-aggregate.input';
import { HorseMinOrderByAggregateInput } from './horse-min-order-by-aggregate.input';

@InputType()
export class HorseOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    nickname?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    category?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    owner?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    after?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    birthyear?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    gender?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    color?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => HorseCountOrderByAggregateInput, {nullable:true})
    _count?: HorseCountOrderByAggregateInput;

    @Field(() => HorseMaxOrderByAggregateInput, {nullable:true})
    _max?: HorseMaxOrderByAggregateInput;

    @Field(() => HorseMinOrderByAggregateInput, {nullable:true})
    _min?: HorseMinOrderByAggregateInput;
}
