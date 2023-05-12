import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HorseWhereUniqueInput } from './horse-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueHorseOrThrowArgs {

    @Field(() => HorseWhereUniqueInput, {nullable:false})
    @Type(() => HorseWhereUniqueInput)
    where!: HorseWhereUniqueInput;
}
