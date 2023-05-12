import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HorseCategoryUpdateManyMutationInput } from './horse-category-update-many-mutation.input';
import { Type } from 'class-transformer';
import { HorseCategoryWhereInput } from './horse-category-where.input';

@ArgsType()
export class UpdateManyHorseCategoryArgs {

    @Field(() => HorseCategoryUpdateManyMutationInput, {nullable:false})
    @Type(() => HorseCategoryUpdateManyMutationInput)
    data!: HorseCategoryUpdateManyMutationInput;

    @Field(() => HorseCategoryWhereInput, {nullable:true})
    @Type(() => HorseCategoryWhereInput)
    where?: HorseCategoryWhereInput;
}
