import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CreateEnderecoPacienteTable1631181382571 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'enderecoPaciente',
        columns: [
          {
            name: 'idEnderecoPaciente',
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
            name: 'endereco',
            type: 'varchar',
            length: '200',
            isNullable: false,
          },
          {
            name: 'cidade',
            type: 'varchar',
            length: '100',
            isNullable: false,
          },
          {
            name: 'estado',
            type: 'varchar',
            length: '100',
            isNullable: false,
          },
          {
            name: 'cep',
            type: 'varchar',
            length: '10',
            isNullable: false,
          },
        ],
        foreignKeys: [
          new TableForeignKey({
            columnNames: ['idPaciente'],
            referencedColumnNames: ['idPaciente'],
            referencedTableName: 'paciente',
            onDelete: 'CASCADE',
          })
        ],
      }),
      true

    );
    await queryRunner.createPrimaryKey('enderecoPaciente', ['idEnderecoPaciente']);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('enderecoPaciente', 'FK_enderecoPaciente_idPaciente');
    await queryRunner.dropTable('enderecoPaciente');
  }
}
