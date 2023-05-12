import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class HorseGenderWhereInput {

    @Field(() => [HorseGenderWhereInput], {nullable:true})
    AND?: Array<HorseGenderWhereInput>;

    @Field(() => [HorseGenderWhereInput], {nullable:true})
    OR?: Array<HorseGenderWhereInput>;

    @Field(() => [HorseGenderWhereInput], {nullable:true})
    NOT?: Array<HorseGenderWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    gender?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
