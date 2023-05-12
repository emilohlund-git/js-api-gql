import { registerEnumType } from '@nestjs/graphql';

export enum HorseColorScalarFieldEnum {
    id = "id",
    color = "color",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(HorseColorScalarFieldEnum, { name: 'HorseColorScalarFieldEnum', description: undefined })
