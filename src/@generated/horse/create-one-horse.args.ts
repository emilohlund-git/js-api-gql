import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HorseCreateInput } from './horse-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneHorseArgs {

    @Field(() => HorseCreateInput, {nullable:false})
    @Type(() => HorseCreateInput)
    data!: HorseCreateInput;
}
