import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageWhereUniqueInput } from './image-where-unique.input';
import { Type } from 'class-transformer';
import { ImageCreateWithoutPartnerInput } from './image-create-without-partner.input';

@InputType()
export class ImageCreateOrConnectWithoutPartnerInput {

    @Field(() => ImageWhereUniqueInput, {nullable:false})
    @Type(() => ImageWhereUniqueInput)
    where!: ImageWhereUniqueInput;

    @Field(() => ImageCreateWithoutPartnerInput, {nullable:false})
    @Type(() => ImageCreateWithoutPartnerInput)
    create!: ImageCreateWithoutPartnerInput;
}
