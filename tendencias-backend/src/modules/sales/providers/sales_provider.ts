import { DataSource } from 'typeorm';



// import { RequirementRequestEntity } from '../entities/requirement-request.entity';
import { ProductEntity } from '../entities';
import { CategoryEntity } from 'src/modules/category/entities/category.entity';
import { RepositoryEnum } from 'src/shared/enums';

export const salesProviders = [
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