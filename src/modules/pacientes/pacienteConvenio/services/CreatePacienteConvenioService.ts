import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import PacienteConvenio from '../typeorm/entities/PacienteConvenio';
import PacienteConvenioRepository from '../typeorm/repositories/PacienteConvenioRepository';

interface IRequest {
  idPaciente: number;
  idConvenio: number;
  numeroCarteira: string;
}

export default class CreatePacienteConvenioService {
  public async execute({ idPaciente, idConvenio, numeroCarteira }: IRequest): Promise<PacienteConvenio> {
    const pacienteConvenioRepository = getCustomRepository(PacienteConvenioRepository);

    const pacienteConvenioExists = await pacienteConvenioRepository.findByNumeroCarteira(numeroCarteira);
    if (pacienteConvenioExists) {
      throw new AppError('There is already a paciente convenio with this number of carteira');
    }

    const pacienteConvenio = pacienteConvenioRepository.create({
      idPaciente,
      idConvenio,
      numeroCarteira,
      status: 'ativo', // Defina o status inicial aqui
      dataAlteracao: new Date(), // Defina a data de alteração inicial aqui
    });

    await pacienteConvenioRepository.save(pacienteConvenio);

    return pacienteConvenio;
  }
}
