import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HorseColorWhereInput } from './horse-color-where.input';
import { Type } from 'class-transformer';
import { HorseColorOrderByWithRelationInput } from './horse-color-order-by-with-relation.input';
import { HorseColorWhereUniqueInput } from './horse-color-where-unique.input';
import { Int } from '@nestjs/graphql';
import { HorseColorCountAggregateInput } from './horse-color-count-aggregate.input';
import { HorseColorMinAggregateInput } from './horse-color-min-aggregate.input';
import { HorseColorMaxAggregateInput } from './horse-color-max-aggregate.input';

@ArgsType()
export class HorseColorAggregateArgs {

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

    @Field(() => HorseColorCountAggregateInput, {nullable:true})
    _count?: HorseColorCountAggregateInput;

    @Field(() => HorseColorMinAggregateInput, {nullable:true})
    _min?: HorseColorMinAggregateInput;

    @Field(() => HorseColorMaxAggregateInput, {nullable:true})
    _max?: HorseColorMaxAggregateInput;
}
