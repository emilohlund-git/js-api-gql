import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FacilityUpdateInput } from './facility-update.input';
import { Type } from 'class-transformer';
import { FacilityWhereUniqueInput } from './facility-where-unique.input';

@ArgsType()
export class UpdateOneFacilityArgs {

    @Field(() => FacilityUpdateInput, {nullable:false})
    @Type(() => FacilityUpdateInput)
    data!: FacilityUpdateInput;

    @Field(() => FacilityWhereUniqueInput, {nullable:false})
    @Type(() => FacilityWhereUniqueInput)
    where!: FacilityWhereUniqueInput;
}
