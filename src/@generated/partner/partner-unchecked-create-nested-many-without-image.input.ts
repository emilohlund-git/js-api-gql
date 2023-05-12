import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PartnerCreateWithoutImageInput } from './partner-create-without-image.input';
import { Type } from 'class-transformer';
import { PartnerCreateOrConnectWithoutImageInput } from './partner-create-or-connect-without-image.input';
import { PartnerCreateManyImageInputEnvelope } from './partner-create-many-image-input-envelope.input';
import { PartnerWhereUniqueInput } from './partner-where-unique.input';

@InputType()
export class PartnerUncheckedCreateNestedManyWithoutImageInput {

    @Field(() => [PartnerCreateWithoutImageInput], {nullable:true})
    @Type(() => PartnerCreateWithoutImageInput)
    create?: Array<PartnerCreateWithoutImageInput>;

    @Field(() => [PartnerCreateOrConnectWithoutImageInput], {nullable:true})
    @Type(() => PartnerCreateOrConnectWithoutImageInput)
    connectOrCreate?: Array<PartnerCreateOrConnectWithoutImageInput>;

    @Field(() => PartnerCreateManyImageInputEnvelope, {nullable:true})
    @Type(() => PartnerCreateManyImageInputEnvelope)
    createMany?: PartnerCreateManyImageInputEnvelope;

    @Field(() => [PartnerWhereUniqueInput], {nullable:true})
    @Type(() => PartnerWhereUniqueInput)
    connect?: Array<PartnerWhereUniqueInput>;
}
