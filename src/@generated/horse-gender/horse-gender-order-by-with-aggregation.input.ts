import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HorseGenderCountOrderByAggregateInput } from './horse-gender-count-order-by-aggregate.input';
import { HorseGenderMaxOrderByAggregateInput } from './horse-gender-max-order-by-aggregate.input';
import { HorseGenderMinOrderByAggregateInput } from './horse-gender-min-order-by-aggregate.input';

@InputType()
export class HorseGenderOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    gender?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => HorseGenderCountOrderByAggregateInput, {nullable:true})
    _count?: HorseGenderCountOrderByAggregateInput;

    @Field(() => HorseGenderMaxOrderByAggregateInput, {nullable:true})
    _max?: HorseGenderMaxOrderByAggregateInput;

    @Field(() => HorseGenderMinOrderByAggregateInput, {nullable:true})
    _min?: HorseGenderMinOrderByAggregateInput;
}
