import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HorseGenderWhereInput } from './horse-gender-where.input';
import { Type } from 'class-transformer';
import { HorseGenderOrderByWithRelationInput } from './horse-gender-order-by-with-relation.input';
import { HorseGenderWhereUniqueInput } from './horse-gender-where-unique.input';
import { Int } from '@nestjs/graphql';
import { HorseGenderScalarFieldEnum } from './horse-gender-scalar-field.enum';

@ArgsType()
export class FindManyHorseGenderArgs {

    @Field(() => HorseGenderWhereInput, {nullable:true})
    @Type(() => HorseGenderWhereInput)
    where?: HorseGenderWhereInput;

    @Field(() => [HorseGenderOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<HorseGenderOrderByWithRelationInput>;

    @Field(() => HorseGenderWhereUniqueInput, {nullable:true})
    cursor?: HorseGenderWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [HorseGenderScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof HorseGenderScalarFieldEnum>;
}
