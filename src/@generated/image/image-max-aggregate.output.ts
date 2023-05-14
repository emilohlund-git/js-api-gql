import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ImageMaxAggregate {

    @Field(() => String, {nullable:true})
    url?: string;

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    fileId?: string;

    @Field(() => String, {nullable:true})
    horseId?: string;

    @Field(() => Boolean, {nullable:true})
    profile?: boolean;

    @Field(() => String, {nullable:true})
    facilityId?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
