import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HorseUpdateManyMutationInput } from './horse-update-many-mutation.input';
import { Type } from 'class-transformer';
import { HorseWhereInput } from './horse-where.input';

@ArgsType()
export class UpdateManyHorseArgs {

    @Field(() => HorseUpdateManyMutationInput, {nullable:false})
    @Type(() => HorseUpdateManyMutationInput)
    data!: HorseUpdateManyMutationInput;

    @Field(() => HorseWhereInput, {nullable:true})
    @Type(() => HorseWhereInput)
    where?: HorseWhereInput;
}
