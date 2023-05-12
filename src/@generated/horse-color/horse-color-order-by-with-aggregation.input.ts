import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HorseColorCountOrderByAggregateInput } from './horse-color-count-order-by-aggregate.input';
import { HorseColorMaxOrderByAggregateInput } from './horse-color-max-order-by-aggregate.input';
import { HorseColorMinOrderByAggregateInput } from './horse-color-min-order-by-aggregate.input';

@InputType()
export class HorseColorOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    color?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => HorseColorCountOrderByAggregateInput, {nullable:true})
    _count?: HorseColorCountOrderByAggregateInput;

    @Field(() => HorseColorMaxOrderByAggregateInput, {nullable:true})
    _max?: HorseColorMaxOrderByAggregateInput;

    @Field(() => HorseColorMinOrderByAggregateInput, {nullable:true})
    _min?: HorseColorMinOrderByAggregateInput;
}
