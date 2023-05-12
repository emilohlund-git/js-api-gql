import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HorseCategoryWhereInput } from './horse-category-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyHorseCategoryArgs {

    @Field(() => HorseCategoryWhereInput, {nullable:true})
    @Type(() => HorseCategoryWhereInput)
    where?: HorseCategoryWhereInput;
}
