import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ImageCreateManyFacilityInput {

    @Field(() => String, {nullable:false})
    url!: string;

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    fileId!: string;

    @Field(() => String, {nullable:true})
    horseId?: string;

    @Field(() => Boolean, {nullable:true})
    profile?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
