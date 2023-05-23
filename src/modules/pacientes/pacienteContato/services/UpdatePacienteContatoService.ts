import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import PacienteContatoRepository from '../typeorm/repositories/PacienteContatoRepository';
import PacienteContato from '../typeorm/entities/PacienteContato';

interface IRequest {
  idPacienteContato: number;
  tipoContato: 'telefone' | 'email' | 'outro';
  valorContato: string;
}

export default class UpdatePacienteContatoService {
  public async execute({
    idPacienteContato,
    tipoContato,
    valorContato,
  }: IRequest): Promise<PacienteContato> {
    const pacienteContatoRepository = getCustomRepository(
      PacienteContatoRepository
    );

    const PacienteContato = await pacienteContatoRepository.findById(idPacienteContato);

    if (!PacienteContato) {
      throw new AppError('PacienteContato not found.');
    }

    PacienteContato.tipoContato = tipoContato;
    PacienteContato.valorContato = valorContato;

    await pacienteContatoRepository.save(PacienteContato);

    return PacienteContato;
  }
}
