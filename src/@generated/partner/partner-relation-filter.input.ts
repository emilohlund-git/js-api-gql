import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PartnerWhereInput } from './partner-where.input';

@InputType()
export class PartnerRelationFilter {

    @Field(() => PartnerWhereInput, {nullable:true})
    is?: PartnerWhereInput;

    @Field(() => PartnerWhereInput, {nullable:true})
    isNot?: PartnerWhereInput;
}
