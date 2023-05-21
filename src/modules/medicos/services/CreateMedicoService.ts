import { getCustomRepository } from 'typeorm';
import { Medico } from '../typeorm/entities/Medico';
import { MedicoRepository } from '../typeorm/repositories/MedicoRepository';

interface CreateMedicoDTO {
  idUsuario: number;
  nome: string;
  crm: string;
  especialidadeId: number;
}

export default class CreateMedicoService {
  public async execute(data: CreateMedicoDTO): Promise<Medico> {
    const medicoRepository = getCustomRepository(MedicoRepository);

    const medico = medicoRepository.create(data);

    await medicoRepository.save(medico);

    return medico;
  }
}
