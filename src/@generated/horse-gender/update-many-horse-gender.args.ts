import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HorseGenderUpdateManyMutationInput } from './horse-gender-update-many-mutation.input';
import { Type } from 'class-transformer';
import { HorseGenderWhereInput } from './horse-gender-where.input';

@ArgsType()
export class UpdateManyHorseGenderArgs {

    @Field(() => HorseGenderUpdateManyMutationInput, {nullable:false})
    @Type(() => HorseGenderUpdateManyMutationInput)
    data!: HorseGenderUpdateManyMutationInput;

    @Field(() => HorseGenderWhereInput, {nullable:true})
    @Type(() => HorseGenderWhereInput)
    where?: HorseGenderWhereInput;
}
