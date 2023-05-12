import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HorseWhereInput } from './horse-where.input';
import { Type } from 'class-transformer';
import { HorseOrderByWithRelationInput } from './horse-order-by-with-relation.input';
import { HorseWhereUniqueInput } from './horse-where-unique.input';
import { Int } from '@nestjs/graphql';
import { HorseCountAggregateInput } from './horse-count-aggregate.input';
import { HorseMinAggregateInput } from './horse-min-aggregate.input';
import { HorseMaxAggregateInput } from './horse-max-aggregate.input';

@ArgsType()
export class HorseAggregateArgs {

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

    @Field(() => HorseCountAggregateInput, {nullable:true})
    _count?: HorseCountAggregateInput;

    @Field(() => HorseMinAggregateInput, {nullable:true})
    _min?: HorseMinAggregateInput;

    @Field(() => HorseMaxAggregateInput, {nullable:true})
    _max?: HorseMaxAggregateInput;
}
