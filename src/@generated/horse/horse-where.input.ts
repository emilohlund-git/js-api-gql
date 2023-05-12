import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ImageListRelationFilter } from '../image/image-list-relation-filter.input';

@InputType()
export class HorseWhereInput {

    @Field(() => [HorseWhereInput], {nullable:true})
    AND?: Array<HorseWhereInput>;

    @Field(() => [HorseWhereInput], {nullable:true})
    OR?: Array<HorseWhereInput>;

    @Field(() => [HorseWhereInput], {nullable:true})
    NOT?: Array<HorseWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    nickname?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    category?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    owner?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    after?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    birthyear?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    gender?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    color?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => ImageListRelationFilter, {nullable:true})
    images?: ImageListRelationFilter;
}
