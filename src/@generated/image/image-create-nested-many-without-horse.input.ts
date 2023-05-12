import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageCreateWithoutHorseInput } from './image-create-without-horse.input';
import { Type } from 'class-transformer';
import { ImageCreateOrConnectWithoutHorseInput } from './image-create-or-connect-without-horse.input';
import { ImageCreateManyHorseInputEnvelope } from './image-create-many-horse-input-envelope.input';
import { ImageWhereUniqueInput } from './image-where-unique.input';

@InputType()
export class ImageCreateNestedManyWithoutHorseInput {

    @Field(() => [ImageCreateWithoutHorseInput], {nullable:true})
    @Type(() => ImageCreateWithoutHorseInput)
    create?: Array<ImageCreateWithoutHorseInput>;

    @Field(() => [ImageCreateOrConnectWithoutHorseInput], {nullable:true})
    @Type(() => ImageCreateOrConnectWithoutHorseInput)
    connectOrCreate?: Array<ImageCreateOrConnectWithoutHorseInput>;

    @Field(() => ImageCreateManyHorseInputEnvelope, {nullable:true})
    @Type(() => ImageCreateManyHorseInputEnvelope)
    createMany?: ImageCreateManyHorseInputEnvelope;

    @Field(() => [ImageWhereUniqueInput], {nullable:true})
    @Type(() => ImageWhereUniqueInput)
    connect?: Array<ImageWhereUniqueInput>;
}
