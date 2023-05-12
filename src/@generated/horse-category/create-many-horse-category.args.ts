import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HorseCategoryCreateManyInput } from './horse-category-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyHorseCategoryArgs {

    @Field(() => [HorseCategoryCreateManyInput], {nullable:false})
    @Type(() => HorseCategoryCreateManyInput)
    data!: Array<HorseCategoryCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
