import { getCustomRepository } from 'typeorm';
import MedicoEspecialidadeRepository from '../typeorm/repositories/MedicoEspecialidadeRepository';
import MedicoEspecialidade from '../typeorm/entities/MedicoEspecialidade';

interface IRequest {
  idMedico: number;
  idEspecialidade: number;
}

export default class CreateMedicoEspecialidadeService {
  public async execute({ idMedico, idEspecialidade }: IRequest): Promise<MedicoEspecialidade> {
    const medicoEspecialidadeRepository = getCustomRepository(MedicoEspecialidadeRepository);

    const medicoEspecialidade = medicoEspecialidadeRepository.create({
      medico: { idMedico: idMedico },
      especialidade: { idEspecialidade: idEspecialidade },
    });

    await medicoEspecialidadeRepository.save(medicoEspecialidade);

    return medicoEspecialidade;
  }
}
