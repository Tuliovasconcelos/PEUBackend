import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CreateSolicitacaoTable1631190000002 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'solicitacao',
        columns: [
          {
            name: 'idSolicitacao',
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
            name: 'dataSolicitacao',
            type: 'date',
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
      'solicitacao',
      new TableForeignKey({
        columnNames: ['idPaciente'],
        referencedTableName: 'Paciente',
        referencedColumnNames: ['idPaciente'],
        onDelete: 'CASCADE',
      })
    );

    await queryRunner.createForeignKey(
      'solicitacao',
      new TableForeignKey({
        columnNames: ['idMedico'],
        referencedTableName: 'Medico',
        referencedColumnNames: ['idMedico'],
        onDelete: 'CASCADE',
      })
    );

    await queryRunner.createForeignKey(
      'solicitacao',
      new TableForeignKey({
        columnNames: ['idClinica'],
        referencedTableName: 'Clinica',
        referencedColumnNames: ['idClinica'],
        onDelete: 'CASCADE',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('solicitacao');
  }
}
