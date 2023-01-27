import { DataSource } from 'typeorm';


// import { DataSourceEnum, RepositoryEnum } from '@shared/enums';
// import { RequirementRequestEntity } from '../entities/requirement-request.entity';

import { CategoryEntity } from 'src/modules/category/entities/category.entity';
import { ProductEntity } from 'src/modules/sales/entities';

export const categoryProviders = [
  {
    // provide: RepositoryEnum.PRODUCT_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(ProductEntity),
    // inject: [DataSourceEnum.PG_DATA_SOURCE],
  },
  {
    // provide: RepositoryEnum.CATEGORY_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(CategoryEntity),
    // inject: [DataSourceEnum.PG_DATA_SOURCE],
  },

]