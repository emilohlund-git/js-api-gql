import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { HorseRelationFilter } from '../horse/horse-relation-filter.input';
import { FacilityRelationFilter } from '../facility/facility-relation-filter.input';
import { PartnerListRelationFilter } from '../partner/partner-list-relation-filter.input';

@InputType()
export class ImageWhereInput {

    @Field(() => [ImageWhereInput], {nullable:true})
    AND?: Array<ImageWhereInput>;

    @Field(() => [ImageWhereInput], {nullable:true})
    OR?: Array<ImageWhereInput>;

    @Field(() => [ImageWhereInput], {nullable:true})
    NOT?: Array<ImageWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    url?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    horseId?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    profile?: BoolFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    facilityId?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => HorseRelationFilter, {nullable:true})
    horse?: HorseRelationFilter;

    @Field(() => FacilityRelationFilter, {nullable:true})
    facility?: FacilityRelationFilter;

    @Field(() => PartnerListRelationFilter, {nullable:true})
    partner?: PartnerListRelationFilter;
}
