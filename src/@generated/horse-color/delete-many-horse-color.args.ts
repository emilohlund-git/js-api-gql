import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HorseColorWhereInput } from './horse-color-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyHorseColorArgs {

    @Field(() => HorseColorWhereInput, {nullable:true})
    @Type(() => HorseColorWhereInput)
    where?: HorseColorWhereInput;
}
