import { CancionEntity } from "src/modules/cancion/entities/cancion.entity";
import { ProductEntity } from "src/modules/sales/entities";
import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, DeleteDateColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { OneToMany } from "typeorm/decorator/relations/OneToMany";

export class CantanteEntity{

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
    
    //Relationship    
    // @ManyToOne(() => CategoryEntity, (cateogry) => category.products)
    // category: CategoryEntity;
    
    @Column('varchar', {
        name:'name',
        length: '100',
        unique:true,
        comment: 'Nombre del cantante',
        })
        name:string;

    @Column('date', {
        name:'feachaNacimiento',
        unique:true,
        comment: 'Fecha de nacimiento',
        })
        feachaNacimiento:string;   
        

    @Column('varchar', {
        name:'nacionalidad',
        length: '100',
        unique:true,
        comment: 'Nacionalidad del cantante',
        })
        nacionalidad:string; 
    
     @Column('varchar', {
        name:'genero',
        length: '100',
        unique:true,
        comment: 'Genero de musica del cantante',
        })
        genero:string; 
    //Relationship   
     // Relaciones de uno a muchos
    @OneToMany(() => CancionEntity , (cancion) => cancion.cantante)
    canciones: CancionEntity[]

    // Relaciones de muchos a uno
    // @ManyToOne(() => CategoryEntity, (cateogry) => category.products)
    // category: CategoryEntity;
    
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
    async setName(){
    if(!this.name){
        return;
    }
    this.name = this.name.toUpperCase();
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