import { getCustomRepository } from 'typeorm';
import MedicoEspecialidadeRepository from '../typeorm/repositories/MedicoEspecialidadeRepository';

interface IRequest {
  idMedicoEspecialidade: number;
}

export default class DeleteMedicoEspecialidadeService {
  public async execute({ idMedicoEspecialidade }: IRequest): Promise<void> {
    const medicoEspecialidadeRepository = getCustomRepository(MedicoEspecialidadeRepository);

    await medicoEspecialidadeRepository.delete(idMedicoEspecialidade);
  }
}
