import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageWhereUniqueInput } from './image-where-unique.input';
import { Type } from 'class-transformer';
import { ImageUpdateWithoutPartnerInput } from './image-update-without-partner.input';

@InputType()
export class ImageUpdateWithWhereUniqueWithoutPartnerInput {

    @Field(() => ImageWhereUniqueInput, {nullable:false})
    @Type(() => ImageWhereUniqueInput)
    where!: ImageWhereUniqueInput;

    @Field(() => ImageUpdateWithoutPartnerInput, {nullable:false})
    @Type(() => ImageUpdateWithoutPartnerInput)
    data!: ImageUpdateWithoutPartnerInput;
}
