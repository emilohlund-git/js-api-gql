import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { HorseColorCountAggregate } from './horse-color-count-aggregate.output';
import { HorseColorMinAggregate } from './horse-color-min-aggregate.output';
import { HorseColorMaxAggregate } from './horse-color-max-aggregate.output';

@ObjectType()
export class HorseColorGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    color!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => HorseColorCountAggregate, {nullable:true})
    _count?: HorseColorCountAggregate;

    @Field(() => HorseColorMinAggregate, {nullable:true})
    _min?: HorseColorMinAggregate;

    @Field(() => HorseColorMaxAggregate, {nullable:true})
    _max?: HorseColorMaxAggregate;
}
