import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageCreateWithoutFacilityInput } from './image-create-without-facility.input';
import { Type } from 'class-transformer';
import { ImageCreateOrConnectWithoutFacilityInput } from './image-create-or-connect-without-facility.input';
import { ImageUpsertWithWhereUniqueWithoutFacilityInput } from './image-upsert-with-where-unique-without-facility.input';
import { ImageCreateManyFacilityInputEnvelope } from './image-create-many-facility-input-envelope.input';
import { ImageWhereUniqueInput } from './image-where-unique.input';
import { ImageUpdateWithWhereUniqueWithoutFacilityInput } from './image-update-with-where-unique-without-facility.input';
import { ImageUpdateManyWithWhereWithoutFacilityInput } from './image-update-many-with-where-without-facility.input';
import { ImageScalarWhereInput } from './image-scalar-where.input';

@InputType()
export class ImageUpdateManyWithoutFacilityNestedInput {

    @Field(() => [ImageCreateWithoutFacilityInput], {nullable:true})
    @Type(() => ImageCreateWithoutFacilityInput)
    create?: Array<ImageCreateWithoutFacilityInput>;

    @Field(() => [ImageCreateOrConnectWithoutFacilityInput], {nullable:true})
    @Type(() => ImageCreateOrConnectWithoutFacilityInput)
    connectOrCreate?: Array<ImageCreateOrConnectWithoutFacilityInput>;

    @Field(() => [ImageUpsertWithWhereUniqueWithoutFacilityInput], {nullable:true})
    @Type(() => ImageUpsertWithWhereUniqueWithoutFacilityInput)
    upsert?: Array<ImageUpsertWithWhereUniqueWithoutFacilityInput>;

    @Field(() => ImageCreateManyFacilityInputEnvelope, {nullable:true})
    @Type(() => ImageCreateManyFacilityInputEnvelope)
    createMany?: ImageCreateManyFacilityInputEnvelope;

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

    @Field(() => [ImageUpdateWithWhereUniqueWithoutFacilityInput], {nullable:true})
    @Type(() => ImageUpdateWithWhereUniqueWithoutFacilityInput)
    update?: Array<ImageUpdateWithWhereUniqueWithoutFacilityInput>;

    @Field(() => [ImageUpdateManyWithWhereWithoutFacilityInput], {nullable:true})
    @Type(() => ImageUpdateManyWithWhereWithoutFacilityInput)
    updateMany?: Array<ImageUpdateManyWithWhereWithoutFacilityInput>;

    @Field(() => [ImageScalarWhereInput], {nullable:true})
    @Type(() => ImageScalarWhereInput)
    deleteMany?: Array<ImageScalarWhereInput>;
}
