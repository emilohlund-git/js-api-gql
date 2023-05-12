import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { HorseCountAggregate } from './horse-count-aggregate.output';
import { HorseMinAggregate } from './horse-min-aggregate.output';
import { HorseMaxAggregate } from './horse-max-aggregate.output';

@ObjectType()
export class AggregateHorse {

    @Field(() => HorseCountAggregate, {nullable:true})
    _count?: HorseCountAggregate;

    @Field(() => HorseMinAggregate, {nullable:true})
    _min?: HorseMinAggregate;

    @Field(() => HorseMaxAggregate, {nullable:true})
    _max?: HorseMaxAggregate;
}
