import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageCreateManyHorseInput } from './image-create-many-horse.input';
import { Type } from 'class-transformer';

@InputType()
export class ImageCreateManyHorseInputEnvelope {

    @Field(() => [ImageCreateManyHorseInput], {nullable:false})
    @Type(() => ImageCreateManyHorseInput)
    data!: Array<ImageCreateManyHorseInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
