import { registerEnumType } from '@nestjs/graphql';

export enum ImageScalarFieldEnum {
    url = "url",
    id = "id",
    fileId = "fileId",
    horseId = "horseId",
    profile = "profile",
    facilityId = "facilityId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(ImageScalarFieldEnum, { name: 'ImageScalarFieldEnum', description: undefined })
