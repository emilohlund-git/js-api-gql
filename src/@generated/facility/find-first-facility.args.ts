import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FacilityWhereInput } from './facility-where.input';
import { Type } from 'class-transformer';
import { FacilityOrderByWithRelationInput } from './facility-order-by-with-relation.input';
import { FacilityWhereUniqueInput } from './facility-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FacilityScalarFieldEnum } from './facility-scalar-field.enum';

@ArgsType()
export class FindFirstFacilityArgs {

    @Field(() => FacilityWhereInput, {nullable:true})
    @Type(() => FacilityWhereInput)
    where?: FacilityWhereInput;

    @Field(() => [FacilityOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<FacilityOrderByWithRelationInput>;

    @Field(() => FacilityWhereUniqueInput, {nullable:true})
    cursor?: FacilityWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [FacilityScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof FacilityScalarFieldEnum>;
}
