
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('TipoUsuario')
export default class TipoUsuario {
    @PrimaryGeneratedColumn('increment')
    idTipoUsuario: number;

    @Column()
    descricao: string;
}
