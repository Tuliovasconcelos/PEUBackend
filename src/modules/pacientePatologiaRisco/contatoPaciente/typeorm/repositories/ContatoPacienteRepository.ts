import { EntityRepository, Repository } from 'typeorm';
import ContatoPaciente from '../entities/ContatoPaciente';

@EntityRepository(ContatoPaciente)
export default class ContatoPacienteRepository extends Repository<ContatoPaciente> {
  public async findById(id: number): Promise<ContatoPaciente | null> {
    const contatoPaciente = await this.findOne({
      where: { idContato: id },
    });
    return contatoPaciente || null;
  }

  public async findAll(): Promise<ContatoPaciente[]> {
    const contatosPacientes = await this.find();
    return contatosPacientes;
  }

  // Você pode adicionar mais métodos específicos com base nas necessidades da sua aplicação
}
