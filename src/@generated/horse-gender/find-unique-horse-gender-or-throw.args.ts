import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HorseGenderWhereUniqueInput } from './horse-gender-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueHorseGenderOrThrowArgs {

    @Field(() => HorseGenderWhereUniqueInput, {nullable:false})
    @Type(() => HorseGenderWhereUniqueInput)
    where!: HorseGenderWhereUniqueInput;
}
