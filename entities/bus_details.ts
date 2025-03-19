import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { data_source } from "../database";
@Entity()
export class Bus_Details{
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({default:null})
    operator_name!: string
    
    @Column({default:null})
    bus_no!: string
    
    @Column({default:null})
    bus_route!: string
    
    @Column({ default: null })
    departure_date!: string;

    @Column({default:null})
    departure_time!: string
    
    @Column({default:null})
    arrival_time!: string
    
    @Column({default:null})
    seats_available!: number
    
    @Column({default:null})
    price!: number

}