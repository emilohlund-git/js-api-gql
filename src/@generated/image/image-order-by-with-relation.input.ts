import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HorseOrderByWithRelationInput } from '../horse/horse-order-by-with-relation.input';
import { FacilityOrderByWithRelationInput } from '../facility/facility-order-by-with-relation.input';
import { PartnerOrderByRelationAggregateInput } from '../partner/partner-order-by-relation-aggregate.input';

@InputType()
export class ImageOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    url?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    horseId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    profile?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    facilityId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => HorseOrderByWithRelationInput, {nullable:true})
    horse?: HorseOrderByWithRelationInput;

    @Field(() => FacilityOrderByWithRelationInput, {nullable:true})
    facility?: FacilityOrderByWithRelationInput;

    @Field(() => PartnerOrderByRelationAggregateInput, {nullable:true})
    partner?: PartnerOrderByRelationAggregateInput;
}
