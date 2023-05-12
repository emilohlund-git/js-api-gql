import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HorseGenderCreateManyInput } from './horse-gender-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyHorseGenderArgs {

    @Field(() => [HorseGenderCreateManyInput], {nullable:false})
    @Type(() => HorseGenderCreateManyInput)
    data!: Array<HorseGenderCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
