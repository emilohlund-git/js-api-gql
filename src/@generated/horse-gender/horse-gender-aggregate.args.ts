import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HorseGenderWhereInput } from './horse-gender-where.input';
import { Type } from 'class-transformer';
import { HorseGenderOrderByWithRelationInput } from './horse-gender-order-by-with-relation.input';
import { HorseGenderWhereUniqueInput } from './horse-gender-where-unique.input';
import { Int } from '@nestjs/graphql';
import { HorseGenderCountAggregateInput } from './horse-gender-count-aggregate.input';
import { HorseGenderMinAggregateInput } from './horse-gender-min-aggregate.input';
import { HorseGenderMaxAggregateInput } from './horse-gender-max-aggregate.input';

@ArgsType()
export class HorseGenderAggregateArgs {

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

    @Field(() => HorseGenderCountAggregateInput, {nullable:true})
    _count?: HorseGenderCountAggregateInput;

    @Field(() => HorseGenderMinAggregateInput, {nullable:true})
    _min?: HorseGenderMinAggregateInput;

    @Field(() => HorseGenderMaxAggregateInput, {nullable:true})
    _max?: HorseGenderMaxAggregateInput;
}
