import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageCreateNestedOneWithoutPartnerInput } from '../image/image-create-nested-one-without-partner.input';

@InputType()
export class PartnerCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    website!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ImageCreateNestedOneWithoutPartnerInput, {nullable:true})
    image?: ImageCreateNestedOneWithoutPartnerInput;
}
