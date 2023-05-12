import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HorseUpdateWithoutImagesInput } from './horse-update-without-images.input';
import { Type } from 'class-transformer';
import { HorseCreateWithoutImagesInput } from './horse-create-without-images.input';

@InputType()
export class HorseUpsertWithoutImagesInput {

    @Field(() => HorseUpdateWithoutImagesInput, {nullable:false})
    @Type(() => HorseUpdateWithoutImagesInput)
    update!: HorseUpdateWithoutImagesInput;

    @Field(() => HorseCreateWithoutImagesInput, {nullable:false})
    @Type(() => HorseCreateWithoutImagesInput)
    create!: HorseCreateWithoutImagesInput;
}
