import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FacilityWhereUniqueInput } from './facility-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueFacilityArgs {

    @Field(() => FacilityWhereUniqueInput, {nullable:false})
    @Type(() => FacilityWhereUniqueInput)
    where!: FacilityWhereUniqueInput;
}
