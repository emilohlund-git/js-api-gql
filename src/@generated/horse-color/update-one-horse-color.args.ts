import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HorseColorUpdateInput } from './horse-color-update.input';
import { Type } from 'class-transformer';
import { HorseColorWhereUniqueInput } from './horse-color-where-unique.input';

@ArgsType()
export class UpdateOneHorseColorArgs {

    @Field(() => HorseColorUpdateInput, {nullable:false})
    @Type(() => HorseColorUpdateInput)
    data!: HorseColorUpdateInput;

    @Field(() => HorseColorWhereUniqueInput, {nullable:false})
    @Type(() => HorseColorWhereUniqueInput)
    where!: HorseColorWhereUniqueInput;
}
