import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1652506348327 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
     await queryRunner.createTable(
         new Table({
             name: "users",
             columns: [
                 {
                     name: 'id',
                     type: 'uuid',
                     isPrimary: true,
                     isGenerated: true
                 },
                 {
                     name: 'name',
                     type: 'varchar'
                 },
                 {
                    name: 'file',
                    type: 'varchar'
                 },
                 {
                    name: 'email',
                    type: 'varchar'
                 },
                 {
                    name: 'password',
                    type: 'varchar'
                 },
                 {
                    name: 'confirmed_password',
                    type: 'varchar'
                 },
                 {
                    name: 'isLogged',
                    type: 'boolean',
                    default: false,
                 },
                 {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()'
                },
                 
             ],
         })
     )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users")
    }

}
