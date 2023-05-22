import { getCustomRepository } from 'typeorm';
import PacienteConvenio from '../typeorm/entities/PacienteConvenio';
import PacienteConvenioRepository from '../typeorm/repositories/PacienteConvenioRepository';

export default class ListPacienteConvenioService {
  public async execute(): Promise<PacienteConvenio[]> {
    const pacienteConvenioRepository = getCustomRepository(PacienteConvenioRepository);
    const pacientesConvenio = await pacienteConvenioRepository.find();

    return pacientesConvenio;
  }
}
