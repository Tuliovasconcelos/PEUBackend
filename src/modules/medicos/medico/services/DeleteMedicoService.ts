import { getCustomRepository } from 'typeorm';
import MedicoRepository from '../typeorm/repositories/MedicoRepository';

interface DeleteMedicoDTO {
  idMedico: number;
}

export default class DeleteMedicoService {
  public async execute(data: DeleteMedicoDTO): Promise<void> {
    const medicoRepository = getCustomRepository(MedicoRepository);

    await medicoRepository.delete(data.idMedico);
  }
}

