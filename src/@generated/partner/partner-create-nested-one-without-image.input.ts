import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PartnerCreateWithoutImageInput } from './partner-create-without-image.input';
import { Type } from 'class-transformer';
import { PartnerCreateOrConnectWithoutImageInput } from './partner-create-or-connect-without-image.input';
import { PartnerWhereUniqueInput } from './partner-where-unique.input';

@InputType()
export class PartnerCreateNestedOneWithoutImageInput {

    @Field(() => PartnerCreateWithoutImageInput, {nullable:true})
    @Type(() => PartnerCreateWithoutImageInput)
    create?: PartnerCreateWithoutImageInput;

    @Field(() => PartnerCreateOrConnectWithoutImageInput, {nullable:true})
    @Type(() => PartnerCreateOrConnectWithoutImageInput)
    connectOrCreate?: PartnerCreateOrConnectWithoutImageInput;

    @Field(() => PartnerWhereUniqueInput, {nullable:true})
    @Type(() => PartnerWhereUniqueInput)
    connect?: PartnerWhereUniqueInput;
}
