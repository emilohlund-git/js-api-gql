import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HorseCategoryWhereUniqueInput } from './horse-category-where-unique.input';
import { Type } from 'class-transformer';
import { HorseCategoryCreateInput } from './horse-category-create.input';
import { HorseCategoryUpdateInput } from './horse-category-update.input';

@ArgsType()
export class UpsertOneHorseCategoryArgs {

    @Field(() => HorseCategoryWhereUniqueInput, {nullable:false})
    @Type(() => HorseCategoryWhereUniqueInput)
    where!: HorseCategoryWhereUniqueInput;

    @Field(() => HorseCategoryCreateInput, {nullable:false})
    @Type(() => HorseCategoryCreateInput)
    create!: HorseCategoryCreateInput;

    @Field(() => HorseCategoryUpdateInput, {nullable:false})
    @Type(() => HorseCategoryUpdateInput)
    update!: HorseCategoryUpdateInput;
}
