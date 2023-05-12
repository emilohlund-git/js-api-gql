import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HorseCreateWithoutImagesInput } from './horse-create-without-images.input';
import { Type } from 'class-transformer';
import { HorseCreateOrConnectWithoutImagesInput } from './horse-create-or-connect-without-images.input';
import { HorseUpsertWithoutImagesInput } from './horse-upsert-without-images.input';
import { HorseWhereUniqueInput } from './horse-where-unique.input';
import { HorseUpdateWithoutImagesInput } from './horse-update-without-images.input';

@InputType()
export class HorseUpdateOneWithoutImagesNestedInput {

    @Field(() => HorseCreateWithoutImagesInput, {nullable:true})
    @Type(() => HorseCreateWithoutImagesInput)
    create?: HorseCreateWithoutImagesInput;

    @Field(() => HorseCreateOrConnectWithoutImagesInput, {nullable:true})
    @Type(() => HorseCreateOrConnectWithoutImagesInput)
    connectOrCreate?: HorseCreateOrConnectWithoutImagesInput;

    @Field(() => HorseUpsertWithoutImagesInput, {nullable:true})
    @Type(() => HorseUpsertWithoutImagesInput)
    upsert?: HorseUpsertWithoutImagesInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => HorseWhereUniqueInput, {nullable:true})
    @Type(() => HorseWhereUniqueInput)
    connect?: HorseWhereUniqueInput;

    @Field(() => HorseUpdateWithoutImagesInput, {nullable:true})
    @Type(() => HorseUpdateWithoutImagesInput)
    update?: HorseUpdateWithoutImagesInput;
}
