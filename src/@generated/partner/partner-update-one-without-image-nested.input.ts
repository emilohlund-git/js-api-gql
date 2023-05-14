import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PartnerCreateWithoutImageInput } from './partner-create-without-image.input';
import { Type } from 'class-transformer';
import { PartnerCreateOrConnectWithoutImageInput } from './partner-create-or-connect-without-image.input';
import { PartnerUpsertWithoutImageInput } from './partner-upsert-without-image.input';
import { PartnerWhereUniqueInput } from './partner-where-unique.input';
import { PartnerUpdateWithoutImageInput } from './partner-update-without-image.input';

@InputType()
export class PartnerUpdateOneWithoutImageNestedInput {

    @Field(() => PartnerCreateWithoutImageInput, {nullable:true})
    @Type(() => PartnerCreateWithoutImageInput)
    create?: PartnerCreateWithoutImageInput;

    @Field(() => PartnerCreateOrConnectWithoutImageInput, {nullable:true})
    @Type(() => PartnerCreateOrConnectWithoutImageInput)
    connectOrCreate?: PartnerCreateOrConnectWithoutImageInput;

    @Field(() => PartnerUpsertWithoutImageInput, {nullable:true})
    @Type(() => PartnerUpsertWithoutImageInput)
    upsert?: PartnerUpsertWithoutImageInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => PartnerWhereUniqueInput, {nullable:true})
    @Type(() => PartnerWhereUniqueInput)
    connect?: PartnerWhereUniqueInput;

    @Field(() => PartnerUpdateWithoutImageInput, {nullable:true})
    @Type(() => PartnerUpdateWithoutImageInput)
    update?: PartnerUpdateWithoutImageInput;
}
