import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageCreateWithoutPartnerInput } from './image-create-without-partner.input';
import { Type } from 'class-transformer';
import { ImageCreateOrConnectWithoutPartnerInput } from './image-create-or-connect-without-partner.input';
import { ImageCreateManyPartnerInputEnvelope } from './image-create-many-partner-input-envelope.input';
import { ImageWhereUniqueInput } from './image-where-unique.input';

@InputType()
export class ImageCreateNestedManyWithoutPartnerInput {

    @Field(() => [ImageCreateWithoutPartnerInput], {nullable:true})
    @Type(() => ImageCreateWithoutPartnerInput)
    create?: Array<ImageCreateWithoutPartnerInput>;

    @Field(() => [ImageCreateOrConnectWithoutPartnerInput], {nullable:true})
    @Type(() => ImageCreateOrConnectWithoutPartnerInput)
    connectOrCreate?: Array<ImageCreateOrConnectWithoutPartnerInput>;

    @Field(() => ImageCreateManyPartnerInputEnvelope, {nullable:true})
    @Type(() => ImageCreateManyPartnerInputEnvelope)
    createMany?: ImageCreateManyPartnerInputEnvelope;

    @Field(() => [ImageWhereUniqueInput], {nullable:true})
    @Type(() => ImageWhereUniqueInput)
    connect?: Array<ImageWhereUniqueInput>;
}
