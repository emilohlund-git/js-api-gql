import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PartnerUncheckedCreateNestedOneWithoutImageInput } from '../partner/partner-unchecked-create-nested-one-without-image.input';

@InputType()
export class ImageUncheckedCreateWithoutHorseInput {

    @Field(() => String, {nullable:false})
    url!: string;

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    fileId!: string;

    @Field(() => Boolean, {nullable:true})
    profile?: boolean;

    @Field(() => String, {nullable:true})
    facilityId?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => PartnerUncheckedCreateNestedOneWithoutImageInput, {nullable:true})
    partner?: PartnerUncheckedCreateNestedOneWithoutImageInput;
}
