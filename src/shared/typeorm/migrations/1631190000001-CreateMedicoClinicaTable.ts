import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CreateMedicoClinicaTable1631190000001 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'medicoClinica',
        columns: [
          {
            name: 'idMedicoClinica',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
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
      'medicoClinica',
      new TableForeignKey({
        columnNames: ['idMedico'],
        referencedTableName: 'm edico',
        referencedColumnNames: ['idMedico'],
        onDelete: 'CASCADE',
      })
    );

    await queryRunner.createForeignKey(
      'medicoClinica',
      new TableForeignKey({
        columnNames: ['idClinica'],
        referencedTableName: 'clinica',
        referencedColumnNames: ['idClinica'],
        onDelete: 'CASCADE',
      })
    );

    await queryRunner.createPrimaryKey('medicoClinica', ['idMedicoClinica']);

  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('medicoClinica', 'FK_medicoClinica_idMedico');
    await queryRunner.dropForeignKey('medicoClinica', 'FK_medicoClinica_idMedico');
    await queryRunner.dropForeignKey('medicoClinica', 'FK_medicoClinica_idMedico');
    await queryRunner.dropTable('medicoClinica');
  }
}
