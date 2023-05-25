import { MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey } from 'typeorm';

export class CreateAgendamentosTable1631181200000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'Agendamentos',
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
      }),
      true // Indica que a tabela deve ser criada com a opção "IF NOT EXISTS"
    );

    await queryRunner.addColumn(
      'Agendamentos',
      new TableColumn({
        name: 'idPrograma',
        type: 'int',
        isNullable: true,
      })
    );

    await queryRunner.createForeignKey(
      'Agendamentos',
      new TableForeignKey({
        columnNames: ['idPaciente'],
        referencedTableName: 'Paciente',
        referencedColumnNames: ['idPaciente'],
      })
    );

    await queryRunner.createForeignKey(
      'Agendamentos',
      new TableForeignKey({
        columnNames: ['idMedico'],
        referencedTableName: 'Medico',
        referencedColumnNames: ['idMedico'],
      })
    );

    await queryRunner.createForeignKey(
      'Agendamentos',
      new TableForeignKey({
        columnNames: ['idClinica'],
        referencedTableName: 'Clinicas',
        referencedColumnNames: ['idClinica'],
      })
    );

    await queryRunner.createForeignKey(
      'Agendamentos',
      new TableForeignKey({
        columnNames: ['idAgendamentoTipo'],
        referencedTableName: 'TiposAgendamentos',
        referencedColumnNames: ['idAgendamentoTipo'],
      })
    );

    await queryRunner.createForeignKey(
      'Agendamentos',
      new TableForeignKey({
        columnNames: ['idPrograma'],
        referencedTableName: 'Programas',
        referencedColumnNames: ['idPrograma'],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('Agendamentos');
  }
}
