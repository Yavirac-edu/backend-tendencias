import { CategoryEntity } from "src/modules/category/entities/category.entity";
import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, 
    DeleteDateColumn, 
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn, 
    UpdateDateColumn
} from "typeorm";

@Entity('products',{schema:'ventas'} ) 

export class ProductEntity{

@PrimaryGeneratedColumn('uuid')
id:number;

@CreateDateColumn({
    name:'created_date',
    type:'timestamptz',
    default:() => 'CURRENT_TIMESTAMP',
})
createdAt: Date;
@UpdateDateColumn({
    name:'updated_date',
    type:'timestamptz',
    default:() => 'CURRENT_TIMESTAMP', 
})
updatedAt: Date;
@DeleteDateColumn({
    name:'deleted_date',
    type:'timestamptz',
    nullable : true,
})
deletedAt:Date;

@Column('varchar', {
name:'title',
unique:true,
comment: 'titulo del producto',
})
title:string;

@Column('number', {
name:'price',
comment:'precio del producto con dos decimales',
})
price:number;
@Column('varchar',{
name:'description',
nullable:true,
comment:'descripción del producto'
})
description: string;

//Relationship    
@ManyToOne(() => CategoryEntity, (cateogry) => cateogry.products)
category: CategoryEntity;

/*@Column('boolean',{
name:'state',
})
state:boolean;
@Column('enum', {
name:'language',
enum:languageTypeEnum,
})
language:LanguageTypeEnum;*/

//completar

@BeforeInsert()
@BeforeUpdate()
async setTitle(){
if(!this.title){
    return;
}
this.title = this.title.toUpperCase();
}
/*setEmail(){
if(!this.email){
return;
}
this.email = this.email.toLowerCase().trim();

async hashPassword(){
if(!this.password){
    return;
}
this.password = await Bcrypt.hash(this.password, 12);
}*/

}