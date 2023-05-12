import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HorseCategoryCreateInput } from './horse-category-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneHorseCategoryArgs {

    @Field(() => HorseCategoryCreateInput, {nullable:false})
    @Type(() => HorseCategoryCreateInput)
    data!: HorseCategoryCreateInput;
}
