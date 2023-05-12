import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FacilityUpdateManyMutationInput } from './facility-update-many-mutation.input';
import { Type } from 'class-transformer';
import { FacilityWhereInput } from './facility-where.input';

@ArgsType()
export class UpdateManyFacilityArgs {

    @Field(() => FacilityUpdateManyMutationInput, {nullable:false})
    @Type(() => FacilityUpdateManyMutationInput)
    data!: FacilityUpdateManyMutationInput;

    @Field(() => FacilityWhereInput, {nullable:true})
    @Type(() => FacilityWhereInput)
    where?: FacilityWhereInput;
}
