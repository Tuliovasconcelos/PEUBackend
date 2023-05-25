import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CreateAtendimentoTable1631183000000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'Atendimento',
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
      }),
      true // Indica que a tabela deve ser criada com a opção "IF NOT EXISTS"
    );

    await queryRunner.createForeignKey(
      'Atendimento',
      new TableForeignKey({
        columnNames: ['idPaciente'],
        referencedColumnNames: ['idPaciente'],
        referencedTableName: 'Paciente',
        onDelete: 'CASCADE',
      })
    );

    await queryRunner.createForeignKey(
      'Atendimento',
      new TableForeignKey({
        columnNames: ['idMedico'],
        referencedColumnNames: ['idMedico'],
        referencedTableName: 'Medico',
        onDelete: 'CASCADE',
      })
    );

    await queryRunner.createForeignKey(
      'Atendimento',
      new TableForeignKey({
        columnNames: ['idProntuario'],
        referencedColumnNames: ['idProntuario'],
        referencedTableName: 'Prontuario',
        onDelete: 'CASCADE',
      })
    );

    await queryRunner.createForeignKey(
      'Atendimento',
      new TableForeignKey({
        columnNames: ['idClinica'],
        referencedColumnNames: ['idClinica'],
        referencedTableName: 'Clinicas',
        onDelete: 'CASCADE',
      })
    );

    await queryRunner.createForeignKey(
      'Atendimento',
      new TableForeignKey({
        columnNames: ['idAgendamentoTipo'],
        referencedColumnNames: ['idAgendamentoTipo'],
        referencedTableName: 'TiposAgendamentos',
        onDelete: 'CASCADE',
      })
    );

    await queryRunner.createForeignKey(
      'Atendimento',
      new TableForeignKey({
        columnNames: ['idPrograma'],
        referencedColumnNames: ['idPrograma'],
        referencedTableName: 'Programas',
        onDelete: 'CASCADE',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('Atendimento');
  }
}
