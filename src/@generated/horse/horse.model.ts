import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Image } from '../image/image.model';
import { HorseCount } from './horse-count.output';

@ObjectType()
export class Horse {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    nickname!: string;

    @Field(() => String, {nullable:false})
    category!: string;

    @Field(() => String, {nullable:false})
    owner!: string;

    @Field(() => String, {nullable:false})
    after!: string;

    @Field(() => String, {nullable:false})
    birthyear!: string;

    @Field(() => String, {nullable:false})
    gender!: string;

    @Field(() => String, {nullable:false})
    color!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [Image], {nullable:true})
    images?: Array<Image>;

    @Field(() => HorseCount, {nullable:false})
    _count?: HorseCount;
}
