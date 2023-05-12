import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class FacilityScalarWhereWithAggregatesInput {

    @Field(() => [FacilityScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<FacilityScalarWhereWithAggregatesInput>;

    @Field(() => [FacilityScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<FacilityScalarWhereWithAggregatesInput>;

    @Field(() => [FacilityScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<FacilityScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    description?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
