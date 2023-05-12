import { Test } from '@nestjs/testing';
import { Horse, PrismaClient } from '@prisma/client';
import { randomUUID } from 'crypto';
import { DeepMockProxy, mockDeep } from 'jest-mock-extended';
import { PrismaService } from '../../app/database.config';
import { HorseRepository } from '../../infra/horse/horse.repository';

describe(`HorseRepository`, () => {
  let horseRepository: HorseRepository;
  let prismaService: DeepMockProxy<PrismaClient>;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [HorseRepository, PrismaService],
    })
      .overrideProvider(PrismaService)
      .useValue(mockDeep<PrismaClient>())
      .compile();

    horseRepository = moduleRef.get(HorseRepository);
    prismaService = moduleRef.get(PrismaService);
  });

  describe('create', () => {
    it('Should create a new horse', async () => {
      const mockedHorse: Horse = {
        id: randomUUID(),
        name: 'Emil',
        after: 'Lars',
        birthyear: '1991',
        category: 'Tävlingshäst',
        color: 'Brun',
        createdAt: new Date(),
        gender: 'Sto',
        nickname: 'Emilo',
        owner: 'John',
        updatedAt: new Date()
      };

      prismaService.horse.create.mockResolvedValueOnce(mockedHorse);

      const createHorse = () =>
        horseRepository.create({
          data: mockedHorse
        });

      await expect(createHorse()).resolves.toBe(mockedHorse);
    });
  });
})