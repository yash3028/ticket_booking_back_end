import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { data_source } from "../database";

@Entity()
export class Users{
    @PrimaryGeneratedColumn()
    id!: number;
    
    @Column({default:null})
    full_name!: string;

    @Column({default:null})
    email!: string;

    @Column({default:null})
    mobile!: string;

    @Column({default:null})
    user_role!: string;

    @Column({default:null})
    company_name!: string;

    @Column({default:null})
    date_of_birth!: Date;

    @Column({default:null})
    password!: string;

    @Column({default:null})
    token!: string;

    @CreateDateColumn()
    created_date!:  Date;

    @UpdateDateColumn()
    updated_date!: Date;

    @DeleteDateColumn()
    deleted_date!: Date;
}

