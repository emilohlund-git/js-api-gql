import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageWhereUniqueInput } from './image-where-unique.input';
import { Type } from 'class-transformer';
import { ImageUpdateWithoutFacilityInput } from './image-update-without-facility.input';
import { ImageCreateWithoutFacilityInput } from './image-create-without-facility.input';

@InputType()
export class ImageUpsertWithWhereUniqueWithoutFacilityInput {

    @Field(() => ImageWhereUniqueInput, {nullable:false})
    @Type(() => ImageWhereUniqueInput)
    where!: ImageWhereUniqueInput;

    @Field(() => ImageUpdateWithoutFacilityInput, {nullable:false})
    @Type(() => ImageUpdateWithoutFacilityInput)
    update!: ImageUpdateWithoutFacilityInput;

    @Field(() => ImageCreateWithoutFacilityInput, {nullable:false})
    @Type(() => ImageCreateWithoutFacilityInput)
    create!: ImageCreateWithoutFacilityInput;
}
