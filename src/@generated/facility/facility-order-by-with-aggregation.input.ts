import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { FacilityCountOrderByAggregateInput } from './facility-count-order-by-aggregate.input';
import { FacilityMaxOrderByAggregateInput } from './facility-max-order-by-aggregate.input';
import { FacilityMinOrderByAggregateInput } from './facility-min-order-by-aggregate.input';

@InputType()
export class FacilityOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => FacilityCountOrderByAggregateInput, {nullable:true})
    _count?: FacilityCountOrderByAggregateInput;

    @Field(() => FacilityMaxOrderByAggregateInput, {nullable:true})
    _max?: FacilityMaxOrderByAggregateInput;

    @Field(() => FacilityMinOrderByAggregateInput, {nullable:true})
    _min?: FacilityMinOrderByAggregateInput;
}
