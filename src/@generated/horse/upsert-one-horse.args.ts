import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HorseWhereUniqueInput } from './horse-where-unique.input';
import { Type } from 'class-transformer';
import { HorseCreateInput } from './horse-create.input';
import { HorseUpdateInput } from './horse-update.input';

@ArgsType()
export class UpsertOneHorseArgs {

    @Field(() => HorseWhereUniqueInput, {nullable:false})
    @Type(() => HorseWhereUniqueInput)
    where!: HorseWhereUniqueInput;

    @Field(() => HorseCreateInput, {nullable:false})
    @Type(() => HorseCreateInput)
    create!: HorseCreateInput;

    @Field(() => HorseUpdateInput, {nullable:false})
    @Type(() => HorseUpdateInput)
    update!: HorseUpdateInput;
}
