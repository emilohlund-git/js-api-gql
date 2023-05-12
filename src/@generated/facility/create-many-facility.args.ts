import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FacilityCreateManyInput } from './facility-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyFacilityArgs {

    @Field(() => [FacilityCreateManyInput], {nullable:false})
    @Type(() => FacilityCreateManyInput)
    data!: Array<FacilityCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
