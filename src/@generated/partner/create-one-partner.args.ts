import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PartnerCreateInput } from './partner-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnePartnerArgs {

    @Field(() => PartnerCreateInput, {nullable:false})
    @Type(() => PartnerCreateInput)
    data!: PartnerCreateInput;
}
