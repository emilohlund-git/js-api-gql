import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HorseWhereUniqueInput } from './horse-where-unique.input';
import { Type } from 'class-transformer';
import { HorseCreateWithoutImagesInput } from './horse-create-without-images.input';

@InputType()
export class HorseCreateOrConnectWithoutImagesInput {

    @Field(() => HorseWhereUniqueInput, {nullable:false})
    @Type(() => HorseWhereUniqueInput)
    where!: HorseWhereUniqueInput;

    @Field(() => HorseCreateWithoutImagesInput, {nullable:false})
    @Type(() => HorseCreateWithoutImagesInput)
    create!: HorseCreateWithoutImagesInput;
}
