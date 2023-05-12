import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HorseCategoryUpdateInput } from './horse-category-update.input';
import { Type } from 'class-transformer';
import { HorseCategoryWhereUniqueInput } from './horse-category-where-unique.input';

@ArgsType()
export class UpdateOneHorseCategoryArgs {

    @Field(() => HorseCategoryUpdateInput, {nullable:false})
    @Type(() => HorseCategoryUpdateInput)
    data!: HorseCategoryUpdateInput;

    @Field(() => HorseCategoryWhereUniqueInput, {nullable:false})
    @Type(() => HorseCategoryWhereUniqueInput)
    where!: HorseCategoryWhereUniqueInput;
}
