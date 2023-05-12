import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HorseCreateWithoutImagesInput } from './horse-create-without-images.input';
import { Type } from 'class-transformer';
import { HorseCreateOrConnectWithoutImagesInput } from './horse-create-or-connect-without-images.input';
import { HorseWhereUniqueInput } from './horse-where-unique.input';

@InputType()
export class HorseCreateNestedOneWithoutImagesInput {

    @Field(() => HorseCreateWithoutImagesInput, {nullable:true})
    @Type(() => HorseCreateWithoutImagesInput)
    create?: HorseCreateWithoutImagesInput;

    @Field(() => HorseCreateOrConnectWithoutImagesInput, {nullable:true})
    @Type(() => HorseCreateOrConnectWithoutImagesInput)
    connectOrCreate?: HorseCreateOrConnectWithoutImagesInput;

    @Field(() => HorseWhereUniqueInput, {nullable:true})
    @Type(() => HorseWhereUniqueInput)
    connect?: HorseWhereUniqueInput;
}
