import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PartnerUpdateManyMutationInput } from './partner-update-many-mutation.input';
import { Type } from 'class-transformer';
import { PartnerWhereInput } from './partner-where.input';

@ArgsType()
export class UpdateManyPartnerArgs {

    @Field(() => PartnerUpdateManyMutationInput, {nullable:false})
    @Type(() => PartnerUpdateManyMutationInput)
    data!: PartnerUpdateManyMutationInput;

    @Field(() => PartnerWhereInput, {nullable:true})
    @Type(() => PartnerWhereInput)
    where?: PartnerWhereInput;
}
