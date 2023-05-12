import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class HorseColorWhereInput {

    @Field(() => [HorseColorWhereInput], {nullable:true})
    AND?: Array<HorseColorWhereInput>;

    @Field(() => [HorseColorWhereInput], {nullable:true})
    OR?: Array<HorseColorWhereInput>;

    @Field(() => [HorseColorWhereInput], {nullable:true})
    NOT?: Array<HorseColorWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    color?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
