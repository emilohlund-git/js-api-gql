import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HorseCategoryWhereInput } from './horse-category-where.input';
import { Type } from 'class-transformer';
import { HorseCategoryOrderByWithRelationInput } from './horse-category-order-by-with-relation.input';
import { HorseCategoryWhereUniqueInput } from './horse-category-where-unique.input';
import { Int } from '@nestjs/graphql';
import { HorseCategoryScalarFieldEnum } from './horse-category-scalar-field.enum';

@ArgsType()
export class FindFirstHorseCategoryOrThrowArgs {

    @Field(() => HorseCategoryWhereInput, {nullable:true})
    @Type(() => HorseCategoryWhereInput)
    where?: HorseCategoryWhereInput;

    @Field(() => [HorseCategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<HorseCategoryOrderByWithRelationInput>;

    @Field(() => HorseCategoryWhereUniqueInput, {nullable:true})
    cursor?: HorseCategoryWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [HorseCategoryScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof HorseCategoryScalarFieldEnum>;
}
