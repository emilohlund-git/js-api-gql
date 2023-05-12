import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PartnerCountAggregate } from './partner-count-aggregate.output';
import { PartnerMinAggregate } from './partner-min-aggregate.output';
import { PartnerMaxAggregate } from './partner-max-aggregate.output';

@ObjectType()
export class PartnerGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    website!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    imageId!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => PartnerCountAggregate, {nullable:true})
    _count?: PartnerCountAggregate;

    @Field(() => PartnerMinAggregate, {nullable:true})
    _min?: PartnerMinAggregate;

    @Field(() => PartnerMaxAggregate, {nullable:true})
    _max?: PartnerMaxAggregate;
}
