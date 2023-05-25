import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CreateEnderecoPacienteTable1631181382571 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'EnderecoPaciente',
        columns: [
          {
            name: 'idEndereco',
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
      }),
      true // Indica que a tabela deve ser criada com a opção "IF NOT EXISTS"
    );

    await queryRunner.createForeignKey(
      'EnderecoPaciente',
      new TableForeignKey({
        columnNames: ['idPaciente'],
        referencedColumnNames: ['idPaciente'],
        referencedTableName: 'Paciente',
        onDelete: 'CASCADE',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('EnderecoPaciente');
    const foreignKey = table?.foreignKeys.find((fk) => fk.columnNames.indexOf('idPaciente') !== -1);
    if (foreignKey) {
      await queryRunner.dropForeignKey('EnderecoPaciente', foreignKey);
    }
    await queryRunner.dropTable('EnderecoPaciente');
  }
}
