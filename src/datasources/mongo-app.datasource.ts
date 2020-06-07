import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'mongoApp',
  connector: 'mongodb',
  url: '',
  host: 'localhost',
  port: 27017,
  user: '',
  password: '',
  database: 'mongo',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class MongoAppDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'mongoApp';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.mongoApp', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
