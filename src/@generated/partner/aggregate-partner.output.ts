import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PartnerCountAggregate } from './partner-count-aggregate.output';
import { PartnerMinAggregate } from './partner-min-aggregate.output';
import { PartnerMaxAggregate } from './partner-max-aggregate.output';

@ObjectType()
export class AggregatePartner {

    @Field(() => PartnerCountAggregate, {nullable:true})
    _count?: PartnerCountAggregate;

    @Field(() => PartnerMinAggregate, {nullable:true})
    _min?: PartnerMinAggregate;

    @Field(() => PartnerMaxAggregate, {nullable:true})
    _max?: PartnerMaxAggregate;
}
