import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageUncheckedCreateNestedManyWithoutFacilityInput } from '../image/image-unchecked-create-nested-many-without-facility.input';

@InputType()
export class FacilityUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ImageUncheckedCreateNestedManyWithoutFacilityInput, {nullable:true})
    images?: ImageUncheckedCreateNestedManyWithoutFacilityInput;
}
