import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ImageRelationFilter } from '../image/image-relation-filter.input';

@InputType()
export class PartnerWhereInput {

    @Field(() => [PartnerWhereInput], {nullable:true})
    AND?: Array<PartnerWhereInput>;

    @Field(() => [PartnerWhereInput], {nullable:true})
    OR?: Array<PartnerWhereInput>;

    @Field(() => [PartnerWhereInput], {nullable:true})
    NOT?: Array<PartnerWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    website?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    imageId?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => ImageRelationFilter, {nullable:true})
    image?: ImageRelationFilter;
}
