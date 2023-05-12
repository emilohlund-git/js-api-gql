import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageCreateWithoutFacilityInput } from './image-create-without-facility.input';
import { Type } from 'class-transformer';
import { ImageCreateOrConnectWithoutFacilityInput } from './image-create-or-connect-without-facility.input';
import { ImageCreateManyFacilityInputEnvelope } from './image-create-many-facility-input-envelope.input';
import { ImageWhereUniqueInput } from './image-where-unique.input';

@InputType()
export class ImageUncheckedCreateNestedManyWithoutFacilityInput {

    @Field(() => [ImageCreateWithoutFacilityInput], {nullable:true})
    @Type(() => ImageCreateWithoutFacilityInput)
    create?: Array<ImageCreateWithoutFacilityInput>;

    @Field(() => [ImageCreateOrConnectWithoutFacilityInput], {nullable:true})
    @Type(() => ImageCreateOrConnectWithoutFacilityInput)
    connectOrCreate?: Array<ImageCreateOrConnectWithoutFacilityInput>;

    @Field(() => ImageCreateManyFacilityInputEnvelope, {nullable:true})
    @Type(() => ImageCreateManyFacilityInputEnvelope)
    createMany?: ImageCreateManyFacilityInputEnvelope;

    @Field(() => [ImageWhereUniqueInput], {nullable:true})
    @Type(() => ImageWhereUniqueInput)
    connect?: Array<ImageWhereUniqueInput>;
}
