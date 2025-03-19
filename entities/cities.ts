import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { data_source } from "../database";

@Entity()
export class master_data{
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({default:null})
    city!: string;

    @Column({default:null})
    city_code!: string;
}