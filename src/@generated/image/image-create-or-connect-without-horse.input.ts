import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageWhereUniqueInput } from './image-where-unique.input';
import { Type } from 'class-transformer';
import { ImageCreateWithoutHorseInput } from './image-create-without-horse.input';

@InputType()
export class ImageCreateOrConnectWithoutHorseInput {

    @Field(() => ImageWhereUniqueInput, {nullable:false})
    @Type(() => ImageWhereUniqueInput)
    where!: ImageWhereUniqueInput;

    @Field(() => ImageCreateWithoutHorseInput, {nullable:false})
    @Type(() => ImageCreateWithoutHorseInput)
    create!: ImageCreateWithoutHorseInput;
}
