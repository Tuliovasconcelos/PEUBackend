import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CreateSolicitacao1685123987644 implements MigrationInterface {
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
            enum: ['A', 'I'],
            default: "'A'",
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
            columnNames: ['idClinica'],
            referencedTableName: 'clinica',
            referencedColumnNames: ['idClinica'],
            onDelete: 'CASCADE',
          })
        ]
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('solicitacao', 'FK_solicitacao_idPaciente');
    await queryRunner.dropForeignKey('solicitacao', 'FK_solicitacao_idMedico');
    await queryRunner.dropForeignKey('solicitacao', 'FK_solicitacao_idClinica');
    await queryRunner.dropTable('solicitacao');
  }
}
