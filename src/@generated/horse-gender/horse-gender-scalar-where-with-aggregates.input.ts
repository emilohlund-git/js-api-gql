import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class HorseGenderScalarWhereWithAggregatesInput {

    @Field(() => [HorseGenderScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<HorseGenderScalarWhereWithAggregatesInput>;

    @Field(() => [HorseGenderScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<HorseGenderScalarWhereWithAggregatesInput>;

    @Field(() => [HorseGenderScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<HorseGenderScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    gender?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
