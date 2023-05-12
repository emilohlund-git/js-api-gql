import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageWhereUniqueInput } from './image-where-unique.input';
import { Type } from 'class-transformer';
import { ImageUpdateWithoutHorseInput } from './image-update-without-horse.input';
import { ImageCreateWithoutHorseInput } from './image-create-without-horse.input';

@InputType()
export class ImageUpsertWithWhereUniqueWithoutHorseInput {

    @Field(() => ImageWhereUniqueInput, {nullable:false})
    @Type(() => ImageWhereUniqueInput)
    where!: ImageWhereUniqueInput;

    @Field(() => ImageUpdateWithoutHorseInput, {nullable:false})
    @Type(() => ImageUpdateWithoutHorseInput)
    update!: ImageUpdateWithoutHorseInput;

    @Field(() => ImageCreateWithoutHorseInput, {nullable:false})
    @Type(() => ImageCreateWithoutHorseInput)
    create!: ImageCreateWithoutHorseInput;
}
