import { registerEnumType } from '@nestjs/graphql';

export enum HorseScalarFieldEnum {
    id = "id",
    name = "name",
    nickname = "nickname",
    category = "category",
    owner = "owner",
    after = "after",
    birthyear = "birthyear",
    gender = "gender",
    color = "color",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(HorseScalarFieldEnum, { name: 'HorseScalarFieldEnum', description: undefined })
