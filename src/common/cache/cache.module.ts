import { CacheModule as NestCacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { redisStore } from 'cache-manager-redis-store';

/**
 * CacheModule от Nest не умеет глобально регистрироваться,
 * поэтому регистрируем его тут со всеми настройками и экспортируем
 */
@Module({
  imports: [
    NestCacheModule.registerAsync<any>({
      isGlobal: true,
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        const store = await redisStore({
          url: configService.get('REDIS_URL'),
          ttl: 60 * 1000 * 10,
        });
        return {
          store: () => store,
        };
      },
      inject: [ConfigService],
    }),
  ],
  exports: [NestCacheModule],
})
export class CacheModule {}
