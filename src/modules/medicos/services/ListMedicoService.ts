import { getCustomRepository } from 'typeorm';
import { Medico } from '../typeorm/entities/Medico';
import { MedicoRepository } from '../typeorm/repositories/MedicoRepository';

export default class ListMedicoService {
  public async execute(): Promise<Medico[]> {
    const medicoRepository = getCustomRepository(MedicoRepository);

    const medicos = await medicoRepository.find();

    return medicos;
  }
}