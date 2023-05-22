import { getCustomRepository } from 'typeorm';
import Medico from '../typeorm/entities/Medico';
import MedicoRepository from '../typeorm/repositories/MedicoRepository';
import EspecialidadeRepository from '@modules/especialidades/typeorm/repositories/EspecialidadeRepository';

interface UpdateMedicoDTO {
  id: number;
  nome?: string;
  crm?: string;
  especialidadeId?: number;
}

export default class UpdateMedicoService {
  public async execute(data: UpdateMedicoDTO): Promise<Medico | undefined> {
    const medicoRepository = getCustomRepository(MedicoRepository);

    const medico = await medicoRepository.findById(data.id);

    if (!medico) {
      return undefined;
    }

    if (data.nome) {
      medico.nome = data.nome;
    }

    if (data.crm) {
      medico.crm = data.crm;
    }

    await medicoRepository.save(medico);

    return medico;
  }
}
