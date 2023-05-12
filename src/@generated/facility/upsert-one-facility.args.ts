import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FacilityWhereUniqueInput } from './facility-where-unique.input';
import { Type } from 'class-transformer';
import { FacilityCreateInput } from './facility-create.input';
import { FacilityUpdateInput } from './facility-update.input';

@ArgsType()
export class UpsertOneFacilityArgs {

    @Field(() => FacilityWhereUniqueInput, {nullable:false})
    @Type(() => FacilityWhereUniqueInput)
    where!: FacilityWhereUniqueInput;

    @Field(() => FacilityCreateInput, {nullable:false})
    @Type(() => FacilityCreateInput)
    create!: FacilityCreateInput;

    @Field(() => FacilityUpdateInput, {nullable:false})
    @Type(() => FacilityUpdateInput)
    update!: FacilityUpdateInput;
}
