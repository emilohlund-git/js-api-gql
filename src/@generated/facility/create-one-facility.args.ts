import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FacilityCreateInput } from './facility-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneFacilityArgs {

    @Field(() => FacilityCreateInput, {nullable:false})
    @Type(() => FacilityCreateInput)
    data!: FacilityCreateInput;
}
