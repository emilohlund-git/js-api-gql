import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageWhereUniqueInput } from './image-where-unique.input';
import { Type } from 'class-transformer';
import { ImageUpdateWithoutHorseInput } from './image-update-without-horse.input';

@InputType()
export class ImageUpdateWithWhereUniqueWithoutHorseInput {

    @Field(() => ImageWhereUniqueInput, {nullable:false})
    @Type(() => ImageWhereUniqueInput)
    where!: ImageWhereUniqueInput;

    @Field(() => ImageUpdateWithoutHorseInput, {nullable:false})
    @Type(() => ImageUpdateWithoutHorseInput)
    data!: ImageUpdateWithoutHorseInput;
}
