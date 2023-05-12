import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FacilityCreateWithoutImagesInput } from './facility-create-without-images.input';
import { Type } from 'class-transformer';
import { FacilityCreateOrConnectWithoutImagesInput } from './facility-create-or-connect-without-images.input';
import { FacilityUpsertWithoutImagesInput } from './facility-upsert-without-images.input';
import { FacilityWhereUniqueInput } from './facility-where-unique.input';
import { FacilityUpdateWithoutImagesInput } from './facility-update-without-images.input';

@InputType()
export class FacilityUpdateOneWithoutImagesNestedInput {

    @Field(() => FacilityCreateWithoutImagesInput, {nullable:true})
    @Type(() => FacilityCreateWithoutImagesInput)
    create?: FacilityCreateWithoutImagesInput;

    @Field(() => FacilityCreateOrConnectWithoutImagesInput, {nullable:true})
    @Type(() => FacilityCreateOrConnectWithoutImagesInput)
    connectOrCreate?: FacilityCreateOrConnectWithoutImagesInput;

    @Field(() => FacilityUpsertWithoutImagesInput, {nullable:true})
    @Type(() => FacilityUpsertWithoutImagesInput)
    upsert?: FacilityUpsertWithoutImagesInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => FacilityWhereUniqueInput, {nullable:true})
    @Type(() => FacilityWhereUniqueInput)
    connect?: FacilityWhereUniqueInput;

    @Field(() => FacilityUpdateWithoutImagesInput, {nullable:true})
    @Type(() => FacilityUpdateWithoutImagesInput)
    update?: FacilityUpdateWithoutImagesInput;
}
