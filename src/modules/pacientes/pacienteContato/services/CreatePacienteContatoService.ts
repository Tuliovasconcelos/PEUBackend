import { getCustomRepository } from 'typeorm';
import PacienteContato from '../typeorm/entities/PacienteContato';
import PacienteContatoRepository from '../typeorm/repositories/PacienteContatoRepository';
import PacienteRepository from '@modules/pacientes/paciente/typeorm/repositories/PacienteRepository';

interface IRequest {
  idPaciente: number;
  tipoContato: 'telefone' | 'email' | 'outro';
  valorContato: string;
}

export default class CreatePacienteContatoService {
  public async execute({
    idPaciente,
    tipoContato,
    valorContato,
  }: IRequest): Promise<PacienteContato> {
    const pacienteContatoRepository = getCustomRepository(
      PacienteContatoRepository
    );
    const pacienteRepository = getCustomRepository(PacienteRepository);
    const paciente = await pacienteRepository.findById(idPaciente);

    if (!paciente) {
      throw new Error('Paciente não encontrado.');
    }

    const pacienteContato = new PacienteContato();
    pacienteContato.paciente = paciente;
    pacienteContato.tipoContato = tipoContato;
    pacienteContato.valorContato = valorContato;

    await pacienteContatoRepository.save(pacienteContato);

    return pacienteContato;

  }
}
