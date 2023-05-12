import { registerEnumType } from '@nestjs/graphql';

export enum HorseGenderScalarFieldEnum {
    id = "id",
    gender = "gender",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(HorseGenderScalarFieldEnum, { name: 'HorseGenderScalarFieldEnum', description: undefined })
