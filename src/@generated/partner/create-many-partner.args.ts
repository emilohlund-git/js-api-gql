import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PartnerCreateManyInput } from './partner-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyPartnerArgs {

    @Field(() => [PartnerCreateManyInput], {nullable:false})
    @Type(() => PartnerCreateManyInput)
    data!: Array<PartnerCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
