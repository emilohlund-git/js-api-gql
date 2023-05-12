import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { HorseUpdateOneWithoutImagesNestedInput } from '../horse/horse-update-one-without-images-nested.input';
import { FacilityUpdateOneWithoutImagesNestedInput } from '../facility/facility-update-one-without-images-nested.input';

@InputType()
export class ImageUpdateWithoutPartnerInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    url?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    profile?: BoolFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => HorseUpdateOneWithoutImagesNestedInput, {nullable:true})
    horse?: HorseUpdateOneWithoutImagesNestedInput;

    @Field(() => FacilityUpdateOneWithoutImagesNestedInput, {nullable:true})
    facility?: FacilityUpdateOneWithoutImagesNestedInput;
}
