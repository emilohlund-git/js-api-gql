import { registerEnumType } from '@nestjs/graphql';

export enum PartnerScalarFieldEnum {
    id = "id",
    name = "name",
    website = "website",
    description = "description",
    imageId = "imageId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(PartnerScalarFieldEnum, { name: 'PartnerScalarFieldEnum', description: undefined })
