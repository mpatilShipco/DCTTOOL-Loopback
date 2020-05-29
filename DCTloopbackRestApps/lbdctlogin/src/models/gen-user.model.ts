import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class GenUser extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  userid?: number;

  @property({
    type: 'string',
    required: true,
  })
  usermeail: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;

  @property({
    type: 'number',
    default: 0,
  })
  istatus?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<GenUser>) {
    super(data);
  }
}

export interface GenUserRelations {
  // describe navigational properties here
}

export type GenUserWithRelations = GenUser & GenUserRelations;
