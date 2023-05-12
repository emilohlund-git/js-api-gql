import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HorseColorWhereUniqueInput } from './horse-color-where-unique.input';
import { Type } from 'class-transformer';
import { HorseColorCreateInput } from './horse-color-create.input';
import { HorseColorUpdateInput } from './horse-color-update.input';

@ArgsType()
export class UpsertOneHorseColorArgs {

    @Field(() => HorseColorWhereUniqueInput, {nullable:false})
    @Type(() => HorseColorWhereUniqueInput)
    where!: HorseColorWhereUniqueInput;

    @Field(() => HorseColorCreateInput, {nullable:false})
    @Type(() => HorseColorCreateInput)
    create!: HorseColorCreateInput;

    @Field(() => HorseColorUpdateInput, {nullable:false})
    @Type(() => HorseColorUpdateInput)
    update!: HorseColorUpdateInput;
}
