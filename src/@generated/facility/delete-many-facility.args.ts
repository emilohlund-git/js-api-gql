import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FacilityWhereInput } from './facility-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyFacilityArgs {

    @Field(() => FacilityWhereInput, {nullable:true})
    @Type(() => FacilityWhereInput)
    where?: FacilityWhereInput;
}
