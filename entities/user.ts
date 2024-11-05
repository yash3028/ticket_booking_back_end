import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { data_source } from "../database";

@Entity("USERS")
export class Users{
    @PrimaryGeneratedColumn()
    id!: number;
    
    @Column()
    full_name: string | undefined;

    @Column()
    email: string | undefined;

    @Column()
    mobile: string | undefined;

    @Column()
    user_role: string | undefined;

    @Column()
    company_name: string | undefined;

    @Column()
    date_of_birth: Date | undefined;

    @Column()
    pass: string | undefined;

    @Column()
    token: string | undefined;

    @CreateDateColumn()
    created_date:  Date | undefined;

    @UpdateDateColumn()
    updated_date: Date | undefined 

    @DeleteDateColumn()
    deleted_date: Date | undefined 
}

export const user_repository = data_source.getRepository(Users)
