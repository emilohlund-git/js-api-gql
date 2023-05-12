import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { FacilityModule } from 'src/infra/facility/facility.module';
import { HorseModule } from 'src/infra/horse/horse.module';
import { ImageModule } from 'src/infra/image/image.module';
import { PartnerModule } from 'src/infra/partner/partner.module';
import { SettingsModule } from 'src/infra/settings/settings.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.development.env', '.env'],
      isGlobal: true
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      autoSchemaFile: true,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
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
