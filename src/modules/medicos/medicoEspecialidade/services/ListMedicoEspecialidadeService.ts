import { getCustomRepository } from 'typeorm';
import MedicoEspecialidadeRepository from '../typeorm/repositories/MedicoEspecialidadeRepository';
import MedicoEspecialidade from '../typeorm/entities/MedicoEspecialidade';

export default class ListMedicoEspecialidadeService {
  public async execute(): Promise<MedicoEspecialidade[]> {
    const medicoEspecialidadeRepository = getCustomRepository(MedicoEspecialidadeRepository);

    const medicosEspecialidades = await medicoEspecialidadeRepository.find();

    return medicosEspecialidades;
  }
}

