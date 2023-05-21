import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import Paciente from '../../../paciente/typeorm/entities/Paciente';

@Entity('ContatoPaciente')
export default class ContatoPaciente {
    @PrimaryGeneratedColumn()
    idContato: number;

    @ManyToOne(() => Paciente, (paciente: Paciente) => paciente.contatos)
    paciente: Paciente;

    @Column({ type: 'enum', enum: ['telefone', 'email', 'outro'] })
    tipoContato: 'telefone' | 'email' | 'outro';

    @Column()
    valorContato: string;
}
