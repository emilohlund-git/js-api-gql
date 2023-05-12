import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HorseGenderCreateInput } from './horse-gender-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneHorseGenderArgs {

    @Field(() => HorseGenderCreateInput, {nullable:false})
    @Type(() => HorseGenderCreateInput)
    data!: HorseGenderCreateInput;
}
