import { DataSource } from 'typeorm';



// import { RequirementRequestEntity } from '../entities/requirement-request.entity';
import { CategoryEntity } from 'src/modules/category/entities/category.entity';
import { RepositoryEnum } from 'src/shared/enums';
import { CancionEntity } from 'src/modules/cancion/entities/cancion.entity';
import { CantanteEntity } from '../entities/cantante.entity';

export const cantanteProviders = [
  {
    provide: RepositoryEnum.CANCION_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(CancionEntity),
    // inject: [DataSourceEnum.PG_DATA_SOURCE],
  },
  {
    provide: RepositoryEnum.CANTANTE_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(CantanteEntity),
    // inject: [DataSourceEnum.PG_DATA_SOURCE],
  },

]