import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageCreateWithoutHorseInput } from './image-create-without-horse.input';
import { Type } from 'class-transformer';
import { ImageCreateOrConnectWithoutHorseInput } from './image-create-or-connect-without-horse.input';
import { ImageUpsertWithWhereUniqueWithoutHorseInput } from './image-upsert-with-where-unique-without-horse.input';
import { ImageCreateManyHorseInputEnvelope } from './image-create-many-horse-input-envelope.input';
import { ImageWhereUniqueInput } from './image-where-unique.input';
import { ImageUpdateWithWhereUniqueWithoutHorseInput } from './image-update-with-where-unique-without-horse.input';
import { ImageUpdateManyWithWhereWithoutHorseInput } from './image-update-many-with-where-without-horse.input';
import { ImageScalarWhereInput } from './image-scalar-where.input';

@InputType()
export class ImageUncheckedUpdateManyWithoutHorseNestedInput {

    @Field(() => [ImageCreateWithoutHorseInput], {nullable:true})
    @Type(() => ImageCreateWithoutHorseInput)
    create?: Array<ImageCreateWithoutHorseInput>;

    @Field(() => [ImageCreateOrConnectWithoutHorseInput], {nullable:true})
    @Type(() => ImageCreateOrConnectWithoutHorseInput)
    connectOrCreate?: Array<ImageCreateOrConnectWithoutHorseInput>;

    @Field(() => [ImageUpsertWithWhereUniqueWithoutHorseInput], {nullable:true})
    @Type(() => ImageUpsertWithWhereUniqueWithoutHorseInput)
    upsert?: Array<ImageUpsertWithWhereUniqueWithoutHorseInput>;

    @Field(() => ImageCreateManyHorseInputEnvelope, {nullable:true})
    @Type(() => ImageCreateManyHorseInputEnvelope)
    createMany?: ImageCreateManyHorseInputEnvelope;

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

    @Field(() => [ImageUpdateWithWhereUniqueWithoutHorseInput], {nullable:true})
    @Type(() => ImageUpdateWithWhereUniqueWithoutHorseInput)
    update?: Array<ImageUpdateWithWhereUniqueWithoutHorseInput>;

    @Field(() => [ImageUpdateManyWithWhereWithoutHorseInput], {nullable:true})
    @Type(() => ImageUpdateManyWithWhereWithoutHorseInput)
    updateMany?: Array<ImageUpdateManyWithWhereWithoutHorseInput>;

    @Field(() => [ImageScalarWhereInput], {nullable:true})
    @Type(() => ImageScalarWhereInput)
    deleteMany?: Array<ImageScalarWhereInput>;
}
