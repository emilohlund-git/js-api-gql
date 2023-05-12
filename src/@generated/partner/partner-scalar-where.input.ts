import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class PartnerScalarWhereInput {

    @Field(() => [PartnerScalarWhereInput], {nullable:true})
    AND?: Array<PartnerScalarWhereInput>;

    @Field(() => [PartnerScalarWhereInput], {nullable:true})
    OR?: Array<PartnerScalarWhereInput>;

    @Field(() => [PartnerScalarWhereInput], {nullable:true})
    NOT?: Array<PartnerScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    website?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    imageId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
