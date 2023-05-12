import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ImageCreateManyInput {

    @Field(() => String, {nullable:false})
    url!: string;

    @Field(() => String, {nullable:true})
    id?: string;

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
