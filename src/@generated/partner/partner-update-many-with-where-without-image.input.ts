import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PartnerScalarWhereInput } from './partner-scalar-where.input';
import { Type } from 'class-transformer';
import { PartnerUpdateManyMutationInput } from './partner-update-many-mutation.input';

@InputType()
export class PartnerUpdateManyWithWhereWithoutImageInput {

    @Field(() => PartnerScalarWhereInput, {nullable:false})
    @Type(() => PartnerScalarWhereInput)
    where!: PartnerScalarWhereInput;

    @Field(() => PartnerUpdateManyMutationInput, {nullable:false})
    @Type(() => PartnerUpdateManyMutationInput)
    data!: PartnerUpdateManyMutationInput;
}
