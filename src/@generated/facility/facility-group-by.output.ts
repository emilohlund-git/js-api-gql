import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { FacilityCountAggregate } from './facility-count-aggregate.output';
import { FacilityMinAggregate } from './facility-min-aggregate.output';
import { FacilityMaxAggregate } from './facility-max-aggregate.output';

@ObjectType()
export class FacilityGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => FacilityCountAggregate, {nullable:true})
    _count?: FacilityCountAggregate;

    @Field(() => FacilityMinAggregate, {nullable:true})
    _min?: FacilityMinAggregate;

    @Field(() => FacilityMaxAggregate, {nullable:true})
    _max?: FacilityMaxAggregate;
}
