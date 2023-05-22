import { getCustomRepository } from 'typeorm';
import MedicoEspecialidadeRepository from '../typeorm/repositories/MedicoEspecialidadeRepository';

interface IRequest {
  medicoEspecialidadeId: number;
}

export default class DeleteMedicoEspecialidadeService {
  public async execute({ medicoEspecialidadeId }: IRequest): Promise<void> {
    const medicoEspecialidadeRepository = getCustomRepository(MedicoEspecialidadeRepository);

    await medicoEspecialidadeRepository.delete(medicoEspecialidadeId);
  }
}
