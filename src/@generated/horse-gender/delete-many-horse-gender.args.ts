import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HorseGenderWhereInput } from './horse-gender-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyHorseGenderArgs {

    @Field(() => HorseGenderWhereInput, {nullable:true})
    @Type(() => HorseGenderWhereInput)
    where?: HorseGenderWhereInput;
}
