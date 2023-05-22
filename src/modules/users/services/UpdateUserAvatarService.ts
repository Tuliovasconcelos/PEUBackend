import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import User from '../typeorm/entities/Usuario';
import UsersRepository from '../typeorm/repositories/UsersRepository';
import uploadConfig from '@config/upload';
import DiskStorageProvider from '@shared/providers/StorageProvider/DiskStorageProvider';
import S3StorageProvider from '@shared/providers/StorageProvider/S3StorageProvider';

interface IRequest {
  idUsuario: number;
  avatarFilename: string;
}

export default class UpdateUserAvatarService {
  public async execute({ idUsuario, avatarFilename }: IRequest): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository, "mysql");

    const user = await usersRepository.findById(idUsuario);

    if (!user) {
      throw new AppError('User not found.');
    }

    if (uploadConfig.driver === 's3') {
      const s3Provider = new S3StorageProvider();
      if (user.foto) {
        await s3Provider.deleteFile(user.foto);
      }
      const filename = await s3Provider.saveFile(avatarFilename);
      user.foto = filename;
    } else {
      const diskProvider = new DiskStorageProvider();
      if (user.foto) {
        await diskProvider.deleteFile(user.foto);
      }
      const filename = await diskProvider.saveFile(avatarFilename);
      user.foto = filename;
    }

    await usersRepository.save(user);

    return user;
  }
}
