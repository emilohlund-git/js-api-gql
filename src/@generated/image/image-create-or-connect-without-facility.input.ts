import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageWhereUniqueInput } from './image-where-unique.input';
import { Type } from 'class-transformer';
import { ImageCreateWithoutFacilityInput } from './image-create-without-facility.input';

@InputType()
export class ImageCreateOrConnectWithoutFacilityInput {

    @Field(() => ImageWhereUniqueInput, {nullable:false})
    @Type(() => ImageWhereUniqueInput)
    where!: ImageWhereUniqueInput;

    @Field(() => ImageCreateWithoutFacilityInput, {nullable:false})
    @Type(() => ImageCreateWithoutFacilityInput)
    create!: ImageCreateWithoutFacilityInput;
}
