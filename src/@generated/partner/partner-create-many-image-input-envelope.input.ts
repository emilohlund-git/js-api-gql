import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PartnerCreateManyImageInput } from './partner-create-many-image.input';
import { Type } from 'class-transformer';

@InputType()
export class PartnerCreateManyImageInputEnvelope {

    @Field(() => [PartnerCreateManyImageInput], {nullable:false})
    @Type(() => PartnerCreateManyImageInput)
    data!: Array<PartnerCreateManyImageInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
