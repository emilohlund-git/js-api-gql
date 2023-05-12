import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageCreateWithoutPartnerInput } from './image-create-without-partner.input';
import { Type } from 'class-transformer';
import { ImageCreateOrConnectWithoutPartnerInput } from './image-create-or-connect-without-partner.input';
import { ImageUpsertWithoutPartnerInput } from './image-upsert-without-partner.input';
import { ImageWhereUniqueInput } from './image-where-unique.input';
import { ImageUpdateWithoutPartnerInput } from './image-update-without-partner.input';

@InputType()
export class ImageUpdateOneRequiredWithoutPartnerNestedInput {

    @Field(() => ImageCreateWithoutPartnerInput, {nullable:true})
    @Type(() => ImageCreateWithoutPartnerInput)
    create?: ImageCreateWithoutPartnerInput;

    @Field(() => ImageCreateOrConnectWithoutPartnerInput, {nullable:true})
    @Type(() => ImageCreateOrConnectWithoutPartnerInput)
    connectOrCreate?: ImageCreateOrConnectWithoutPartnerInput;

    @Field(() => ImageUpsertWithoutPartnerInput, {nullable:true})
    @Type(() => ImageUpsertWithoutPartnerInput)
    upsert?: ImageUpsertWithoutPartnerInput;

    @Field(() => ImageWhereUniqueInput, {nullable:true})
    @Type(() => ImageWhereUniqueInput)
    connect?: ImageWhereUniqueInput;

    @Field(() => ImageUpdateWithoutPartnerInput, {nullable:true})
    @Type(() => ImageUpdateWithoutPartnerInput)
    update?: ImageUpdateWithoutPartnerInput;
}
