import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HorseWhereInput } from './horse-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyHorseArgs {

    @Field(() => HorseWhereInput, {nullable:true})
    @Type(() => HorseWhereInput)
    where?: HorseWhereInput;
}
