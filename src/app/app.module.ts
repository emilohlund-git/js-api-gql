import { ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { FacilityModule } from '../infra/facility/facility.module';
import { HorseModule } from '../infra/horse/horse.module';
import { ImageModule } from '../infra/image/image.module';
import { PartnerModule } from '../infra/partner/partner.module';
import { SettingsModule } from '../infra/settings/settings.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.development.env', '.env'],
      isGlobal: true
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      playground: true,
      context: ({ req }: { req: any }) => {
        return {
          request: req,
        };
      },
      formatError: (error) => {
        return {
          message: error.message.split("\n")[error.message.split("\n").length - 1]
        }
      }
    }),
    HorseModule, ImageModule, SettingsModule, FacilityModule, PartnerModule
  ],
})
export class AppModule { }
