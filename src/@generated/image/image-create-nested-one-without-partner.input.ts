import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageCreateWithoutPartnerInput } from './image-create-without-partner.input';
import { Type } from 'class-transformer';
import { ImageCreateOrConnectWithoutPartnerInput } from './image-create-or-connect-without-partner.input';
import { ImageWhereUniqueInput } from './image-where-unique.input';

@InputType()
export class ImageCreateNestedOneWithoutPartnerInput {

    @Field(() => ImageCreateWithoutPartnerInput, {nullable:true})
    @Type(() => ImageCreateWithoutPartnerInput)
    create?: ImageCreateWithoutPartnerInput;

    @Field(() => ImageCreateOrConnectWithoutPartnerInput, {nullable:true})
    @Type(() => ImageCreateOrConnectWithoutPartnerInput)
    connectOrCreate?: ImageCreateOrConnectWithoutPartnerInput;

    @Field(() => ImageWhereUniqueInput, {nullable:true})
    @Type(() => ImageWhereUniqueInput)
    connect?: ImageWhereUniqueInput;
}
