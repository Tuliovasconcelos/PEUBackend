import { getCustomRepository } from 'typeorm';
import Medico from '../typeorm/entities/Medico';
import MedicoRepository from '../typeorm/repositories/MedicoRepository';

interface ShowMedicoDTO {
  idMedico: number;
}

export default class ShowMedicoService {
  public async execute(data: ShowMedicoDTO): Promise<Medico | null | undefined> {
    const medicoRepository = getCustomRepository(MedicoRepository);

    const medico = await medicoRepository.findById(data.idMedico);

    return medico;
  }
}
