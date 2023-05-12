import { registerEnumType } from '@nestjs/graphql';

export enum HorseCategoryScalarFieldEnum {
    id = "id",
    category = "category",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(HorseCategoryScalarFieldEnum, { name: 'HorseCategoryScalarFieldEnum', description: undefined })
