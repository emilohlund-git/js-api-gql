import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { HorseCategoryCountAggregate } from './horse-category-count-aggregate.output';
import { HorseCategoryMinAggregate } from './horse-category-min-aggregate.output';
import { HorseCategoryMaxAggregate } from './horse-category-max-aggregate.output';

@ObjectType()
export class HorseCategoryGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    category!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => HorseCategoryCountAggregate, {nullable:true})
    _count?: HorseCategoryCountAggregate;

    @Field(() => HorseCategoryMinAggregate, {nullable:true})
    _min?: HorseCategoryMinAggregate;

    @Field(() => HorseCategoryMaxAggregate, {nullable:true})
    _max?: HorseCategoryMaxAggregate;
}
