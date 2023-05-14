import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageCreateWithoutPartnerInput } from './image-create-without-partner.input';
import { Type } from 'class-transformer';
import { ImageCreateOrConnectWithoutPartnerInput } from './image-create-or-connect-without-partner.input';
import { ImageUpsertWithWhereUniqueWithoutPartnerInput } from './image-upsert-with-where-unique-without-partner.input';
import { ImageCreateManyPartnerInputEnvelope } from './image-create-many-partner-input-envelope.input';
import { ImageWhereUniqueInput } from './image-where-unique.input';
import { ImageUpdateWithWhereUniqueWithoutPartnerInput } from './image-update-with-where-unique-without-partner.input';
import { ImageUpdateManyWithWhereWithoutPartnerInput } from './image-update-many-with-where-without-partner.input';
import { ImageScalarWhereInput } from './image-scalar-where.input';

@InputType()
export class ImageUpdateManyWithoutPartnerNestedInput {

    @Field(() => [ImageCreateWithoutPartnerInput], {nullable:true})
    @Type(() => ImageCreateWithoutPartnerInput)
    create?: Array<ImageCreateWithoutPartnerInput>;

    @Field(() => [ImageCreateOrConnectWithoutPartnerInput], {nullable:true})
    @Type(() => ImageCreateOrConnectWithoutPartnerInput)
    connectOrCreate?: Array<ImageCreateOrConnectWithoutPartnerInput>;

    @Field(() => [ImageUpsertWithWhereUniqueWithoutPartnerInput], {nullable:true})
    @Type(() => ImageUpsertWithWhereUniqueWithoutPartnerInput)
    upsert?: Array<ImageUpsertWithWhereUniqueWithoutPartnerInput>;

    @Field(() => ImageCreateManyPartnerInputEnvelope, {nullable:true})
    @Type(() => ImageCreateManyPartnerInputEnvelope)
    createMany?: ImageCreateManyPartnerInputEnvelope;

    @Field(() => [ImageWhereUniqueInput], {nullable:true})
    @Type(() => ImageWhereUniqueInput)
    set?: Array<ImageWhereUniqueInput>;

    @Field(() => [ImageWhereUniqueInput], {nullable:true})
    @Type(() => ImageWhereUniqueInput)
    disconnect?: Array<ImageWhereUniqueInput>;

    @Field(() => [ImageWhereUniqueInput], {nullable:true})
    @Type(() => ImageWhereUniqueInput)
    delete?: Array<ImageWhereUniqueInput>;

    @Field(() => [ImageWhereUniqueInput], {nullable:true})
    @Type(() => ImageWhereUniqueInput)
    connect?: Array<ImageWhereUniqueInput>;

    @Field(() => [ImageUpdateWithWhereUniqueWithoutPartnerInput], {nullable:true})
    @Type(() => ImageUpdateWithWhereUniqueWithoutPartnerInput)
    update?: Array<ImageUpdateWithWhereUniqueWithoutPartnerInput>;

    @Field(() => [ImageUpdateManyWithWhereWithoutPartnerInput], {nullable:true})
    @Type(() => ImageUpdateManyWithWhereWithoutPartnerInput)
    updateMany?: Array<ImageUpdateManyWithWhereWithoutPartnerInput>;

    @Field(() => [ImageScalarWhereInput], {nullable:true})
    @Type(() => ImageScalarWhereInput)
    deleteMany?: Array<ImageScalarWhereInput>;
}
