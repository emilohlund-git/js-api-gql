import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HorseColorCreateInput } from './horse-color-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneHorseColorArgs {

    @Field(() => HorseColorCreateInput, {nullable:false})
    @Type(() => HorseColorCreateInput)
    data!: HorseColorCreateInput;
}
