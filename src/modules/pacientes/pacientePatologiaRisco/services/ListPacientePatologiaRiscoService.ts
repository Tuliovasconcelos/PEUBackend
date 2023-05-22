import { getCustomRepository } from 'typeorm';
import PacientePatologiaRisco from '../typeorm/entities/PacientePatologiaRisco';
import PacientePatologiaRiscoRepository from '../typeorm/repositories/PacientePatologiaRiscoRepository';

export default class ListPacientePatologiaRiscoService {
  public async execute(): Promise<PacientePatologiaRisco[]> {
    const pacientePatologiaRiscoRepository = getCustomRepository(PacientePatologiaRiscoRepository);

    const pacientePatologiaRiscos = await pacientePatologiaRiscoRepository.find();

    return pacientePatologiaRiscos;
  }
}
