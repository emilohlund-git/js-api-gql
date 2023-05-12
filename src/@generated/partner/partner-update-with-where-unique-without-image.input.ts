import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PartnerWhereUniqueInput } from './partner-where-unique.input';
import { Type } from 'class-transformer';
import { PartnerUpdateWithoutImageInput } from './partner-update-without-image.input';

@InputType()
export class PartnerUpdateWithWhereUniqueWithoutImageInput {

    @Field(() => PartnerWhereUniqueInput, {nullable:false})
    @Type(() => PartnerWhereUniqueInput)
    where!: PartnerWhereUniqueInput;

    @Field(() => PartnerUpdateWithoutImageInput, {nullable:false})
    @Type(() => PartnerUpdateWithoutImageInput)
    data!: PartnerUpdateWithoutImageInput;
}
