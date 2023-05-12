import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HorseCreateManyInput } from './horse-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyHorseArgs {

    @Field(() => [HorseCreateManyInput], {nullable:false})
    @Type(() => HorseCreateManyInput)
    data!: Array<HorseCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
