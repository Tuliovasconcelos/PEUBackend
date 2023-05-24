import { EntityRepository, Repository } from 'typeorm';
import PacienteConvenio from '../entities/PacienteConvenio';

@EntityRepository(PacienteConvenio)
export default class PacienteConvenioRepository extends Repository<PacienteConvenio> {

  public async findById(idPacienteConvenio: number): Promise<PacienteConvenio | null> {
    const pacienteConvenio = await this.findOne({
      where: {
        idPacienteConvenio: idPacienteConvenio,
      },
    });

    return pacienteConvenio || null;
  }

  public async findByNumeroCarteira(numeroCarteira: string): Promise<PacienteConvenio | null> {
    const pacienteConvenio = await this.findOne({
      where: {
        numeroCarteira,
      },
    });

    return pacienteConvenio || null;
  }

  public async findAllByPacienteId(pacienteId: number): Promise<PacienteConvenio[]> {
    const pacienteConvenios = await this.find({
      where: {
        idPaciente: pacienteId,
      },
    });

    return pacienteConvenios;
  }

  public async findAllByConvenioId(convenioId: number): Promise<PacienteConvenio[]> {
    const pacienteConvenios = await this.find({
      where: {
        idConvenio: convenioId,
      },
    });

    return pacienteConvenios;
  }

  public async findAllByPacienteAndConvenio(pacienteId: number, convenioId: number): Promise<PacienteConvenio[]> {
    const pacienteConvenios = await this.find({
      where: {
        idPaciente: pacienteId,
        idConvenio: convenioId,
      },
    });

    return pacienteConvenios;
  }
  public async findByNumeroCarteiraExcludingId(numeroCarteira: string, idPacienteConvenio: number): Promise<PacienteConvenio[]> {
    const pacienteConvenios = await this.find({
      where: {
        numeroCarteira: numeroCarteira,
        idPacienteConvenio: idPacienteConvenio,
      },
    });

    return pacienteConvenios;
  }
}
