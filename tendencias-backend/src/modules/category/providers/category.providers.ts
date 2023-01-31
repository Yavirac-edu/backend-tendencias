import { DataSource } from 'typeorm';


// import { DataSourceEnum, RepositoryEnum } from '@shared/enums';
// import { RequirementRequestEntity } from '../entities/requirement-request.entity';

import { CategoryEntity } from '../entities/category.entity';
import { ProductEntity } from '../../sales/entities';
import { RepositoryEnum } from 'src/shared/enums';

export const categoryProviders = [
  {
    provide: RepositoryEnum.PRODUCT_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(ProductEntity),
    // inject: [DataSourceEnum.PG_DATA_SOURCE],
  },
  {
    provide: RepositoryEnum.CATEGORY_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(CategoryEntity),
    // inject: [DataSourceEnum.PG_DATA_SOURCE],
  },

]