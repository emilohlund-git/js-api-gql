import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { HorseCountAggregate } from './horse-count-aggregate.output';
import { HorseMinAggregate } from './horse-min-aggregate.output';
import { HorseMaxAggregate } from './horse-max-aggregate.output';

@ObjectType()
export class HorseGroupBy {

    @Field(() => String, {nullable:false})
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
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => HorseCountAggregate, {nullable:true})
    _count?: HorseCountAggregate;

    @Field(() => HorseMinAggregate, {nullable:true})
    _min?: HorseMinAggregate;

    @Field(() => HorseMaxAggregate, {nullable:true})
    _max?: HorseMaxAggregate;
}
