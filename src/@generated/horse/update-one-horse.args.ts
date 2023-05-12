import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HorseUpdateInput } from './horse-update.input';
import { Type } from 'class-transformer';
import { HorseWhereUniqueInput } from './horse-where-unique.input';

@ArgsType()
export class UpdateOneHorseArgs {

    @Field(() => HorseUpdateInput, {nullable:false})
    @Type(() => HorseUpdateInput)
    data!: HorseUpdateInput;

    @Field(() => HorseWhereUniqueInput, {nullable:false})
    @Type(() => HorseWhereUniqueInput)
    where!: HorseWhereUniqueInput;
}
