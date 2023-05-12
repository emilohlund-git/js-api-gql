import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FacilityWhereInput } from './facility-where.input';

@InputType()
export class FacilityRelationFilter {

    @Field(() => FacilityWhereInput, {nullable:true})
    is?: FacilityWhereInput;

    @Field(() => FacilityWhereInput, {nullable:true})
    isNot?: FacilityWhereInput;
}
