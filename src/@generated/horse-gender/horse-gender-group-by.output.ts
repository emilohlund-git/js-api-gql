import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { HorseGenderCountAggregate } from './horse-gender-count-aggregate.output';
import { HorseGenderMinAggregate } from './horse-gender-min-aggregate.output';
import { HorseGenderMaxAggregate } from './horse-gender-max-aggregate.output';

@ObjectType()
export class HorseGenderGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    gender!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => HorseGenderCountAggregate, {nullable:true})
    _count?: HorseGenderCountAggregate;

    @Field(() => HorseGenderMinAggregate, {nullable:true})
    _min?: HorseGenderMinAggregate;

    @Field(() => HorseGenderMaxAggregate, {nullable:true})
    _max?: HorseGenderMaxAggregate;
}
