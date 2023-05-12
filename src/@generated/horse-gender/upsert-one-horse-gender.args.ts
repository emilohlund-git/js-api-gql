import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HorseGenderWhereUniqueInput } from './horse-gender-where-unique.input';
import { Type } from 'class-transformer';
import { HorseGenderCreateInput } from './horse-gender-create.input';
import { HorseGenderUpdateInput } from './horse-gender-update.input';

@ArgsType()
export class UpsertOneHorseGenderArgs {

    @Field(() => HorseGenderWhereUniqueInput, {nullable:false})
    @Type(() => HorseGenderWhereUniqueInput)
    where!: HorseGenderWhereUniqueInput;

    @Field(() => HorseGenderCreateInput, {nullable:false})
    @Type(() => HorseGenderCreateInput)
    create!: HorseGenderCreateInput;

    @Field(() => HorseGenderUpdateInput, {nullable:false})
    @Type(() => HorseGenderUpdateInput)
    update!: HorseGenderUpdateInput;
}
