import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HorseColorUpdateManyMutationInput } from './horse-color-update-many-mutation.input';
import { Type } from 'class-transformer';
import { HorseColorWhereInput } from './horse-color-where.input';

@ArgsType()
export class UpdateManyHorseColorArgs {

    @Field(() => HorseColorUpdateManyMutationInput, {nullable:false})
    @Type(() => HorseColorUpdateManyMutationInput)
    data!: HorseColorUpdateManyMutationInput;

    @Field(() => HorseColorWhereInput, {nullable:true})
    @Type(() => HorseColorWhereInput)
    where?: HorseColorWhereInput;
}
