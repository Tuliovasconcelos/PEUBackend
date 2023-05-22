import { getCustomRepository } from 'typeorm';
import ContatoPaciente from '../typeorm/entities/ContatoPaciente';
import ContatoPacienteRepository from '../typeorm/repositories/ContatoPacienteRepository';
import PacienteRepository from '@modules/pacientes/paciente/typeorm/repositories/PacienteRepository';

interface IRequest {
  idPaciente: number;
  tipoContato: 'telefone' | 'email' | 'outro';
  valorContato: string;
}

export default class CreateContatoPacienteService {
  public async execute({
    idPaciente,
    tipoContato,
    valorContato,
  }: IRequest): Promise<ContatoPaciente> {
    const contatoPacienteRepository = getCustomRepository(
      ContatoPacienteRepository
    );
    const pacienteRepository = getCustomRepository(PacienteRepository);
    const paciente = await pacienteRepository.findById(idPaciente);

    if (!paciente) {
      throw new Error('Paciente não encontrado.');
    }

    const contatoPaciente = new ContatoPaciente();
    contatoPaciente.paciente = paciente;
    contatoPaciente.tipoContato = tipoContato;
    contatoPaciente.valorContato = valorContato;

    await contatoPacienteRepository.save(contatoPaciente);

    return contatoPaciente;

  }
}
