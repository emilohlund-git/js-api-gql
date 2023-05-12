import { registerEnumType } from '@nestjs/graphql';

export enum Role {
    Admin = "Admin",
    User = "User"
}


registerEnumType(Role, { name: 'Role', description: undefined })
