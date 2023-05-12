import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class HorseCategoryWhereInput {

    @Field(() => [HorseCategoryWhereInput], {nullable:true})
    AND?: Array<HorseCategoryWhereInput>;

    @Field(() => [HorseCategoryWhereInput], {nullable:true})
    OR?: Array<HorseCategoryWhereInput>;

    @Field(() => [HorseCategoryWhereInput], {nullable:true})
    NOT?: Array<HorseCategoryWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    category?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
