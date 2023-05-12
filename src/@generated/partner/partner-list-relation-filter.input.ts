import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PartnerWhereInput } from './partner-where.input';

@InputType()
export class PartnerListRelationFilter {

    @Field(() => PartnerWhereInput, {nullable:true})
    every?: PartnerWhereInput;

    @Field(() => PartnerWhereInput, {nullable:true})
    some?: PartnerWhereInput;

    @Field(() => PartnerWhereInput, {nullable:true})
    none?: PartnerWhereInput;
}
