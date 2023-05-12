import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PartnerWhereInput } from './partner-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyPartnerArgs {

    @Field(() => PartnerWhereInput, {nullable:true})
    @Type(() => PartnerWhereInput)
    where?: PartnerWhereInput;
}
