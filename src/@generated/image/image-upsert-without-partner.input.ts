import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageUpdateWithoutPartnerInput } from './image-update-without-partner.input';
import { Type } from 'class-transformer';
import { ImageCreateWithoutPartnerInput } from './image-create-without-partner.input';

@InputType()
export class ImageUpsertWithoutPartnerInput {

    @Field(() => ImageUpdateWithoutPartnerInput, {nullable:false})
    @Type(() => ImageUpdateWithoutPartnerInput)
    update!: ImageUpdateWithoutPartnerInput;

    @Field(() => ImageCreateWithoutPartnerInput, {nullable:false})
    @Type(() => ImageCreateWithoutPartnerInput)
    create!: ImageCreateWithoutPartnerInput;
}
