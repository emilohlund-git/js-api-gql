import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PartnerWhereUniqueInput } from './partner-where-unique.input';
import { Type } from 'class-transformer';
import { PartnerCreateInput } from './partner-create.input';
import { PartnerUpdateInput } from './partner-update.input';

@ArgsType()
export class UpsertOnePartnerArgs {

    @Field(() => PartnerWhereUniqueInput, {nullable:false})
    @Type(() => PartnerWhereUniqueInput)
    where!: PartnerWhereUniqueInput;

    @Field(() => PartnerCreateInput, {nullable:false})
    @Type(() => PartnerCreateInput)
    create!: PartnerCreateInput;

    @Field(() => PartnerUpdateInput, {nullable:false})
    @Type(() => PartnerUpdateInput)
    update!: PartnerUpdateInput;
}
