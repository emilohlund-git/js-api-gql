import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HorseWhereInput } from './horse-where.input';
import { Type } from 'class-transformer';
import { HorseOrderByWithRelationInput } from './horse-order-by-with-relation.input';
import { HorseWhereUniqueInput } from './horse-where-unique.input';
import { Int } from '@nestjs/graphql';
import { HorseScalarFieldEnum } from './horse-scalar-field.enum';

@ArgsType()
export class FindFirstHorseOrThrowArgs {

    @Field(() => HorseWhereInput, {nullable:true})
    @Type(() => HorseWhereInput)
    where?: HorseWhereInput;

    @Field(() => [HorseOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<HorseOrderByWithRelationInput>;

    @Field(() => HorseWhereUniqueInput, {nullable:true})
    cursor?: HorseWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [HorseScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof HorseScalarFieldEnum>;
}
