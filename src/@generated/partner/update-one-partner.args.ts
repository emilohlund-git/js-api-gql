import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PartnerUpdateInput } from './partner-update.input';
import { Type } from 'class-transformer';
import { PartnerWhereUniqueInput } from './partner-where-unique.input';

@ArgsType()
export class UpdateOnePartnerArgs {

    @Field(() => PartnerUpdateInput, {nullable:false})
    @Type(() => PartnerUpdateInput)
    data!: PartnerUpdateInput;

    @Field(() => PartnerWhereUniqueInput, {nullable:false})
    @Type(() => PartnerWhereUniqueInput)
    where!: PartnerWhereUniqueInput;
}
