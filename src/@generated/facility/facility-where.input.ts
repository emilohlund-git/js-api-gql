import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ImageListRelationFilter } from '../image/image-list-relation-filter.input';

@InputType()
export class FacilityWhereInput {

    @Field(() => [FacilityWhereInput], {nullable:true})
    AND?: Array<FacilityWhereInput>;

    @Field(() => [FacilityWhereInput], {nullable:true})
    OR?: Array<FacilityWhereInput>;

    @Field(() => [FacilityWhereInput], {nullable:true})
    NOT?: Array<FacilityWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => ImageListRelationFilter, {nullable:true})
    images?: ImageListRelationFilter;
}
