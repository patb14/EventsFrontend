/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /**
   * The `Date` scalar type represents a Date
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  Date: { input: any; output: any; }
  /**
   * The `Time` scalar type represents a Time value as
   * specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  Time: { input: any; output: any; }
};

export type EventLocationType = Node & {
  __typename?: 'EventLocationType';
  address: Scalars['String']['output'];
  /** The ID of the object */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type EventType = Node & {
  __typename?: 'EventType';
  cost: Scalars['Float']['output'];
  endDate: Scalars['Date']['output'];
  gender: GenderType;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  location: EventLocationType;
  name: Scalars['String']['output'];
  sessions: SessionTypeConnection;
  startDate: Scalars['Date']['output'];
};


export type EventTypeSessionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  endTime?: InputMaybe<Scalars['Time']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  startTime?: InputMaybe<Scalars['Time']['input']>;
};

export type EventTypeConnection = {
  __typename?: 'EventTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<EventTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `EventType` and its cursor. */
export type EventTypeEdge = {
  __typename?: 'EventTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<EventType>;
};

export type GenderType = Node & {
  __typename?: 'GenderType';
  gender: Scalars['String']['output'];
  /** The ID of the object */
  id: Scalars['ID']['output'];
};

/** An object with an ID */
export type Node = {
  /** The ID of the object */
  id: Scalars['ID']['output'];
};

/** The Relay compliant `PageInfo` type, containing data necessary to paginate this connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  allEvents?: Maybe<EventTypeConnection>;
  event?: Maybe<EventType>;
};


export type QueryAllEventsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  cost?: InputMaybe<Scalars['Float']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  gender?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  location?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sessions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};


export type QueryEventArgs = {
  id: Scalars['ID']['input'];
};

export type SessionType = Node & {
  __typename?: 'SessionType';
  endTime: Scalars['Time']['output'];
  /** The ID of the object */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  startTime: Scalars['Time']['output'];
};

export type SessionTypeConnection = {
  __typename?: 'SessionTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<SessionTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `SessionType` and its cursor. */
export type SessionTypeEdge = {
  __typename?: 'SessionTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<SessionType>;
};

export type MyQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type MyQueryQuery = { __typename?: 'Query', allEvents?: { __typename?: 'EventTypeConnection', edges: Array<{ __typename?: 'EventTypeEdge', node?: { __typename?: 'EventType', id: string, name: string, startDate: any, endDate: any, cost: number, location: { __typename?: 'EventLocationType', name: string, address: string }, gender: { __typename?: 'GenderType', gender: string }, sessions: { __typename?: 'SessionTypeConnection', edges: Array<{ __typename?: 'SessionTypeEdge', node?: { __typename?: 'SessionType', name: string, startTime: any, endTime: any } | null } | null> } } | null } | null> } | null };


export const MyQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MyQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allEvents"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"address"}}]}},{"kind":"Field","name":{"kind":"Name","value":"gender"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gender"}}]}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"sessions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"startTime"}},{"kind":"Field","name":{"kind":"Name","value":"endTime"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"cost"}}]}}]}}]}}]}}]} as unknown as DocumentNode<MyQueryQuery, MyQueryQueryVariables>;