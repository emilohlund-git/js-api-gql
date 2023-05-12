import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class HorseCategoryScalarWhereWithAggregatesInput {

    @Field(() => [HorseCategoryScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<HorseCategoryScalarWhereWithAggregatesInput>;

    @Field(() => [HorseCategoryScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<HorseCategoryScalarWhereWithAggregatesInput>;

    @Field(() => [HorseCategoryScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<HorseCategoryScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    category?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
