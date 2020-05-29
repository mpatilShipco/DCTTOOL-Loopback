import {DefaultCrudRepository} from '@loopback/repository';
import {GenUser, GenUserRelations} from '../models';
import {MongoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class GenUserRepository extends DefaultCrudRepository<
  GenUser,
  typeof GenUser.prototype.userid,
  GenUserRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(GenUser, dataSource);
  }
}
