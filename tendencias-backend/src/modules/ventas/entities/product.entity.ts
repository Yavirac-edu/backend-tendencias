import { Column, Entity, PrimaryGeneratedColumn,  } from "typeorm";PrimaryGeneratedColumn;

@Entity()
 class ProductEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column('varchar',{
        unique:false,
        comment:'titulos',
        name:'title',
    })
    title:string

    @Column('number',{
        name:'price',
        comment:'titulos',
    })
    name:string

    @Column('varchar',{
        name:'description',
        nullable:true,
        comment:'descripción del producto',
    })
    descripcion:string
 }