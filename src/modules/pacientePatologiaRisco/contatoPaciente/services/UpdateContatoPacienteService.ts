import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import ContatoPacienteRepository from '../typeorm/repositories/ContatoPacienteRepository';
import ContatoPaciente from '../typeorm/entities/ContatoPaciente';

interface IRequest {
  id: number;
  tipoContato: 'telefone' | 'email' | 'outro';
  valorContato: string;
}

export default class UpdateContatoPacienteService {
  public async execute({
    id,
    tipoContato,
    valorContato,
  }: IRequest): Promise<ContatoPaciente> {
    const contatoPacienteRepository = getCustomRepository(
      ContatoPacienteRepository
    );

    const contatoPaciente = await contatoPacienteRepository.findById(id);

    if (!contatoPaciente) {
      throw new AppError('ContatoPaciente not found.');
    }

    contatoPaciente.tipoContato = tipoContato;
    contatoPaciente.valorContato = valorContato;

    await contatoPacienteRepository.save(contatoPaciente);

    return contatoPaciente;
  }
}
