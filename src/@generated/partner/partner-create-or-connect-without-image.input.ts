import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PartnerWhereUniqueInput } from './partner-where-unique.input';
import { Type } from 'class-transformer';
import { PartnerCreateWithoutImageInput } from './partner-create-without-image.input';

@InputType()
export class PartnerCreateOrConnectWithoutImageInput {

    @Field(() => PartnerWhereUniqueInput, {nullable:false})
    @Type(() => PartnerWhereUniqueInput)
    where!: PartnerWhereUniqueInput;

    @Field(() => PartnerCreateWithoutImageInput, {nullable:false})
    @Type(() => PartnerCreateWithoutImageInput)
    create!: PartnerCreateWithoutImageInput;
}
