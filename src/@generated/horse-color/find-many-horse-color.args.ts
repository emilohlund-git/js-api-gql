import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HorseColorWhereInput } from './horse-color-where.input';
import { Type } from 'class-transformer';
import { HorseColorOrderByWithRelationInput } from './horse-color-order-by-with-relation.input';
import { HorseColorWhereUniqueInput } from './horse-color-where-unique.input';
import { Int } from '@nestjs/graphql';
import { HorseColorScalarFieldEnum } from './horse-color-scalar-field.enum';

@ArgsType()
export class FindManyHorseColorArgs {

    @Field(() => HorseColorWhereInput, {nullable:true})
    @Type(() => HorseColorWhereInput)
    where?: HorseColorWhereInput;

    @Field(() => [HorseColorOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<HorseColorOrderByWithRelationInput>;

    @Field(() => HorseColorWhereUniqueInput, {nullable:true})
    cursor?: HorseColorWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [HorseColorScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof HorseColorScalarFieldEnum>;
}
