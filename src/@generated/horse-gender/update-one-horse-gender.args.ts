import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HorseGenderUpdateInput } from './horse-gender-update.input';
import { Type } from 'class-transformer';
import { HorseGenderWhereUniqueInput } from './horse-gender-where-unique.input';

@ArgsType()
export class UpdateOneHorseGenderArgs {

    @Field(() => HorseGenderUpdateInput, {nullable:false})
    @Type(() => HorseGenderUpdateInput)
    data!: HorseGenderUpdateInput;

    @Field(() => HorseGenderWhereUniqueInput, {nullable:false})
    @Type(() => HorseGenderWhereUniqueInput)
    where!: HorseGenderWhereUniqueInput;
}
