import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CreateProgramaClinicaTable1631190000005 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'programaClinica',
        columns: [
          {
            name: 'idProgramaClinica',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
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
            columnNames: ['idPrograma'],
            referencedTableName: 'programa',
            referencedColumnNames: ['idPrograma'],
            onDelete: 'CASCADE',
          }),
          new TableForeignKey({
            columnNames: ['idClinica'],
            referencedTableName: 'clinica',
            referencedColumnNames: ['idClinica'],
            onDelete: 'CASCADE',
          })
        ]
      })
    );
    await queryRunner.createPrimaryKey('programaClinica', ['idProgramaClinica']);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('programaClinica', 'FK_programaClinica_idPrograma');
    await queryRunner.dropForeignKey('programaClinica', 'FK_programaClinica_idClinica');
    await queryRunner.dropTable('programaClinica');
  }
}
