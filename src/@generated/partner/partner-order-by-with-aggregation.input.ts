import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PartnerCountOrderByAggregateInput } from './partner-count-order-by-aggregate.input';
import { PartnerMaxOrderByAggregateInput } from './partner-max-order-by-aggregate.input';
import { PartnerMinOrderByAggregateInput } from './partner-min-order-by-aggregate.input';

@InputType()
export class PartnerOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    website?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    imageId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => PartnerCountOrderByAggregateInput, {nullable:true})
    _count?: PartnerCountOrderByAggregateInput;

    @Field(() => PartnerMaxOrderByAggregateInput, {nullable:true})
    _max?: PartnerMaxOrderByAggregateInput;

    @Field(() => PartnerMinOrderByAggregateInput, {nullable:true})
    _min?: PartnerMinOrderByAggregateInput;
}
