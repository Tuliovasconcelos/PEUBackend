import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CreateAtendimentoTable1631183000000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'atendimento',
        columns: [
          {
            name: 'idAtendimento',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'idPaciente',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'idMedico',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'idProntuario',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'idClinica',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'idAgendamentoTipo',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'idPrograma',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'dataAtendimento',
            type: 'date',
            isNullable: false,
          },
          {
            name: 'horaAtendimento',
            type: 'time',
            isNullable: false,
          },
          {
            name: 'conclusao',
            type: 'text',
            isNullable: false,
          },
          {
            name: 'status',
            type: 'enum',
            enum: ['ativo', 'inativo'],
            default: "'ativo'",
            isNullable: false,
          },
          {
            name: 'dataAlteracao',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
            onUpdate: 'CURRENT_TIMESTAMP',
          },
        ],
        foreignKeys: [
          new TableForeignKey({
            columnNames: ['idPaciente'],
            referencedTableName: 'paciente',
            referencedColumnNames: ['idPaciente'],
            onDelete: 'CASCADE',
          }),
          new TableForeignKey({
            columnNames: ['idMedico'],
            referencedTableName: 'medico',
            referencedColumnNames: ['idMedico'],
            onDelete: 'CASCADE',
          }),
          new TableForeignKey({
            columnNames: ['idProntuario'],
            referencedTableName: 'prontuario',
            referencedColumnNames: ['idProntuario'],
            onDelete: 'CASCADE',
          }),
          new TableForeignKey({
            columnNames: ['idClinica'],
            referencedTableName: 'clinica',
            referencedColumnNames: ['idClinica'],
            onDelete: 'CASCADE',
          }),
          new TableForeignKey({
            columnNames: ['idAgendamentoTipo'],
            referencedTableName: 'tipoAgendamento',
            referencedColumnNames: ['idAgendamentoTipo'],
            onDelete: 'CASCADE',
          }),
          new TableForeignKey({
            columnNames: ['idPrograma'],
            referencedTableName: 'programa',
            referencedColumnNames: ['idPrograma'],
            onDelete: 'CASCADE',
          }),
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('atendimento', 'FK_atendimento_idPaciente');
    await queryRunner.dropForeignKey('atendimento', 'FK_atendimento_idMedico');
    await queryRunner.dropForeignKey('atendimento', 'FK_atendimento_idProntuario');
    await queryRunner.dropForeignKey('atendimento', 'FK_atendimento_idClinica');
    await queryRunner.dropForeignKey('atendimento', 'FK_atendimento_idAgendamentoTipo');
    await queryRunner.dropForeignKey('atendimento', 'FK_atendimento_idPrograma');
    await queryRunner.dropTable('atendimento');
  }
}
