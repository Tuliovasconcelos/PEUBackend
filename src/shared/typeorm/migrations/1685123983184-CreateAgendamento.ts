import { MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey } from 'typeorm';

export class CreateAgendamento1685123983184 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'agendamento',
        columns: [
          {
            name: 'idAgendamento',
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
            name: 'idPrograma',
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
            name: 'dataAgendamento',
            type: 'date',
            isNullable: false,
          },
          {
            name: 'horaAgendamento',
            type: 'time',
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
            referencedColumnNames: ['idPaciente'],
            referencedTableName: 'paciente',
            onDelete: 'CASCADE',
          }),
          new TableForeignKey({
            columnNames: ['idMedico'],
            referencedColumnNames: ['idMedico'],
            referencedTableName: 'medico',
            onDelete: 'CASCADE',
          }),
          new TableForeignKey({
            columnNames: ['idClinica'],
            referencedColumnNames: ['idClinica'],
            referencedTableName: 'clinica',
            onDelete: 'CASCADE',
          }),
          new TableForeignKey({
            columnNames: ['idAgendamentoTipo'],
            referencedColumnNames: ['idAgendamentoTipo'],
            referencedTableName: 'agendamentoTipo',
            onDelete: 'CASCADE',
          }),
          new TableForeignKey({
            columnNames: ['idPrograma'],
            referencedColumnNames: ['idPrograma'],
            referencedTableName: 'programa',
            onDelete: 'CASCADE',
          })
        ],

      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('agendamento', 'FK_agendamento_idPaciente');
    await queryRunner.dropForeignKey('agendamento', 'FK_agendamento_idMedico');
    await queryRunner.dropForeignKey('agendamento', 'FK_agendamento_idClinica');
    await queryRunner.dropForeignKey('agendamento', 'FK_agendamento_idAgendamentoTipo');
    await queryRunner.dropForeignKey('agendamento', 'FK_agendamento_idPrograma');
    await queryRunner.dropTable('agendamento');
  }
}
