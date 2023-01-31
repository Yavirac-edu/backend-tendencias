import { DataSource } from 'typeorm';


// import { DataSourceEnum, RepositoryEnum } from '@shared/enums';
// import { RequirementRequestEntity } from '../entities/requirement-request.entity';

import { ProductEntity } from '../../sales/entities';
import { RepositoryEnum } from 'src/shared/enums';
import { CancionEntity } from '../entities/cancion.entity';
import { CantanteEntity } from 'src/modules/cantante/entities/cantante.entity';

export const cancionProviders = [
  {
    provide: RepositoryEnum.CANTANTE_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(CantanteEntity),
    // inject: [DataSourceEnum.PG_DATA_SOURCE],
  },
  {
    provide: RepositoryEnum.CANCION_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(CancionEntity),
    // inject: [DataSourceEnum.PG_DATA_SOURCE],
  },

]