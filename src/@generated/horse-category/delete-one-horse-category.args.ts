import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HorseCategoryWhereUniqueInput } from './horse-category-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneHorseCategoryArgs {

    @Field(() => HorseCategoryWhereUniqueInput, {nullable:false})
    @Type(() => HorseCategoryWhereUniqueInput)
    where!: HorseCategoryWhereUniqueInput;
}
