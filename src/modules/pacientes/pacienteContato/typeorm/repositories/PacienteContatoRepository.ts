import { EntityRepository, Repository } from 'typeorm';
import PacienteContato from '../entities/PacienteContato';

@EntityRepository(PacienteContato)
export default class PacienteContatoRepository extends Repository<PacienteContato> {
  public async findById(idPacienteContato: number): Promise<PacienteContato | null> {
    const PacienteContato = await this.findOne({
      where: { idPacienteContato: idPacienteContato },
    });
    return PacienteContato || null;
  }

  public async findAll(): Promise<PacienteContato[]> {
    const contatosPacientes = await this.find();
    return contatosPacientes;
  }

  // Você pode adicionar mais métodos específicos com base nas necessidades da sua aplicação
}
