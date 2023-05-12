import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HorseColorWhereUniqueInput } from './horse-color-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueHorseColorOrThrowArgs {

    @Field(() => HorseColorWhereUniqueInput, {nullable:false})
    @Type(() => HorseColorWhereUniqueInput)
    where!: HorseColorWhereUniqueInput;
}
