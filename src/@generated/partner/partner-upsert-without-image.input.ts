import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PartnerUpdateWithoutImageInput } from './partner-update-without-image.input';
import { Type } from 'class-transformer';
import { PartnerCreateWithoutImageInput } from './partner-create-without-image.input';

@InputType()
export class PartnerUpsertWithoutImageInput {

    @Field(() => PartnerUpdateWithoutImageInput, {nullable:false})
    @Type(() => PartnerUpdateWithoutImageInput)
    update!: PartnerUpdateWithoutImageInput;

    @Field(() => PartnerCreateWithoutImageInput, {nullable:false})
    @Type(() => PartnerCreateWithoutImageInput)
    create!: PartnerCreateWithoutImageInput;
}
