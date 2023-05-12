import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HorseCreateNestedOneWithoutImagesInput } from '../horse/horse-create-nested-one-without-images.input';
import { PartnerCreateNestedManyWithoutImageInput } from '../partner/partner-create-nested-many-without-image.input';

@InputType()
export class ImageCreateWithoutFacilityInput {

    @Field(() => String, {nullable:false})
    url!: string;

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Boolean, {nullable:true})
    profile?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => HorseCreateNestedOneWithoutImagesInput, {nullable:true})
    horse?: HorseCreateNestedOneWithoutImagesInput;

    @Field(() => PartnerCreateNestedManyWithoutImageInput, {nullable:true})
    partner?: PartnerCreateNestedManyWithoutImageInput;
}
