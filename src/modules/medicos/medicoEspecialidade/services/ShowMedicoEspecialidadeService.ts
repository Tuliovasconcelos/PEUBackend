import { getCustomRepository } from 'typeorm';
import MedicoEspecialidadeRepository from '../typeorm/repositories/MedicoEspecialidadeRepository';
import MedicoEspecialidade from '../typeorm/entities/MedicoEspecialidade';

interface IRequest {
  idMedicoEspecialidade: number;
}

export default class ShowMedicoEspecialidadeService {
  public async execute({ idMedicoEspecialidade }: IRequest): Promise<MedicoEspecialidade | null> {
    const medicoEspecialidadeRepository = getCustomRepository(MedicoEspecialidadeRepository);

    const medicoEspecialidade = await medicoEspecialidadeRepository.findByMedicoAndEspecialidade(idMedicoEspecialidade);

    return medicoEspecialidade || null;
  }
}
