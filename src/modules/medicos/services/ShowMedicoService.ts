import { getCustomRepository } from 'typeorm';
import { Medico } from '../typeorm/entities/Medico';
import { MedicoRepository } from '../typeorm/repositories/MedicoRepository';

interface ShowMedicoDTO {
  id: number;
}
export default class ShowMedicoService {
  public async execute(data: ShowMedicoDTO): Promise<Medico | undefined> {
    const medicoRepository = getCustomRepository(MedicoRepository);

    const medico = await medicoRepository.findById(data.id);

    return medico;
  }
}
