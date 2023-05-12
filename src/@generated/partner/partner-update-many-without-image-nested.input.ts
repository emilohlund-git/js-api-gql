import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PartnerCreateWithoutImageInput } from './partner-create-without-image.input';
import { Type } from 'class-transformer';
import { PartnerCreateOrConnectWithoutImageInput } from './partner-create-or-connect-without-image.input';
import { PartnerUpsertWithWhereUniqueWithoutImageInput } from './partner-upsert-with-where-unique-without-image.input';
import { PartnerCreateManyImageInputEnvelope } from './partner-create-many-image-input-envelope.input';
import { PartnerWhereUniqueInput } from './partner-where-unique.input';
import { PartnerUpdateWithWhereUniqueWithoutImageInput } from './partner-update-with-where-unique-without-image.input';
import { PartnerUpdateManyWithWhereWithoutImageInput } from './partner-update-many-with-where-without-image.input';
import { PartnerScalarWhereInput } from './partner-scalar-where.input';

@InputType()
export class PartnerUpdateManyWithoutImageNestedInput {

    @Field(() => [PartnerCreateWithoutImageInput], {nullable:true})
    @Type(() => PartnerCreateWithoutImageInput)
    create?: Array<PartnerCreateWithoutImageInput>;

    @Field(() => [PartnerCreateOrConnectWithoutImageInput], {nullable:true})
    @Type(() => PartnerCreateOrConnectWithoutImageInput)
    connectOrCreate?: Array<PartnerCreateOrConnectWithoutImageInput>;

    @Field(() => [PartnerUpsertWithWhereUniqueWithoutImageInput], {nullable:true})
    @Type(() => PartnerUpsertWithWhereUniqueWithoutImageInput)
    upsert?: Array<PartnerUpsertWithWhereUniqueWithoutImageInput>;

    @Field(() => PartnerCreateManyImageInputEnvelope, {nullable:true})
    @Type(() => PartnerCreateManyImageInputEnvelope)
    createMany?: PartnerCreateManyImageInputEnvelope;

    @Field(() => [PartnerWhereUniqueInput], {nullable:true})
    @Type(() => PartnerWhereUniqueInput)
    set?: Array<PartnerWhereUniqueInput>;

    @Field(() => [PartnerWhereUniqueInput], {nullable:true})
    @Type(() => PartnerWhereUniqueInput)
    disconnect?: Array<PartnerWhereUniqueInput>;

    @Field(() => [PartnerWhereUniqueInput], {nullable:true})
    @Type(() => PartnerWhereUniqueInput)
    delete?: Array<PartnerWhereUniqueInput>;

    @Field(() => [PartnerWhereUniqueInput], {nullable:true})
    @Type(() => PartnerWhereUniqueInput)
    connect?: Array<PartnerWhereUniqueInput>;

    @Field(() => [PartnerUpdateWithWhereUniqueWithoutImageInput], {nullable:true})
    @Type(() => PartnerUpdateWithWhereUniqueWithoutImageInput)
    update?: Array<PartnerUpdateWithWhereUniqueWithoutImageInput>;

    @Field(() => [PartnerUpdateManyWithWhereWithoutImageInput], {nullable:true})
    @Type(() => PartnerUpdateManyWithWhereWithoutImageInput)
    updateMany?: Array<PartnerUpdateManyWithWhereWithoutImageInput>;

    @Field(() => [PartnerScalarWhereInput], {nullable:true})
    @Type(() => PartnerScalarWhereInput)
    deleteMany?: Array<PartnerScalarWhereInput>;
}
