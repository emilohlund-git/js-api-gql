import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HorseColorCreateManyInput } from './horse-color-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyHorseColorArgs {

    @Field(() => [HorseColorCreateManyInput], {nullable:false})
    @Type(() => HorseColorCreateManyInput)
    data!: Array<HorseColorCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
