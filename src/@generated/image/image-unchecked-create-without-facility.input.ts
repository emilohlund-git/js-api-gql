import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PartnerUncheckedCreateNestedManyWithoutImageInput } from '../partner/partner-unchecked-create-nested-many-without-image.input';

@InputType()
export class ImageUncheckedCreateWithoutFacilityInput {

    @Field(() => String, {nullable:false})
    url!: string;

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    horseId?: string;

    @Field(() => Boolean, {nullable:true})
    profile?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => PartnerUncheckedCreateNestedManyWithoutImageInput, {nullable:true})
    partner?: PartnerUncheckedCreateNestedManyWithoutImageInput;
}
