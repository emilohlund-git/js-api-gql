import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ImageCountAggregate } from './image-count-aggregate.output';
import { ImageMinAggregate } from './image-min-aggregate.output';
import { ImageMaxAggregate } from './image-max-aggregate.output';

@ObjectType()
export class ImageGroupBy {

    @Field(() => String, {nullable:false})
    url!: string;

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    fileId!: string;

    @Field(() => String, {nullable:true})
    horseId?: string;

    @Field(() => Boolean, {nullable:false})
    profile!: boolean;

    @Field(() => String, {nullable:true})
    facilityId?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => ImageCountAggregate, {nullable:true})
    _count?: ImageCountAggregate;

    @Field(() => ImageMinAggregate, {nullable:true})
    _min?: ImageMinAggregate;

    @Field(() => ImageMaxAggregate, {nullable:true})
    _max?: ImageMaxAggregate;
}
