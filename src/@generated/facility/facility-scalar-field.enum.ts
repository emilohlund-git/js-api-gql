import { registerEnumType } from '@nestjs/graphql';

export enum FacilityScalarFieldEnum {
    id = "id",
    name = "name",
    description = "description",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(FacilityScalarFieldEnum, { name: 'FacilityScalarFieldEnum', description: undefined })
