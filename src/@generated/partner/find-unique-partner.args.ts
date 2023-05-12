import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PartnerWhereUniqueInput } from './partner-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquePartnerArgs {

    @Field(() => PartnerWhereUniqueInput, {nullable:false})
    @Type(() => PartnerWhereUniqueInput)
    where!: PartnerWhereUniqueInput;
}
