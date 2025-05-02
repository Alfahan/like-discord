
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Group
 * 
 */
export type Group = $Result.DefaultSelection<Prisma.$GroupPayload>
/**
 * Model GroupAsset
 * 
 */
export type GroupAsset = $Result.DefaultSelection<Prisma.$GroupAssetPayload>
/**
 * Model Room
 * 
 */
export type Room = $Result.DefaultSelection<Prisma.$RoomPayload>
/**
 * Model RoomMember
 * 
 */
export type RoomMember = $Result.DefaultSelection<Prisma.$RoomMemberPayload>
/**
 * Model RoomMessage
 * 
 */
export type RoomMessage = $Result.DefaultSelection<Prisma.$RoomMessagePayload>
/**
 * Model PasswordReset
 * 
 */
export type PasswordReset = $Result.DefaultSelection<Prisma.$PasswordResetPayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>
/**
 * Model Payout
 * 
 */
export type Payout = $Result.DefaultSelection<Prisma.$PayoutPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const RoleType: {
  ADMIN: 'ADMIN',
  USER: 'USER',
  OWNER: 'OWNER',
  MEMBER: 'MEMBER'
};

export type RoleType = (typeof RoleType)[keyof typeof RoleType]


export const GroupType: {
  FREE: 'FREE',
  PAID: 'PAID'
};

export type GroupType = (typeof GroupType)[keyof typeof GroupType]


export const MessageType: {
  TEXT: 'TEXT',
  IMAGE: 'IMAGE'
};

export type MessageType = (typeof MessageType)[keyof typeof MessageType]


export const TransactionType: {
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
  FAILED: 'FAILED'
};

export type TransactionType = (typeof TransactionType)[keyof typeof TransactionType]

}

export type RoleType = $Enums.RoleType

export const RoleType: typeof $Enums.RoleType

export type GroupType = $Enums.GroupType

export const GroupType: typeof $Enums.GroupType

export type MessageType = $Enums.MessageType

export const MessageType: typeof $Enums.MessageType

export type TransactionType = $Enums.TransactionType

export const TransactionType: typeof $Enums.TransactionType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Roles
 * const roles = await prisma.role.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Roles
   * const roles = await prisma.role.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.group`: Exposes CRUD operations for the **Group** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Groups
    * const groups = await prisma.group.findMany()
    * ```
    */
  get group(): Prisma.GroupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.groupAsset`: Exposes CRUD operations for the **GroupAsset** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GroupAssets
    * const groupAssets = await prisma.groupAsset.findMany()
    * ```
    */
  get groupAsset(): Prisma.GroupAssetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.room`: Exposes CRUD operations for the **Room** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rooms
    * const rooms = await prisma.room.findMany()
    * ```
    */
  get room(): Prisma.RoomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.roomMember`: Exposes CRUD operations for the **RoomMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoomMembers
    * const roomMembers = await prisma.roomMember.findMany()
    * ```
    */
  get roomMember(): Prisma.RoomMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.roomMessage`: Exposes CRUD operations for the **RoomMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoomMessages
    * const roomMessages = await prisma.roomMessage.findMany()
    * ```
    */
  get roomMessage(): Prisma.RoomMessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.passwordReset`: Exposes CRUD operations for the **PasswordReset** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PasswordResets
    * const passwordResets = await prisma.passwordReset.findMany()
    * ```
    */
  get passwordReset(): Prisma.PasswordResetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payout`: Exposes CRUD operations for the **Payout** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payouts
    * const payouts = await prisma.payout.findMany()
    * ```
    */
  get payout(): Prisma.PayoutDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Role: 'Role',
    User: 'User',
    Group: 'Group',
    GroupAsset: 'GroupAsset',
    Room: 'Room',
    RoomMember: 'RoomMember',
    RoomMessage: 'RoomMessage',
    PasswordReset: 'PasswordReset',
    Transaction: 'Transaction',
    Payout: 'Payout'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "role" | "user" | "group" | "groupAsset" | "room" | "roomMember" | "roomMessage" | "passwordReset" | "transaction" | "payout"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Group: {
        payload: Prisma.$GroupPayload<ExtArgs>
        fields: Prisma.GroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findFirst: {
            args: Prisma.GroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findMany: {
            args: Prisma.GroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          create: {
            args: Prisma.GroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          createMany: {
            args: Prisma.GroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          delete: {
            args: Prisma.GroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          update: {
            args: Prisma.GroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          deleteMany: {
            args: Prisma.GroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GroupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          upsert: {
            args: Prisma.GroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          aggregate: {
            args: Prisma.GroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroup>
          }
          groupBy: {
            args: Prisma.GroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupCountArgs<ExtArgs>
            result: $Utils.Optional<GroupCountAggregateOutputType> | number
          }
        }
      }
      GroupAsset: {
        payload: Prisma.$GroupAssetPayload<ExtArgs>
        fields: Prisma.GroupAssetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupAssetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupAssetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupAssetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupAssetPayload>
          }
          findFirst: {
            args: Prisma.GroupAssetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupAssetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupAssetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupAssetPayload>
          }
          findMany: {
            args: Prisma.GroupAssetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupAssetPayload>[]
          }
          create: {
            args: Prisma.GroupAssetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupAssetPayload>
          }
          createMany: {
            args: Prisma.GroupAssetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroupAssetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupAssetPayload>[]
          }
          delete: {
            args: Prisma.GroupAssetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupAssetPayload>
          }
          update: {
            args: Prisma.GroupAssetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupAssetPayload>
          }
          deleteMany: {
            args: Prisma.GroupAssetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupAssetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GroupAssetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupAssetPayload>[]
          }
          upsert: {
            args: Prisma.GroupAssetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupAssetPayload>
          }
          aggregate: {
            args: Prisma.GroupAssetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroupAsset>
          }
          groupBy: {
            args: Prisma.GroupAssetGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupAssetGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupAssetCountArgs<ExtArgs>
            result: $Utils.Optional<GroupAssetCountAggregateOutputType> | number
          }
        }
      }
      Room: {
        payload: Prisma.$RoomPayload<ExtArgs>
        fields: Prisma.RoomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findFirst: {
            args: Prisma.RoomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findMany: {
            args: Prisma.RoomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          create: {
            args: Prisma.RoomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          createMany: {
            args: Prisma.RoomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoomCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          delete: {
            args: Prisma.RoomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          update: {
            args: Prisma.RoomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          deleteMany: {
            args: Prisma.RoomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoomUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          upsert: {
            args: Prisma.RoomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          aggregate: {
            args: Prisma.RoomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoom>
          }
          groupBy: {
            args: Prisma.RoomGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomCountArgs<ExtArgs>
            result: $Utils.Optional<RoomCountAggregateOutputType> | number
          }
        }
      }
      RoomMember: {
        payload: Prisma.$RoomMemberPayload<ExtArgs>
        fields: Prisma.RoomMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomMemberPayload>
          }
          findFirst: {
            args: Prisma.RoomMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomMemberPayload>
          }
          findMany: {
            args: Prisma.RoomMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomMemberPayload>[]
          }
          create: {
            args: Prisma.RoomMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomMemberPayload>
          }
          createMany: {
            args: Prisma.RoomMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoomMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomMemberPayload>[]
          }
          delete: {
            args: Prisma.RoomMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomMemberPayload>
          }
          update: {
            args: Prisma.RoomMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomMemberPayload>
          }
          deleteMany: {
            args: Prisma.RoomMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoomMemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomMemberPayload>[]
          }
          upsert: {
            args: Prisma.RoomMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomMemberPayload>
          }
          aggregate: {
            args: Prisma.RoomMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoomMember>
          }
          groupBy: {
            args: Prisma.RoomMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomMemberCountArgs<ExtArgs>
            result: $Utils.Optional<RoomMemberCountAggregateOutputType> | number
          }
        }
      }
      RoomMessage: {
        payload: Prisma.$RoomMessagePayload<ExtArgs>
        fields: Prisma.RoomMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomMessagePayload>
          }
          findFirst: {
            args: Prisma.RoomMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomMessagePayload>
          }
          findMany: {
            args: Prisma.RoomMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomMessagePayload>[]
          }
          create: {
            args: Prisma.RoomMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomMessagePayload>
          }
          createMany: {
            args: Prisma.RoomMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoomMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomMessagePayload>[]
          }
          delete: {
            args: Prisma.RoomMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomMessagePayload>
          }
          update: {
            args: Prisma.RoomMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomMessagePayload>
          }
          deleteMany: {
            args: Prisma.RoomMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoomMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomMessagePayload>[]
          }
          upsert: {
            args: Prisma.RoomMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomMessagePayload>
          }
          aggregate: {
            args: Prisma.RoomMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoomMessage>
          }
          groupBy: {
            args: Prisma.RoomMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomMessageCountArgs<ExtArgs>
            result: $Utils.Optional<RoomMessageCountAggregateOutputType> | number
          }
        }
      }
      PasswordReset: {
        payload: Prisma.$PasswordResetPayload<ExtArgs>
        fields: Prisma.PasswordResetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PasswordResetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PasswordResetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload>
          }
          findFirst: {
            args: Prisma.PasswordResetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PasswordResetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload>
          }
          findMany: {
            args: Prisma.PasswordResetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload>[]
          }
          create: {
            args: Prisma.PasswordResetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload>
          }
          createMany: {
            args: Prisma.PasswordResetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PasswordResetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload>[]
          }
          delete: {
            args: Prisma.PasswordResetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload>
          }
          update: {
            args: Prisma.PasswordResetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload>
          }
          deleteMany: {
            args: Prisma.PasswordResetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PasswordResetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PasswordResetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload>[]
          }
          upsert: {
            args: Prisma.PasswordResetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload>
          }
          aggregate: {
            args: Prisma.PasswordResetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePasswordReset>
          }
          groupBy: {
            args: Prisma.PasswordResetGroupByArgs<ExtArgs>
            result: $Utils.Optional<PasswordResetGroupByOutputType>[]
          }
          count: {
            args: Prisma.PasswordResetCountArgs<ExtArgs>
            result: $Utils.Optional<PasswordResetCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      Payout: {
        payload: Prisma.$PayoutPayload<ExtArgs>
        fields: Prisma.PayoutFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PayoutFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayoutPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PayoutFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayoutPayload>
          }
          findFirst: {
            args: Prisma.PayoutFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayoutPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PayoutFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayoutPayload>
          }
          findMany: {
            args: Prisma.PayoutFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayoutPayload>[]
          }
          create: {
            args: Prisma.PayoutCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayoutPayload>
          }
          createMany: {
            args: Prisma.PayoutCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PayoutCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayoutPayload>[]
          }
          delete: {
            args: Prisma.PayoutDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayoutPayload>
          }
          update: {
            args: Prisma.PayoutUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayoutPayload>
          }
          deleteMany: {
            args: Prisma.PayoutDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PayoutUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PayoutUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayoutPayload>[]
          }
          upsert: {
            args: Prisma.PayoutUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayoutPayload>
          }
          aggregate: {
            args: Prisma.PayoutAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayout>
          }
          groupBy: {
            args: Prisma.PayoutGroupByArgs<ExtArgs>
            result: $Utils.Optional<PayoutGroupByOutputType>[]
          }
          count: {
            args: Prisma.PayoutCountArgs<ExtArgs>
            result: $Utils.Optional<PayoutCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    role?: RoleOmit
    user?: UserOmit
    group?: GroupOmit
    groupAsset?: GroupAssetOmit
    room?: RoomOmit
    roomMember?: RoomMemberOmit
    roomMessage?: RoomMessageOmit
    passwordReset?: PasswordResetOmit
    transaction?: TransactionOmit
    payout?: PayoutOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    users: number
    room_member_roles: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | RoleCountOutputTypeCountUsersArgs
    room_member_roles?: boolean | RoleCountOutputTypeCountRoom_member_rolesArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountRoom_member_rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomMemberWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    room: number
    room_members: number
    room_message: number
    password_resets: number
    owner_transactions: number
    member_transactions: number
    payouts: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | UserCountOutputTypeCountRoomArgs
    room_members?: boolean | UserCountOutputTypeCountRoom_membersArgs
    room_message?: boolean | UserCountOutputTypeCountRoom_messageArgs
    password_resets?: boolean | UserCountOutputTypeCountPassword_resetsArgs
    owner_transactions?: boolean | UserCountOutputTypeCountOwner_transactionsArgs
    member_transactions?: boolean | UserCountOutputTypeCountMember_transactionsArgs
    payouts?: boolean | UserCountOutputTypeCountPayoutsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRoomArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRoom_membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomMemberWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRoom_messageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomMessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPassword_resetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PasswordResetWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOwner_transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMember_transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPayoutsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayoutWhereInput
  }


  /**
   * Count Type GroupCountOutputType
   */

  export type GroupCountOutputType = {
    assets: number
    transactions: number
  }

  export type GroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assets?: boolean | GroupCountOutputTypeCountAssetsArgs
    transactions?: boolean | GroupCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupCountOutputType
     */
    select?: GroupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountAssetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupAssetWhereInput
  }

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }


  /**
   * Count Type RoomCountOutputType
   */

  export type RoomCountOutputType = {
    members: number
    messages: number
  }

  export type RoomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | RoomCountOutputTypeCountMembersArgs
    messages?: boolean | RoomCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomCountOutputType
     */
    select?: RoomCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomMemberWhereInput
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomMessageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleMinAggregateOutputType = {
    id: string | null
    role: $Enums.RoleType | null
  }

  export type RoleMaxAggregateOutputType = {
    id: string | null
    role: $Enums.RoleType | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    role: number
    _all: number
  }


  export type RoleMinAggregateInputType = {
    id?: true
    role?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    role?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    role?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: string
    role: $Enums.RoleType
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    users?: boolean | Role$usersArgs<ExtArgs>
    room_member_roles?: boolean | Role$room_member_rolesArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    id?: boolean
    role?: boolean
  }

  export type RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "role", ExtArgs["result"]["role"]>
  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Role$usersArgs<ExtArgs>
    room_member_roles?: boolean | Role$room_member_rolesArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      room_member_roles: Prisma.$RoomMemberPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      role: $Enums.RoleType
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {RoleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoleCreateManyAndReturnArgs>(args?: SelectSubset<T, RoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {RoleUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoleUpdateManyAndReturnArgs>(args: SelectSubset<T, RoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Role$usersArgs<ExtArgs> = {}>(args?: Subset<T, Role$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    room_member_roles<T extends Role$room_member_rolesArgs<ExtArgs> = {}>(args?: Subset<T, Role$room_member_rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Role model
   */
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'String'>
    readonly role: FieldRef<"Role", 'RoleType'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role createManyAndReturn
   */
  export type RoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role updateManyAndReturn
   */
  export type RoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Role.users
   */
  export type Role$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Role.room_member_roles
   */
  export type Role$room_member_rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMember
     */
    select?: RoomMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomMember
     */
    omit?: RoomMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMemberInclude<ExtArgs> | null
    where?: RoomMemberWhereInput
    orderBy?: RoomMemberOrderByWithRelationInput | RoomMemberOrderByWithRelationInput[]
    cursor?: RoomMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomMemberScalarFieldEnum | RoomMemberScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    photo: string | null
    role_id: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    photo: string | null
    role_id: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    photo: number
    role_id: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    photo?: true
    role_id?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    photo?: true
    role_id?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    photo?: true
    role_id?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    photo: string
    role_id: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    photo?: boolean
    role_id?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    room?: boolean | User$roomArgs<ExtArgs>
    room_members?: boolean | User$room_membersArgs<ExtArgs>
    room_message?: boolean | User$room_messageArgs<ExtArgs>
    password_resets?: boolean | User$password_resetsArgs<ExtArgs>
    owner_transactions?: boolean | User$owner_transactionsArgs<ExtArgs>
    member_transactions?: boolean | User$member_transactionsArgs<ExtArgs>
    payouts?: boolean | User$payoutsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    photo?: boolean
    role_id?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    photo?: boolean
    role_id?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    photo?: boolean
    role_id?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "photo" | "role_id", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    room?: boolean | User$roomArgs<ExtArgs>
    room_members?: boolean | User$room_membersArgs<ExtArgs>
    room_message?: boolean | User$room_messageArgs<ExtArgs>
    password_resets?: boolean | User$password_resetsArgs<ExtArgs>
    owner_transactions?: boolean | User$owner_transactionsArgs<ExtArgs>
    member_transactions?: boolean | User$member_transactionsArgs<ExtArgs>
    payouts?: boolean | User$payoutsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      role: Prisma.$RolePayload<ExtArgs>
      room: Prisma.$RoomPayload<ExtArgs>[]
      room_members: Prisma.$RoomMemberPayload<ExtArgs>[]
      room_message: Prisma.$RoomMessagePayload<ExtArgs>[]
      password_resets: Prisma.$PasswordResetPayload<ExtArgs>[]
      owner_transactions: Prisma.$TransactionPayload<ExtArgs>[]
      member_transactions: Prisma.$TransactionPayload<ExtArgs>[]
      payouts: Prisma.$PayoutPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      photo: string
      role_id: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    room<T extends User$roomArgs<ExtArgs> = {}>(args?: Subset<T, User$roomArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    room_members<T extends User$room_membersArgs<ExtArgs> = {}>(args?: Subset<T, User$room_membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    room_message<T extends User$room_messageArgs<ExtArgs> = {}>(args?: Subset<T, User$room_messageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    password_resets<T extends User$password_resetsArgs<ExtArgs> = {}>(args?: Subset<T, User$password_resetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    owner_transactions<T extends User$owner_transactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$owner_transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    member_transactions<T extends User$member_transactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$member_transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payouts<T extends User$payoutsArgs<ExtArgs> = {}>(args?: Subset<T, User$payoutsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayoutPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly photo: FieldRef<"User", 'String'>
    readonly role_id: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.room
   */
  export type User$roomArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    cursor?: RoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * User.room_members
   */
  export type User$room_membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMember
     */
    select?: RoomMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomMember
     */
    omit?: RoomMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMemberInclude<ExtArgs> | null
    where?: RoomMemberWhereInput
    orderBy?: RoomMemberOrderByWithRelationInput | RoomMemberOrderByWithRelationInput[]
    cursor?: RoomMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomMemberScalarFieldEnum | RoomMemberScalarFieldEnum[]
  }

  /**
   * User.room_message
   */
  export type User$room_messageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMessage
     */
    select?: RoomMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomMessage
     */
    omit?: RoomMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMessageInclude<ExtArgs> | null
    where?: RoomMessageWhereInput
    orderBy?: RoomMessageOrderByWithRelationInput | RoomMessageOrderByWithRelationInput[]
    cursor?: RoomMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomMessageScalarFieldEnum | RoomMessageScalarFieldEnum[]
  }

  /**
   * User.password_resets
   */
  export type User$password_resetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetInclude<ExtArgs> | null
    where?: PasswordResetWhereInput
    orderBy?: PasswordResetOrderByWithRelationInput | PasswordResetOrderByWithRelationInput[]
    cursor?: PasswordResetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PasswordResetScalarFieldEnum | PasswordResetScalarFieldEnum[]
  }

  /**
   * User.owner_transactions
   */
  export type User$owner_transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * User.member_transactions
   */
  export type User$member_transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * User.payouts
   */
  export type User$payoutsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payout
     */
    select?: PayoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payout
     */
    omit?: PayoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayoutInclude<ExtArgs> | null
    where?: PayoutWhereInput
    orderBy?: PayoutOrderByWithRelationInput | PayoutOrderByWithRelationInput[]
    cursor?: PayoutWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PayoutScalarFieldEnum | PayoutScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Group
   */

  export type AggregateGroup = {
    _count: GroupCountAggregateOutputType | null
    _avg: GroupAvgAggregateOutputType | null
    _sum: GroupSumAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  export type GroupAvgAggregateOutputType = {
    price: number | null
  }

  export type GroupSumAggregateOutputType = {
    price: number | null
  }

  export type GroupMinAggregateOutputType = {
    id: string | null
    name: string | null
    photo: string | null
    type: $Enums.GroupType | null
    about: string | null
    price: number | null
    created_at: Date | null
  }

  export type GroupMaxAggregateOutputType = {
    id: string | null
    name: string | null
    photo: string | null
    type: $Enums.GroupType | null
    about: string | null
    price: number | null
    created_at: Date | null
  }

  export type GroupCountAggregateOutputType = {
    id: number
    name: number
    photo: number
    type: number
    about: number
    benefit: number
    price: number
    created_at: number
    _all: number
  }


  export type GroupAvgAggregateInputType = {
    price?: true
  }

  export type GroupSumAggregateInputType = {
    price?: true
  }

  export type GroupMinAggregateInputType = {
    id?: true
    name?: true
    photo?: true
    type?: true
    about?: true
    price?: true
    created_at?: true
  }

  export type GroupMaxAggregateInputType = {
    id?: true
    name?: true
    photo?: true
    type?: true
    about?: true
    price?: true
    created_at?: true
  }

  export type GroupCountAggregateInputType = {
    id?: true
    name?: true
    photo?: true
    type?: true
    about?: true
    benefit?: true
    price?: true
    created_at?: true
    _all?: true
  }

  export type GroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Group to aggregate.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Groups
    **/
    _count?: true | GroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GroupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GroupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupMaxAggregateInputType
  }

  export type GetGroupAggregateType<T extends GroupAggregateArgs> = {
        [P in keyof T & keyof AggregateGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroup[P]>
      : GetScalarType<T[P], AggregateGroup[P]>
  }




  export type GroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
    orderBy?: GroupOrderByWithAggregationInput | GroupOrderByWithAggregationInput[]
    by: GroupScalarFieldEnum[] | GroupScalarFieldEnum
    having?: GroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupCountAggregateInputType | true
    _avg?: GroupAvgAggregateInputType
    _sum?: GroupSumAggregateInputType
    _min?: GroupMinAggregateInputType
    _max?: GroupMaxAggregateInputType
  }

  export type GroupGroupByOutputType = {
    id: string
    name: string
    photo: string
    type: $Enums.GroupType
    about: string
    benefit: string[]
    price: number
    created_at: Date
    _count: GroupCountAggregateOutputType | null
    _avg: GroupAvgAggregateOutputType | null
    _sum: GroupSumAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  type GetGroupGroupByPayload<T extends GroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupGroupByOutputType[P]>
            : GetScalarType<T[P], GroupGroupByOutputType[P]>
        }
      >
    >


  export type GroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    photo?: boolean
    type?: boolean
    about?: boolean
    benefit?: boolean
    price?: boolean
    created_at?: boolean
    assets?: boolean | Group$assetsArgs<ExtArgs>
    transactions?: boolean | Group$transactionsArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    photo?: boolean
    type?: boolean
    about?: boolean
    benefit?: boolean
    price?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["group"]>

  export type GroupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    photo?: boolean
    type?: boolean
    about?: boolean
    benefit?: boolean
    price?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["group"]>

  export type GroupSelectScalar = {
    id?: boolean
    name?: boolean
    photo?: boolean
    type?: boolean
    about?: boolean
    benefit?: boolean
    price?: boolean
    created_at?: boolean
  }

  export type GroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "photo" | "type" | "about" | "benefit" | "price" | "created_at", ExtArgs["result"]["group"]>
  export type GroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assets?: boolean | Group$assetsArgs<ExtArgs>
    transactions?: boolean | Group$transactionsArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GroupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GroupIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Group"
    objects: {
      assets: Prisma.$GroupAssetPayload<ExtArgs>[]
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      photo: string
      type: $Enums.GroupType
      about: string
      benefit: string[]
      price: number
      created_at: Date
    }, ExtArgs["result"]["group"]>
    composites: {}
  }

  type GroupGetPayload<S extends boolean | null | undefined | GroupDefaultArgs> = $Result.GetResult<Prisma.$GroupPayload, S>

  type GroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupCountAggregateInputType | true
    }

  export interface GroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Group'], meta: { name: 'Group' } }
    /**
     * Find zero or one Group that matches the filter.
     * @param {GroupFindUniqueArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupFindUniqueArgs>(args: SelectSubset<T, GroupFindUniqueArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Group that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroupFindUniqueOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupFindFirstArgs>(args?: SelectSubset<T, GroupFindFirstArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Groups
     * const groups = await prisma.group.findMany()
     * 
     * // Get first 10 Groups
     * const groups = await prisma.group.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupWithIdOnly = await prisma.group.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GroupFindManyArgs>(args?: SelectSubset<T, GroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Group.
     * @param {GroupCreateArgs} args - Arguments to create a Group.
     * @example
     * // Create one Group
     * const Group = await prisma.group.create({
     *   data: {
     *     // ... data to create a Group
     *   }
     * })
     * 
     */
    create<T extends GroupCreateArgs>(args: SelectSubset<T, GroupCreateArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Groups.
     * @param {GroupCreateManyArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const group = await prisma.group.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupCreateManyArgs>(args?: SelectSubset<T, GroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Groups and returns the data saved in the database.
     * @param {GroupCreateManyAndReturnArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const group = await prisma.group.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Groups and only return the `id`
     * const groupWithIdOnly = await prisma.group.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroupCreateManyAndReturnArgs>(args?: SelectSubset<T, GroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Group.
     * @param {GroupDeleteArgs} args - Arguments to delete one Group.
     * @example
     * // Delete one Group
     * const Group = await prisma.group.delete({
     *   where: {
     *     // ... filter to delete one Group
     *   }
     * })
     * 
     */
    delete<T extends GroupDeleteArgs>(args: SelectSubset<T, GroupDeleteArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Group.
     * @param {GroupUpdateArgs} args - Arguments to update one Group.
     * @example
     * // Update one Group
     * const group = await prisma.group.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupUpdateArgs>(args: SelectSubset<T, GroupUpdateArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Groups.
     * @param {GroupDeleteManyArgs} args - Arguments to filter Groups to delete.
     * @example
     * // Delete a few Groups
     * const { count } = await prisma.group.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupDeleteManyArgs>(args?: SelectSubset<T, GroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupUpdateManyArgs>(args: SelectSubset<T, GroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups and returns the data updated in the database.
     * @param {GroupUpdateManyAndReturnArgs} args - Arguments to update many Groups.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Groups and only return the `id`
     * const groupWithIdOnly = await prisma.group.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GroupUpdateManyAndReturnArgs>(args: SelectSubset<T, GroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Group.
     * @param {GroupUpsertArgs} args - Arguments to update or create a Group.
     * @example
     * // Update or create a Group
     * const group = await prisma.group.upsert({
     *   create: {
     *     // ... data to create a Group
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Group we want to update
     *   }
     * })
     */
    upsert<T extends GroupUpsertArgs>(args: SelectSubset<T, GroupUpsertArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupCountArgs} args - Arguments to filter Groups to count.
     * @example
     * // Count the number of Groups
     * const count = await prisma.group.count({
     *   where: {
     *     // ... the filter for the Groups we want to count
     *   }
     * })
    **/
    count<T extends GroupCountArgs>(
      args?: Subset<T, GroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GroupAggregateArgs>(args: Subset<T, GroupAggregateArgs>): Prisma.PrismaPromise<GetGroupAggregateType<T>>

    /**
     * Group by Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupGroupByArgs['orderBy'] }
        : { orderBy?: GroupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Group model
   */
  readonly fields: GroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Group.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assets<T extends Group$assetsArgs<ExtArgs> = {}>(args?: Subset<T, Group$assetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupAssetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactions<T extends Group$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Group$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Group model
   */
  interface GroupFieldRefs {
    readonly id: FieldRef<"Group", 'String'>
    readonly name: FieldRef<"Group", 'String'>
    readonly photo: FieldRef<"Group", 'String'>
    readonly type: FieldRef<"Group", 'GroupType'>
    readonly about: FieldRef<"Group", 'String'>
    readonly benefit: FieldRef<"Group", 'String[]'>
    readonly price: FieldRef<"Group", 'Int'>
    readonly created_at: FieldRef<"Group", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Group findUnique
   */
  export type GroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group findUniqueOrThrow
   */
  export type GroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group findFirst
   */
  export type GroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group findFirstOrThrow
   */
  export type GroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group findMany
   */
  export type GroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Groups to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group create
   */
  export type GroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to create a Group.
     */
    data: XOR<GroupCreateInput, GroupUncheckedCreateInput>
  }

  /**
   * Group createMany
   */
  export type GroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Group createManyAndReturn
   */
  export type GroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Group update
   */
  export type GroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to update a Group.
     */
    data: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
    /**
     * Choose, which Group to update.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group updateMany
   */
  export type GroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to update.
     */
    limit?: number
  }

  /**
   * Group updateManyAndReturn
   */
  export type GroupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to update.
     */
    limit?: number
  }

  /**
   * Group upsert
   */
  export type GroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The filter to search for the Group to update in case it exists.
     */
    where: GroupWhereUniqueInput
    /**
     * In case the Group found by the `where` argument doesn't exist, create a new Group with this data.
     */
    create: XOR<GroupCreateInput, GroupUncheckedCreateInput>
    /**
     * In case the Group was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
  }

  /**
   * Group delete
   */
  export type GroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter which Group to delete.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group deleteMany
   */
  export type GroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Groups to delete
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to delete.
     */
    limit?: number
  }

  /**
   * Group.assets
   */
  export type Group$assetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupAsset
     */
    select?: GroupAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupAsset
     */
    omit?: GroupAssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupAssetInclude<ExtArgs> | null
    where?: GroupAssetWhereInput
    orderBy?: GroupAssetOrderByWithRelationInput | GroupAssetOrderByWithRelationInput[]
    cursor?: GroupAssetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupAssetScalarFieldEnum | GroupAssetScalarFieldEnum[]
  }

  /**
   * Group.transactions
   */
  export type Group$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Group without action
   */
  export type GroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
  }


  /**
   * Model GroupAsset
   */

  export type AggregateGroupAsset = {
    _count: GroupAssetCountAggregateOutputType | null
    _min: GroupAssetMinAggregateOutputType | null
    _max: GroupAssetMaxAggregateOutputType | null
  }

  export type GroupAssetMinAggregateOutputType = {
    id: string | null
    group_id: string | null
    filename: string | null
  }

  export type GroupAssetMaxAggregateOutputType = {
    id: string | null
    group_id: string | null
    filename: string | null
  }

  export type GroupAssetCountAggregateOutputType = {
    id: number
    group_id: number
    filename: number
    _all: number
  }


  export type GroupAssetMinAggregateInputType = {
    id?: true
    group_id?: true
    filename?: true
  }

  export type GroupAssetMaxAggregateInputType = {
    id?: true
    group_id?: true
    filename?: true
  }

  export type GroupAssetCountAggregateInputType = {
    id?: true
    group_id?: true
    filename?: true
    _all?: true
  }

  export type GroupAssetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupAsset to aggregate.
     */
    where?: GroupAssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupAssets to fetch.
     */
    orderBy?: GroupAssetOrderByWithRelationInput | GroupAssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupAssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupAssets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupAssets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GroupAssets
    **/
    _count?: true | GroupAssetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupAssetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupAssetMaxAggregateInputType
  }

  export type GetGroupAssetAggregateType<T extends GroupAssetAggregateArgs> = {
        [P in keyof T & keyof AggregateGroupAsset]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroupAsset[P]>
      : GetScalarType<T[P], AggregateGroupAsset[P]>
  }




  export type GroupAssetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupAssetWhereInput
    orderBy?: GroupAssetOrderByWithAggregationInput | GroupAssetOrderByWithAggregationInput[]
    by: GroupAssetScalarFieldEnum[] | GroupAssetScalarFieldEnum
    having?: GroupAssetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupAssetCountAggregateInputType | true
    _min?: GroupAssetMinAggregateInputType
    _max?: GroupAssetMaxAggregateInputType
  }

  export type GroupAssetGroupByOutputType = {
    id: string
    group_id: string
    filename: string
    _count: GroupAssetCountAggregateOutputType | null
    _min: GroupAssetMinAggregateOutputType | null
    _max: GroupAssetMaxAggregateOutputType | null
  }

  type GetGroupAssetGroupByPayload<T extends GroupAssetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupAssetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupAssetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupAssetGroupByOutputType[P]>
            : GetScalarType<T[P], GroupAssetGroupByOutputType[P]>
        }
      >
    >


  export type GroupAssetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    group_id?: boolean
    filename?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupAsset"]>

  export type GroupAssetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    group_id?: boolean
    filename?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupAsset"]>

  export type GroupAssetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    group_id?: boolean
    filename?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupAsset"]>

  export type GroupAssetSelectScalar = {
    id?: boolean
    group_id?: boolean
    filename?: boolean
  }

  export type GroupAssetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "group_id" | "filename", ExtArgs["result"]["groupAsset"]>
  export type GroupAssetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }
  export type GroupAssetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }
  export type GroupAssetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }

  export type $GroupAssetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GroupAsset"
    objects: {
      group: Prisma.$GroupPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      group_id: string
      filename: string
    }, ExtArgs["result"]["groupAsset"]>
    composites: {}
  }

  type GroupAssetGetPayload<S extends boolean | null | undefined | GroupAssetDefaultArgs> = $Result.GetResult<Prisma.$GroupAssetPayload, S>

  type GroupAssetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GroupAssetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupAssetCountAggregateInputType | true
    }

  export interface GroupAssetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GroupAsset'], meta: { name: 'GroupAsset' } }
    /**
     * Find zero or one GroupAsset that matches the filter.
     * @param {GroupAssetFindUniqueArgs} args - Arguments to find a GroupAsset
     * @example
     * // Get one GroupAsset
     * const groupAsset = await prisma.groupAsset.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupAssetFindUniqueArgs>(args: SelectSubset<T, GroupAssetFindUniqueArgs<ExtArgs>>): Prisma__GroupAssetClient<$Result.GetResult<Prisma.$GroupAssetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GroupAsset that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroupAssetFindUniqueOrThrowArgs} args - Arguments to find a GroupAsset
     * @example
     * // Get one GroupAsset
     * const groupAsset = await prisma.groupAsset.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupAssetFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupAssetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupAssetClient<$Result.GetResult<Prisma.$GroupAssetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroupAsset that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupAssetFindFirstArgs} args - Arguments to find a GroupAsset
     * @example
     * // Get one GroupAsset
     * const groupAsset = await prisma.groupAsset.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupAssetFindFirstArgs>(args?: SelectSubset<T, GroupAssetFindFirstArgs<ExtArgs>>): Prisma__GroupAssetClient<$Result.GetResult<Prisma.$GroupAssetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroupAsset that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupAssetFindFirstOrThrowArgs} args - Arguments to find a GroupAsset
     * @example
     * // Get one GroupAsset
     * const groupAsset = await prisma.groupAsset.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupAssetFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupAssetFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupAssetClient<$Result.GetResult<Prisma.$GroupAssetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GroupAssets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupAssetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GroupAssets
     * const groupAssets = await prisma.groupAsset.findMany()
     * 
     * // Get first 10 GroupAssets
     * const groupAssets = await prisma.groupAsset.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupAssetWithIdOnly = await prisma.groupAsset.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GroupAssetFindManyArgs>(args?: SelectSubset<T, GroupAssetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupAssetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GroupAsset.
     * @param {GroupAssetCreateArgs} args - Arguments to create a GroupAsset.
     * @example
     * // Create one GroupAsset
     * const GroupAsset = await prisma.groupAsset.create({
     *   data: {
     *     // ... data to create a GroupAsset
     *   }
     * })
     * 
     */
    create<T extends GroupAssetCreateArgs>(args: SelectSubset<T, GroupAssetCreateArgs<ExtArgs>>): Prisma__GroupAssetClient<$Result.GetResult<Prisma.$GroupAssetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GroupAssets.
     * @param {GroupAssetCreateManyArgs} args - Arguments to create many GroupAssets.
     * @example
     * // Create many GroupAssets
     * const groupAsset = await prisma.groupAsset.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupAssetCreateManyArgs>(args?: SelectSubset<T, GroupAssetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GroupAssets and returns the data saved in the database.
     * @param {GroupAssetCreateManyAndReturnArgs} args - Arguments to create many GroupAssets.
     * @example
     * // Create many GroupAssets
     * const groupAsset = await prisma.groupAsset.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GroupAssets and only return the `id`
     * const groupAssetWithIdOnly = await prisma.groupAsset.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroupAssetCreateManyAndReturnArgs>(args?: SelectSubset<T, GroupAssetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupAssetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GroupAsset.
     * @param {GroupAssetDeleteArgs} args - Arguments to delete one GroupAsset.
     * @example
     * // Delete one GroupAsset
     * const GroupAsset = await prisma.groupAsset.delete({
     *   where: {
     *     // ... filter to delete one GroupAsset
     *   }
     * })
     * 
     */
    delete<T extends GroupAssetDeleteArgs>(args: SelectSubset<T, GroupAssetDeleteArgs<ExtArgs>>): Prisma__GroupAssetClient<$Result.GetResult<Prisma.$GroupAssetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GroupAsset.
     * @param {GroupAssetUpdateArgs} args - Arguments to update one GroupAsset.
     * @example
     * // Update one GroupAsset
     * const groupAsset = await prisma.groupAsset.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupAssetUpdateArgs>(args: SelectSubset<T, GroupAssetUpdateArgs<ExtArgs>>): Prisma__GroupAssetClient<$Result.GetResult<Prisma.$GroupAssetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GroupAssets.
     * @param {GroupAssetDeleteManyArgs} args - Arguments to filter GroupAssets to delete.
     * @example
     * // Delete a few GroupAssets
     * const { count } = await prisma.groupAsset.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupAssetDeleteManyArgs>(args?: SelectSubset<T, GroupAssetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupAssets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupAssetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GroupAssets
     * const groupAsset = await prisma.groupAsset.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupAssetUpdateManyArgs>(args: SelectSubset<T, GroupAssetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupAssets and returns the data updated in the database.
     * @param {GroupAssetUpdateManyAndReturnArgs} args - Arguments to update many GroupAssets.
     * @example
     * // Update many GroupAssets
     * const groupAsset = await prisma.groupAsset.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GroupAssets and only return the `id`
     * const groupAssetWithIdOnly = await prisma.groupAsset.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GroupAssetUpdateManyAndReturnArgs>(args: SelectSubset<T, GroupAssetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupAssetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GroupAsset.
     * @param {GroupAssetUpsertArgs} args - Arguments to update or create a GroupAsset.
     * @example
     * // Update or create a GroupAsset
     * const groupAsset = await prisma.groupAsset.upsert({
     *   create: {
     *     // ... data to create a GroupAsset
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GroupAsset we want to update
     *   }
     * })
     */
    upsert<T extends GroupAssetUpsertArgs>(args: SelectSubset<T, GroupAssetUpsertArgs<ExtArgs>>): Prisma__GroupAssetClient<$Result.GetResult<Prisma.$GroupAssetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GroupAssets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupAssetCountArgs} args - Arguments to filter GroupAssets to count.
     * @example
     * // Count the number of GroupAssets
     * const count = await prisma.groupAsset.count({
     *   where: {
     *     // ... the filter for the GroupAssets we want to count
     *   }
     * })
    **/
    count<T extends GroupAssetCountArgs>(
      args?: Subset<T, GroupAssetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupAssetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GroupAsset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupAssetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GroupAssetAggregateArgs>(args: Subset<T, GroupAssetAggregateArgs>): Prisma.PrismaPromise<GetGroupAssetAggregateType<T>>

    /**
     * Group by GroupAsset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupAssetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GroupAssetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupAssetGroupByArgs['orderBy'] }
        : { orderBy?: GroupAssetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GroupAssetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupAssetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GroupAsset model
   */
  readonly fields: GroupAssetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GroupAsset.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupAssetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    group<T extends GroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupDefaultArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GroupAsset model
   */
  interface GroupAssetFieldRefs {
    readonly id: FieldRef<"GroupAsset", 'String'>
    readonly group_id: FieldRef<"GroupAsset", 'String'>
    readonly filename: FieldRef<"GroupAsset", 'String'>
  }
    

  // Custom InputTypes
  /**
   * GroupAsset findUnique
   */
  export type GroupAssetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupAsset
     */
    select?: GroupAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupAsset
     */
    omit?: GroupAssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupAssetInclude<ExtArgs> | null
    /**
     * Filter, which GroupAsset to fetch.
     */
    where: GroupAssetWhereUniqueInput
  }

  /**
   * GroupAsset findUniqueOrThrow
   */
  export type GroupAssetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupAsset
     */
    select?: GroupAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupAsset
     */
    omit?: GroupAssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupAssetInclude<ExtArgs> | null
    /**
     * Filter, which GroupAsset to fetch.
     */
    where: GroupAssetWhereUniqueInput
  }

  /**
   * GroupAsset findFirst
   */
  export type GroupAssetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupAsset
     */
    select?: GroupAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupAsset
     */
    omit?: GroupAssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupAssetInclude<ExtArgs> | null
    /**
     * Filter, which GroupAsset to fetch.
     */
    where?: GroupAssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupAssets to fetch.
     */
    orderBy?: GroupAssetOrderByWithRelationInput | GroupAssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupAssets.
     */
    cursor?: GroupAssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupAssets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupAssets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupAssets.
     */
    distinct?: GroupAssetScalarFieldEnum | GroupAssetScalarFieldEnum[]
  }

  /**
   * GroupAsset findFirstOrThrow
   */
  export type GroupAssetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupAsset
     */
    select?: GroupAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupAsset
     */
    omit?: GroupAssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupAssetInclude<ExtArgs> | null
    /**
     * Filter, which GroupAsset to fetch.
     */
    where?: GroupAssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupAssets to fetch.
     */
    orderBy?: GroupAssetOrderByWithRelationInput | GroupAssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupAssets.
     */
    cursor?: GroupAssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupAssets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupAssets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupAssets.
     */
    distinct?: GroupAssetScalarFieldEnum | GroupAssetScalarFieldEnum[]
  }

  /**
   * GroupAsset findMany
   */
  export type GroupAssetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupAsset
     */
    select?: GroupAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupAsset
     */
    omit?: GroupAssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupAssetInclude<ExtArgs> | null
    /**
     * Filter, which GroupAssets to fetch.
     */
    where?: GroupAssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupAssets to fetch.
     */
    orderBy?: GroupAssetOrderByWithRelationInput | GroupAssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GroupAssets.
     */
    cursor?: GroupAssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupAssets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupAssets.
     */
    skip?: number
    distinct?: GroupAssetScalarFieldEnum | GroupAssetScalarFieldEnum[]
  }

  /**
   * GroupAsset create
   */
  export type GroupAssetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupAsset
     */
    select?: GroupAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupAsset
     */
    omit?: GroupAssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupAssetInclude<ExtArgs> | null
    /**
     * The data needed to create a GroupAsset.
     */
    data: XOR<GroupAssetCreateInput, GroupAssetUncheckedCreateInput>
  }

  /**
   * GroupAsset createMany
   */
  export type GroupAssetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GroupAssets.
     */
    data: GroupAssetCreateManyInput | GroupAssetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GroupAsset createManyAndReturn
   */
  export type GroupAssetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupAsset
     */
    select?: GroupAssetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GroupAsset
     */
    omit?: GroupAssetOmit<ExtArgs> | null
    /**
     * The data used to create many GroupAssets.
     */
    data: GroupAssetCreateManyInput | GroupAssetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupAssetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GroupAsset update
   */
  export type GroupAssetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupAsset
     */
    select?: GroupAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupAsset
     */
    omit?: GroupAssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupAssetInclude<ExtArgs> | null
    /**
     * The data needed to update a GroupAsset.
     */
    data: XOR<GroupAssetUpdateInput, GroupAssetUncheckedUpdateInput>
    /**
     * Choose, which GroupAsset to update.
     */
    where: GroupAssetWhereUniqueInput
  }

  /**
   * GroupAsset updateMany
   */
  export type GroupAssetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GroupAssets.
     */
    data: XOR<GroupAssetUpdateManyMutationInput, GroupAssetUncheckedUpdateManyInput>
    /**
     * Filter which GroupAssets to update
     */
    where?: GroupAssetWhereInput
    /**
     * Limit how many GroupAssets to update.
     */
    limit?: number
  }

  /**
   * GroupAsset updateManyAndReturn
   */
  export type GroupAssetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupAsset
     */
    select?: GroupAssetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GroupAsset
     */
    omit?: GroupAssetOmit<ExtArgs> | null
    /**
     * The data used to update GroupAssets.
     */
    data: XOR<GroupAssetUpdateManyMutationInput, GroupAssetUncheckedUpdateManyInput>
    /**
     * Filter which GroupAssets to update
     */
    where?: GroupAssetWhereInput
    /**
     * Limit how many GroupAssets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupAssetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GroupAsset upsert
   */
  export type GroupAssetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupAsset
     */
    select?: GroupAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupAsset
     */
    omit?: GroupAssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupAssetInclude<ExtArgs> | null
    /**
     * The filter to search for the GroupAsset to update in case it exists.
     */
    where: GroupAssetWhereUniqueInput
    /**
     * In case the GroupAsset found by the `where` argument doesn't exist, create a new GroupAsset with this data.
     */
    create: XOR<GroupAssetCreateInput, GroupAssetUncheckedCreateInput>
    /**
     * In case the GroupAsset was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupAssetUpdateInput, GroupAssetUncheckedUpdateInput>
  }

  /**
   * GroupAsset delete
   */
  export type GroupAssetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupAsset
     */
    select?: GroupAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupAsset
     */
    omit?: GroupAssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupAssetInclude<ExtArgs> | null
    /**
     * Filter which GroupAsset to delete.
     */
    where: GroupAssetWhereUniqueInput
  }

  /**
   * GroupAsset deleteMany
   */
  export type GroupAssetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupAssets to delete
     */
    where?: GroupAssetWhereInput
    /**
     * Limit how many GroupAssets to delete.
     */
    limit?: number
  }

  /**
   * GroupAsset without action
   */
  export type GroupAssetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupAsset
     */
    select?: GroupAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupAsset
     */
    omit?: GroupAssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupAssetInclude<ExtArgs> | null
  }


  /**
   * Model Room
   */

  export type AggregateRoom = {
    _count: RoomCountAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  export type RoomMinAggregateOutputType = {
    id: string | null
    name: string | null
    is_group: boolean | null
    created_by: string | null
    created_at: Date | null
  }

  export type RoomMaxAggregateOutputType = {
    id: string | null
    name: string | null
    is_group: boolean | null
    created_by: string | null
    created_at: Date | null
  }

  export type RoomCountAggregateOutputType = {
    id: number
    name: number
    is_group: number
    created_by: number
    created_at: number
    _all: number
  }


  export type RoomMinAggregateInputType = {
    id?: true
    name?: true
    is_group?: true
    created_by?: true
    created_at?: true
  }

  export type RoomMaxAggregateInputType = {
    id?: true
    name?: true
    is_group?: true
    created_by?: true
    created_at?: true
  }

  export type RoomCountAggregateInputType = {
    id?: true
    name?: true
    is_group?: true
    created_by?: true
    created_at?: true
    _all?: true
  }

  export type RoomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Room to aggregate.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rooms
    **/
    _count?: true | RoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomMaxAggregateInputType
  }

  export type GetRoomAggregateType<T extends RoomAggregateArgs> = {
        [P in keyof T & keyof AggregateRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoom[P]>
      : GetScalarType<T[P], AggregateRoom[P]>
  }




  export type RoomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithAggregationInput | RoomOrderByWithAggregationInput[]
    by: RoomScalarFieldEnum[] | RoomScalarFieldEnum
    having?: RoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomCountAggregateInputType | true
    _min?: RoomMinAggregateInputType
    _max?: RoomMaxAggregateInputType
  }

  export type RoomGroupByOutputType = {
    id: string
    name: string | null
    is_group: boolean
    created_by: string
    created_at: Date
    _count: RoomCountAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  type GetRoomGroupByPayload<T extends RoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomGroupByOutputType[P]>
            : GetScalarType<T[P], RoomGroupByOutputType[P]>
        }
      >
    >


  export type RoomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    is_group?: boolean
    created_by?: boolean
    created_at?: boolean
    created_by_user?: boolean | UserDefaultArgs<ExtArgs>
    members?: boolean | Room$membersArgs<ExtArgs>
    messages?: boolean | Room$messagesArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    is_group?: boolean
    created_by?: boolean
    created_at?: boolean
    created_by_user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    is_group?: boolean
    created_by?: boolean
    created_at?: boolean
    created_by_user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectScalar = {
    id?: boolean
    name?: boolean
    is_group?: boolean
    created_by?: boolean
    created_at?: boolean
  }

  export type RoomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "is_group" | "created_by" | "created_at", ExtArgs["result"]["room"]>
  export type RoomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    created_by_user?: boolean | UserDefaultArgs<ExtArgs>
    members?: boolean | Room$membersArgs<ExtArgs>
    messages?: boolean | Room$messagesArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoomIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    created_by_user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RoomIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    created_by_user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RoomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Room"
    objects: {
      created_by_user: Prisma.$UserPayload<ExtArgs>
      members: Prisma.$RoomMemberPayload<ExtArgs>[]
      messages: Prisma.$RoomMessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      is_group: boolean
      created_by: string
      created_at: Date
    }, ExtArgs["result"]["room"]>
    composites: {}
  }

  type RoomGetPayload<S extends boolean | null | undefined | RoomDefaultArgs> = $Result.GetResult<Prisma.$RoomPayload, S>

  type RoomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomCountAggregateInputType | true
    }

  export interface RoomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Room'], meta: { name: 'Room' } }
    /**
     * Find zero or one Room that matches the filter.
     * @param {RoomFindUniqueArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomFindUniqueArgs>(args: SelectSubset<T, RoomFindUniqueArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Room that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomFindUniqueOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomFindFirstArgs>(args?: SelectSubset<T, RoomFindFirstArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rooms
     * const rooms = await prisma.room.findMany()
     * 
     * // Get first 10 Rooms
     * const rooms = await prisma.room.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomWithIdOnly = await prisma.room.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomFindManyArgs>(args?: SelectSubset<T, RoomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Room.
     * @param {RoomCreateArgs} args - Arguments to create a Room.
     * @example
     * // Create one Room
     * const Room = await prisma.room.create({
     *   data: {
     *     // ... data to create a Room
     *   }
     * })
     * 
     */
    create<T extends RoomCreateArgs>(args: SelectSubset<T, RoomCreateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rooms.
     * @param {RoomCreateManyArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomCreateManyArgs>(args?: SelectSubset<T, RoomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rooms and returns the data saved in the database.
     * @param {RoomCreateManyAndReturnArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rooms and only return the `id`
     * const roomWithIdOnly = await prisma.room.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoomCreateManyAndReturnArgs>(args?: SelectSubset<T, RoomCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Room.
     * @param {RoomDeleteArgs} args - Arguments to delete one Room.
     * @example
     * // Delete one Room
     * const Room = await prisma.room.delete({
     *   where: {
     *     // ... filter to delete one Room
     *   }
     * })
     * 
     */
    delete<T extends RoomDeleteArgs>(args: SelectSubset<T, RoomDeleteArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Room.
     * @param {RoomUpdateArgs} args - Arguments to update one Room.
     * @example
     * // Update one Room
     * const room = await prisma.room.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomUpdateArgs>(args: SelectSubset<T, RoomUpdateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rooms.
     * @param {RoomDeleteManyArgs} args - Arguments to filter Rooms to delete.
     * @example
     * // Delete a few Rooms
     * const { count } = await prisma.room.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomDeleteManyArgs>(args?: SelectSubset<T, RoomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomUpdateManyArgs>(args: SelectSubset<T, RoomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms and returns the data updated in the database.
     * @param {RoomUpdateManyAndReturnArgs} args - Arguments to update many Rooms.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rooms and only return the `id`
     * const roomWithIdOnly = await prisma.room.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoomUpdateManyAndReturnArgs>(args: SelectSubset<T, RoomUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Room.
     * @param {RoomUpsertArgs} args - Arguments to update or create a Room.
     * @example
     * // Update or create a Room
     * const room = await prisma.room.upsert({
     *   create: {
     *     // ... data to create a Room
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Room we want to update
     *   }
     * })
     */
    upsert<T extends RoomUpsertArgs>(args: SelectSubset<T, RoomUpsertArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomCountArgs} args - Arguments to filter Rooms to count.
     * @example
     * // Count the number of Rooms
     * const count = await prisma.room.count({
     *   where: {
     *     // ... the filter for the Rooms we want to count
     *   }
     * })
    **/
    count<T extends RoomCountArgs>(
      args?: Subset<T, RoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoomAggregateArgs>(args: Subset<T, RoomAggregateArgs>): Prisma.PrismaPromise<GetRoomAggregateType<T>>

    /**
     * Group by Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomGroupByArgs['orderBy'] }
        : { orderBy?: RoomGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Room model
   */
  readonly fields: RoomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Room.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    created_by_user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    members<T extends Room$membersArgs<ExtArgs> = {}>(args?: Subset<T, Room$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messages<T extends Room$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Room$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Room model
   */
  interface RoomFieldRefs {
    readonly id: FieldRef<"Room", 'String'>
    readonly name: FieldRef<"Room", 'String'>
    readonly is_group: FieldRef<"Room", 'Boolean'>
    readonly created_by: FieldRef<"Room", 'String'>
    readonly created_at: FieldRef<"Room", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Room findUnique
   */
  export type RoomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findUniqueOrThrow
   */
  export type RoomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findFirst
   */
  export type RoomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findFirstOrThrow
   */
  export type RoomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findMany
   */
  export type RoomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Rooms to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room create
   */
  export type RoomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to create a Room.
     */
    data: XOR<RoomCreateInput, RoomUncheckedCreateInput>
  }

  /**
   * Room createMany
   */
  export type RoomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Room createManyAndReturn
   */
  export type RoomCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Room update
   */
  export type RoomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to update a Room.
     */
    data: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
    /**
     * Choose, which Room to update.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room updateMany
   */
  export type RoomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to update.
     */
    limit?: number
  }

  /**
   * Room updateManyAndReturn
   */
  export type RoomUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Room upsert
   */
  export type RoomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The filter to search for the Room to update in case it exists.
     */
    where: RoomWhereUniqueInput
    /**
     * In case the Room found by the `where` argument doesn't exist, create a new Room with this data.
     */
    create: XOR<RoomCreateInput, RoomUncheckedCreateInput>
    /**
     * In case the Room was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
  }

  /**
   * Room delete
   */
  export type RoomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter which Room to delete.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room deleteMany
   */
  export type RoomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rooms to delete
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to delete.
     */
    limit?: number
  }

  /**
   * Room.members
   */
  export type Room$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMember
     */
    select?: RoomMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomMember
     */
    omit?: RoomMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMemberInclude<ExtArgs> | null
    where?: RoomMemberWhereInput
    orderBy?: RoomMemberOrderByWithRelationInput | RoomMemberOrderByWithRelationInput[]
    cursor?: RoomMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomMemberScalarFieldEnum | RoomMemberScalarFieldEnum[]
  }

  /**
   * Room.messages
   */
  export type Room$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMessage
     */
    select?: RoomMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomMessage
     */
    omit?: RoomMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMessageInclude<ExtArgs> | null
    where?: RoomMessageWhereInput
    orderBy?: RoomMessageOrderByWithRelationInput | RoomMessageOrderByWithRelationInput[]
    cursor?: RoomMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomMessageScalarFieldEnum | RoomMessageScalarFieldEnum[]
  }

  /**
   * Room without action
   */
  export type RoomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
  }


  /**
   * Model RoomMember
   */

  export type AggregateRoomMember = {
    _count: RoomMemberCountAggregateOutputType | null
    _min: RoomMemberMinAggregateOutputType | null
    _max: RoomMemberMaxAggregateOutputType | null
  }

  export type RoomMemberMinAggregateOutputType = {
    id: string | null
    room_id: string | null
    user_id: string | null
    role_id: string | null
    joined_at: Date | null
  }

  export type RoomMemberMaxAggregateOutputType = {
    id: string | null
    room_id: string | null
    user_id: string | null
    role_id: string | null
    joined_at: Date | null
  }

  export type RoomMemberCountAggregateOutputType = {
    id: number
    room_id: number
    user_id: number
    role_id: number
    joined_at: number
    _all: number
  }


  export type RoomMemberMinAggregateInputType = {
    id?: true
    room_id?: true
    user_id?: true
    role_id?: true
    joined_at?: true
  }

  export type RoomMemberMaxAggregateInputType = {
    id?: true
    room_id?: true
    user_id?: true
    role_id?: true
    joined_at?: true
  }

  export type RoomMemberCountAggregateInputType = {
    id?: true
    room_id?: true
    user_id?: true
    role_id?: true
    joined_at?: true
    _all?: true
  }

  export type RoomMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomMember to aggregate.
     */
    where?: RoomMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomMembers to fetch.
     */
    orderBy?: RoomMemberOrderByWithRelationInput | RoomMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RoomMembers
    **/
    _count?: true | RoomMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomMemberMaxAggregateInputType
  }

  export type GetRoomMemberAggregateType<T extends RoomMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateRoomMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoomMember[P]>
      : GetScalarType<T[P], AggregateRoomMember[P]>
  }




  export type RoomMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomMemberWhereInput
    orderBy?: RoomMemberOrderByWithAggregationInput | RoomMemberOrderByWithAggregationInput[]
    by: RoomMemberScalarFieldEnum[] | RoomMemberScalarFieldEnum
    having?: RoomMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomMemberCountAggregateInputType | true
    _min?: RoomMemberMinAggregateInputType
    _max?: RoomMemberMaxAggregateInputType
  }

  export type RoomMemberGroupByOutputType = {
    id: string
    room_id: string
    user_id: string
    role_id: string
    joined_at: Date
    _count: RoomMemberCountAggregateOutputType | null
    _min: RoomMemberMinAggregateOutputType | null
    _max: RoomMemberMaxAggregateOutputType | null
  }

  type GetRoomMemberGroupByPayload<T extends RoomMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomMemberGroupByOutputType[P]>
            : GetScalarType<T[P], RoomMemberGroupByOutputType[P]>
        }
      >
    >


  export type RoomMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    room_id?: boolean
    user_id?: boolean
    role_id?: boolean
    joined_at?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomMember"]>

  export type RoomMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    room_id?: boolean
    user_id?: boolean
    role_id?: boolean
    joined_at?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomMember"]>

  export type RoomMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    room_id?: boolean
    user_id?: boolean
    role_id?: boolean
    joined_at?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomMember"]>

  export type RoomMemberSelectScalar = {
    id?: boolean
    room_id?: boolean
    user_id?: boolean
    role_id?: boolean
    joined_at?: boolean
  }

  export type RoomMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "room_id" | "user_id" | "role_id" | "joined_at", ExtArgs["result"]["roomMember"]>
  export type RoomMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }
  export type RoomMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }
  export type RoomMemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }

  export type $RoomMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RoomMember"
    objects: {
      room: Prisma.$RoomPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      role: Prisma.$RolePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      room_id: string
      user_id: string
      role_id: string
      joined_at: Date
    }, ExtArgs["result"]["roomMember"]>
    composites: {}
  }

  type RoomMemberGetPayload<S extends boolean | null | undefined | RoomMemberDefaultArgs> = $Result.GetResult<Prisma.$RoomMemberPayload, S>

  type RoomMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomMemberCountAggregateInputType | true
    }

  export interface RoomMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RoomMember'], meta: { name: 'RoomMember' } }
    /**
     * Find zero or one RoomMember that matches the filter.
     * @param {RoomMemberFindUniqueArgs} args - Arguments to find a RoomMember
     * @example
     * // Get one RoomMember
     * const roomMember = await prisma.roomMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomMemberFindUniqueArgs>(args: SelectSubset<T, RoomMemberFindUniqueArgs<ExtArgs>>): Prisma__RoomMemberClient<$Result.GetResult<Prisma.$RoomMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RoomMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomMemberFindUniqueOrThrowArgs} args - Arguments to find a RoomMember
     * @example
     * // Get one RoomMember
     * const roomMember = await prisma.roomMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomMemberClient<$Result.GetResult<Prisma.$RoomMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoomMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomMemberFindFirstArgs} args - Arguments to find a RoomMember
     * @example
     * // Get one RoomMember
     * const roomMember = await prisma.roomMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomMemberFindFirstArgs>(args?: SelectSubset<T, RoomMemberFindFirstArgs<ExtArgs>>): Prisma__RoomMemberClient<$Result.GetResult<Prisma.$RoomMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoomMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomMemberFindFirstOrThrowArgs} args - Arguments to find a RoomMember
     * @example
     * // Get one RoomMember
     * const roomMember = await prisma.roomMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomMemberClient<$Result.GetResult<Prisma.$RoomMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RoomMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoomMembers
     * const roomMembers = await prisma.roomMember.findMany()
     * 
     * // Get first 10 RoomMembers
     * const roomMembers = await prisma.roomMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomMemberWithIdOnly = await prisma.roomMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomMemberFindManyArgs>(args?: SelectSubset<T, RoomMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RoomMember.
     * @param {RoomMemberCreateArgs} args - Arguments to create a RoomMember.
     * @example
     * // Create one RoomMember
     * const RoomMember = await prisma.roomMember.create({
     *   data: {
     *     // ... data to create a RoomMember
     *   }
     * })
     * 
     */
    create<T extends RoomMemberCreateArgs>(args: SelectSubset<T, RoomMemberCreateArgs<ExtArgs>>): Prisma__RoomMemberClient<$Result.GetResult<Prisma.$RoomMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RoomMembers.
     * @param {RoomMemberCreateManyArgs} args - Arguments to create many RoomMembers.
     * @example
     * // Create many RoomMembers
     * const roomMember = await prisma.roomMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomMemberCreateManyArgs>(args?: SelectSubset<T, RoomMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RoomMembers and returns the data saved in the database.
     * @param {RoomMemberCreateManyAndReturnArgs} args - Arguments to create many RoomMembers.
     * @example
     * // Create many RoomMembers
     * const roomMember = await prisma.roomMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RoomMembers and only return the `id`
     * const roomMemberWithIdOnly = await prisma.roomMember.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoomMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, RoomMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RoomMember.
     * @param {RoomMemberDeleteArgs} args - Arguments to delete one RoomMember.
     * @example
     * // Delete one RoomMember
     * const RoomMember = await prisma.roomMember.delete({
     *   where: {
     *     // ... filter to delete one RoomMember
     *   }
     * })
     * 
     */
    delete<T extends RoomMemberDeleteArgs>(args: SelectSubset<T, RoomMemberDeleteArgs<ExtArgs>>): Prisma__RoomMemberClient<$Result.GetResult<Prisma.$RoomMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RoomMember.
     * @param {RoomMemberUpdateArgs} args - Arguments to update one RoomMember.
     * @example
     * // Update one RoomMember
     * const roomMember = await prisma.roomMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomMemberUpdateArgs>(args: SelectSubset<T, RoomMemberUpdateArgs<ExtArgs>>): Prisma__RoomMemberClient<$Result.GetResult<Prisma.$RoomMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RoomMembers.
     * @param {RoomMemberDeleteManyArgs} args - Arguments to filter RoomMembers to delete.
     * @example
     * // Delete a few RoomMembers
     * const { count } = await prisma.roomMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomMemberDeleteManyArgs>(args?: SelectSubset<T, RoomMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoomMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoomMembers
     * const roomMember = await prisma.roomMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomMemberUpdateManyArgs>(args: SelectSubset<T, RoomMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoomMembers and returns the data updated in the database.
     * @param {RoomMemberUpdateManyAndReturnArgs} args - Arguments to update many RoomMembers.
     * @example
     * // Update many RoomMembers
     * const roomMember = await prisma.roomMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RoomMembers and only return the `id`
     * const roomMemberWithIdOnly = await prisma.roomMember.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoomMemberUpdateManyAndReturnArgs>(args: SelectSubset<T, RoomMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RoomMember.
     * @param {RoomMemberUpsertArgs} args - Arguments to update or create a RoomMember.
     * @example
     * // Update or create a RoomMember
     * const roomMember = await prisma.roomMember.upsert({
     *   create: {
     *     // ... data to create a RoomMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoomMember we want to update
     *   }
     * })
     */
    upsert<T extends RoomMemberUpsertArgs>(args: SelectSubset<T, RoomMemberUpsertArgs<ExtArgs>>): Prisma__RoomMemberClient<$Result.GetResult<Prisma.$RoomMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RoomMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomMemberCountArgs} args - Arguments to filter RoomMembers to count.
     * @example
     * // Count the number of RoomMembers
     * const count = await prisma.roomMember.count({
     *   where: {
     *     // ... the filter for the RoomMembers we want to count
     *   }
     * })
    **/
    count<T extends RoomMemberCountArgs>(
      args?: Subset<T, RoomMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoomMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoomMemberAggregateArgs>(args: Subset<T, RoomMemberAggregateArgs>): Prisma.PrismaPromise<GetRoomMemberAggregateType<T>>

    /**
     * Group by RoomMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomMemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoomMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomMemberGroupByArgs['orderBy'] }
        : { orderBy?: RoomMemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoomMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RoomMember model
   */
  readonly fields: RoomMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RoomMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    room<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RoomMember model
   */
  interface RoomMemberFieldRefs {
    readonly id: FieldRef<"RoomMember", 'String'>
    readonly room_id: FieldRef<"RoomMember", 'String'>
    readonly user_id: FieldRef<"RoomMember", 'String'>
    readonly role_id: FieldRef<"RoomMember", 'String'>
    readonly joined_at: FieldRef<"RoomMember", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RoomMember findUnique
   */
  export type RoomMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMember
     */
    select?: RoomMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomMember
     */
    omit?: RoomMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMemberInclude<ExtArgs> | null
    /**
     * Filter, which RoomMember to fetch.
     */
    where: RoomMemberWhereUniqueInput
  }

  /**
   * RoomMember findUniqueOrThrow
   */
  export type RoomMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMember
     */
    select?: RoomMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomMember
     */
    omit?: RoomMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMemberInclude<ExtArgs> | null
    /**
     * Filter, which RoomMember to fetch.
     */
    where: RoomMemberWhereUniqueInput
  }

  /**
   * RoomMember findFirst
   */
  export type RoomMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMember
     */
    select?: RoomMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomMember
     */
    omit?: RoomMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMemberInclude<ExtArgs> | null
    /**
     * Filter, which RoomMember to fetch.
     */
    where?: RoomMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomMembers to fetch.
     */
    orderBy?: RoomMemberOrderByWithRelationInput | RoomMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomMembers.
     */
    cursor?: RoomMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomMembers.
     */
    distinct?: RoomMemberScalarFieldEnum | RoomMemberScalarFieldEnum[]
  }

  /**
   * RoomMember findFirstOrThrow
   */
  export type RoomMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMember
     */
    select?: RoomMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomMember
     */
    omit?: RoomMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMemberInclude<ExtArgs> | null
    /**
     * Filter, which RoomMember to fetch.
     */
    where?: RoomMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomMembers to fetch.
     */
    orderBy?: RoomMemberOrderByWithRelationInput | RoomMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomMembers.
     */
    cursor?: RoomMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomMembers.
     */
    distinct?: RoomMemberScalarFieldEnum | RoomMemberScalarFieldEnum[]
  }

  /**
   * RoomMember findMany
   */
  export type RoomMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMember
     */
    select?: RoomMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomMember
     */
    omit?: RoomMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMemberInclude<ExtArgs> | null
    /**
     * Filter, which RoomMembers to fetch.
     */
    where?: RoomMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomMembers to fetch.
     */
    orderBy?: RoomMemberOrderByWithRelationInput | RoomMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RoomMembers.
     */
    cursor?: RoomMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomMembers.
     */
    skip?: number
    distinct?: RoomMemberScalarFieldEnum | RoomMemberScalarFieldEnum[]
  }

  /**
   * RoomMember create
   */
  export type RoomMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMember
     */
    select?: RoomMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomMember
     */
    omit?: RoomMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a RoomMember.
     */
    data: XOR<RoomMemberCreateInput, RoomMemberUncheckedCreateInput>
  }

  /**
   * RoomMember createMany
   */
  export type RoomMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RoomMembers.
     */
    data: RoomMemberCreateManyInput | RoomMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RoomMember createManyAndReturn
   */
  export type RoomMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMember
     */
    select?: RoomMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RoomMember
     */
    omit?: RoomMemberOmit<ExtArgs> | null
    /**
     * The data used to create many RoomMembers.
     */
    data: RoomMemberCreateManyInput | RoomMemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RoomMember update
   */
  export type RoomMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMember
     */
    select?: RoomMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomMember
     */
    omit?: RoomMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a RoomMember.
     */
    data: XOR<RoomMemberUpdateInput, RoomMemberUncheckedUpdateInput>
    /**
     * Choose, which RoomMember to update.
     */
    where: RoomMemberWhereUniqueInput
  }

  /**
   * RoomMember updateMany
   */
  export type RoomMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RoomMembers.
     */
    data: XOR<RoomMemberUpdateManyMutationInput, RoomMemberUncheckedUpdateManyInput>
    /**
     * Filter which RoomMembers to update
     */
    where?: RoomMemberWhereInput
    /**
     * Limit how many RoomMembers to update.
     */
    limit?: number
  }

  /**
   * RoomMember updateManyAndReturn
   */
  export type RoomMemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMember
     */
    select?: RoomMemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RoomMember
     */
    omit?: RoomMemberOmit<ExtArgs> | null
    /**
     * The data used to update RoomMembers.
     */
    data: XOR<RoomMemberUpdateManyMutationInput, RoomMemberUncheckedUpdateManyInput>
    /**
     * Filter which RoomMembers to update
     */
    where?: RoomMemberWhereInput
    /**
     * Limit how many RoomMembers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RoomMember upsert
   */
  export type RoomMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMember
     */
    select?: RoomMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomMember
     */
    omit?: RoomMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the RoomMember to update in case it exists.
     */
    where: RoomMemberWhereUniqueInput
    /**
     * In case the RoomMember found by the `where` argument doesn't exist, create a new RoomMember with this data.
     */
    create: XOR<RoomMemberCreateInput, RoomMemberUncheckedCreateInput>
    /**
     * In case the RoomMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomMemberUpdateInput, RoomMemberUncheckedUpdateInput>
  }

  /**
   * RoomMember delete
   */
  export type RoomMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMember
     */
    select?: RoomMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomMember
     */
    omit?: RoomMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMemberInclude<ExtArgs> | null
    /**
     * Filter which RoomMember to delete.
     */
    where: RoomMemberWhereUniqueInput
  }

  /**
   * RoomMember deleteMany
   */
  export type RoomMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomMembers to delete
     */
    where?: RoomMemberWhereInput
    /**
     * Limit how many RoomMembers to delete.
     */
    limit?: number
  }

  /**
   * RoomMember without action
   */
  export type RoomMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMember
     */
    select?: RoomMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomMember
     */
    omit?: RoomMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMemberInclude<ExtArgs> | null
  }


  /**
   * Model RoomMessage
   */

  export type AggregateRoomMessage = {
    _count: RoomMessageCountAggregateOutputType | null
    _min: RoomMessageMinAggregateOutputType | null
    _max: RoomMessageMaxAggregateOutputType | null
  }

  export type RoomMessageMinAggregateOutputType = {
    id: string | null
    room_id: string | null
    sender_id: string | null
    content: string | null
    type: $Enums.MessageType | null
    created_at: Date | null
  }

  export type RoomMessageMaxAggregateOutputType = {
    id: string | null
    room_id: string | null
    sender_id: string | null
    content: string | null
    type: $Enums.MessageType | null
    created_at: Date | null
  }

  export type RoomMessageCountAggregateOutputType = {
    id: number
    room_id: number
    sender_id: number
    content: number
    type: number
    created_at: number
    _all: number
  }


  export type RoomMessageMinAggregateInputType = {
    id?: true
    room_id?: true
    sender_id?: true
    content?: true
    type?: true
    created_at?: true
  }

  export type RoomMessageMaxAggregateInputType = {
    id?: true
    room_id?: true
    sender_id?: true
    content?: true
    type?: true
    created_at?: true
  }

  export type RoomMessageCountAggregateInputType = {
    id?: true
    room_id?: true
    sender_id?: true
    content?: true
    type?: true
    created_at?: true
    _all?: true
  }

  export type RoomMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomMessage to aggregate.
     */
    where?: RoomMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomMessages to fetch.
     */
    orderBy?: RoomMessageOrderByWithRelationInput | RoomMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RoomMessages
    **/
    _count?: true | RoomMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomMessageMaxAggregateInputType
  }

  export type GetRoomMessageAggregateType<T extends RoomMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateRoomMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoomMessage[P]>
      : GetScalarType<T[P], AggregateRoomMessage[P]>
  }




  export type RoomMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomMessageWhereInput
    orderBy?: RoomMessageOrderByWithAggregationInput | RoomMessageOrderByWithAggregationInput[]
    by: RoomMessageScalarFieldEnum[] | RoomMessageScalarFieldEnum
    having?: RoomMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomMessageCountAggregateInputType | true
    _min?: RoomMessageMinAggregateInputType
    _max?: RoomMessageMaxAggregateInputType
  }

  export type RoomMessageGroupByOutputType = {
    id: string
    room_id: string
    sender_id: string
    content: string
    type: $Enums.MessageType | null
    created_at: Date
    _count: RoomMessageCountAggregateOutputType | null
    _min: RoomMessageMinAggregateOutputType | null
    _max: RoomMessageMaxAggregateOutputType | null
  }

  type GetRoomMessageGroupByPayload<T extends RoomMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomMessageGroupByOutputType[P]>
            : GetScalarType<T[P], RoomMessageGroupByOutputType[P]>
        }
      >
    >


  export type RoomMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    room_id?: boolean
    sender_id?: boolean
    content?: boolean
    type?: boolean
    created_at?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomMessage"]>

  export type RoomMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    room_id?: boolean
    sender_id?: boolean
    content?: boolean
    type?: boolean
    created_at?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomMessage"]>

  export type RoomMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    room_id?: boolean
    sender_id?: boolean
    content?: boolean
    type?: boolean
    created_at?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomMessage"]>

  export type RoomMessageSelectScalar = {
    id?: boolean
    room_id?: boolean
    sender_id?: boolean
    content?: boolean
    type?: boolean
    created_at?: boolean
  }

  export type RoomMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "room_id" | "sender_id" | "content" | "type" | "created_at", ExtArgs["result"]["roomMessage"]>
  export type RoomMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RoomMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RoomMessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RoomMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RoomMessage"
    objects: {
      room: Prisma.$RoomPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      room_id: string
      sender_id: string
      content: string
      type: $Enums.MessageType | null
      created_at: Date
    }, ExtArgs["result"]["roomMessage"]>
    composites: {}
  }

  type RoomMessageGetPayload<S extends boolean | null | undefined | RoomMessageDefaultArgs> = $Result.GetResult<Prisma.$RoomMessagePayload, S>

  type RoomMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomMessageCountAggregateInputType | true
    }

  export interface RoomMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RoomMessage'], meta: { name: 'RoomMessage' } }
    /**
     * Find zero or one RoomMessage that matches the filter.
     * @param {RoomMessageFindUniqueArgs} args - Arguments to find a RoomMessage
     * @example
     * // Get one RoomMessage
     * const roomMessage = await prisma.roomMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomMessageFindUniqueArgs>(args: SelectSubset<T, RoomMessageFindUniqueArgs<ExtArgs>>): Prisma__RoomMessageClient<$Result.GetResult<Prisma.$RoomMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RoomMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomMessageFindUniqueOrThrowArgs} args - Arguments to find a RoomMessage
     * @example
     * // Get one RoomMessage
     * const roomMessage = await prisma.roomMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomMessageClient<$Result.GetResult<Prisma.$RoomMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoomMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomMessageFindFirstArgs} args - Arguments to find a RoomMessage
     * @example
     * // Get one RoomMessage
     * const roomMessage = await prisma.roomMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomMessageFindFirstArgs>(args?: SelectSubset<T, RoomMessageFindFirstArgs<ExtArgs>>): Prisma__RoomMessageClient<$Result.GetResult<Prisma.$RoomMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoomMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomMessageFindFirstOrThrowArgs} args - Arguments to find a RoomMessage
     * @example
     * // Get one RoomMessage
     * const roomMessage = await prisma.roomMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomMessageClient<$Result.GetResult<Prisma.$RoomMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RoomMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoomMessages
     * const roomMessages = await prisma.roomMessage.findMany()
     * 
     * // Get first 10 RoomMessages
     * const roomMessages = await prisma.roomMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomMessageWithIdOnly = await prisma.roomMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomMessageFindManyArgs>(args?: SelectSubset<T, RoomMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RoomMessage.
     * @param {RoomMessageCreateArgs} args - Arguments to create a RoomMessage.
     * @example
     * // Create one RoomMessage
     * const RoomMessage = await prisma.roomMessage.create({
     *   data: {
     *     // ... data to create a RoomMessage
     *   }
     * })
     * 
     */
    create<T extends RoomMessageCreateArgs>(args: SelectSubset<T, RoomMessageCreateArgs<ExtArgs>>): Prisma__RoomMessageClient<$Result.GetResult<Prisma.$RoomMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RoomMessages.
     * @param {RoomMessageCreateManyArgs} args - Arguments to create many RoomMessages.
     * @example
     * // Create many RoomMessages
     * const roomMessage = await prisma.roomMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomMessageCreateManyArgs>(args?: SelectSubset<T, RoomMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RoomMessages and returns the data saved in the database.
     * @param {RoomMessageCreateManyAndReturnArgs} args - Arguments to create many RoomMessages.
     * @example
     * // Create many RoomMessages
     * const roomMessage = await prisma.roomMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RoomMessages and only return the `id`
     * const roomMessageWithIdOnly = await prisma.roomMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoomMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, RoomMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RoomMessage.
     * @param {RoomMessageDeleteArgs} args - Arguments to delete one RoomMessage.
     * @example
     * // Delete one RoomMessage
     * const RoomMessage = await prisma.roomMessage.delete({
     *   where: {
     *     // ... filter to delete one RoomMessage
     *   }
     * })
     * 
     */
    delete<T extends RoomMessageDeleteArgs>(args: SelectSubset<T, RoomMessageDeleteArgs<ExtArgs>>): Prisma__RoomMessageClient<$Result.GetResult<Prisma.$RoomMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RoomMessage.
     * @param {RoomMessageUpdateArgs} args - Arguments to update one RoomMessage.
     * @example
     * // Update one RoomMessage
     * const roomMessage = await prisma.roomMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomMessageUpdateArgs>(args: SelectSubset<T, RoomMessageUpdateArgs<ExtArgs>>): Prisma__RoomMessageClient<$Result.GetResult<Prisma.$RoomMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RoomMessages.
     * @param {RoomMessageDeleteManyArgs} args - Arguments to filter RoomMessages to delete.
     * @example
     * // Delete a few RoomMessages
     * const { count } = await prisma.roomMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomMessageDeleteManyArgs>(args?: SelectSubset<T, RoomMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoomMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoomMessages
     * const roomMessage = await prisma.roomMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomMessageUpdateManyArgs>(args: SelectSubset<T, RoomMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoomMessages and returns the data updated in the database.
     * @param {RoomMessageUpdateManyAndReturnArgs} args - Arguments to update many RoomMessages.
     * @example
     * // Update many RoomMessages
     * const roomMessage = await prisma.roomMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RoomMessages and only return the `id`
     * const roomMessageWithIdOnly = await prisma.roomMessage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoomMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, RoomMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RoomMessage.
     * @param {RoomMessageUpsertArgs} args - Arguments to update or create a RoomMessage.
     * @example
     * // Update or create a RoomMessage
     * const roomMessage = await prisma.roomMessage.upsert({
     *   create: {
     *     // ... data to create a RoomMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoomMessage we want to update
     *   }
     * })
     */
    upsert<T extends RoomMessageUpsertArgs>(args: SelectSubset<T, RoomMessageUpsertArgs<ExtArgs>>): Prisma__RoomMessageClient<$Result.GetResult<Prisma.$RoomMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RoomMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomMessageCountArgs} args - Arguments to filter RoomMessages to count.
     * @example
     * // Count the number of RoomMessages
     * const count = await prisma.roomMessage.count({
     *   where: {
     *     // ... the filter for the RoomMessages we want to count
     *   }
     * })
    **/
    count<T extends RoomMessageCountArgs>(
      args?: Subset<T, RoomMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoomMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoomMessageAggregateArgs>(args: Subset<T, RoomMessageAggregateArgs>): Prisma.PrismaPromise<GetRoomMessageAggregateType<T>>

    /**
     * Group by RoomMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomMessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoomMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomMessageGroupByArgs['orderBy'] }
        : { orderBy?: RoomMessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoomMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RoomMessage model
   */
  readonly fields: RoomMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RoomMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    room<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RoomMessage model
   */
  interface RoomMessageFieldRefs {
    readonly id: FieldRef<"RoomMessage", 'String'>
    readonly room_id: FieldRef<"RoomMessage", 'String'>
    readonly sender_id: FieldRef<"RoomMessage", 'String'>
    readonly content: FieldRef<"RoomMessage", 'String'>
    readonly type: FieldRef<"RoomMessage", 'MessageType'>
    readonly created_at: FieldRef<"RoomMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RoomMessage findUnique
   */
  export type RoomMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMessage
     */
    select?: RoomMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomMessage
     */
    omit?: RoomMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMessageInclude<ExtArgs> | null
    /**
     * Filter, which RoomMessage to fetch.
     */
    where: RoomMessageWhereUniqueInput
  }

  /**
   * RoomMessage findUniqueOrThrow
   */
  export type RoomMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMessage
     */
    select?: RoomMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomMessage
     */
    omit?: RoomMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMessageInclude<ExtArgs> | null
    /**
     * Filter, which RoomMessage to fetch.
     */
    where: RoomMessageWhereUniqueInput
  }

  /**
   * RoomMessage findFirst
   */
  export type RoomMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMessage
     */
    select?: RoomMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomMessage
     */
    omit?: RoomMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMessageInclude<ExtArgs> | null
    /**
     * Filter, which RoomMessage to fetch.
     */
    where?: RoomMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomMessages to fetch.
     */
    orderBy?: RoomMessageOrderByWithRelationInput | RoomMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomMessages.
     */
    cursor?: RoomMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomMessages.
     */
    distinct?: RoomMessageScalarFieldEnum | RoomMessageScalarFieldEnum[]
  }

  /**
   * RoomMessage findFirstOrThrow
   */
  export type RoomMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMessage
     */
    select?: RoomMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomMessage
     */
    omit?: RoomMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMessageInclude<ExtArgs> | null
    /**
     * Filter, which RoomMessage to fetch.
     */
    where?: RoomMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomMessages to fetch.
     */
    orderBy?: RoomMessageOrderByWithRelationInput | RoomMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomMessages.
     */
    cursor?: RoomMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomMessages.
     */
    distinct?: RoomMessageScalarFieldEnum | RoomMessageScalarFieldEnum[]
  }

  /**
   * RoomMessage findMany
   */
  export type RoomMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMessage
     */
    select?: RoomMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomMessage
     */
    omit?: RoomMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMessageInclude<ExtArgs> | null
    /**
     * Filter, which RoomMessages to fetch.
     */
    where?: RoomMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomMessages to fetch.
     */
    orderBy?: RoomMessageOrderByWithRelationInput | RoomMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RoomMessages.
     */
    cursor?: RoomMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomMessages.
     */
    skip?: number
    distinct?: RoomMessageScalarFieldEnum | RoomMessageScalarFieldEnum[]
  }

  /**
   * RoomMessage create
   */
  export type RoomMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMessage
     */
    select?: RoomMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomMessage
     */
    omit?: RoomMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a RoomMessage.
     */
    data: XOR<RoomMessageCreateInput, RoomMessageUncheckedCreateInput>
  }

  /**
   * RoomMessage createMany
   */
  export type RoomMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RoomMessages.
     */
    data: RoomMessageCreateManyInput | RoomMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RoomMessage createManyAndReturn
   */
  export type RoomMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMessage
     */
    select?: RoomMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RoomMessage
     */
    omit?: RoomMessageOmit<ExtArgs> | null
    /**
     * The data used to create many RoomMessages.
     */
    data: RoomMessageCreateManyInput | RoomMessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RoomMessage update
   */
  export type RoomMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMessage
     */
    select?: RoomMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomMessage
     */
    omit?: RoomMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a RoomMessage.
     */
    data: XOR<RoomMessageUpdateInput, RoomMessageUncheckedUpdateInput>
    /**
     * Choose, which RoomMessage to update.
     */
    where: RoomMessageWhereUniqueInput
  }

  /**
   * RoomMessage updateMany
   */
  export type RoomMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RoomMessages.
     */
    data: XOR<RoomMessageUpdateManyMutationInput, RoomMessageUncheckedUpdateManyInput>
    /**
     * Filter which RoomMessages to update
     */
    where?: RoomMessageWhereInput
    /**
     * Limit how many RoomMessages to update.
     */
    limit?: number
  }

  /**
   * RoomMessage updateManyAndReturn
   */
  export type RoomMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMessage
     */
    select?: RoomMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RoomMessage
     */
    omit?: RoomMessageOmit<ExtArgs> | null
    /**
     * The data used to update RoomMessages.
     */
    data: XOR<RoomMessageUpdateManyMutationInput, RoomMessageUncheckedUpdateManyInput>
    /**
     * Filter which RoomMessages to update
     */
    where?: RoomMessageWhereInput
    /**
     * Limit how many RoomMessages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RoomMessage upsert
   */
  export type RoomMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMessage
     */
    select?: RoomMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomMessage
     */
    omit?: RoomMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the RoomMessage to update in case it exists.
     */
    where: RoomMessageWhereUniqueInput
    /**
     * In case the RoomMessage found by the `where` argument doesn't exist, create a new RoomMessage with this data.
     */
    create: XOR<RoomMessageCreateInput, RoomMessageUncheckedCreateInput>
    /**
     * In case the RoomMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomMessageUpdateInput, RoomMessageUncheckedUpdateInput>
  }

  /**
   * RoomMessage delete
   */
  export type RoomMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMessage
     */
    select?: RoomMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomMessage
     */
    omit?: RoomMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMessageInclude<ExtArgs> | null
    /**
     * Filter which RoomMessage to delete.
     */
    where: RoomMessageWhereUniqueInput
  }

  /**
   * RoomMessage deleteMany
   */
  export type RoomMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomMessages to delete
     */
    where?: RoomMessageWhereInput
    /**
     * Limit how many RoomMessages to delete.
     */
    limit?: number
  }

  /**
   * RoomMessage without action
   */
  export type RoomMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMessage
     */
    select?: RoomMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomMessage
     */
    omit?: RoomMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMessageInclude<ExtArgs> | null
  }


  /**
   * Model PasswordReset
   */

  export type AggregatePasswordReset = {
    _count: PasswordResetCountAggregateOutputType | null
    _min: PasswordResetMinAggregateOutputType | null
    _max: PasswordResetMaxAggregateOutputType | null
  }

  export type PasswordResetMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    token: string | null
  }

  export type PasswordResetMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    token: string | null
  }

  export type PasswordResetCountAggregateOutputType = {
    id: number
    user_id: number
    token: number
    _all: number
  }


  export type PasswordResetMinAggregateInputType = {
    id?: true
    user_id?: true
    token?: true
  }

  export type PasswordResetMaxAggregateInputType = {
    id?: true
    user_id?: true
    token?: true
  }

  export type PasswordResetCountAggregateInputType = {
    id?: true
    user_id?: true
    token?: true
    _all?: true
  }

  export type PasswordResetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PasswordReset to aggregate.
     */
    where?: PasswordResetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResets to fetch.
     */
    orderBy?: PasswordResetOrderByWithRelationInput | PasswordResetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PasswordResetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PasswordResets
    **/
    _count?: true | PasswordResetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PasswordResetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PasswordResetMaxAggregateInputType
  }

  export type GetPasswordResetAggregateType<T extends PasswordResetAggregateArgs> = {
        [P in keyof T & keyof AggregatePasswordReset]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePasswordReset[P]>
      : GetScalarType<T[P], AggregatePasswordReset[P]>
  }




  export type PasswordResetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PasswordResetWhereInput
    orderBy?: PasswordResetOrderByWithAggregationInput | PasswordResetOrderByWithAggregationInput[]
    by: PasswordResetScalarFieldEnum[] | PasswordResetScalarFieldEnum
    having?: PasswordResetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PasswordResetCountAggregateInputType | true
    _min?: PasswordResetMinAggregateInputType
    _max?: PasswordResetMaxAggregateInputType
  }

  export type PasswordResetGroupByOutputType = {
    id: string
    user_id: string
    token: string
    _count: PasswordResetCountAggregateOutputType | null
    _min: PasswordResetMinAggregateOutputType | null
    _max: PasswordResetMaxAggregateOutputType | null
  }

  type GetPasswordResetGroupByPayload<T extends PasswordResetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PasswordResetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PasswordResetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PasswordResetGroupByOutputType[P]>
            : GetScalarType<T[P], PasswordResetGroupByOutputType[P]>
        }
      >
    >


  export type PasswordResetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    token?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passwordReset"]>

  export type PasswordResetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    token?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passwordReset"]>

  export type PasswordResetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    token?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passwordReset"]>

  export type PasswordResetSelectScalar = {
    id?: boolean
    user_id?: boolean
    token?: boolean
  }

  export type PasswordResetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "token", ExtArgs["result"]["passwordReset"]>
  export type PasswordResetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PasswordResetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PasswordResetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PasswordResetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PasswordReset"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      token: string
    }, ExtArgs["result"]["passwordReset"]>
    composites: {}
  }

  type PasswordResetGetPayload<S extends boolean | null | undefined | PasswordResetDefaultArgs> = $Result.GetResult<Prisma.$PasswordResetPayload, S>

  type PasswordResetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PasswordResetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PasswordResetCountAggregateInputType | true
    }

  export interface PasswordResetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PasswordReset'], meta: { name: 'PasswordReset' } }
    /**
     * Find zero or one PasswordReset that matches the filter.
     * @param {PasswordResetFindUniqueArgs} args - Arguments to find a PasswordReset
     * @example
     * // Get one PasswordReset
     * const passwordReset = await prisma.passwordReset.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PasswordResetFindUniqueArgs>(args: SelectSubset<T, PasswordResetFindUniqueArgs<ExtArgs>>): Prisma__PasswordResetClient<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PasswordReset that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PasswordResetFindUniqueOrThrowArgs} args - Arguments to find a PasswordReset
     * @example
     * // Get one PasswordReset
     * const passwordReset = await prisma.passwordReset.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PasswordResetFindUniqueOrThrowArgs>(args: SelectSubset<T, PasswordResetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PasswordResetClient<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PasswordReset that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetFindFirstArgs} args - Arguments to find a PasswordReset
     * @example
     * // Get one PasswordReset
     * const passwordReset = await prisma.passwordReset.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PasswordResetFindFirstArgs>(args?: SelectSubset<T, PasswordResetFindFirstArgs<ExtArgs>>): Prisma__PasswordResetClient<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PasswordReset that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetFindFirstOrThrowArgs} args - Arguments to find a PasswordReset
     * @example
     * // Get one PasswordReset
     * const passwordReset = await prisma.passwordReset.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PasswordResetFindFirstOrThrowArgs>(args?: SelectSubset<T, PasswordResetFindFirstOrThrowArgs<ExtArgs>>): Prisma__PasswordResetClient<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PasswordResets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PasswordResets
     * const passwordResets = await prisma.passwordReset.findMany()
     * 
     * // Get first 10 PasswordResets
     * const passwordResets = await prisma.passwordReset.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const passwordResetWithIdOnly = await prisma.passwordReset.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PasswordResetFindManyArgs>(args?: SelectSubset<T, PasswordResetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PasswordReset.
     * @param {PasswordResetCreateArgs} args - Arguments to create a PasswordReset.
     * @example
     * // Create one PasswordReset
     * const PasswordReset = await prisma.passwordReset.create({
     *   data: {
     *     // ... data to create a PasswordReset
     *   }
     * })
     * 
     */
    create<T extends PasswordResetCreateArgs>(args: SelectSubset<T, PasswordResetCreateArgs<ExtArgs>>): Prisma__PasswordResetClient<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PasswordResets.
     * @param {PasswordResetCreateManyArgs} args - Arguments to create many PasswordResets.
     * @example
     * // Create many PasswordResets
     * const passwordReset = await prisma.passwordReset.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PasswordResetCreateManyArgs>(args?: SelectSubset<T, PasswordResetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PasswordResets and returns the data saved in the database.
     * @param {PasswordResetCreateManyAndReturnArgs} args - Arguments to create many PasswordResets.
     * @example
     * // Create many PasswordResets
     * const passwordReset = await prisma.passwordReset.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PasswordResets and only return the `id`
     * const passwordResetWithIdOnly = await prisma.passwordReset.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PasswordResetCreateManyAndReturnArgs>(args?: SelectSubset<T, PasswordResetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PasswordReset.
     * @param {PasswordResetDeleteArgs} args - Arguments to delete one PasswordReset.
     * @example
     * // Delete one PasswordReset
     * const PasswordReset = await prisma.passwordReset.delete({
     *   where: {
     *     // ... filter to delete one PasswordReset
     *   }
     * })
     * 
     */
    delete<T extends PasswordResetDeleteArgs>(args: SelectSubset<T, PasswordResetDeleteArgs<ExtArgs>>): Prisma__PasswordResetClient<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PasswordReset.
     * @param {PasswordResetUpdateArgs} args - Arguments to update one PasswordReset.
     * @example
     * // Update one PasswordReset
     * const passwordReset = await prisma.passwordReset.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PasswordResetUpdateArgs>(args: SelectSubset<T, PasswordResetUpdateArgs<ExtArgs>>): Prisma__PasswordResetClient<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PasswordResets.
     * @param {PasswordResetDeleteManyArgs} args - Arguments to filter PasswordResets to delete.
     * @example
     * // Delete a few PasswordResets
     * const { count } = await prisma.passwordReset.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PasswordResetDeleteManyArgs>(args?: SelectSubset<T, PasswordResetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PasswordResets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PasswordResets
     * const passwordReset = await prisma.passwordReset.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PasswordResetUpdateManyArgs>(args: SelectSubset<T, PasswordResetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PasswordResets and returns the data updated in the database.
     * @param {PasswordResetUpdateManyAndReturnArgs} args - Arguments to update many PasswordResets.
     * @example
     * // Update many PasswordResets
     * const passwordReset = await prisma.passwordReset.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PasswordResets and only return the `id`
     * const passwordResetWithIdOnly = await prisma.passwordReset.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PasswordResetUpdateManyAndReturnArgs>(args: SelectSubset<T, PasswordResetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PasswordReset.
     * @param {PasswordResetUpsertArgs} args - Arguments to update or create a PasswordReset.
     * @example
     * // Update or create a PasswordReset
     * const passwordReset = await prisma.passwordReset.upsert({
     *   create: {
     *     // ... data to create a PasswordReset
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PasswordReset we want to update
     *   }
     * })
     */
    upsert<T extends PasswordResetUpsertArgs>(args: SelectSubset<T, PasswordResetUpsertArgs<ExtArgs>>): Prisma__PasswordResetClient<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PasswordResets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetCountArgs} args - Arguments to filter PasswordResets to count.
     * @example
     * // Count the number of PasswordResets
     * const count = await prisma.passwordReset.count({
     *   where: {
     *     // ... the filter for the PasswordResets we want to count
     *   }
     * })
    **/
    count<T extends PasswordResetCountArgs>(
      args?: Subset<T, PasswordResetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PasswordResetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PasswordReset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PasswordResetAggregateArgs>(args: Subset<T, PasswordResetAggregateArgs>): Prisma.PrismaPromise<GetPasswordResetAggregateType<T>>

    /**
     * Group by PasswordReset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PasswordResetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PasswordResetGroupByArgs['orderBy'] }
        : { orderBy?: PasswordResetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PasswordResetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPasswordResetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PasswordReset model
   */
  readonly fields: PasswordResetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PasswordReset.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PasswordResetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PasswordReset model
   */
  interface PasswordResetFieldRefs {
    readonly id: FieldRef<"PasswordReset", 'String'>
    readonly user_id: FieldRef<"PasswordReset", 'String'>
    readonly token: FieldRef<"PasswordReset", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PasswordReset findUnique
   */
  export type PasswordResetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetInclude<ExtArgs> | null
    /**
     * Filter, which PasswordReset to fetch.
     */
    where: PasswordResetWhereUniqueInput
  }

  /**
   * PasswordReset findUniqueOrThrow
   */
  export type PasswordResetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetInclude<ExtArgs> | null
    /**
     * Filter, which PasswordReset to fetch.
     */
    where: PasswordResetWhereUniqueInput
  }

  /**
   * PasswordReset findFirst
   */
  export type PasswordResetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetInclude<ExtArgs> | null
    /**
     * Filter, which PasswordReset to fetch.
     */
    where?: PasswordResetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResets to fetch.
     */
    orderBy?: PasswordResetOrderByWithRelationInput | PasswordResetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PasswordResets.
     */
    cursor?: PasswordResetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PasswordResets.
     */
    distinct?: PasswordResetScalarFieldEnum | PasswordResetScalarFieldEnum[]
  }

  /**
   * PasswordReset findFirstOrThrow
   */
  export type PasswordResetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetInclude<ExtArgs> | null
    /**
     * Filter, which PasswordReset to fetch.
     */
    where?: PasswordResetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResets to fetch.
     */
    orderBy?: PasswordResetOrderByWithRelationInput | PasswordResetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PasswordResets.
     */
    cursor?: PasswordResetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PasswordResets.
     */
    distinct?: PasswordResetScalarFieldEnum | PasswordResetScalarFieldEnum[]
  }

  /**
   * PasswordReset findMany
   */
  export type PasswordResetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetInclude<ExtArgs> | null
    /**
     * Filter, which PasswordResets to fetch.
     */
    where?: PasswordResetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResets to fetch.
     */
    orderBy?: PasswordResetOrderByWithRelationInput | PasswordResetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PasswordResets.
     */
    cursor?: PasswordResetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResets.
     */
    skip?: number
    distinct?: PasswordResetScalarFieldEnum | PasswordResetScalarFieldEnum[]
  }

  /**
   * PasswordReset create
   */
  export type PasswordResetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetInclude<ExtArgs> | null
    /**
     * The data needed to create a PasswordReset.
     */
    data: XOR<PasswordResetCreateInput, PasswordResetUncheckedCreateInput>
  }

  /**
   * PasswordReset createMany
   */
  export type PasswordResetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PasswordResets.
     */
    data: PasswordResetCreateManyInput | PasswordResetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PasswordReset createManyAndReturn
   */
  export type PasswordResetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * The data used to create many PasswordResets.
     */
    data: PasswordResetCreateManyInput | PasswordResetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PasswordReset update
   */
  export type PasswordResetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetInclude<ExtArgs> | null
    /**
     * The data needed to update a PasswordReset.
     */
    data: XOR<PasswordResetUpdateInput, PasswordResetUncheckedUpdateInput>
    /**
     * Choose, which PasswordReset to update.
     */
    where: PasswordResetWhereUniqueInput
  }

  /**
   * PasswordReset updateMany
   */
  export type PasswordResetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PasswordResets.
     */
    data: XOR<PasswordResetUpdateManyMutationInput, PasswordResetUncheckedUpdateManyInput>
    /**
     * Filter which PasswordResets to update
     */
    where?: PasswordResetWhereInput
    /**
     * Limit how many PasswordResets to update.
     */
    limit?: number
  }

  /**
   * PasswordReset updateManyAndReturn
   */
  export type PasswordResetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * The data used to update PasswordResets.
     */
    data: XOR<PasswordResetUpdateManyMutationInput, PasswordResetUncheckedUpdateManyInput>
    /**
     * Filter which PasswordResets to update
     */
    where?: PasswordResetWhereInput
    /**
     * Limit how many PasswordResets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PasswordReset upsert
   */
  export type PasswordResetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetInclude<ExtArgs> | null
    /**
     * The filter to search for the PasswordReset to update in case it exists.
     */
    where: PasswordResetWhereUniqueInput
    /**
     * In case the PasswordReset found by the `where` argument doesn't exist, create a new PasswordReset with this data.
     */
    create: XOR<PasswordResetCreateInput, PasswordResetUncheckedCreateInput>
    /**
     * In case the PasswordReset was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PasswordResetUpdateInput, PasswordResetUncheckedUpdateInput>
  }

  /**
   * PasswordReset delete
   */
  export type PasswordResetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetInclude<ExtArgs> | null
    /**
     * Filter which PasswordReset to delete.
     */
    where: PasswordResetWhereUniqueInput
  }

  /**
   * PasswordReset deleteMany
   */
  export type PasswordResetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PasswordResets to delete
     */
    where?: PasswordResetWhereInput
    /**
     * Limit how many PasswordResets to delete.
     */
    limit?: number
  }

  /**
   * PasswordReset without action
   */
  export type PasswordResetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetInclude<ExtArgs> | null
  }


  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    price: number | null
  }

  export type TransactionSumAggregateOutputType = {
    price: number | null
  }

  export type TransactionMinAggregateOutputType = {
    id: string | null
    owner_id: string | null
    user_id: string | null
    group_id: string | null
    price: number | null
    type: $Enums.TransactionType | null
    created_at: Date | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: string | null
    owner_id: string | null
    user_id: string | null
    group_id: string | null
    price: number | null
    type: $Enums.TransactionType | null
    created_at: Date | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    owner_id: number
    user_id: number
    group_id: number
    price: number
    type: number
    created_at: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    price?: true
  }

  export type TransactionSumAggregateInputType = {
    price?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    owner_id?: true
    user_id?: true
    group_id?: true
    price?: true
    type?: true
    created_at?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    owner_id?: true
    user_id?: true
    group_id?: true
    price?: true
    type?: true
    created_at?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    owner_id?: true
    user_id?: true
    group_id?: true
    price?: true
    type?: true
    created_at?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: string
    owner_id: string
    user_id: string
    group_id: string
    price: number
    type: $Enums.TransactionType | null
    created_at: Date
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    owner_id?: boolean
    user_id?: boolean
    group_id?: boolean
    price?: boolean
    type?: boolean
    created_at?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    owner_id?: boolean
    user_id?: boolean
    group_id?: boolean
    price?: boolean
    type?: boolean
    created_at?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    owner_id?: boolean
    user_id?: boolean
    group_id?: boolean
    price?: boolean
    type?: boolean
    created_at?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectScalar = {
    id?: boolean
    owner_id?: boolean
    user_id?: boolean
    group_id?: boolean
    price?: boolean
    type?: boolean
    created_at?: boolean
  }

  export type TransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "owner_id" | "user_id" | "group_id" | "price" | "type" | "created_at", ExtArgs["result"]["transaction"]>
  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }

  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      group: Prisma.$GroupPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      owner_id: string
      user_id: string
      group_id: string
      price: number
      type: $Enums.TransactionType | null
      created_at: Date
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionFindManyArgs>(args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends TransactionCreateArgs>(args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionCreateManyArgs>(args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends TransactionDeleteArgs>(args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionUpdateArgs>(args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionDeleteManyArgs>(args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionUpdateManyArgs>(args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {TransactionUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    group<T extends GroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupDefaultArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Transaction model
   */
  interface TransactionFieldRefs {
    readonly id: FieldRef<"Transaction", 'String'>
    readonly owner_id: FieldRef<"Transaction", 'String'>
    readonly user_id: FieldRef<"Transaction", 'String'>
    readonly group_id: FieldRef<"Transaction", 'String'>
    readonly price: FieldRef<"Transaction", 'Int'>
    readonly type: FieldRef<"Transaction", 'TransactionType'>
    readonly created_at: FieldRef<"Transaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaction createManyAndReturn
   */
  export type TransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
  }

  /**
   * Transaction updateManyAndReturn
   */
  export type TransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to delete.
     */
    limit?: number
  }

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
  }


  /**
   * Model Payout
   */

  export type AggregatePayout = {
    _count: PayoutCountAggregateOutputType | null
    _avg: PayoutAvgAggregateOutputType | null
    _sum: PayoutSumAggregateOutputType | null
    _min: PayoutMinAggregateOutputType | null
    _max: PayoutMaxAggregateOutputType | null
  }

  export type PayoutAvgAggregateOutputType = {
    amount: number | null
  }

  export type PayoutSumAggregateOutputType = {
    amount: number | null
  }

  export type PayoutMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    amount: number | null
    bank_name: string | null
    bank_account_number: string | null
    bank_account_name: string | null
    status: $Enums.TransactionType | null
    proof: string | null
    created_at: Date | null
  }

  export type PayoutMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    amount: number | null
    bank_name: string | null
    bank_account_number: string | null
    bank_account_name: string | null
    status: $Enums.TransactionType | null
    proof: string | null
    created_at: Date | null
  }

  export type PayoutCountAggregateOutputType = {
    id: number
    user_id: number
    amount: number
    bank_name: number
    bank_account_number: number
    bank_account_name: number
    status: number
    proof: number
    created_at: number
    _all: number
  }


  export type PayoutAvgAggregateInputType = {
    amount?: true
  }

  export type PayoutSumAggregateInputType = {
    amount?: true
  }

  export type PayoutMinAggregateInputType = {
    id?: true
    user_id?: true
    amount?: true
    bank_name?: true
    bank_account_number?: true
    bank_account_name?: true
    status?: true
    proof?: true
    created_at?: true
  }

  export type PayoutMaxAggregateInputType = {
    id?: true
    user_id?: true
    amount?: true
    bank_name?: true
    bank_account_number?: true
    bank_account_name?: true
    status?: true
    proof?: true
    created_at?: true
  }

  export type PayoutCountAggregateInputType = {
    id?: true
    user_id?: true
    amount?: true
    bank_name?: true
    bank_account_number?: true
    bank_account_name?: true
    status?: true
    proof?: true
    created_at?: true
    _all?: true
  }

  export type PayoutAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payout to aggregate.
     */
    where?: PayoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payouts to fetch.
     */
    orderBy?: PayoutOrderByWithRelationInput | PayoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PayoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payouts
    **/
    _count?: true | PayoutCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PayoutAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PayoutSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PayoutMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PayoutMaxAggregateInputType
  }

  export type GetPayoutAggregateType<T extends PayoutAggregateArgs> = {
        [P in keyof T & keyof AggregatePayout]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayout[P]>
      : GetScalarType<T[P], AggregatePayout[P]>
  }




  export type PayoutGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayoutWhereInput
    orderBy?: PayoutOrderByWithAggregationInput | PayoutOrderByWithAggregationInput[]
    by: PayoutScalarFieldEnum[] | PayoutScalarFieldEnum
    having?: PayoutScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PayoutCountAggregateInputType | true
    _avg?: PayoutAvgAggregateInputType
    _sum?: PayoutSumAggregateInputType
    _min?: PayoutMinAggregateInputType
    _max?: PayoutMaxAggregateInputType
  }

  export type PayoutGroupByOutputType = {
    id: string
    user_id: string
    amount: number
    bank_name: string
    bank_account_number: string
    bank_account_name: string
    status: $Enums.TransactionType | null
    proof: string | null
    created_at: Date
    _count: PayoutCountAggregateOutputType | null
    _avg: PayoutAvgAggregateOutputType | null
    _sum: PayoutSumAggregateOutputType | null
    _min: PayoutMinAggregateOutputType | null
    _max: PayoutMaxAggregateOutputType | null
  }

  type GetPayoutGroupByPayload<T extends PayoutGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PayoutGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PayoutGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PayoutGroupByOutputType[P]>
            : GetScalarType<T[P], PayoutGroupByOutputType[P]>
        }
      >
    >


  export type PayoutSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    amount?: boolean
    bank_name?: boolean
    bank_account_number?: boolean
    bank_account_name?: boolean
    status?: boolean
    proof?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payout"]>

  export type PayoutSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    amount?: boolean
    bank_name?: boolean
    bank_account_number?: boolean
    bank_account_name?: boolean
    status?: boolean
    proof?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payout"]>

  export type PayoutSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    amount?: boolean
    bank_name?: boolean
    bank_account_number?: boolean
    bank_account_name?: boolean
    status?: boolean
    proof?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payout"]>

  export type PayoutSelectScalar = {
    id?: boolean
    user_id?: boolean
    amount?: boolean
    bank_name?: boolean
    bank_account_number?: boolean
    bank_account_name?: boolean
    status?: boolean
    proof?: boolean
    created_at?: boolean
  }

  export type PayoutOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "amount" | "bank_name" | "bank_account_number" | "bank_account_name" | "status" | "proof" | "created_at", ExtArgs["result"]["payout"]>
  export type PayoutInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PayoutIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PayoutIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PayoutPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payout"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      amount: number
      bank_name: string
      bank_account_number: string
      bank_account_name: string
      status: $Enums.TransactionType | null
      proof: string | null
      created_at: Date
    }, ExtArgs["result"]["payout"]>
    composites: {}
  }

  type PayoutGetPayload<S extends boolean | null | undefined | PayoutDefaultArgs> = $Result.GetResult<Prisma.$PayoutPayload, S>

  type PayoutCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PayoutFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PayoutCountAggregateInputType | true
    }

  export interface PayoutDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payout'], meta: { name: 'Payout' } }
    /**
     * Find zero or one Payout that matches the filter.
     * @param {PayoutFindUniqueArgs} args - Arguments to find a Payout
     * @example
     * // Get one Payout
     * const payout = await prisma.payout.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PayoutFindUniqueArgs>(args: SelectSubset<T, PayoutFindUniqueArgs<ExtArgs>>): Prisma__PayoutClient<$Result.GetResult<Prisma.$PayoutPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payout that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PayoutFindUniqueOrThrowArgs} args - Arguments to find a Payout
     * @example
     * // Get one Payout
     * const payout = await prisma.payout.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PayoutFindUniqueOrThrowArgs>(args: SelectSubset<T, PayoutFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PayoutClient<$Result.GetResult<Prisma.$PayoutPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payout that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayoutFindFirstArgs} args - Arguments to find a Payout
     * @example
     * // Get one Payout
     * const payout = await prisma.payout.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PayoutFindFirstArgs>(args?: SelectSubset<T, PayoutFindFirstArgs<ExtArgs>>): Prisma__PayoutClient<$Result.GetResult<Prisma.$PayoutPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payout that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayoutFindFirstOrThrowArgs} args - Arguments to find a Payout
     * @example
     * // Get one Payout
     * const payout = await prisma.payout.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PayoutFindFirstOrThrowArgs>(args?: SelectSubset<T, PayoutFindFirstOrThrowArgs<ExtArgs>>): Prisma__PayoutClient<$Result.GetResult<Prisma.$PayoutPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payouts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayoutFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payouts
     * const payouts = await prisma.payout.findMany()
     * 
     * // Get first 10 Payouts
     * const payouts = await prisma.payout.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const payoutWithIdOnly = await prisma.payout.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PayoutFindManyArgs>(args?: SelectSubset<T, PayoutFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayoutPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payout.
     * @param {PayoutCreateArgs} args - Arguments to create a Payout.
     * @example
     * // Create one Payout
     * const Payout = await prisma.payout.create({
     *   data: {
     *     // ... data to create a Payout
     *   }
     * })
     * 
     */
    create<T extends PayoutCreateArgs>(args: SelectSubset<T, PayoutCreateArgs<ExtArgs>>): Prisma__PayoutClient<$Result.GetResult<Prisma.$PayoutPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payouts.
     * @param {PayoutCreateManyArgs} args - Arguments to create many Payouts.
     * @example
     * // Create many Payouts
     * const payout = await prisma.payout.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PayoutCreateManyArgs>(args?: SelectSubset<T, PayoutCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payouts and returns the data saved in the database.
     * @param {PayoutCreateManyAndReturnArgs} args - Arguments to create many Payouts.
     * @example
     * // Create many Payouts
     * const payout = await prisma.payout.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payouts and only return the `id`
     * const payoutWithIdOnly = await prisma.payout.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PayoutCreateManyAndReturnArgs>(args?: SelectSubset<T, PayoutCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayoutPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payout.
     * @param {PayoutDeleteArgs} args - Arguments to delete one Payout.
     * @example
     * // Delete one Payout
     * const Payout = await prisma.payout.delete({
     *   where: {
     *     // ... filter to delete one Payout
     *   }
     * })
     * 
     */
    delete<T extends PayoutDeleteArgs>(args: SelectSubset<T, PayoutDeleteArgs<ExtArgs>>): Prisma__PayoutClient<$Result.GetResult<Prisma.$PayoutPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payout.
     * @param {PayoutUpdateArgs} args - Arguments to update one Payout.
     * @example
     * // Update one Payout
     * const payout = await prisma.payout.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PayoutUpdateArgs>(args: SelectSubset<T, PayoutUpdateArgs<ExtArgs>>): Prisma__PayoutClient<$Result.GetResult<Prisma.$PayoutPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payouts.
     * @param {PayoutDeleteManyArgs} args - Arguments to filter Payouts to delete.
     * @example
     * // Delete a few Payouts
     * const { count } = await prisma.payout.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PayoutDeleteManyArgs>(args?: SelectSubset<T, PayoutDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayoutUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payouts
     * const payout = await prisma.payout.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PayoutUpdateManyArgs>(args: SelectSubset<T, PayoutUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payouts and returns the data updated in the database.
     * @param {PayoutUpdateManyAndReturnArgs} args - Arguments to update many Payouts.
     * @example
     * // Update many Payouts
     * const payout = await prisma.payout.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payouts and only return the `id`
     * const payoutWithIdOnly = await prisma.payout.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PayoutUpdateManyAndReturnArgs>(args: SelectSubset<T, PayoutUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayoutPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payout.
     * @param {PayoutUpsertArgs} args - Arguments to update or create a Payout.
     * @example
     * // Update or create a Payout
     * const payout = await prisma.payout.upsert({
     *   create: {
     *     // ... data to create a Payout
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payout we want to update
     *   }
     * })
     */
    upsert<T extends PayoutUpsertArgs>(args: SelectSubset<T, PayoutUpsertArgs<ExtArgs>>): Prisma__PayoutClient<$Result.GetResult<Prisma.$PayoutPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayoutCountArgs} args - Arguments to filter Payouts to count.
     * @example
     * // Count the number of Payouts
     * const count = await prisma.payout.count({
     *   where: {
     *     // ... the filter for the Payouts we want to count
     *   }
     * })
    **/
    count<T extends PayoutCountArgs>(
      args?: Subset<T, PayoutCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PayoutCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payout.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayoutAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PayoutAggregateArgs>(args: Subset<T, PayoutAggregateArgs>): Prisma.PrismaPromise<GetPayoutAggregateType<T>>

    /**
     * Group by Payout.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayoutGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PayoutGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PayoutGroupByArgs['orderBy'] }
        : { orderBy?: PayoutGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PayoutGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPayoutGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payout model
   */
  readonly fields: PayoutFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payout.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PayoutClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payout model
   */
  interface PayoutFieldRefs {
    readonly id: FieldRef<"Payout", 'String'>
    readonly user_id: FieldRef<"Payout", 'String'>
    readonly amount: FieldRef<"Payout", 'Int'>
    readonly bank_name: FieldRef<"Payout", 'String'>
    readonly bank_account_number: FieldRef<"Payout", 'String'>
    readonly bank_account_name: FieldRef<"Payout", 'String'>
    readonly status: FieldRef<"Payout", 'TransactionType'>
    readonly proof: FieldRef<"Payout", 'String'>
    readonly created_at: FieldRef<"Payout", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payout findUnique
   */
  export type PayoutFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payout
     */
    select?: PayoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payout
     */
    omit?: PayoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayoutInclude<ExtArgs> | null
    /**
     * Filter, which Payout to fetch.
     */
    where: PayoutWhereUniqueInput
  }

  /**
   * Payout findUniqueOrThrow
   */
  export type PayoutFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payout
     */
    select?: PayoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payout
     */
    omit?: PayoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayoutInclude<ExtArgs> | null
    /**
     * Filter, which Payout to fetch.
     */
    where: PayoutWhereUniqueInput
  }

  /**
   * Payout findFirst
   */
  export type PayoutFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payout
     */
    select?: PayoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payout
     */
    omit?: PayoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayoutInclude<ExtArgs> | null
    /**
     * Filter, which Payout to fetch.
     */
    where?: PayoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payouts to fetch.
     */
    orderBy?: PayoutOrderByWithRelationInput | PayoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payouts.
     */
    cursor?: PayoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payouts.
     */
    distinct?: PayoutScalarFieldEnum | PayoutScalarFieldEnum[]
  }

  /**
   * Payout findFirstOrThrow
   */
  export type PayoutFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payout
     */
    select?: PayoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payout
     */
    omit?: PayoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayoutInclude<ExtArgs> | null
    /**
     * Filter, which Payout to fetch.
     */
    where?: PayoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payouts to fetch.
     */
    orderBy?: PayoutOrderByWithRelationInput | PayoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payouts.
     */
    cursor?: PayoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payouts.
     */
    distinct?: PayoutScalarFieldEnum | PayoutScalarFieldEnum[]
  }

  /**
   * Payout findMany
   */
  export type PayoutFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payout
     */
    select?: PayoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payout
     */
    omit?: PayoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayoutInclude<ExtArgs> | null
    /**
     * Filter, which Payouts to fetch.
     */
    where?: PayoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payouts to fetch.
     */
    orderBy?: PayoutOrderByWithRelationInput | PayoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payouts.
     */
    cursor?: PayoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payouts.
     */
    skip?: number
    distinct?: PayoutScalarFieldEnum | PayoutScalarFieldEnum[]
  }

  /**
   * Payout create
   */
  export type PayoutCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payout
     */
    select?: PayoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payout
     */
    omit?: PayoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayoutInclude<ExtArgs> | null
    /**
     * The data needed to create a Payout.
     */
    data: XOR<PayoutCreateInput, PayoutUncheckedCreateInput>
  }

  /**
   * Payout createMany
   */
  export type PayoutCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payouts.
     */
    data: PayoutCreateManyInput | PayoutCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payout createManyAndReturn
   */
  export type PayoutCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payout
     */
    select?: PayoutSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payout
     */
    omit?: PayoutOmit<ExtArgs> | null
    /**
     * The data used to create many Payouts.
     */
    data: PayoutCreateManyInput | PayoutCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayoutIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payout update
   */
  export type PayoutUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payout
     */
    select?: PayoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payout
     */
    omit?: PayoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayoutInclude<ExtArgs> | null
    /**
     * The data needed to update a Payout.
     */
    data: XOR<PayoutUpdateInput, PayoutUncheckedUpdateInput>
    /**
     * Choose, which Payout to update.
     */
    where: PayoutWhereUniqueInput
  }

  /**
   * Payout updateMany
   */
  export type PayoutUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payouts.
     */
    data: XOR<PayoutUpdateManyMutationInput, PayoutUncheckedUpdateManyInput>
    /**
     * Filter which Payouts to update
     */
    where?: PayoutWhereInput
    /**
     * Limit how many Payouts to update.
     */
    limit?: number
  }

  /**
   * Payout updateManyAndReturn
   */
  export type PayoutUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payout
     */
    select?: PayoutSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payout
     */
    omit?: PayoutOmit<ExtArgs> | null
    /**
     * The data used to update Payouts.
     */
    data: XOR<PayoutUpdateManyMutationInput, PayoutUncheckedUpdateManyInput>
    /**
     * Filter which Payouts to update
     */
    where?: PayoutWhereInput
    /**
     * Limit how many Payouts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayoutIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payout upsert
   */
  export type PayoutUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payout
     */
    select?: PayoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payout
     */
    omit?: PayoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayoutInclude<ExtArgs> | null
    /**
     * The filter to search for the Payout to update in case it exists.
     */
    where: PayoutWhereUniqueInput
    /**
     * In case the Payout found by the `where` argument doesn't exist, create a new Payout with this data.
     */
    create: XOR<PayoutCreateInput, PayoutUncheckedCreateInput>
    /**
     * In case the Payout was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PayoutUpdateInput, PayoutUncheckedUpdateInput>
  }

  /**
   * Payout delete
   */
  export type PayoutDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payout
     */
    select?: PayoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payout
     */
    omit?: PayoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayoutInclude<ExtArgs> | null
    /**
     * Filter which Payout to delete.
     */
    where: PayoutWhereUniqueInput
  }

  /**
   * Payout deleteMany
   */
  export type PayoutDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payouts to delete
     */
    where?: PayoutWhereInput
    /**
     * Limit how many Payouts to delete.
     */
    limit?: number
  }

  /**
   * Payout without action
   */
  export type PayoutDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payout
     */
    select?: PayoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payout
     */
    omit?: PayoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayoutInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const RoleScalarFieldEnum: {
    id: 'id',
    role: 'role'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    photo: 'photo',
    role_id: 'role_id'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const GroupScalarFieldEnum: {
    id: 'id',
    name: 'name',
    photo: 'photo',
    type: 'type',
    about: 'about',
    benefit: 'benefit',
    price: 'price',
    created_at: 'created_at'
  };

  export type GroupScalarFieldEnum = (typeof GroupScalarFieldEnum)[keyof typeof GroupScalarFieldEnum]


  export const GroupAssetScalarFieldEnum: {
    id: 'id',
    group_id: 'group_id',
    filename: 'filename'
  };

  export type GroupAssetScalarFieldEnum = (typeof GroupAssetScalarFieldEnum)[keyof typeof GroupAssetScalarFieldEnum]


  export const RoomScalarFieldEnum: {
    id: 'id',
    name: 'name',
    is_group: 'is_group',
    created_by: 'created_by',
    created_at: 'created_at'
  };

  export type RoomScalarFieldEnum = (typeof RoomScalarFieldEnum)[keyof typeof RoomScalarFieldEnum]


  export const RoomMemberScalarFieldEnum: {
    id: 'id',
    room_id: 'room_id',
    user_id: 'user_id',
    role_id: 'role_id',
    joined_at: 'joined_at'
  };

  export type RoomMemberScalarFieldEnum = (typeof RoomMemberScalarFieldEnum)[keyof typeof RoomMemberScalarFieldEnum]


  export const RoomMessageScalarFieldEnum: {
    id: 'id',
    room_id: 'room_id',
    sender_id: 'sender_id',
    content: 'content',
    type: 'type',
    created_at: 'created_at'
  };

  export type RoomMessageScalarFieldEnum = (typeof RoomMessageScalarFieldEnum)[keyof typeof RoomMessageScalarFieldEnum]


  export const PasswordResetScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    token: 'token'
  };

  export type PasswordResetScalarFieldEnum = (typeof PasswordResetScalarFieldEnum)[keyof typeof PasswordResetScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    owner_id: 'owner_id',
    user_id: 'user_id',
    group_id: 'group_id',
    price: 'price',
    type: 'type',
    created_at: 'created_at'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const PayoutScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    amount: 'amount',
    bank_name: 'bank_name',
    bank_account_number: 'bank_account_number',
    bank_account_name: 'bank_account_name',
    status: 'status',
    proof: 'proof',
    created_at: 'created_at'
  };

  export type PayoutScalarFieldEnum = (typeof PayoutScalarFieldEnum)[keyof typeof PayoutScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'RoleType'
   */
  export type EnumRoleTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoleType'>
    


  /**
   * Reference to a field of type 'RoleType[]'
   */
  export type ListEnumRoleTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoleType[]'>
    


  /**
   * Reference to a field of type 'GroupType'
   */
  export type EnumGroupTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GroupType'>
    


  /**
   * Reference to a field of type 'GroupType[]'
   */
  export type ListEnumGroupTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GroupType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'MessageType'
   */
  export type EnumMessageTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MessageType'>
    


  /**
   * Reference to a field of type 'MessageType[]'
   */
  export type ListEnumMessageTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MessageType[]'>
    


  /**
   * Reference to a field of type 'TransactionType'
   */
  export type EnumTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionType'>
    


  /**
   * Reference to a field of type 'TransactionType[]'
   */
  export type ListEnumTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: StringFilter<"Role"> | string
    role?: EnumRoleTypeFilter<"Role"> | $Enums.RoleType
    users?: UserListRelationFilter
    room_member_roles?: RoomMemberListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    role?: SortOrder
    users?: UserOrderByRelationAggregateInput
    room_member_roles?: RoomMemberOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    role?: EnumRoleTypeFilter<"Role"> | $Enums.RoleType
    users?: UserListRelationFilter
    room_member_roles?: RoomMemberListRelationFilter
  }, "id">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    role?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Role"> | string
    role?: EnumRoleTypeWithAggregatesFilter<"Role"> | $Enums.RoleType
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    photo?: StringFilter<"User"> | string
    role_id?: StringFilter<"User"> | string
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    room?: RoomListRelationFilter
    room_members?: RoomMemberListRelationFilter
    room_message?: RoomMessageListRelationFilter
    password_resets?: PasswordResetListRelationFilter
    owner_transactions?: TransactionListRelationFilter
    member_transactions?: TransactionListRelationFilter
    payouts?: PayoutListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    photo?: SortOrder
    role_id?: SortOrder
    role?: RoleOrderByWithRelationInput
    room?: RoomOrderByRelationAggregateInput
    room_members?: RoomMemberOrderByRelationAggregateInput
    room_message?: RoomMessageOrderByRelationAggregateInput
    password_resets?: PasswordResetOrderByRelationAggregateInput
    owner_transactions?: TransactionOrderByRelationAggregateInput
    member_transactions?: TransactionOrderByRelationAggregateInput
    payouts?: PayoutOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    photo?: StringFilter<"User"> | string
    role_id?: StringFilter<"User"> | string
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    room?: RoomListRelationFilter
    room_members?: RoomMemberListRelationFilter
    room_message?: RoomMessageListRelationFilter
    password_resets?: PasswordResetListRelationFilter
    owner_transactions?: TransactionListRelationFilter
    member_transactions?: TransactionListRelationFilter
    payouts?: PayoutListRelationFilter
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    photo?: SortOrder
    role_id?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    photo?: StringWithAggregatesFilter<"User"> | string
    role_id?: StringWithAggregatesFilter<"User"> | string
  }

  export type GroupWhereInput = {
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    id?: StringFilter<"Group"> | string
    name?: StringFilter<"Group"> | string
    photo?: StringFilter<"Group"> | string
    type?: EnumGroupTypeFilter<"Group"> | $Enums.GroupType
    about?: StringFilter<"Group"> | string
    benefit?: StringNullableListFilter<"Group">
    price?: IntFilter<"Group"> | number
    created_at?: DateTimeFilter<"Group"> | Date | string
    assets?: GroupAssetListRelationFilter
    transactions?: TransactionListRelationFilter
  }

  export type GroupOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    photo?: SortOrder
    type?: SortOrder
    about?: SortOrder
    benefit?: SortOrder
    price?: SortOrder
    created_at?: SortOrder
    assets?: GroupAssetOrderByRelationAggregateInput
    transactions?: TransactionOrderByRelationAggregateInput
  }

  export type GroupWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    name?: StringFilter<"Group"> | string
    photo?: StringFilter<"Group"> | string
    type?: EnumGroupTypeFilter<"Group"> | $Enums.GroupType
    about?: StringFilter<"Group"> | string
    benefit?: StringNullableListFilter<"Group">
    price?: IntFilter<"Group"> | number
    created_at?: DateTimeFilter<"Group"> | Date | string
    assets?: GroupAssetListRelationFilter
    transactions?: TransactionListRelationFilter
  }, "id">

  export type GroupOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    photo?: SortOrder
    type?: SortOrder
    about?: SortOrder
    benefit?: SortOrder
    price?: SortOrder
    created_at?: SortOrder
    _count?: GroupCountOrderByAggregateInput
    _avg?: GroupAvgOrderByAggregateInput
    _max?: GroupMaxOrderByAggregateInput
    _min?: GroupMinOrderByAggregateInput
    _sum?: GroupSumOrderByAggregateInput
  }

  export type GroupScalarWhereWithAggregatesInput = {
    AND?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    OR?: GroupScalarWhereWithAggregatesInput[]
    NOT?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Group"> | string
    name?: StringWithAggregatesFilter<"Group"> | string
    photo?: StringWithAggregatesFilter<"Group"> | string
    type?: EnumGroupTypeWithAggregatesFilter<"Group"> | $Enums.GroupType
    about?: StringWithAggregatesFilter<"Group"> | string
    benefit?: StringNullableListFilter<"Group">
    price?: IntWithAggregatesFilter<"Group"> | number
    created_at?: DateTimeWithAggregatesFilter<"Group"> | Date | string
  }

  export type GroupAssetWhereInput = {
    AND?: GroupAssetWhereInput | GroupAssetWhereInput[]
    OR?: GroupAssetWhereInput[]
    NOT?: GroupAssetWhereInput | GroupAssetWhereInput[]
    id?: StringFilter<"GroupAsset"> | string
    group_id?: StringFilter<"GroupAsset"> | string
    filename?: StringFilter<"GroupAsset"> | string
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
  }

  export type GroupAssetOrderByWithRelationInput = {
    id?: SortOrder
    group_id?: SortOrder
    filename?: SortOrder
    group?: GroupOrderByWithRelationInput
  }

  export type GroupAssetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GroupAssetWhereInput | GroupAssetWhereInput[]
    OR?: GroupAssetWhereInput[]
    NOT?: GroupAssetWhereInput | GroupAssetWhereInput[]
    group_id?: StringFilter<"GroupAsset"> | string
    filename?: StringFilter<"GroupAsset"> | string
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
  }, "id">

  export type GroupAssetOrderByWithAggregationInput = {
    id?: SortOrder
    group_id?: SortOrder
    filename?: SortOrder
    _count?: GroupAssetCountOrderByAggregateInput
    _max?: GroupAssetMaxOrderByAggregateInput
    _min?: GroupAssetMinOrderByAggregateInput
  }

  export type GroupAssetScalarWhereWithAggregatesInput = {
    AND?: GroupAssetScalarWhereWithAggregatesInput | GroupAssetScalarWhereWithAggregatesInput[]
    OR?: GroupAssetScalarWhereWithAggregatesInput[]
    NOT?: GroupAssetScalarWhereWithAggregatesInput | GroupAssetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GroupAsset"> | string
    group_id?: StringWithAggregatesFilter<"GroupAsset"> | string
    filename?: StringWithAggregatesFilter<"GroupAsset"> | string
  }

  export type RoomWhereInput = {
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    id?: StringFilter<"Room"> | string
    name?: StringNullableFilter<"Room"> | string | null
    is_group?: BoolFilter<"Room"> | boolean
    created_by?: StringFilter<"Room"> | string
    created_at?: DateTimeFilter<"Room"> | Date | string
    created_by_user?: XOR<UserScalarRelationFilter, UserWhereInput>
    members?: RoomMemberListRelationFilter
    messages?: RoomMessageListRelationFilter
  }

  export type RoomOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    is_group?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
    created_by_user?: UserOrderByWithRelationInput
    members?: RoomMemberOrderByRelationAggregateInput
    messages?: RoomMessageOrderByRelationAggregateInput
  }

  export type RoomWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    name?: StringNullableFilter<"Room"> | string | null
    is_group?: BoolFilter<"Room"> | boolean
    created_by?: StringFilter<"Room"> | string
    created_at?: DateTimeFilter<"Room"> | Date | string
    created_by_user?: XOR<UserScalarRelationFilter, UserWhereInput>
    members?: RoomMemberListRelationFilter
    messages?: RoomMessageListRelationFilter
  }, "id">

  export type RoomOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    is_group?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
    _count?: RoomCountOrderByAggregateInput
    _max?: RoomMaxOrderByAggregateInput
    _min?: RoomMinOrderByAggregateInput
  }

  export type RoomScalarWhereWithAggregatesInput = {
    AND?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    OR?: RoomScalarWhereWithAggregatesInput[]
    NOT?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Room"> | string
    name?: StringNullableWithAggregatesFilter<"Room"> | string | null
    is_group?: BoolWithAggregatesFilter<"Room"> | boolean
    created_by?: StringWithAggregatesFilter<"Room"> | string
    created_at?: DateTimeWithAggregatesFilter<"Room"> | Date | string
  }

  export type RoomMemberWhereInput = {
    AND?: RoomMemberWhereInput | RoomMemberWhereInput[]
    OR?: RoomMemberWhereInput[]
    NOT?: RoomMemberWhereInput | RoomMemberWhereInput[]
    id?: StringFilter<"RoomMember"> | string
    room_id?: StringFilter<"RoomMember"> | string
    user_id?: StringFilter<"RoomMember"> | string
    role_id?: StringFilter<"RoomMember"> | string
    joined_at?: DateTimeFilter<"RoomMember"> | Date | string
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
  }

  export type RoomMemberOrderByWithRelationInput = {
    id?: SortOrder
    room_id?: SortOrder
    user_id?: SortOrder
    role_id?: SortOrder
    joined_at?: SortOrder
    room?: RoomOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    role?: RoleOrderByWithRelationInput
  }

  export type RoomMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RoomMemberWhereInput | RoomMemberWhereInput[]
    OR?: RoomMemberWhereInput[]
    NOT?: RoomMemberWhereInput | RoomMemberWhereInput[]
    room_id?: StringFilter<"RoomMember"> | string
    user_id?: StringFilter<"RoomMember"> | string
    role_id?: StringFilter<"RoomMember"> | string
    joined_at?: DateTimeFilter<"RoomMember"> | Date | string
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
  }, "id">

  export type RoomMemberOrderByWithAggregationInput = {
    id?: SortOrder
    room_id?: SortOrder
    user_id?: SortOrder
    role_id?: SortOrder
    joined_at?: SortOrder
    _count?: RoomMemberCountOrderByAggregateInput
    _max?: RoomMemberMaxOrderByAggregateInput
    _min?: RoomMemberMinOrderByAggregateInput
  }

  export type RoomMemberScalarWhereWithAggregatesInput = {
    AND?: RoomMemberScalarWhereWithAggregatesInput | RoomMemberScalarWhereWithAggregatesInput[]
    OR?: RoomMemberScalarWhereWithAggregatesInput[]
    NOT?: RoomMemberScalarWhereWithAggregatesInput | RoomMemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RoomMember"> | string
    room_id?: StringWithAggregatesFilter<"RoomMember"> | string
    user_id?: StringWithAggregatesFilter<"RoomMember"> | string
    role_id?: StringWithAggregatesFilter<"RoomMember"> | string
    joined_at?: DateTimeWithAggregatesFilter<"RoomMember"> | Date | string
  }

  export type RoomMessageWhereInput = {
    AND?: RoomMessageWhereInput | RoomMessageWhereInput[]
    OR?: RoomMessageWhereInput[]
    NOT?: RoomMessageWhereInput | RoomMessageWhereInput[]
    id?: StringFilter<"RoomMessage"> | string
    room_id?: StringFilter<"RoomMessage"> | string
    sender_id?: StringFilter<"RoomMessage"> | string
    content?: StringFilter<"RoomMessage"> | string
    type?: EnumMessageTypeNullableFilter<"RoomMessage"> | $Enums.MessageType | null
    created_at?: DateTimeFilter<"RoomMessage"> | Date | string
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RoomMessageOrderByWithRelationInput = {
    id?: SortOrder
    room_id?: SortOrder
    sender_id?: SortOrder
    content?: SortOrder
    type?: SortOrderInput | SortOrder
    created_at?: SortOrder
    room?: RoomOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type RoomMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RoomMessageWhereInput | RoomMessageWhereInput[]
    OR?: RoomMessageWhereInput[]
    NOT?: RoomMessageWhereInput | RoomMessageWhereInput[]
    room_id?: StringFilter<"RoomMessage"> | string
    sender_id?: StringFilter<"RoomMessage"> | string
    content?: StringFilter<"RoomMessage"> | string
    type?: EnumMessageTypeNullableFilter<"RoomMessage"> | $Enums.MessageType | null
    created_at?: DateTimeFilter<"RoomMessage"> | Date | string
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type RoomMessageOrderByWithAggregationInput = {
    id?: SortOrder
    room_id?: SortOrder
    sender_id?: SortOrder
    content?: SortOrder
    type?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: RoomMessageCountOrderByAggregateInput
    _max?: RoomMessageMaxOrderByAggregateInput
    _min?: RoomMessageMinOrderByAggregateInput
  }

  export type RoomMessageScalarWhereWithAggregatesInput = {
    AND?: RoomMessageScalarWhereWithAggregatesInput | RoomMessageScalarWhereWithAggregatesInput[]
    OR?: RoomMessageScalarWhereWithAggregatesInput[]
    NOT?: RoomMessageScalarWhereWithAggregatesInput | RoomMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RoomMessage"> | string
    room_id?: StringWithAggregatesFilter<"RoomMessage"> | string
    sender_id?: StringWithAggregatesFilter<"RoomMessage"> | string
    content?: StringWithAggregatesFilter<"RoomMessage"> | string
    type?: EnumMessageTypeNullableWithAggregatesFilter<"RoomMessage"> | $Enums.MessageType | null
    created_at?: DateTimeWithAggregatesFilter<"RoomMessage"> | Date | string
  }

  export type PasswordResetWhereInput = {
    AND?: PasswordResetWhereInput | PasswordResetWhereInput[]
    OR?: PasswordResetWhereInput[]
    NOT?: PasswordResetWhereInput | PasswordResetWhereInput[]
    id?: StringFilter<"PasswordReset"> | string
    user_id?: StringFilter<"PasswordReset"> | string
    token?: StringFilter<"PasswordReset"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PasswordResetOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    token?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PasswordResetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PasswordResetWhereInput | PasswordResetWhereInput[]
    OR?: PasswordResetWhereInput[]
    NOT?: PasswordResetWhereInput | PasswordResetWhereInput[]
    user_id?: StringFilter<"PasswordReset"> | string
    token?: StringFilter<"PasswordReset"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PasswordResetOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    token?: SortOrder
    _count?: PasswordResetCountOrderByAggregateInput
    _max?: PasswordResetMaxOrderByAggregateInput
    _min?: PasswordResetMinOrderByAggregateInput
  }

  export type PasswordResetScalarWhereWithAggregatesInput = {
    AND?: PasswordResetScalarWhereWithAggregatesInput | PasswordResetScalarWhereWithAggregatesInput[]
    OR?: PasswordResetScalarWhereWithAggregatesInput[]
    NOT?: PasswordResetScalarWhereWithAggregatesInput | PasswordResetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PasswordReset"> | string
    user_id?: StringWithAggregatesFilter<"PasswordReset"> | string
    token?: StringWithAggregatesFilter<"PasswordReset"> | string
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: StringFilter<"Transaction"> | string
    owner_id?: StringFilter<"Transaction"> | string
    user_id?: StringFilter<"Transaction"> | string
    group_id?: StringFilter<"Transaction"> | string
    price?: IntFilter<"Transaction"> | number
    type?: EnumTransactionTypeNullableFilter<"Transaction"> | $Enums.TransactionType | null
    created_at?: DateTimeFilter<"Transaction"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    owner_id?: SortOrder
    user_id?: SortOrder
    group_id?: SortOrder
    price?: SortOrder
    type?: SortOrderInput | SortOrder
    created_at?: SortOrder
    owner?: UserOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    group?: GroupOrderByWithRelationInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    owner_id?: StringFilter<"Transaction"> | string
    user_id?: StringFilter<"Transaction"> | string
    group_id?: StringFilter<"Transaction"> | string
    price?: IntFilter<"Transaction"> | number
    type?: EnumTransactionTypeNullableFilter<"Transaction"> | $Enums.TransactionType | null
    created_at?: DateTimeFilter<"Transaction"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
  }, "id">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    owner_id?: SortOrder
    user_id?: SortOrder
    group_id?: SortOrder
    price?: SortOrder
    type?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Transaction"> | string
    owner_id?: StringWithAggregatesFilter<"Transaction"> | string
    user_id?: StringWithAggregatesFilter<"Transaction"> | string
    group_id?: StringWithAggregatesFilter<"Transaction"> | string
    price?: IntWithAggregatesFilter<"Transaction"> | number
    type?: EnumTransactionTypeNullableWithAggregatesFilter<"Transaction"> | $Enums.TransactionType | null
    created_at?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
  }

  export type PayoutWhereInput = {
    AND?: PayoutWhereInput | PayoutWhereInput[]
    OR?: PayoutWhereInput[]
    NOT?: PayoutWhereInput | PayoutWhereInput[]
    id?: StringFilter<"Payout"> | string
    user_id?: StringFilter<"Payout"> | string
    amount?: IntFilter<"Payout"> | number
    bank_name?: StringFilter<"Payout"> | string
    bank_account_number?: StringFilter<"Payout"> | string
    bank_account_name?: StringFilter<"Payout"> | string
    status?: EnumTransactionTypeNullableFilter<"Payout"> | $Enums.TransactionType | null
    proof?: StringNullableFilter<"Payout"> | string | null
    created_at?: DateTimeFilter<"Payout"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PayoutOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    amount?: SortOrder
    bank_name?: SortOrder
    bank_account_number?: SortOrder
    bank_account_name?: SortOrder
    status?: SortOrderInput | SortOrder
    proof?: SortOrderInput | SortOrder
    created_at?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PayoutWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PayoutWhereInput | PayoutWhereInput[]
    OR?: PayoutWhereInput[]
    NOT?: PayoutWhereInput | PayoutWhereInput[]
    user_id?: StringFilter<"Payout"> | string
    amount?: IntFilter<"Payout"> | number
    bank_name?: StringFilter<"Payout"> | string
    bank_account_number?: StringFilter<"Payout"> | string
    bank_account_name?: StringFilter<"Payout"> | string
    status?: EnumTransactionTypeNullableFilter<"Payout"> | $Enums.TransactionType | null
    proof?: StringNullableFilter<"Payout"> | string | null
    created_at?: DateTimeFilter<"Payout"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PayoutOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    amount?: SortOrder
    bank_name?: SortOrder
    bank_account_number?: SortOrder
    bank_account_name?: SortOrder
    status?: SortOrderInput | SortOrder
    proof?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: PayoutCountOrderByAggregateInput
    _avg?: PayoutAvgOrderByAggregateInput
    _max?: PayoutMaxOrderByAggregateInput
    _min?: PayoutMinOrderByAggregateInput
    _sum?: PayoutSumOrderByAggregateInput
  }

  export type PayoutScalarWhereWithAggregatesInput = {
    AND?: PayoutScalarWhereWithAggregatesInput | PayoutScalarWhereWithAggregatesInput[]
    OR?: PayoutScalarWhereWithAggregatesInput[]
    NOT?: PayoutScalarWhereWithAggregatesInput | PayoutScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payout"> | string
    user_id?: StringWithAggregatesFilter<"Payout"> | string
    amount?: IntWithAggregatesFilter<"Payout"> | number
    bank_name?: StringWithAggregatesFilter<"Payout"> | string
    bank_account_number?: StringWithAggregatesFilter<"Payout"> | string
    bank_account_name?: StringWithAggregatesFilter<"Payout"> | string
    status?: EnumTransactionTypeNullableWithAggregatesFilter<"Payout"> | $Enums.TransactionType | null
    proof?: StringNullableWithAggregatesFilter<"Payout"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Payout"> | Date | string
  }

  export type RoleCreateInput = {
    id?: string
    role: $Enums.RoleType
    users?: UserCreateNestedManyWithoutRoleInput
    room_member_roles?: RoomMemberCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    id?: string
    role: $Enums.RoleType
    users?: UserUncheckedCreateNestedManyWithoutRoleInput
    room_member_roles?: RoomMemberUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleTypeFieldUpdateOperationsInput | $Enums.RoleType
    users?: UserUpdateManyWithoutRoleNestedInput
    room_member_roles?: RoomMemberUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleTypeFieldUpdateOperationsInput | $Enums.RoleType
    users?: UserUncheckedUpdateManyWithoutRoleNestedInput
    room_member_roles?: RoomMemberUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    id?: string
    role: $Enums.RoleType
  }

  export type RoleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleTypeFieldUpdateOperationsInput | $Enums.RoleType
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleTypeFieldUpdateOperationsInput | $Enums.RoleType
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    photo: string
    role: RoleCreateNestedOneWithoutUsersInput
    room?: RoomCreateNestedManyWithoutCreated_by_userInput
    room_members?: RoomMemberCreateNestedManyWithoutUserInput
    room_message?: RoomMessageCreateNestedManyWithoutUserInput
    password_resets?: PasswordResetCreateNestedManyWithoutUserInput
    owner_transactions?: TransactionCreateNestedManyWithoutOwnerInput
    member_transactions?: TransactionCreateNestedManyWithoutUserInput
    payouts?: PayoutCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    photo: string
    role_id: string
    room?: RoomUncheckedCreateNestedManyWithoutCreated_by_userInput
    room_members?: RoomMemberUncheckedCreateNestedManyWithoutUserInput
    room_message?: RoomMessageUncheckedCreateNestedManyWithoutUserInput
    password_resets?: PasswordResetUncheckedCreateNestedManyWithoutUserInput
    owner_transactions?: TransactionUncheckedCreateNestedManyWithoutOwnerInput
    member_transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    payouts?: PayoutUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    room?: RoomUpdateManyWithoutCreated_by_userNestedInput
    room_members?: RoomMemberUpdateManyWithoutUserNestedInput
    room_message?: RoomMessageUpdateManyWithoutUserNestedInput
    password_resets?: PasswordResetUpdateManyWithoutUserNestedInput
    owner_transactions?: TransactionUpdateManyWithoutOwnerNestedInput
    member_transactions?: TransactionUpdateManyWithoutUserNestedInput
    payouts?: PayoutUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    role_id?: StringFieldUpdateOperationsInput | string
    room?: RoomUncheckedUpdateManyWithoutCreated_by_userNestedInput
    room_members?: RoomMemberUncheckedUpdateManyWithoutUserNestedInput
    room_message?: RoomMessageUncheckedUpdateManyWithoutUserNestedInput
    password_resets?: PasswordResetUncheckedUpdateManyWithoutUserNestedInput
    owner_transactions?: TransactionUncheckedUpdateManyWithoutOwnerNestedInput
    member_transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    payouts?: PayoutUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    photo: string
    role_id: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    role_id?: StringFieldUpdateOperationsInput | string
  }

  export type GroupCreateInput = {
    id?: string
    name: string
    photo: string
    type: $Enums.GroupType
    about: string
    benefit?: GroupCreatebenefitInput | string[]
    price: number
    created_at?: Date | string
    assets?: GroupAssetCreateNestedManyWithoutGroupInput
    transactions?: TransactionCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateInput = {
    id?: string
    name: string
    photo: string
    type: $Enums.GroupType
    about: string
    benefit?: GroupCreatebenefitInput | string[]
    price: number
    created_at?: Date | string
    assets?: GroupAssetUncheckedCreateNestedManyWithoutGroupInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    type?: EnumGroupTypeFieldUpdateOperationsInput | $Enums.GroupType
    about?: StringFieldUpdateOperationsInput | string
    benefit?: GroupUpdatebenefitInput | string[]
    price?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    assets?: GroupAssetUpdateManyWithoutGroupNestedInput
    transactions?: TransactionUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    type?: EnumGroupTypeFieldUpdateOperationsInput | $Enums.GroupType
    about?: StringFieldUpdateOperationsInput | string
    benefit?: GroupUpdatebenefitInput | string[]
    price?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    assets?: GroupAssetUncheckedUpdateManyWithoutGroupNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupCreateManyInput = {
    id?: string
    name: string
    photo: string
    type: $Enums.GroupType
    about: string
    benefit?: GroupCreatebenefitInput | string[]
    price: number
    created_at?: Date | string
  }

  export type GroupUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    type?: EnumGroupTypeFieldUpdateOperationsInput | $Enums.GroupType
    about?: StringFieldUpdateOperationsInput | string
    benefit?: GroupUpdatebenefitInput | string[]
    price?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    type?: EnumGroupTypeFieldUpdateOperationsInput | $Enums.GroupType
    about?: StringFieldUpdateOperationsInput | string
    benefit?: GroupUpdatebenefitInput | string[]
    price?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupAssetCreateInput = {
    id?: string
    filename: string
    group: GroupCreateNestedOneWithoutAssetsInput
  }

  export type GroupAssetUncheckedCreateInput = {
    id?: string
    group_id: string
    filename: string
  }

  export type GroupAssetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    group?: GroupUpdateOneRequiredWithoutAssetsNestedInput
  }

  export type GroupAssetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    group_id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
  }

  export type GroupAssetCreateManyInput = {
    id?: string
    group_id: string
    filename: string
  }

  export type GroupAssetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
  }

  export type GroupAssetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    group_id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
  }

  export type RoomCreateInput = {
    id?: string
    name?: string | null
    is_group?: boolean
    created_at?: Date | string
    created_by_user: UserCreateNestedOneWithoutRoomInput
    members?: RoomMemberCreateNestedManyWithoutRoomInput
    messages?: RoomMessageCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateInput = {
    id?: string
    name?: string | null
    is_group?: boolean
    created_by: string
    created_at?: Date | string
    members?: RoomMemberUncheckedCreateNestedManyWithoutRoomInput
    messages?: RoomMessageUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    is_group?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_user?: UserUpdateOneRequiredWithoutRoomNestedInput
    members?: RoomMemberUpdateManyWithoutRoomNestedInput
    messages?: RoomMessageUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    is_group?: BoolFieldUpdateOperationsInput | boolean
    created_by?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: RoomMemberUncheckedUpdateManyWithoutRoomNestedInput
    messages?: RoomMessageUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomCreateManyInput = {
    id?: string
    name?: string | null
    is_group?: boolean
    created_by: string
    created_at?: Date | string
  }

  export type RoomUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    is_group?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    is_group?: BoolFieldUpdateOperationsInput | boolean
    created_by?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomMemberCreateInput = {
    id?: string
    joined_at?: Date | string
    room: RoomCreateNestedOneWithoutMembersInput
    user: UserCreateNestedOneWithoutRoom_membersInput
    role: RoleCreateNestedOneWithoutRoom_member_rolesInput
  }

  export type RoomMemberUncheckedCreateInput = {
    id?: string
    room_id: string
    user_id: string
    role_id: string
    joined_at?: Date | string
  }

  export type RoomMemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutMembersNestedInput
    user?: UserUpdateOneRequiredWithoutRoom_membersNestedInput
    role?: RoleUpdateOneRequiredWithoutRoom_member_rolesNestedInput
  }

  export type RoomMemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    room_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    role_id?: StringFieldUpdateOperationsInput | string
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomMemberCreateManyInput = {
    id?: string
    room_id: string
    user_id: string
    role_id: string
    joined_at?: Date | string
  }

  export type RoomMemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomMemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    room_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    role_id?: StringFieldUpdateOperationsInput | string
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomMessageCreateInput = {
    id?: string
    content: string
    type?: $Enums.MessageType | null
    created_at?: Date | string
    room: RoomCreateNestedOneWithoutMessagesInput
    user: UserCreateNestedOneWithoutRoom_messageInput
  }

  export type RoomMessageUncheckedCreateInput = {
    id?: string
    room_id: string
    sender_id: string
    content: string
    type?: $Enums.MessageType | null
    created_at?: Date | string
  }

  export type RoomMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: NullableEnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutMessagesNestedInput
    user?: UserUpdateOneRequiredWithoutRoom_messageNestedInput
  }

  export type RoomMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    room_id?: StringFieldUpdateOperationsInput | string
    sender_id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: NullableEnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomMessageCreateManyInput = {
    id?: string
    room_id: string
    sender_id: string
    content: string
    type?: $Enums.MessageType | null
    created_at?: Date | string
  }

  export type RoomMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: NullableEnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    room_id?: StringFieldUpdateOperationsInput | string
    sender_id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: NullableEnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetCreateInput = {
    id?: string
    token: string
    user: UserCreateNestedOneWithoutPassword_resetsInput
  }

  export type PasswordResetUncheckedCreateInput = {
    id?: string
    user_id: string
    token: string
  }

  export type PasswordResetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutPassword_resetsNestedInput
  }

  export type PasswordResetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
  }

  export type PasswordResetCreateManyInput = {
    id?: string
    user_id: string
    token: string
  }

  export type PasswordResetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
  }

  export type PasswordResetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionCreateInput = {
    id?: string
    price: number
    type?: $Enums.TransactionType | null
    created_at?: Date | string
    owner: UserCreateNestedOneWithoutOwner_transactionsInput
    user: UserCreateNestedOneWithoutMember_transactionsInput
    group: GroupCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateInput = {
    id?: string
    owner_id: string
    user_id: string
    group_id: string
    price: number
    type?: $Enums.TransactionType | null
    created_at?: Date | string
  }

  export type TransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    type?: NullableEnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwner_transactionsNestedInput
    user?: UserUpdateOneRequiredWithoutMember_transactionsNestedInput
    group?: GroupUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    group_id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    type?: NullableEnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyInput = {
    id?: string
    owner_id: string
    user_id: string
    group_id: string
    price: number
    type?: $Enums.TransactionType | null
    created_at?: Date | string
  }

  export type TransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    type?: NullableEnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    group_id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    type?: NullableEnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayoutCreateInput = {
    id?: string
    amount: number
    bank_name: string
    bank_account_number: string
    bank_account_name: string
    status?: $Enums.TransactionType | null
    proof?: string | null
    created_at?: Date | string
    user: UserCreateNestedOneWithoutPayoutsInput
  }

  export type PayoutUncheckedCreateInput = {
    id?: string
    user_id: string
    amount: number
    bank_name: string
    bank_account_number: string
    bank_account_name: string
    status?: $Enums.TransactionType | null
    proof?: string | null
    created_at?: Date | string
  }

  export type PayoutUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    bank_name?: StringFieldUpdateOperationsInput | string
    bank_account_number?: StringFieldUpdateOperationsInput | string
    bank_account_name?: StringFieldUpdateOperationsInput | string
    status?: NullableEnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType | null
    proof?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPayoutsNestedInput
  }

  export type PayoutUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    bank_name?: StringFieldUpdateOperationsInput | string
    bank_account_number?: StringFieldUpdateOperationsInput | string
    bank_account_name?: StringFieldUpdateOperationsInput | string
    status?: NullableEnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType | null
    proof?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayoutCreateManyInput = {
    id?: string
    user_id: string
    amount: number
    bank_name: string
    bank_account_number: string
    bank_account_name: string
    status?: $Enums.TransactionType | null
    proof?: string | null
    created_at?: Date | string
  }

  export type PayoutUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    bank_name?: StringFieldUpdateOperationsInput | string
    bank_account_number?: StringFieldUpdateOperationsInput | string
    bank_account_name?: StringFieldUpdateOperationsInput | string
    status?: NullableEnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType | null
    proof?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayoutUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    bank_name?: StringFieldUpdateOperationsInput | string
    bank_account_number?: StringFieldUpdateOperationsInput | string
    bank_account_name?: StringFieldUpdateOperationsInput | string
    status?: NullableEnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType | null
    proof?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleType | EnumRoleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RoleType[] | ListEnumRoleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleType[] | ListEnumRoleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleTypeFilter<$PrismaModel> | $Enums.RoleType
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type RoomMemberListRelationFilter = {
    every?: RoomMemberWhereInput
    some?: RoomMemberWhereInput
    none?: RoomMemberWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoomMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleType | EnumRoleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RoleType[] | ListEnumRoleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleType[] | ListEnumRoleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleTypeWithAggregatesFilter<$PrismaModel> | $Enums.RoleType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleTypeFilter<$PrismaModel>
    _max?: NestedEnumRoleTypeFilter<$PrismaModel>
  }

  export type RoleScalarRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type RoomListRelationFilter = {
    every?: RoomWhereInput
    some?: RoomWhereInput
    none?: RoomWhereInput
  }

  export type RoomMessageListRelationFilter = {
    every?: RoomMessageWhereInput
    some?: RoomMessageWhereInput
    none?: RoomMessageWhereInput
  }

  export type PasswordResetListRelationFilter = {
    every?: PasswordResetWhereInput
    some?: PasswordResetWhereInput
    none?: PasswordResetWhereInput
  }

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type PayoutListRelationFilter = {
    every?: PayoutWhereInput
    some?: PayoutWhereInput
    none?: PayoutWhereInput
  }

  export type RoomOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoomMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PasswordResetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PayoutOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    photo?: SortOrder
    role_id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    photo?: SortOrder
    role_id?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    photo?: SortOrder
    role_id?: SortOrder
  }

  export type EnumGroupTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.GroupType | EnumGroupTypeFieldRefInput<$PrismaModel>
    in?: $Enums.GroupType[] | ListEnumGroupTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.GroupType[] | ListEnumGroupTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumGroupTypeFilter<$PrismaModel> | $Enums.GroupType
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type GroupAssetListRelationFilter = {
    every?: GroupAssetWhereInput
    some?: GroupAssetWhereInput
    none?: GroupAssetWhereInput
  }

  export type GroupAssetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    photo?: SortOrder
    type?: SortOrder
    about?: SortOrder
    benefit?: SortOrder
    price?: SortOrder
    created_at?: SortOrder
  }

  export type GroupAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type GroupMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    photo?: SortOrder
    type?: SortOrder
    about?: SortOrder
    price?: SortOrder
    created_at?: SortOrder
  }

  export type GroupMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    photo?: SortOrder
    type?: SortOrder
    about?: SortOrder
    price?: SortOrder
    created_at?: SortOrder
  }

  export type GroupSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type EnumGroupTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GroupType | EnumGroupTypeFieldRefInput<$PrismaModel>
    in?: $Enums.GroupType[] | ListEnumGroupTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.GroupType[] | ListEnumGroupTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumGroupTypeWithAggregatesFilter<$PrismaModel> | $Enums.GroupType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGroupTypeFilter<$PrismaModel>
    _max?: NestedEnumGroupTypeFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type GroupScalarRelationFilter = {
    is?: GroupWhereInput
    isNot?: GroupWhereInput
  }

  export type GroupAssetCountOrderByAggregateInput = {
    id?: SortOrder
    group_id?: SortOrder
    filename?: SortOrder
  }

  export type GroupAssetMaxOrderByAggregateInput = {
    id?: SortOrder
    group_id?: SortOrder
    filename?: SortOrder
  }

  export type GroupAssetMinOrderByAggregateInput = {
    id?: SortOrder
    group_id?: SortOrder
    filename?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RoomCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    is_group?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
  }

  export type RoomMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    is_group?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
  }

  export type RoomMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    is_group?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type RoomScalarRelationFilter = {
    is?: RoomWhereInput
    isNot?: RoomWhereInput
  }

  export type RoomMemberCountOrderByAggregateInput = {
    id?: SortOrder
    room_id?: SortOrder
    user_id?: SortOrder
    role_id?: SortOrder
    joined_at?: SortOrder
  }

  export type RoomMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    room_id?: SortOrder
    user_id?: SortOrder
    role_id?: SortOrder
    joined_at?: SortOrder
  }

  export type RoomMemberMinOrderByAggregateInput = {
    id?: SortOrder
    room_id?: SortOrder
    user_id?: SortOrder
    role_id?: SortOrder
    joined_at?: SortOrder
  }

  export type EnumMessageTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageType | EnumMessageTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMessageTypeNullableFilter<$PrismaModel> | $Enums.MessageType | null
  }

  export type RoomMessageCountOrderByAggregateInput = {
    id?: SortOrder
    room_id?: SortOrder
    sender_id?: SortOrder
    content?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
  }

  export type RoomMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    room_id?: SortOrder
    sender_id?: SortOrder
    content?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
  }

  export type RoomMessageMinOrderByAggregateInput = {
    id?: SortOrder
    room_id?: SortOrder
    sender_id?: SortOrder
    content?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
  }

  export type EnumMessageTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageType | EnumMessageTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMessageTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.MessageType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumMessageTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumMessageTypeNullableFilter<$PrismaModel>
  }

  export type PasswordResetCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    token?: SortOrder
  }

  export type PasswordResetMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    token?: SortOrder
  }

  export type PasswordResetMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    token?: SortOrder
  }

  export type EnumTransactionTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTransactionTypeNullableFilter<$PrismaModel> | $Enums.TransactionType | null
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    owner_id?: SortOrder
    user_id?: SortOrder
    group_id?: SortOrder
    price?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    owner_id?: SortOrder
    user_id?: SortOrder
    group_id?: SortOrder
    price?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    owner_id?: SortOrder
    user_id?: SortOrder
    group_id?: SortOrder
    price?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type EnumTransactionTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTransactionTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeNullableFilter<$PrismaModel>
  }

  export type PayoutCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    amount?: SortOrder
    bank_name?: SortOrder
    bank_account_number?: SortOrder
    bank_account_name?: SortOrder
    status?: SortOrder
    proof?: SortOrder
    created_at?: SortOrder
  }

  export type PayoutAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PayoutMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    amount?: SortOrder
    bank_name?: SortOrder
    bank_account_number?: SortOrder
    bank_account_name?: SortOrder
    status?: SortOrder
    proof?: SortOrder
    created_at?: SortOrder
  }

  export type PayoutMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    amount?: SortOrder
    bank_name?: SortOrder
    bank_account_number?: SortOrder
    bank_account_name?: SortOrder
    status?: SortOrder
    proof?: SortOrder
    created_at?: SortOrder
  }

  export type PayoutSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type UserCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type RoomMemberCreateNestedManyWithoutRoleInput = {
    create?: XOR<RoomMemberCreateWithoutRoleInput, RoomMemberUncheckedCreateWithoutRoleInput> | RoomMemberCreateWithoutRoleInput[] | RoomMemberUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: RoomMemberCreateOrConnectWithoutRoleInput | RoomMemberCreateOrConnectWithoutRoleInput[]
    createMany?: RoomMemberCreateManyRoleInputEnvelope
    connect?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type RoomMemberUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<RoomMemberCreateWithoutRoleInput, RoomMemberUncheckedCreateWithoutRoleInput> | RoomMemberCreateWithoutRoleInput[] | RoomMemberUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: RoomMemberCreateOrConnectWithoutRoleInput | RoomMemberCreateOrConnectWithoutRoleInput[]
    createMany?: RoomMemberCreateManyRoleInputEnvelope
    connect?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleTypeFieldUpdateOperationsInput = {
    set?: $Enums.RoleType
  }

  export type UserUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type RoomMemberUpdateManyWithoutRoleNestedInput = {
    create?: XOR<RoomMemberCreateWithoutRoleInput, RoomMemberUncheckedCreateWithoutRoleInput> | RoomMemberCreateWithoutRoleInput[] | RoomMemberUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: RoomMemberCreateOrConnectWithoutRoleInput | RoomMemberCreateOrConnectWithoutRoleInput[]
    upsert?: RoomMemberUpsertWithWhereUniqueWithoutRoleInput | RoomMemberUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: RoomMemberCreateManyRoleInputEnvelope
    set?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
    disconnect?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
    delete?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
    connect?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
    update?: RoomMemberUpdateWithWhereUniqueWithoutRoleInput | RoomMemberUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: RoomMemberUpdateManyWithWhereWithoutRoleInput | RoomMemberUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: RoomMemberScalarWhereInput | RoomMemberScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type RoomMemberUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<RoomMemberCreateWithoutRoleInput, RoomMemberUncheckedCreateWithoutRoleInput> | RoomMemberCreateWithoutRoleInput[] | RoomMemberUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: RoomMemberCreateOrConnectWithoutRoleInput | RoomMemberCreateOrConnectWithoutRoleInput[]
    upsert?: RoomMemberUpsertWithWhereUniqueWithoutRoleInput | RoomMemberUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: RoomMemberCreateManyRoleInputEnvelope
    set?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
    disconnect?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
    delete?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
    connect?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
    update?: RoomMemberUpdateWithWhereUniqueWithoutRoleInput | RoomMemberUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: RoomMemberUpdateManyWithWhereWithoutRoleInput | RoomMemberUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: RoomMemberScalarWhereInput | RoomMemberScalarWhereInput[]
  }

  export type RoleCreateNestedOneWithoutUsersInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    connect?: RoleWhereUniqueInput
  }

  export type RoomCreateNestedManyWithoutCreated_by_userInput = {
    create?: XOR<RoomCreateWithoutCreated_by_userInput, RoomUncheckedCreateWithoutCreated_by_userInput> | RoomCreateWithoutCreated_by_userInput[] | RoomUncheckedCreateWithoutCreated_by_userInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutCreated_by_userInput | RoomCreateOrConnectWithoutCreated_by_userInput[]
    createMany?: RoomCreateManyCreated_by_userInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type RoomMemberCreateNestedManyWithoutUserInput = {
    create?: XOR<RoomMemberCreateWithoutUserInput, RoomMemberUncheckedCreateWithoutUserInput> | RoomMemberCreateWithoutUserInput[] | RoomMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoomMemberCreateOrConnectWithoutUserInput | RoomMemberCreateOrConnectWithoutUserInput[]
    createMany?: RoomMemberCreateManyUserInputEnvelope
    connect?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
  }

  export type RoomMessageCreateNestedManyWithoutUserInput = {
    create?: XOR<RoomMessageCreateWithoutUserInput, RoomMessageUncheckedCreateWithoutUserInput> | RoomMessageCreateWithoutUserInput[] | RoomMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoomMessageCreateOrConnectWithoutUserInput | RoomMessageCreateOrConnectWithoutUserInput[]
    createMany?: RoomMessageCreateManyUserInputEnvelope
    connect?: RoomMessageWhereUniqueInput | RoomMessageWhereUniqueInput[]
  }

  export type PasswordResetCreateNestedManyWithoutUserInput = {
    create?: XOR<PasswordResetCreateWithoutUserInput, PasswordResetUncheckedCreateWithoutUserInput> | PasswordResetCreateWithoutUserInput[] | PasswordResetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PasswordResetCreateOrConnectWithoutUserInput | PasswordResetCreateOrConnectWithoutUserInput[]
    createMany?: PasswordResetCreateManyUserInputEnvelope
    connect?: PasswordResetWhereUniqueInput | PasswordResetWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutOwnerInput = {
    create?: XOR<TransactionCreateWithoutOwnerInput, TransactionUncheckedCreateWithoutOwnerInput> | TransactionCreateWithoutOwnerInput[] | TransactionUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutOwnerInput | TransactionCreateOrConnectWithoutOwnerInput[]
    createMany?: TransactionCreateManyOwnerInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type PayoutCreateNestedManyWithoutUserInput = {
    create?: XOR<PayoutCreateWithoutUserInput, PayoutUncheckedCreateWithoutUserInput> | PayoutCreateWithoutUserInput[] | PayoutUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PayoutCreateOrConnectWithoutUserInput | PayoutCreateOrConnectWithoutUserInput[]
    createMany?: PayoutCreateManyUserInputEnvelope
    connect?: PayoutWhereUniqueInput | PayoutWhereUniqueInput[]
  }

  export type RoomUncheckedCreateNestedManyWithoutCreated_by_userInput = {
    create?: XOR<RoomCreateWithoutCreated_by_userInput, RoomUncheckedCreateWithoutCreated_by_userInput> | RoomCreateWithoutCreated_by_userInput[] | RoomUncheckedCreateWithoutCreated_by_userInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutCreated_by_userInput | RoomCreateOrConnectWithoutCreated_by_userInput[]
    createMany?: RoomCreateManyCreated_by_userInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type RoomMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RoomMemberCreateWithoutUserInput, RoomMemberUncheckedCreateWithoutUserInput> | RoomMemberCreateWithoutUserInput[] | RoomMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoomMemberCreateOrConnectWithoutUserInput | RoomMemberCreateOrConnectWithoutUserInput[]
    createMany?: RoomMemberCreateManyUserInputEnvelope
    connect?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
  }

  export type RoomMessageUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RoomMessageCreateWithoutUserInput, RoomMessageUncheckedCreateWithoutUserInput> | RoomMessageCreateWithoutUserInput[] | RoomMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoomMessageCreateOrConnectWithoutUserInput | RoomMessageCreateOrConnectWithoutUserInput[]
    createMany?: RoomMessageCreateManyUserInputEnvelope
    connect?: RoomMessageWhereUniqueInput | RoomMessageWhereUniqueInput[]
  }

  export type PasswordResetUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PasswordResetCreateWithoutUserInput, PasswordResetUncheckedCreateWithoutUserInput> | PasswordResetCreateWithoutUserInput[] | PasswordResetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PasswordResetCreateOrConnectWithoutUserInput | PasswordResetCreateOrConnectWithoutUserInput[]
    createMany?: PasswordResetCreateManyUserInputEnvelope
    connect?: PasswordResetWhereUniqueInput | PasswordResetWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<TransactionCreateWithoutOwnerInput, TransactionUncheckedCreateWithoutOwnerInput> | TransactionCreateWithoutOwnerInput[] | TransactionUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutOwnerInput | TransactionCreateOrConnectWithoutOwnerInput[]
    createMany?: TransactionCreateManyOwnerInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type PayoutUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PayoutCreateWithoutUserInput, PayoutUncheckedCreateWithoutUserInput> | PayoutCreateWithoutUserInput[] | PayoutUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PayoutCreateOrConnectWithoutUserInput | PayoutCreateOrConnectWithoutUserInput[]
    createMany?: PayoutCreateManyUserInputEnvelope
    connect?: PayoutWhereUniqueInput | PayoutWhereUniqueInput[]
  }

  export type RoleUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    upsert?: RoleUpsertWithoutUsersInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutUsersInput, RoleUpdateWithoutUsersInput>, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type RoomUpdateManyWithoutCreated_by_userNestedInput = {
    create?: XOR<RoomCreateWithoutCreated_by_userInput, RoomUncheckedCreateWithoutCreated_by_userInput> | RoomCreateWithoutCreated_by_userInput[] | RoomUncheckedCreateWithoutCreated_by_userInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutCreated_by_userInput | RoomCreateOrConnectWithoutCreated_by_userInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutCreated_by_userInput | RoomUpsertWithWhereUniqueWithoutCreated_by_userInput[]
    createMany?: RoomCreateManyCreated_by_userInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutCreated_by_userInput | RoomUpdateWithWhereUniqueWithoutCreated_by_userInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutCreated_by_userInput | RoomUpdateManyWithWhereWithoutCreated_by_userInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type RoomMemberUpdateManyWithoutUserNestedInput = {
    create?: XOR<RoomMemberCreateWithoutUserInput, RoomMemberUncheckedCreateWithoutUserInput> | RoomMemberCreateWithoutUserInput[] | RoomMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoomMemberCreateOrConnectWithoutUserInput | RoomMemberCreateOrConnectWithoutUserInput[]
    upsert?: RoomMemberUpsertWithWhereUniqueWithoutUserInput | RoomMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RoomMemberCreateManyUserInputEnvelope
    set?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
    disconnect?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
    delete?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
    connect?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
    update?: RoomMemberUpdateWithWhereUniqueWithoutUserInput | RoomMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RoomMemberUpdateManyWithWhereWithoutUserInput | RoomMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RoomMemberScalarWhereInput | RoomMemberScalarWhereInput[]
  }

  export type RoomMessageUpdateManyWithoutUserNestedInput = {
    create?: XOR<RoomMessageCreateWithoutUserInput, RoomMessageUncheckedCreateWithoutUserInput> | RoomMessageCreateWithoutUserInput[] | RoomMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoomMessageCreateOrConnectWithoutUserInput | RoomMessageCreateOrConnectWithoutUserInput[]
    upsert?: RoomMessageUpsertWithWhereUniqueWithoutUserInput | RoomMessageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RoomMessageCreateManyUserInputEnvelope
    set?: RoomMessageWhereUniqueInput | RoomMessageWhereUniqueInput[]
    disconnect?: RoomMessageWhereUniqueInput | RoomMessageWhereUniqueInput[]
    delete?: RoomMessageWhereUniqueInput | RoomMessageWhereUniqueInput[]
    connect?: RoomMessageWhereUniqueInput | RoomMessageWhereUniqueInput[]
    update?: RoomMessageUpdateWithWhereUniqueWithoutUserInput | RoomMessageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RoomMessageUpdateManyWithWhereWithoutUserInput | RoomMessageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RoomMessageScalarWhereInput | RoomMessageScalarWhereInput[]
  }

  export type PasswordResetUpdateManyWithoutUserNestedInput = {
    create?: XOR<PasswordResetCreateWithoutUserInput, PasswordResetUncheckedCreateWithoutUserInput> | PasswordResetCreateWithoutUserInput[] | PasswordResetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PasswordResetCreateOrConnectWithoutUserInput | PasswordResetCreateOrConnectWithoutUserInput[]
    upsert?: PasswordResetUpsertWithWhereUniqueWithoutUserInput | PasswordResetUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PasswordResetCreateManyUserInputEnvelope
    set?: PasswordResetWhereUniqueInput | PasswordResetWhereUniqueInput[]
    disconnect?: PasswordResetWhereUniqueInput | PasswordResetWhereUniqueInput[]
    delete?: PasswordResetWhereUniqueInput | PasswordResetWhereUniqueInput[]
    connect?: PasswordResetWhereUniqueInput | PasswordResetWhereUniqueInput[]
    update?: PasswordResetUpdateWithWhereUniqueWithoutUserInput | PasswordResetUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PasswordResetUpdateManyWithWhereWithoutUserInput | PasswordResetUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PasswordResetScalarWhereInput | PasswordResetScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<TransactionCreateWithoutOwnerInput, TransactionUncheckedCreateWithoutOwnerInput> | TransactionCreateWithoutOwnerInput[] | TransactionUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutOwnerInput | TransactionCreateOrConnectWithoutOwnerInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutOwnerInput | TransactionUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: TransactionCreateManyOwnerInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutOwnerInput | TransactionUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutOwnerInput | TransactionUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput | TransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUserInput | TransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUserInput | TransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type PayoutUpdateManyWithoutUserNestedInput = {
    create?: XOR<PayoutCreateWithoutUserInput, PayoutUncheckedCreateWithoutUserInput> | PayoutCreateWithoutUserInput[] | PayoutUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PayoutCreateOrConnectWithoutUserInput | PayoutCreateOrConnectWithoutUserInput[]
    upsert?: PayoutUpsertWithWhereUniqueWithoutUserInput | PayoutUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PayoutCreateManyUserInputEnvelope
    set?: PayoutWhereUniqueInput | PayoutWhereUniqueInput[]
    disconnect?: PayoutWhereUniqueInput | PayoutWhereUniqueInput[]
    delete?: PayoutWhereUniqueInput | PayoutWhereUniqueInput[]
    connect?: PayoutWhereUniqueInput | PayoutWhereUniqueInput[]
    update?: PayoutUpdateWithWhereUniqueWithoutUserInput | PayoutUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PayoutUpdateManyWithWhereWithoutUserInput | PayoutUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PayoutScalarWhereInput | PayoutScalarWhereInput[]
  }

  export type RoomUncheckedUpdateManyWithoutCreated_by_userNestedInput = {
    create?: XOR<RoomCreateWithoutCreated_by_userInput, RoomUncheckedCreateWithoutCreated_by_userInput> | RoomCreateWithoutCreated_by_userInput[] | RoomUncheckedCreateWithoutCreated_by_userInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutCreated_by_userInput | RoomCreateOrConnectWithoutCreated_by_userInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutCreated_by_userInput | RoomUpsertWithWhereUniqueWithoutCreated_by_userInput[]
    createMany?: RoomCreateManyCreated_by_userInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutCreated_by_userInput | RoomUpdateWithWhereUniqueWithoutCreated_by_userInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutCreated_by_userInput | RoomUpdateManyWithWhereWithoutCreated_by_userInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type RoomMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RoomMemberCreateWithoutUserInput, RoomMemberUncheckedCreateWithoutUserInput> | RoomMemberCreateWithoutUserInput[] | RoomMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoomMemberCreateOrConnectWithoutUserInput | RoomMemberCreateOrConnectWithoutUserInput[]
    upsert?: RoomMemberUpsertWithWhereUniqueWithoutUserInput | RoomMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RoomMemberCreateManyUserInputEnvelope
    set?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
    disconnect?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
    delete?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
    connect?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
    update?: RoomMemberUpdateWithWhereUniqueWithoutUserInput | RoomMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RoomMemberUpdateManyWithWhereWithoutUserInput | RoomMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RoomMemberScalarWhereInput | RoomMemberScalarWhereInput[]
  }

  export type RoomMessageUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RoomMessageCreateWithoutUserInput, RoomMessageUncheckedCreateWithoutUserInput> | RoomMessageCreateWithoutUserInput[] | RoomMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoomMessageCreateOrConnectWithoutUserInput | RoomMessageCreateOrConnectWithoutUserInput[]
    upsert?: RoomMessageUpsertWithWhereUniqueWithoutUserInput | RoomMessageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RoomMessageCreateManyUserInputEnvelope
    set?: RoomMessageWhereUniqueInput | RoomMessageWhereUniqueInput[]
    disconnect?: RoomMessageWhereUniqueInput | RoomMessageWhereUniqueInput[]
    delete?: RoomMessageWhereUniqueInput | RoomMessageWhereUniqueInput[]
    connect?: RoomMessageWhereUniqueInput | RoomMessageWhereUniqueInput[]
    update?: RoomMessageUpdateWithWhereUniqueWithoutUserInput | RoomMessageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RoomMessageUpdateManyWithWhereWithoutUserInput | RoomMessageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RoomMessageScalarWhereInput | RoomMessageScalarWhereInput[]
  }

  export type PasswordResetUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PasswordResetCreateWithoutUserInput, PasswordResetUncheckedCreateWithoutUserInput> | PasswordResetCreateWithoutUserInput[] | PasswordResetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PasswordResetCreateOrConnectWithoutUserInput | PasswordResetCreateOrConnectWithoutUserInput[]
    upsert?: PasswordResetUpsertWithWhereUniqueWithoutUserInput | PasswordResetUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PasswordResetCreateManyUserInputEnvelope
    set?: PasswordResetWhereUniqueInput | PasswordResetWhereUniqueInput[]
    disconnect?: PasswordResetWhereUniqueInput | PasswordResetWhereUniqueInput[]
    delete?: PasswordResetWhereUniqueInput | PasswordResetWhereUniqueInput[]
    connect?: PasswordResetWhereUniqueInput | PasswordResetWhereUniqueInput[]
    update?: PasswordResetUpdateWithWhereUniqueWithoutUserInput | PasswordResetUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PasswordResetUpdateManyWithWhereWithoutUserInput | PasswordResetUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PasswordResetScalarWhereInput | PasswordResetScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<TransactionCreateWithoutOwnerInput, TransactionUncheckedCreateWithoutOwnerInput> | TransactionCreateWithoutOwnerInput[] | TransactionUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutOwnerInput | TransactionCreateOrConnectWithoutOwnerInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutOwnerInput | TransactionUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: TransactionCreateManyOwnerInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutOwnerInput | TransactionUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutOwnerInput | TransactionUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput | TransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUserInput | TransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUserInput | TransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type PayoutUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PayoutCreateWithoutUserInput, PayoutUncheckedCreateWithoutUserInput> | PayoutCreateWithoutUserInput[] | PayoutUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PayoutCreateOrConnectWithoutUserInput | PayoutCreateOrConnectWithoutUserInput[]
    upsert?: PayoutUpsertWithWhereUniqueWithoutUserInput | PayoutUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PayoutCreateManyUserInputEnvelope
    set?: PayoutWhereUniqueInput | PayoutWhereUniqueInput[]
    disconnect?: PayoutWhereUniqueInput | PayoutWhereUniqueInput[]
    delete?: PayoutWhereUniqueInput | PayoutWhereUniqueInput[]
    connect?: PayoutWhereUniqueInput | PayoutWhereUniqueInput[]
    update?: PayoutUpdateWithWhereUniqueWithoutUserInput | PayoutUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PayoutUpdateManyWithWhereWithoutUserInput | PayoutUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PayoutScalarWhereInput | PayoutScalarWhereInput[]
  }

  export type GroupCreatebenefitInput = {
    set: string[]
  }

  export type GroupAssetCreateNestedManyWithoutGroupInput = {
    create?: XOR<GroupAssetCreateWithoutGroupInput, GroupAssetUncheckedCreateWithoutGroupInput> | GroupAssetCreateWithoutGroupInput[] | GroupAssetUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupAssetCreateOrConnectWithoutGroupInput | GroupAssetCreateOrConnectWithoutGroupInput[]
    createMany?: GroupAssetCreateManyGroupInputEnvelope
    connect?: GroupAssetWhereUniqueInput | GroupAssetWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutGroupInput = {
    create?: XOR<TransactionCreateWithoutGroupInput, TransactionUncheckedCreateWithoutGroupInput> | TransactionCreateWithoutGroupInput[] | TransactionUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutGroupInput | TransactionCreateOrConnectWithoutGroupInput[]
    createMany?: TransactionCreateManyGroupInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type GroupAssetUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<GroupAssetCreateWithoutGroupInput, GroupAssetUncheckedCreateWithoutGroupInput> | GroupAssetCreateWithoutGroupInput[] | GroupAssetUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupAssetCreateOrConnectWithoutGroupInput | GroupAssetCreateOrConnectWithoutGroupInput[]
    createMany?: GroupAssetCreateManyGroupInputEnvelope
    connect?: GroupAssetWhereUniqueInput | GroupAssetWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<TransactionCreateWithoutGroupInput, TransactionUncheckedCreateWithoutGroupInput> | TransactionCreateWithoutGroupInput[] | TransactionUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutGroupInput | TransactionCreateOrConnectWithoutGroupInput[]
    createMany?: TransactionCreateManyGroupInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type EnumGroupTypeFieldUpdateOperationsInput = {
    set?: $Enums.GroupType
  }

  export type GroupUpdatebenefitInput = {
    set?: string[]
    push?: string | string[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type GroupAssetUpdateManyWithoutGroupNestedInput = {
    create?: XOR<GroupAssetCreateWithoutGroupInput, GroupAssetUncheckedCreateWithoutGroupInput> | GroupAssetCreateWithoutGroupInput[] | GroupAssetUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupAssetCreateOrConnectWithoutGroupInput | GroupAssetCreateOrConnectWithoutGroupInput[]
    upsert?: GroupAssetUpsertWithWhereUniqueWithoutGroupInput | GroupAssetUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: GroupAssetCreateManyGroupInputEnvelope
    set?: GroupAssetWhereUniqueInput | GroupAssetWhereUniqueInput[]
    disconnect?: GroupAssetWhereUniqueInput | GroupAssetWhereUniqueInput[]
    delete?: GroupAssetWhereUniqueInput | GroupAssetWhereUniqueInput[]
    connect?: GroupAssetWhereUniqueInput | GroupAssetWhereUniqueInput[]
    update?: GroupAssetUpdateWithWhereUniqueWithoutGroupInput | GroupAssetUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: GroupAssetUpdateManyWithWhereWithoutGroupInput | GroupAssetUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: GroupAssetScalarWhereInput | GroupAssetScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutGroupNestedInput = {
    create?: XOR<TransactionCreateWithoutGroupInput, TransactionUncheckedCreateWithoutGroupInput> | TransactionCreateWithoutGroupInput[] | TransactionUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutGroupInput | TransactionCreateOrConnectWithoutGroupInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutGroupInput | TransactionUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: TransactionCreateManyGroupInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutGroupInput | TransactionUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutGroupInput | TransactionUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type GroupAssetUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<GroupAssetCreateWithoutGroupInput, GroupAssetUncheckedCreateWithoutGroupInput> | GroupAssetCreateWithoutGroupInput[] | GroupAssetUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupAssetCreateOrConnectWithoutGroupInput | GroupAssetCreateOrConnectWithoutGroupInput[]
    upsert?: GroupAssetUpsertWithWhereUniqueWithoutGroupInput | GroupAssetUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: GroupAssetCreateManyGroupInputEnvelope
    set?: GroupAssetWhereUniqueInput | GroupAssetWhereUniqueInput[]
    disconnect?: GroupAssetWhereUniqueInput | GroupAssetWhereUniqueInput[]
    delete?: GroupAssetWhereUniqueInput | GroupAssetWhereUniqueInput[]
    connect?: GroupAssetWhereUniqueInput | GroupAssetWhereUniqueInput[]
    update?: GroupAssetUpdateWithWhereUniqueWithoutGroupInput | GroupAssetUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: GroupAssetUpdateManyWithWhereWithoutGroupInput | GroupAssetUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: GroupAssetScalarWhereInput | GroupAssetScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<TransactionCreateWithoutGroupInput, TransactionUncheckedCreateWithoutGroupInput> | TransactionCreateWithoutGroupInput[] | TransactionUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutGroupInput | TransactionCreateOrConnectWithoutGroupInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutGroupInput | TransactionUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: TransactionCreateManyGroupInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutGroupInput | TransactionUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutGroupInput | TransactionUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type GroupCreateNestedOneWithoutAssetsInput = {
    create?: XOR<GroupCreateWithoutAssetsInput, GroupUncheckedCreateWithoutAssetsInput>
    connectOrCreate?: GroupCreateOrConnectWithoutAssetsInput
    connect?: GroupWhereUniqueInput
  }

  export type GroupUpdateOneRequiredWithoutAssetsNestedInput = {
    create?: XOR<GroupCreateWithoutAssetsInput, GroupUncheckedCreateWithoutAssetsInput>
    connectOrCreate?: GroupCreateOrConnectWithoutAssetsInput
    upsert?: GroupUpsertWithoutAssetsInput
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutAssetsInput, GroupUpdateWithoutAssetsInput>, GroupUncheckedUpdateWithoutAssetsInput>
  }

  export type UserCreateNestedOneWithoutRoomInput = {
    create?: XOR<UserCreateWithoutRoomInput, UserUncheckedCreateWithoutRoomInput>
    connectOrCreate?: UserCreateOrConnectWithoutRoomInput
    connect?: UserWhereUniqueInput
  }

  export type RoomMemberCreateNestedManyWithoutRoomInput = {
    create?: XOR<RoomMemberCreateWithoutRoomInput, RoomMemberUncheckedCreateWithoutRoomInput> | RoomMemberCreateWithoutRoomInput[] | RoomMemberUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomMemberCreateOrConnectWithoutRoomInput | RoomMemberCreateOrConnectWithoutRoomInput[]
    createMany?: RoomMemberCreateManyRoomInputEnvelope
    connect?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
  }

  export type RoomMessageCreateNestedManyWithoutRoomInput = {
    create?: XOR<RoomMessageCreateWithoutRoomInput, RoomMessageUncheckedCreateWithoutRoomInput> | RoomMessageCreateWithoutRoomInput[] | RoomMessageUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomMessageCreateOrConnectWithoutRoomInput | RoomMessageCreateOrConnectWithoutRoomInput[]
    createMany?: RoomMessageCreateManyRoomInputEnvelope
    connect?: RoomMessageWhereUniqueInput | RoomMessageWhereUniqueInput[]
  }

  export type RoomMemberUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<RoomMemberCreateWithoutRoomInput, RoomMemberUncheckedCreateWithoutRoomInput> | RoomMemberCreateWithoutRoomInput[] | RoomMemberUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomMemberCreateOrConnectWithoutRoomInput | RoomMemberCreateOrConnectWithoutRoomInput[]
    createMany?: RoomMemberCreateManyRoomInputEnvelope
    connect?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
  }

  export type RoomMessageUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<RoomMessageCreateWithoutRoomInput, RoomMessageUncheckedCreateWithoutRoomInput> | RoomMessageCreateWithoutRoomInput[] | RoomMessageUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomMessageCreateOrConnectWithoutRoomInput | RoomMessageCreateOrConnectWithoutRoomInput[]
    createMany?: RoomMessageCreateManyRoomInputEnvelope
    connect?: RoomMessageWhereUniqueInput | RoomMessageWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutRoomNestedInput = {
    create?: XOR<UserCreateWithoutRoomInput, UserUncheckedCreateWithoutRoomInput>
    connectOrCreate?: UserCreateOrConnectWithoutRoomInput
    upsert?: UserUpsertWithoutRoomInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRoomInput, UserUpdateWithoutRoomInput>, UserUncheckedUpdateWithoutRoomInput>
  }

  export type RoomMemberUpdateManyWithoutRoomNestedInput = {
    create?: XOR<RoomMemberCreateWithoutRoomInput, RoomMemberUncheckedCreateWithoutRoomInput> | RoomMemberCreateWithoutRoomInput[] | RoomMemberUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomMemberCreateOrConnectWithoutRoomInput | RoomMemberCreateOrConnectWithoutRoomInput[]
    upsert?: RoomMemberUpsertWithWhereUniqueWithoutRoomInput | RoomMemberUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: RoomMemberCreateManyRoomInputEnvelope
    set?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
    disconnect?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
    delete?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
    connect?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
    update?: RoomMemberUpdateWithWhereUniqueWithoutRoomInput | RoomMemberUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: RoomMemberUpdateManyWithWhereWithoutRoomInput | RoomMemberUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: RoomMemberScalarWhereInput | RoomMemberScalarWhereInput[]
  }

  export type RoomMessageUpdateManyWithoutRoomNestedInput = {
    create?: XOR<RoomMessageCreateWithoutRoomInput, RoomMessageUncheckedCreateWithoutRoomInput> | RoomMessageCreateWithoutRoomInput[] | RoomMessageUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomMessageCreateOrConnectWithoutRoomInput | RoomMessageCreateOrConnectWithoutRoomInput[]
    upsert?: RoomMessageUpsertWithWhereUniqueWithoutRoomInput | RoomMessageUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: RoomMessageCreateManyRoomInputEnvelope
    set?: RoomMessageWhereUniqueInput | RoomMessageWhereUniqueInput[]
    disconnect?: RoomMessageWhereUniqueInput | RoomMessageWhereUniqueInput[]
    delete?: RoomMessageWhereUniqueInput | RoomMessageWhereUniqueInput[]
    connect?: RoomMessageWhereUniqueInput | RoomMessageWhereUniqueInput[]
    update?: RoomMessageUpdateWithWhereUniqueWithoutRoomInput | RoomMessageUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: RoomMessageUpdateManyWithWhereWithoutRoomInput | RoomMessageUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: RoomMessageScalarWhereInput | RoomMessageScalarWhereInput[]
  }

  export type RoomMemberUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<RoomMemberCreateWithoutRoomInput, RoomMemberUncheckedCreateWithoutRoomInput> | RoomMemberCreateWithoutRoomInput[] | RoomMemberUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomMemberCreateOrConnectWithoutRoomInput | RoomMemberCreateOrConnectWithoutRoomInput[]
    upsert?: RoomMemberUpsertWithWhereUniqueWithoutRoomInput | RoomMemberUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: RoomMemberCreateManyRoomInputEnvelope
    set?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
    disconnect?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
    delete?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
    connect?: RoomMemberWhereUniqueInput | RoomMemberWhereUniqueInput[]
    update?: RoomMemberUpdateWithWhereUniqueWithoutRoomInput | RoomMemberUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: RoomMemberUpdateManyWithWhereWithoutRoomInput | RoomMemberUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: RoomMemberScalarWhereInput | RoomMemberScalarWhereInput[]
  }

  export type RoomMessageUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<RoomMessageCreateWithoutRoomInput, RoomMessageUncheckedCreateWithoutRoomInput> | RoomMessageCreateWithoutRoomInput[] | RoomMessageUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomMessageCreateOrConnectWithoutRoomInput | RoomMessageCreateOrConnectWithoutRoomInput[]
    upsert?: RoomMessageUpsertWithWhereUniqueWithoutRoomInput | RoomMessageUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: RoomMessageCreateManyRoomInputEnvelope
    set?: RoomMessageWhereUniqueInput | RoomMessageWhereUniqueInput[]
    disconnect?: RoomMessageWhereUniqueInput | RoomMessageWhereUniqueInput[]
    delete?: RoomMessageWhereUniqueInput | RoomMessageWhereUniqueInput[]
    connect?: RoomMessageWhereUniqueInput | RoomMessageWhereUniqueInput[]
    update?: RoomMessageUpdateWithWhereUniqueWithoutRoomInput | RoomMessageUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: RoomMessageUpdateManyWithWhereWithoutRoomInput | RoomMessageUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: RoomMessageScalarWhereInput | RoomMessageScalarWhereInput[]
  }

  export type RoomCreateNestedOneWithoutMembersInput = {
    create?: XOR<RoomCreateWithoutMembersInput, RoomUncheckedCreateWithoutMembersInput>
    connectOrCreate?: RoomCreateOrConnectWithoutMembersInput
    connect?: RoomWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRoom_membersInput = {
    create?: XOR<UserCreateWithoutRoom_membersInput, UserUncheckedCreateWithoutRoom_membersInput>
    connectOrCreate?: UserCreateOrConnectWithoutRoom_membersInput
    connect?: UserWhereUniqueInput
  }

  export type RoleCreateNestedOneWithoutRoom_member_rolesInput = {
    create?: XOR<RoleCreateWithoutRoom_member_rolesInput, RoleUncheckedCreateWithoutRoom_member_rolesInput>
    connectOrCreate?: RoleCreateOrConnectWithoutRoom_member_rolesInput
    connect?: RoleWhereUniqueInput
  }

  export type RoomUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<RoomCreateWithoutMembersInput, RoomUncheckedCreateWithoutMembersInput>
    connectOrCreate?: RoomCreateOrConnectWithoutMembersInput
    upsert?: RoomUpsertWithoutMembersInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutMembersInput, RoomUpdateWithoutMembersInput>, RoomUncheckedUpdateWithoutMembersInput>
  }

  export type UserUpdateOneRequiredWithoutRoom_membersNestedInput = {
    create?: XOR<UserCreateWithoutRoom_membersInput, UserUncheckedCreateWithoutRoom_membersInput>
    connectOrCreate?: UserCreateOrConnectWithoutRoom_membersInput
    upsert?: UserUpsertWithoutRoom_membersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRoom_membersInput, UserUpdateWithoutRoom_membersInput>, UserUncheckedUpdateWithoutRoom_membersInput>
  }

  export type RoleUpdateOneRequiredWithoutRoom_member_rolesNestedInput = {
    create?: XOR<RoleCreateWithoutRoom_member_rolesInput, RoleUncheckedCreateWithoutRoom_member_rolesInput>
    connectOrCreate?: RoleCreateOrConnectWithoutRoom_member_rolesInput
    upsert?: RoleUpsertWithoutRoom_member_rolesInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutRoom_member_rolesInput, RoleUpdateWithoutRoom_member_rolesInput>, RoleUncheckedUpdateWithoutRoom_member_rolesInput>
  }

  export type RoomCreateNestedOneWithoutMessagesInput = {
    create?: XOR<RoomCreateWithoutMessagesInput, RoomUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: RoomCreateOrConnectWithoutMessagesInput
    connect?: RoomWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRoom_messageInput = {
    create?: XOR<UserCreateWithoutRoom_messageInput, UserUncheckedCreateWithoutRoom_messageInput>
    connectOrCreate?: UserCreateOrConnectWithoutRoom_messageInput
    connect?: UserWhereUniqueInput
  }

  export type NullableEnumMessageTypeFieldUpdateOperationsInput = {
    set?: $Enums.MessageType | null
  }

  export type RoomUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<RoomCreateWithoutMessagesInput, RoomUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: RoomCreateOrConnectWithoutMessagesInput
    upsert?: RoomUpsertWithoutMessagesInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutMessagesInput, RoomUpdateWithoutMessagesInput>, RoomUncheckedUpdateWithoutMessagesInput>
  }

  export type UserUpdateOneRequiredWithoutRoom_messageNestedInput = {
    create?: XOR<UserCreateWithoutRoom_messageInput, UserUncheckedCreateWithoutRoom_messageInput>
    connectOrCreate?: UserCreateOrConnectWithoutRoom_messageInput
    upsert?: UserUpsertWithoutRoom_messageInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRoom_messageInput, UserUpdateWithoutRoom_messageInput>, UserUncheckedUpdateWithoutRoom_messageInput>
  }

  export type UserCreateNestedOneWithoutPassword_resetsInput = {
    create?: XOR<UserCreateWithoutPassword_resetsInput, UserUncheckedCreateWithoutPassword_resetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPassword_resetsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPassword_resetsNestedInput = {
    create?: XOR<UserCreateWithoutPassword_resetsInput, UserUncheckedCreateWithoutPassword_resetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPassword_resetsInput
    upsert?: UserUpsertWithoutPassword_resetsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPassword_resetsInput, UserUpdateWithoutPassword_resetsInput>, UserUncheckedUpdateWithoutPassword_resetsInput>
  }

  export type UserCreateNestedOneWithoutOwner_transactionsInput = {
    create?: XOR<UserCreateWithoutOwner_transactionsInput, UserUncheckedCreateWithoutOwner_transactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwner_transactionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMember_transactionsInput = {
    create?: XOR<UserCreateWithoutMember_transactionsInput, UserUncheckedCreateWithoutMember_transactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMember_transactionsInput
    connect?: UserWhereUniqueInput
  }

  export type GroupCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<GroupCreateWithoutTransactionsInput, GroupUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: GroupCreateOrConnectWithoutTransactionsInput
    connect?: GroupWhereUniqueInput
  }

  export type NullableEnumTransactionTypeFieldUpdateOperationsInput = {
    set?: $Enums.TransactionType | null
  }

  export type UserUpdateOneRequiredWithoutOwner_transactionsNestedInput = {
    create?: XOR<UserCreateWithoutOwner_transactionsInput, UserUncheckedCreateWithoutOwner_transactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwner_transactionsInput
    upsert?: UserUpsertWithoutOwner_transactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOwner_transactionsInput, UserUpdateWithoutOwner_transactionsInput>, UserUncheckedUpdateWithoutOwner_transactionsInput>
  }

  export type UserUpdateOneRequiredWithoutMember_transactionsNestedInput = {
    create?: XOR<UserCreateWithoutMember_transactionsInput, UserUncheckedCreateWithoutMember_transactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMember_transactionsInput
    upsert?: UserUpsertWithoutMember_transactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMember_transactionsInput, UserUpdateWithoutMember_transactionsInput>, UserUncheckedUpdateWithoutMember_transactionsInput>
  }

  export type GroupUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<GroupCreateWithoutTransactionsInput, GroupUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: GroupCreateOrConnectWithoutTransactionsInput
    upsert?: GroupUpsertWithoutTransactionsInput
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutTransactionsInput, GroupUpdateWithoutTransactionsInput>, GroupUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserCreateNestedOneWithoutPayoutsInput = {
    create?: XOR<UserCreateWithoutPayoutsInput, UserUncheckedCreateWithoutPayoutsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPayoutsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPayoutsNestedInput = {
    create?: XOR<UserCreateWithoutPayoutsInput, UserUncheckedCreateWithoutPayoutsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPayoutsInput
    upsert?: UserUpsertWithoutPayoutsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPayoutsInput, UserUpdateWithoutPayoutsInput>, UserUncheckedUpdateWithoutPayoutsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleType | EnumRoleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RoleType[] | ListEnumRoleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleType[] | ListEnumRoleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleTypeFilter<$PrismaModel> | $Enums.RoleType
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleType | EnumRoleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RoleType[] | ListEnumRoleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleType[] | ListEnumRoleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleTypeWithAggregatesFilter<$PrismaModel> | $Enums.RoleType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleTypeFilter<$PrismaModel>
    _max?: NestedEnumRoleTypeFilter<$PrismaModel>
  }

  export type NestedEnumGroupTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.GroupType | EnumGroupTypeFieldRefInput<$PrismaModel>
    in?: $Enums.GroupType[] | ListEnumGroupTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.GroupType[] | ListEnumGroupTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumGroupTypeFilter<$PrismaModel> | $Enums.GroupType
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumGroupTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GroupType | EnumGroupTypeFieldRefInput<$PrismaModel>
    in?: $Enums.GroupType[] | ListEnumGroupTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.GroupType[] | ListEnumGroupTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumGroupTypeWithAggregatesFilter<$PrismaModel> | $Enums.GroupType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGroupTypeFilter<$PrismaModel>
    _max?: NestedEnumGroupTypeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumMessageTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageType | EnumMessageTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMessageTypeNullableFilter<$PrismaModel> | $Enums.MessageType | null
  }

  export type NestedEnumMessageTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageType | EnumMessageTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMessageTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.MessageType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumMessageTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumMessageTypeNullableFilter<$PrismaModel>
  }

  export type NestedEnumTransactionTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTransactionTypeNullableFilter<$PrismaModel> | $Enums.TransactionType | null
  }

  export type NestedEnumTransactionTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTransactionTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeNullableFilter<$PrismaModel>
  }

  export type UserCreateWithoutRoleInput = {
    id?: string
    name: string
    email: string
    password: string
    photo: string
    room?: RoomCreateNestedManyWithoutCreated_by_userInput
    room_members?: RoomMemberCreateNestedManyWithoutUserInput
    room_message?: RoomMessageCreateNestedManyWithoutUserInput
    password_resets?: PasswordResetCreateNestedManyWithoutUserInput
    owner_transactions?: TransactionCreateNestedManyWithoutOwnerInput
    member_transactions?: TransactionCreateNestedManyWithoutUserInput
    payouts?: PayoutCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRoleInput = {
    id?: string
    name: string
    email: string
    password: string
    photo: string
    room?: RoomUncheckedCreateNestedManyWithoutCreated_by_userInput
    room_members?: RoomMemberUncheckedCreateNestedManyWithoutUserInput
    room_message?: RoomMessageUncheckedCreateNestedManyWithoutUserInput
    password_resets?: PasswordResetUncheckedCreateNestedManyWithoutUserInput
    owner_transactions?: TransactionUncheckedCreateNestedManyWithoutOwnerInput
    member_transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    payouts?: PayoutUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRoleInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserCreateManyRoleInputEnvelope = {
    data: UserCreateManyRoleInput | UserCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type RoomMemberCreateWithoutRoleInput = {
    id?: string
    joined_at?: Date | string
    room: RoomCreateNestedOneWithoutMembersInput
    user: UserCreateNestedOneWithoutRoom_membersInput
  }

  export type RoomMemberUncheckedCreateWithoutRoleInput = {
    id?: string
    room_id: string
    user_id: string
    joined_at?: Date | string
  }

  export type RoomMemberCreateOrConnectWithoutRoleInput = {
    where: RoomMemberWhereUniqueInput
    create: XOR<RoomMemberCreateWithoutRoleInput, RoomMemberUncheckedCreateWithoutRoleInput>
  }

  export type RoomMemberCreateManyRoleInputEnvelope = {
    data: RoomMemberCreateManyRoleInput | RoomMemberCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
  }

  export type UserUpdateManyWithWhereWithoutRoleInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutRoleInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    photo?: StringFilter<"User"> | string
    role_id?: StringFilter<"User"> | string
  }

  export type RoomMemberUpsertWithWhereUniqueWithoutRoleInput = {
    where: RoomMemberWhereUniqueInput
    update: XOR<RoomMemberUpdateWithoutRoleInput, RoomMemberUncheckedUpdateWithoutRoleInput>
    create: XOR<RoomMemberCreateWithoutRoleInput, RoomMemberUncheckedCreateWithoutRoleInput>
  }

  export type RoomMemberUpdateWithWhereUniqueWithoutRoleInput = {
    where: RoomMemberWhereUniqueInput
    data: XOR<RoomMemberUpdateWithoutRoleInput, RoomMemberUncheckedUpdateWithoutRoleInput>
  }

  export type RoomMemberUpdateManyWithWhereWithoutRoleInput = {
    where: RoomMemberScalarWhereInput
    data: XOR<RoomMemberUpdateManyMutationInput, RoomMemberUncheckedUpdateManyWithoutRoleInput>
  }

  export type RoomMemberScalarWhereInput = {
    AND?: RoomMemberScalarWhereInput | RoomMemberScalarWhereInput[]
    OR?: RoomMemberScalarWhereInput[]
    NOT?: RoomMemberScalarWhereInput | RoomMemberScalarWhereInput[]
    id?: StringFilter<"RoomMember"> | string
    room_id?: StringFilter<"RoomMember"> | string
    user_id?: StringFilter<"RoomMember"> | string
    role_id?: StringFilter<"RoomMember"> | string
    joined_at?: DateTimeFilter<"RoomMember"> | Date | string
  }

  export type RoleCreateWithoutUsersInput = {
    id?: string
    role: $Enums.RoleType
    room_member_roles?: RoomMemberCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateWithoutUsersInput = {
    id?: string
    role: $Enums.RoleType
    room_member_roles?: RoomMemberUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleCreateOrConnectWithoutUsersInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
  }

  export type RoomCreateWithoutCreated_by_userInput = {
    id?: string
    name?: string | null
    is_group?: boolean
    created_at?: Date | string
    members?: RoomMemberCreateNestedManyWithoutRoomInput
    messages?: RoomMessageCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutCreated_by_userInput = {
    id?: string
    name?: string | null
    is_group?: boolean
    created_at?: Date | string
    members?: RoomMemberUncheckedCreateNestedManyWithoutRoomInput
    messages?: RoomMessageUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutCreated_by_userInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutCreated_by_userInput, RoomUncheckedCreateWithoutCreated_by_userInput>
  }

  export type RoomCreateManyCreated_by_userInputEnvelope = {
    data: RoomCreateManyCreated_by_userInput | RoomCreateManyCreated_by_userInput[]
    skipDuplicates?: boolean
  }

  export type RoomMemberCreateWithoutUserInput = {
    id?: string
    joined_at?: Date | string
    room: RoomCreateNestedOneWithoutMembersInput
    role: RoleCreateNestedOneWithoutRoom_member_rolesInput
  }

  export type RoomMemberUncheckedCreateWithoutUserInput = {
    id?: string
    room_id: string
    role_id: string
    joined_at?: Date | string
  }

  export type RoomMemberCreateOrConnectWithoutUserInput = {
    where: RoomMemberWhereUniqueInput
    create: XOR<RoomMemberCreateWithoutUserInput, RoomMemberUncheckedCreateWithoutUserInput>
  }

  export type RoomMemberCreateManyUserInputEnvelope = {
    data: RoomMemberCreateManyUserInput | RoomMemberCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RoomMessageCreateWithoutUserInput = {
    id?: string
    content: string
    type?: $Enums.MessageType | null
    created_at?: Date | string
    room: RoomCreateNestedOneWithoutMessagesInput
  }

  export type RoomMessageUncheckedCreateWithoutUserInput = {
    id?: string
    room_id: string
    content: string
    type?: $Enums.MessageType | null
    created_at?: Date | string
  }

  export type RoomMessageCreateOrConnectWithoutUserInput = {
    where: RoomMessageWhereUniqueInput
    create: XOR<RoomMessageCreateWithoutUserInput, RoomMessageUncheckedCreateWithoutUserInput>
  }

  export type RoomMessageCreateManyUserInputEnvelope = {
    data: RoomMessageCreateManyUserInput | RoomMessageCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PasswordResetCreateWithoutUserInput = {
    id?: string
    token: string
  }

  export type PasswordResetUncheckedCreateWithoutUserInput = {
    id?: string
    token: string
  }

  export type PasswordResetCreateOrConnectWithoutUserInput = {
    where: PasswordResetWhereUniqueInput
    create: XOR<PasswordResetCreateWithoutUserInput, PasswordResetUncheckedCreateWithoutUserInput>
  }

  export type PasswordResetCreateManyUserInputEnvelope = {
    data: PasswordResetCreateManyUserInput | PasswordResetCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutOwnerInput = {
    id?: string
    price: number
    type?: $Enums.TransactionType | null
    created_at?: Date | string
    user: UserCreateNestedOneWithoutMember_transactionsInput
    group: GroupCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutOwnerInput = {
    id?: string
    user_id: string
    group_id: string
    price: number
    type?: $Enums.TransactionType | null
    created_at?: Date | string
  }

  export type TransactionCreateOrConnectWithoutOwnerInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutOwnerInput, TransactionUncheckedCreateWithoutOwnerInput>
  }

  export type TransactionCreateManyOwnerInputEnvelope = {
    data: TransactionCreateManyOwnerInput | TransactionCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutUserInput = {
    id?: string
    price: number
    type?: $Enums.TransactionType | null
    created_at?: Date | string
    owner: UserCreateNestedOneWithoutOwner_transactionsInput
    group: GroupCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutUserInput = {
    id?: string
    owner_id: string
    group_id: string
    price: number
    type?: $Enums.TransactionType | null
    created_at?: Date | string
  }

  export type TransactionCreateOrConnectWithoutUserInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput>
  }

  export type TransactionCreateManyUserInputEnvelope = {
    data: TransactionCreateManyUserInput | TransactionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PayoutCreateWithoutUserInput = {
    id?: string
    amount: number
    bank_name: string
    bank_account_number: string
    bank_account_name: string
    status?: $Enums.TransactionType | null
    proof?: string | null
    created_at?: Date | string
  }

  export type PayoutUncheckedCreateWithoutUserInput = {
    id?: string
    amount: number
    bank_name: string
    bank_account_number: string
    bank_account_name: string
    status?: $Enums.TransactionType | null
    proof?: string | null
    created_at?: Date | string
  }

  export type PayoutCreateOrConnectWithoutUserInput = {
    where: PayoutWhereUniqueInput
    create: XOR<PayoutCreateWithoutUserInput, PayoutUncheckedCreateWithoutUserInput>
  }

  export type PayoutCreateManyUserInputEnvelope = {
    data: PayoutCreateManyUserInput | PayoutCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RoleUpsertWithoutUsersInput = {
    update: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutUsersInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type RoleUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleTypeFieldUpdateOperationsInput | $Enums.RoleType
    room_member_roles?: RoomMemberUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleTypeFieldUpdateOperationsInput | $Enums.RoleType
    room_member_roles?: RoomMemberUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoomUpsertWithWhereUniqueWithoutCreated_by_userInput = {
    where: RoomWhereUniqueInput
    update: XOR<RoomUpdateWithoutCreated_by_userInput, RoomUncheckedUpdateWithoutCreated_by_userInput>
    create: XOR<RoomCreateWithoutCreated_by_userInput, RoomUncheckedCreateWithoutCreated_by_userInput>
  }

  export type RoomUpdateWithWhereUniqueWithoutCreated_by_userInput = {
    where: RoomWhereUniqueInput
    data: XOR<RoomUpdateWithoutCreated_by_userInput, RoomUncheckedUpdateWithoutCreated_by_userInput>
  }

  export type RoomUpdateManyWithWhereWithoutCreated_by_userInput = {
    where: RoomScalarWhereInput
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyWithoutCreated_by_userInput>
  }

  export type RoomScalarWhereInput = {
    AND?: RoomScalarWhereInput | RoomScalarWhereInput[]
    OR?: RoomScalarWhereInput[]
    NOT?: RoomScalarWhereInput | RoomScalarWhereInput[]
    id?: StringFilter<"Room"> | string
    name?: StringNullableFilter<"Room"> | string | null
    is_group?: BoolFilter<"Room"> | boolean
    created_by?: StringFilter<"Room"> | string
    created_at?: DateTimeFilter<"Room"> | Date | string
  }

  export type RoomMemberUpsertWithWhereUniqueWithoutUserInput = {
    where: RoomMemberWhereUniqueInput
    update: XOR<RoomMemberUpdateWithoutUserInput, RoomMemberUncheckedUpdateWithoutUserInput>
    create: XOR<RoomMemberCreateWithoutUserInput, RoomMemberUncheckedCreateWithoutUserInput>
  }

  export type RoomMemberUpdateWithWhereUniqueWithoutUserInput = {
    where: RoomMemberWhereUniqueInput
    data: XOR<RoomMemberUpdateWithoutUserInput, RoomMemberUncheckedUpdateWithoutUserInput>
  }

  export type RoomMemberUpdateManyWithWhereWithoutUserInput = {
    where: RoomMemberScalarWhereInput
    data: XOR<RoomMemberUpdateManyMutationInput, RoomMemberUncheckedUpdateManyWithoutUserInput>
  }

  export type RoomMessageUpsertWithWhereUniqueWithoutUserInput = {
    where: RoomMessageWhereUniqueInput
    update: XOR<RoomMessageUpdateWithoutUserInput, RoomMessageUncheckedUpdateWithoutUserInput>
    create: XOR<RoomMessageCreateWithoutUserInput, RoomMessageUncheckedCreateWithoutUserInput>
  }

  export type RoomMessageUpdateWithWhereUniqueWithoutUserInput = {
    where: RoomMessageWhereUniqueInput
    data: XOR<RoomMessageUpdateWithoutUserInput, RoomMessageUncheckedUpdateWithoutUserInput>
  }

  export type RoomMessageUpdateManyWithWhereWithoutUserInput = {
    where: RoomMessageScalarWhereInput
    data: XOR<RoomMessageUpdateManyMutationInput, RoomMessageUncheckedUpdateManyWithoutUserInput>
  }

  export type RoomMessageScalarWhereInput = {
    AND?: RoomMessageScalarWhereInput | RoomMessageScalarWhereInput[]
    OR?: RoomMessageScalarWhereInput[]
    NOT?: RoomMessageScalarWhereInput | RoomMessageScalarWhereInput[]
    id?: StringFilter<"RoomMessage"> | string
    room_id?: StringFilter<"RoomMessage"> | string
    sender_id?: StringFilter<"RoomMessage"> | string
    content?: StringFilter<"RoomMessage"> | string
    type?: EnumMessageTypeNullableFilter<"RoomMessage"> | $Enums.MessageType | null
    created_at?: DateTimeFilter<"RoomMessage"> | Date | string
  }

  export type PasswordResetUpsertWithWhereUniqueWithoutUserInput = {
    where: PasswordResetWhereUniqueInput
    update: XOR<PasswordResetUpdateWithoutUserInput, PasswordResetUncheckedUpdateWithoutUserInput>
    create: XOR<PasswordResetCreateWithoutUserInput, PasswordResetUncheckedCreateWithoutUserInput>
  }

  export type PasswordResetUpdateWithWhereUniqueWithoutUserInput = {
    where: PasswordResetWhereUniqueInput
    data: XOR<PasswordResetUpdateWithoutUserInput, PasswordResetUncheckedUpdateWithoutUserInput>
  }

  export type PasswordResetUpdateManyWithWhereWithoutUserInput = {
    where: PasswordResetScalarWhereInput
    data: XOR<PasswordResetUpdateManyMutationInput, PasswordResetUncheckedUpdateManyWithoutUserInput>
  }

  export type PasswordResetScalarWhereInput = {
    AND?: PasswordResetScalarWhereInput | PasswordResetScalarWhereInput[]
    OR?: PasswordResetScalarWhereInput[]
    NOT?: PasswordResetScalarWhereInput | PasswordResetScalarWhereInput[]
    id?: StringFilter<"PasswordReset"> | string
    user_id?: StringFilter<"PasswordReset"> | string
    token?: StringFilter<"PasswordReset"> | string
  }

  export type TransactionUpsertWithWhereUniqueWithoutOwnerInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutOwnerInput, TransactionUncheckedUpdateWithoutOwnerInput>
    create: XOR<TransactionCreateWithoutOwnerInput, TransactionUncheckedCreateWithoutOwnerInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutOwnerInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutOwnerInput, TransactionUncheckedUpdateWithoutOwnerInput>
  }

  export type TransactionUpdateManyWithWhereWithoutOwnerInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutOwnerInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    id?: StringFilter<"Transaction"> | string
    owner_id?: StringFilter<"Transaction"> | string
    user_id?: StringFilter<"Transaction"> | string
    group_id?: StringFilter<"Transaction"> | string
    price?: IntFilter<"Transaction"> | number
    type?: EnumTransactionTypeNullableFilter<"Transaction"> | $Enums.TransactionType | null
    created_at?: DateTimeFilter<"Transaction"> | Date | string
  }

  export type TransactionUpsertWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutUserInput, TransactionUncheckedUpdateWithoutUserInput>
    create: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutUserInput, TransactionUncheckedUpdateWithoutUserInput>
  }

  export type TransactionUpdateManyWithWhereWithoutUserInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutUserInput>
  }

  export type PayoutUpsertWithWhereUniqueWithoutUserInput = {
    where: PayoutWhereUniqueInput
    update: XOR<PayoutUpdateWithoutUserInput, PayoutUncheckedUpdateWithoutUserInput>
    create: XOR<PayoutCreateWithoutUserInput, PayoutUncheckedCreateWithoutUserInput>
  }

  export type PayoutUpdateWithWhereUniqueWithoutUserInput = {
    where: PayoutWhereUniqueInput
    data: XOR<PayoutUpdateWithoutUserInput, PayoutUncheckedUpdateWithoutUserInput>
  }

  export type PayoutUpdateManyWithWhereWithoutUserInput = {
    where: PayoutScalarWhereInput
    data: XOR<PayoutUpdateManyMutationInput, PayoutUncheckedUpdateManyWithoutUserInput>
  }

  export type PayoutScalarWhereInput = {
    AND?: PayoutScalarWhereInput | PayoutScalarWhereInput[]
    OR?: PayoutScalarWhereInput[]
    NOT?: PayoutScalarWhereInput | PayoutScalarWhereInput[]
    id?: StringFilter<"Payout"> | string
    user_id?: StringFilter<"Payout"> | string
    amount?: IntFilter<"Payout"> | number
    bank_name?: StringFilter<"Payout"> | string
    bank_account_number?: StringFilter<"Payout"> | string
    bank_account_name?: StringFilter<"Payout"> | string
    status?: EnumTransactionTypeNullableFilter<"Payout"> | $Enums.TransactionType | null
    proof?: StringNullableFilter<"Payout"> | string | null
    created_at?: DateTimeFilter<"Payout"> | Date | string
  }

  export type GroupAssetCreateWithoutGroupInput = {
    id?: string
    filename: string
  }

  export type GroupAssetUncheckedCreateWithoutGroupInput = {
    id?: string
    filename: string
  }

  export type GroupAssetCreateOrConnectWithoutGroupInput = {
    where: GroupAssetWhereUniqueInput
    create: XOR<GroupAssetCreateWithoutGroupInput, GroupAssetUncheckedCreateWithoutGroupInput>
  }

  export type GroupAssetCreateManyGroupInputEnvelope = {
    data: GroupAssetCreateManyGroupInput | GroupAssetCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutGroupInput = {
    id?: string
    price: number
    type?: $Enums.TransactionType | null
    created_at?: Date | string
    owner: UserCreateNestedOneWithoutOwner_transactionsInput
    user: UserCreateNestedOneWithoutMember_transactionsInput
  }

  export type TransactionUncheckedCreateWithoutGroupInput = {
    id?: string
    owner_id: string
    user_id: string
    price: number
    type?: $Enums.TransactionType | null
    created_at?: Date | string
  }

  export type TransactionCreateOrConnectWithoutGroupInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutGroupInput, TransactionUncheckedCreateWithoutGroupInput>
  }

  export type TransactionCreateManyGroupInputEnvelope = {
    data: TransactionCreateManyGroupInput | TransactionCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type GroupAssetUpsertWithWhereUniqueWithoutGroupInput = {
    where: GroupAssetWhereUniqueInput
    update: XOR<GroupAssetUpdateWithoutGroupInput, GroupAssetUncheckedUpdateWithoutGroupInput>
    create: XOR<GroupAssetCreateWithoutGroupInput, GroupAssetUncheckedCreateWithoutGroupInput>
  }

  export type GroupAssetUpdateWithWhereUniqueWithoutGroupInput = {
    where: GroupAssetWhereUniqueInput
    data: XOR<GroupAssetUpdateWithoutGroupInput, GroupAssetUncheckedUpdateWithoutGroupInput>
  }

  export type GroupAssetUpdateManyWithWhereWithoutGroupInput = {
    where: GroupAssetScalarWhereInput
    data: XOR<GroupAssetUpdateManyMutationInput, GroupAssetUncheckedUpdateManyWithoutGroupInput>
  }

  export type GroupAssetScalarWhereInput = {
    AND?: GroupAssetScalarWhereInput | GroupAssetScalarWhereInput[]
    OR?: GroupAssetScalarWhereInput[]
    NOT?: GroupAssetScalarWhereInput | GroupAssetScalarWhereInput[]
    id?: StringFilter<"GroupAsset"> | string
    group_id?: StringFilter<"GroupAsset"> | string
    filename?: StringFilter<"GroupAsset"> | string
  }

  export type TransactionUpsertWithWhereUniqueWithoutGroupInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutGroupInput, TransactionUncheckedUpdateWithoutGroupInput>
    create: XOR<TransactionCreateWithoutGroupInput, TransactionUncheckedCreateWithoutGroupInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutGroupInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutGroupInput, TransactionUncheckedUpdateWithoutGroupInput>
  }

  export type TransactionUpdateManyWithWhereWithoutGroupInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutGroupInput>
  }

  export type GroupCreateWithoutAssetsInput = {
    id?: string
    name: string
    photo: string
    type: $Enums.GroupType
    about: string
    benefit?: GroupCreatebenefitInput | string[]
    price: number
    created_at?: Date | string
    transactions?: TransactionCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutAssetsInput = {
    id?: string
    name: string
    photo: string
    type: $Enums.GroupType
    about: string
    benefit?: GroupCreatebenefitInput | string[]
    price: number
    created_at?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutAssetsInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutAssetsInput, GroupUncheckedCreateWithoutAssetsInput>
  }

  export type GroupUpsertWithoutAssetsInput = {
    update: XOR<GroupUpdateWithoutAssetsInput, GroupUncheckedUpdateWithoutAssetsInput>
    create: XOR<GroupCreateWithoutAssetsInput, GroupUncheckedCreateWithoutAssetsInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutAssetsInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutAssetsInput, GroupUncheckedUpdateWithoutAssetsInput>
  }

  export type GroupUpdateWithoutAssetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    type?: EnumGroupTypeFieldUpdateOperationsInput | $Enums.GroupType
    about?: StringFieldUpdateOperationsInput | string
    benefit?: GroupUpdatebenefitInput | string[]
    price?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutAssetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    type?: EnumGroupTypeFieldUpdateOperationsInput | $Enums.GroupType
    about?: StringFieldUpdateOperationsInput | string
    benefit?: GroupUpdatebenefitInput | string[]
    price?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type UserCreateWithoutRoomInput = {
    id?: string
    name: string
    email: string
    password: string
    photo: string
    role: RoleCreateNestedOneWithoutUsersInput
    room_members?: RoomMemberCreateNestedManyWithoutUserInput
    room_message?: RoomMessageCreateNestedManyWithoutUserInput
    password_resets?: PasswordResetCreateNestedManyWithoutUserInput
    owner_transactions?: TransactionCreateNestedManyWithoutOwnerInput
    member_transactions?: TransactionCreateNestedManyWithoutUserInput
    payouts?: PayoutCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRoomInput = {
    id?: string
    name: string
    email: string
    password: string
    photo: string
    role_id: string
    room_members?: RoomMemberUncheckedCreateNestedManyWithoutUserInput
    room_message?: RoomMessageUncheckedCreateNestedManyWithoutUserInput
    password_resets?: PasswordResetUncheckedCreateNestedManyWithoutUserInput
    owner_transactions?: TransactionUncheckedCreateNestedManyWithoutOwnerInput
    member_transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    payouts?: PayoutUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRoomInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoomInput, UserUncheckedCreateWithoutRoomInput>
  }

  export type RoomMemberCreateWithoutRoomInput = {
    id?: string
    joined_at?: Date | string
    user: UserCreateNestedOneWithoutRoom_membersInput
    role: RoleCreateNestedOneWithoutRoom_member_rolesInput
  }

  export type RoomMemberUncheckedCreateWithoutRoomInput = {
    id?: string
    user_id: string
    role_id: string
    joined_at?: Date | string
  }

  export type RoomMemberCreateOrConnectWithoutRoomInput = {
    where: RoomMemberWhereUniqueInput
    create: XOR<RoomMemberCreateWithoutRoomInput, RoomMemberUncheckedCreateWithoutRoomInput>
  }

  export type RoomMemberCreateManyRoomInputEnvelope = {
    data: RoomMemberCreateManyRoomInput | RoomMemberCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type RoomMessageCreateWithoutRoomInput = {
    id?: string
    content: string
    type?: $Enums.MessageType | null
    created_at?: Date | string
    user: UserCreateNestedOneWithoutRoom_messageInput
  }

  export type RoomMessageUncheckedCreateWithoutRoomInput = {
    id?: string
    sender_id: string
    content: string
    type?: $Enums.MessageType | null
    created_at?: Date | string
  }

  export type RoomMessageCreateOrConnectWithoutRoomInput = {
    where: RoomMessageWhereUniqueInput
    create: XOR<RoomMessageCreateWithoutRoomInput, RoomMessageUncheckedCreateWithoutRoomInput>
  }

  export type RoomMessageCreateManyRoomInputEnvelope = {
    data: RoomMessageCreateManyRoomInput | RoomMessageCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutRoomInput = {
    update: XOR<UserUpdateWithoutRoomInput, UserUncheckedUpdateWithoutRoomInput>
    create: XOR<UserCreateWithoutRoomInput, UserUncheckedCreateWithoutRoomInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRoomInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRoomInput, UserUncheckedUpdateWithoutRoomInput>
  }

  export type UserUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    room_members?: RoomMemberUpdateManyWithoutUserNestedInput
    room_message?: RoomMessageUpdateManyWithoutUserNestedInput
    password_resets?: PasswordResetUpdateManyWithoutUserNestedInput
    owner_transactions?: TransactionUpdateManyWithoutOwnerNestedInput
    member_transactions?: TransactionUpdateManyWithoutUserNestedInput
    payouts?: PayoutUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    role_id?: StringFieldUpdateOperationsInput | string
    room_members?: RoomMemberUncheckedUpdateManyWithoutUserNestedInput
    room_message?: RoomMessageUncheckedUpdateManyWithoutUserNestedInput
    password_resets?: PasswordResetUncheckedUpdateManyWithoutUserNestedInput
    owner_transactions?: TransactionUncheckedUpdateManyWithoutOwnerNestedInput
    member_transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    payouts?: PayoutUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RoomMemberUpsertWithWhereUniqueWithoutRoomInput = {
    where: RoomMemberWhereUniqueInput
    update: XOR<RoomMemberUpdateWithoutRoomInput, RoomMemberUncheckedUpdateWithoutRoomInput>
    create: XOR<RoomMemberCreateWithoutRoomInput, RoomMemberUncheckedCreateWithoutRoomInput>
  }

  export type RoomMemberUpdateWithWhereUniqueWithoutRoomInput = {
    where: RoomMemberWhereUniqueInput
    data: XOR<RoomMemberUpdateWithoutRoomInput, RoomMemberUncheckedUpdateWithoutRoomInput>
  }

  export type RoomMemberUpdateManyWithWhereWithoutRoomInput = {
    where: RoomMemberScalarWhereInput
    data: XOR<RoomMemberUpdateManyMutationInput, RoomMemberUncheckedUpdateManyWithoutRoomInput>
  }

  export type RoomMessageUpsertWithWhereUniqueWithoutRoomInput = {
    where: RoomMessageWhereUniqueInput
    update: XOR<RoomMessageUpdateWithoutRoomInput, RoomMessageUncheckedUpdateWithoutRoomInput>
    create: XOR<RoomMessageCreateWithoutRoomInput, RoomMessageUncheckedCreateWithoutRoomInput>
  }

  export type RoomMessageUpdateWithWhereUniqueWithoutRoomInput = {
    where: RoomMessageWhereUniqueInput
    data: XOR<RoomMessageUpdateWithoutRoomInput, RoomMessageUncheckedUpdateWithoutRoomInput>
  }

  export type RoomMessageUpdateManyWithWhereWithoutRoomInput = {
    where: RoomMessageScalarWhereInput
    data: XOR<RoomMessageUpdateManyMutationInput, RoomMessageUncheckedUpdateManyWithoutRoomInput>
  }

  export type RoomCreateWithoutMembersInput = {
    id?: string
    name?: string | null
    is_group?: boolean
    created_at?: Date | string
    created_by_user: UserCreateNestedOneWithoutRoomInput
    messages?: RoomMessageCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutMembersInput = {
    id?: string
    name?: string | null
    is_group?: boolean
    created_by: string
    created_at?: Date | string
    messages?: RoomMessageUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutMembersInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutMembersInput, RoomUncheckedCreateWithoutMembersInput>
  }

  export type UserCreateWithoutRoom_membersInput = {
    id?: string
    name: string
    email: string
    password: string
    photo: string
    role: RoleCreateNestedOneWithoutUsersInput
    room?: RoomCreateNestedManyWithoutCreated_by_userInput
    room_message?: RoomMessageCreateNestedManyWithoutUserInput
    password_resets?: PasswordResetCreateNestedManyWithoutUserInput
    owner_transactions?: TransactionCreateNestedManyWithoutOwnerInput
    member_transactions?: TransactionCreateNestedManyWithoutUserInput
    payouts?: PayoutCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRoom_membersInput = {
    id?: string
    name: string
    email: string
    password: string
    photo: string
    role_id: string
    room?: RoomUncheckedCreateNestedManyWithoutCreated_by_userInput
    room_message?: RoomMessageUncheckedCreateNestedManyWithoutUserInput
    password_resets?: PasswordResetUncheckedCreateNestedManyWithoutUserInput
    owner_transactions?: TransactionUncheckedCreateNestedManyWithoutOwnerInput
    member_transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    payouts?: PayoutUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRoom_membersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoom_membersInput, UserUncheckedCreateWithoutRoom_membersInput>
  }

  export type RoleCreateWithoutRoom_member_rolesInput = {
    id?: string
    role: $Enums.RoleType
    users?: UserCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateWithoutRoom_member_rolesInput = {
    id?: string
    role: $Enums.RoleType
    users?: UserUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleCreateOrConnectWithoutRoom_member_rolesInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutRoom_member_rolesInput, RoleUncheckedCreateWithoutRoom_member_rolesInput>
  }

  export type RoomUpsertWithoutMembersInput = {
    update: XOR<RoomUpdateWithoutMembersInput, RoomUncheckedUpdateWithoutMembersInput>
    create: XOR<RoomCreateWithoutMembersInput, RoomUncheckedCreateWithoutMembersInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutMembersInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutMembersInput, RoomUncheckedUpdateWithoutMembersInput>
  }

  export type RoomUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    is_group?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_user?: UserUpdateOneRequiredWithoutRoomNestedInput
    messages?: RoomMessageUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    is_group?: BoolFieldUpdateOperationsInput | boolean
    created_by?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: RoomMessageUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type UserUpsertWithoutRoom_membersInput = {
    update: XOR<UserUpdateWithoutRoom_membersInput, UserUncheckedUpdateWithoutRoom_membersInput>
    create: XOR<UserCreateWithoutRoom_membersInput, UserUncheckedCreateWithoutRoom_membersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRoom_membersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRoom_membersInput, UserUncheckedUpdateWithoutRoom_membersInput>
  }

  export type UserUpdateWithoutRoom_membersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    room?: RoomUpdateManyWithoutCreated_by_userNestedInput
    room_message?: RoomMessageUpdateManyWithoutUserNestedInput
    password_resets?: PasswordResetUpdateManyWithoutUserNestedInput
    owner_transactions?: TransactionUpdateManyWithoutOwnerNestedInput
    member_transactions?: TransactionUpdateManyWithoutUserNestedInput
    payouts?: PayoutUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRoom_membersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    role_id?: StringFieldUpdateOperationsInput | string
    room?: RoomUncheckedUpdateManyWithoutCreated_by_userNestedInput
    room_message?: RoomMessageUncheckedUpdateManyWithoutUserNestedInput
    password_resets?: PasswordResetUncheckedUpdateManyWithoutUserNestedInput
    owner_transactions?: TransactionUncheckedUpdateManyWithoutOwnerNestedInput
    member_transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    payouts?: PayoutUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RoleUpsertWithoutRoom_member_rolesInput = {
    update: XOR<RoleUpdateWithoutRoom_member_rolesInput, RoleUncheckedUpdateWithoutRoom_member_rolesInput>
    create: XOR<RoleCreateWithoutRoom_member_rolesInput, RoleUncheckedCreateWithoutRoom_member_rolesInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutRoom_member_rolesInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutRoom_member_rolesInput, RoleUncheckedUpdateWithoutRoom_member_rolesInput>
  }

  export type RoleUpdateWithoutRoom_member_rolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleTypeFieldUpdateOperationsInput | $Enums.RoleType
    users?: UserUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateWithoutRoom_member_rolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleTypeFieldUpdateOperationsInput | $Enums.RoleType
    users?: UserUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoomCreateWithoutMessagesInput = {
    id?: string
    name?: string | null
    is_group?: boolean
    created_at?: Date | string
    created_by_user: UserCreateNestedOneWithoutRoomInput
    members?: RoomMemberCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutMessagesInput = {
    id?: string
    name?: string | null
    is_group?: boolean
    created_by: string
    created_at?: Date | string
    members?: RoomMemberUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutMessagesInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutMessagesInput, RoomUncheckedCreateWithoutMessagesInput>
  }

  export type UserCreateWithoutRoom_messageInput = {
    id?: string
    name: string
    email: string
    password: string
    photo: string
    role: RoleCreateNestedOneWithoutUsersInput
    room?: RoomCreateNestedManyWithoutCreated_by_userInput
    room_members?: RoomMemberCreateNestedManyWithoutUserInput
    password_resets?: PasswordResetCreateNestedManyWithoutUserInput
    owner_transactions?: TransactionCreateNestedManyWithoutOwnerInput
    member_transactions?: TransactionCreateNestedManyWithoutUserInput
    payouts?: PayoutCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRoom_messageInput = {
    id?: string
    name: string
    email: string
    password: string
    photo: string
    role_id: string
    room?: RoomUncheckedCreateNestedManyWithoutCreated_by_userInput
    room_members?: RoomMemberUncheckedCreateNestedManyWithoutUserInput
    password_resets?: PasswordResetUncheckedCreateNestedManyWithoutUserInput
    owner_transactions?: TransactionUncheckedCreateNestedManyWithoutOwnerInput
    member_transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    payouts?: PayoutUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRoom_messageInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoom_messageInput, UserUncheckedCreateWithoutRoom_messageInput>
  }

  export type RoomUpsertWithoutMessagesInput = {
    update: XOR<RoomUpdateWithoutMessagesInput, RoomUncheckedUpdateWithoutMessagesInput>
    create: XOR<RoomCreateWithoutMessagesInput, RoomUncheckedCreateWithoutMessagesInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutMessagesInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutMessagesInput, RoomUncheckedUpdateWithoutMessagesInput>
  }

  export type RoomUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    is_group?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_user?: UserUpdateOneRequiredWithoutRoomNestedInput
    members?: RoomMemberUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    is_group?: BoolFieldUpdateOperationsInput | boolean
    created_by?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: RoomMemberUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type UserUpsertWithoutRoom_messageInput = {
    update: XOR<UserUpdateWithoutRoom_messageInput, UserUncheckedUpdateWithoutRoom_messageInput>
    create: XOR<UserCreateWithoutRoom_messageInput, UserUncheckedCreateWithoutRoom_messageInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRoom_messageInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRoom_messageInput, UserUncheckedUpdateWithoutRoom_messageInput>
  }

  export type UserUpdateWithoutRoom_messageInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    room?: RoomUpdateManyWithoutCreated_by_userNestedInput
    room_members?: RoomMemberUpdateManyWithoutUserNestedInput
    password_resets?: PasswordResetUpdateManyWithoutUserNestedInput
    owner_transactions?: TransactionUpdateManyWithoutOwnerNestedInput
    member_transactions?: TransactionUpdateManyWithoutUserNestedInput
    payouts?: PayoutUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRoom_messageInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    role_id?: StringFieldUpdateOperationsInput | string
    room?: RoomUncheckedUpdateManyWithoutCreated_by_userNestedInput
    room_members?: RoomMemberUncheckedUpdateManyWithoutUserNestedInput
    password_resets?: PasswordResetUncheckedUpdateManyWithoutUserNestedInput
    owner_transactions?: TransactionUncheckedUpdateManyWithoutOwnerNestedInput
    member_transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    payouts?: PayoutUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutPassword_resetsInput = {
    id?: string
    name: string
    email: string
    password: string
    photo: string
    role: RoleCreateNestedOneWithoutUsersInput
    room?: RoomCreateNestedManyWithoutCreated_by_userInput
    room_members?: RoomMemberCreateNestedManyWithoutUserInput
    room_message?: RoomMessageCreateNestedManyWithoutUserInput
    owner_transactions?: TransactionCreateNestedManyWithoutOwnerInput
    member_transactions?: TransactionCreateNestedManyWithoutUserInput
    payouts?: PayoutCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPassword_resetsInput = {
    id?: string
    name: string
    email: string
    password: string
    photo: string
    role_id: string
    room?: RoomUncheckedCreateNestedManyWithoutCreated_by_userInput
    room_members?: RoomMemberUncheckedCreateNestedManyWithoutUserInput
    room_message?: RoomMessageUncheckedCreateNestedManyWithoutUserInput
    owner_transactions?: TransactionUncheckedCreateNestedManyWithoutOwnerInput
    member_transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    payouts?: PayoutUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPassword_resetsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPassword_resetsInput, UserUncheckedCreateWithoutPassword_resetsInput>
  }

  export type UserUpsertWithoutPassword_resetsInput = {
    update: XOR<UserUpdateWithoutPassword_resetsInput, UserUncheckedUpdateWithoutPassword_resetsInput>
    create: XOR<UserCreateWithoutPassword_resetsInput, UserUncheckedCreateWithoutPassword_resetsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPassword_resetsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPassword_resetsInput, UserUncheckedUpdateWithoutPassword_resetsInput>
  }

  export type UserUpdateWithoutPassword_resetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    room?: RoomUpdateManyWithoutCreated_by_userNestedInput
    room_members?: RoomMemberUpdateManyWithoutUserNestedInput
    room_message?: RoomMessageUpdateManyWithoutUserNestedInput
    owner_transactions?: TransactionUpdateManyWithoutOwnerNestedInput
    member_transactions?: TransactionUpdateManyWithoutUserNestedInput
    payouts?: PayoutUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPassword_resetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    role_id?: StringFieldUpdateOperationsInput | string
    room?: RoomUncheckedUpdateManyWithoutCreated_by_userNestedInput
    room_members?: RoomMemberUncheckedUpdateManyWithoutUserNestedInput
    room_message?: RoomMessageUncheckedUpdateManyWithoutUserNestedInput
    owner_transactions?: TransactionUncheckedUpdateManyWithoutOwnerNestedInput
    member_transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    payouts?: PayoutUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutOwner_transactionsInput = {
    id?: string
    name: string
    email: string
    password: string
    photo: string
    role: RoleCreateNestedOneWithoutUsersInput
    room?: RoomCreateNestedManyWithoutCreated_by_userInput
    room_members?: RoomMemberCreateNestedManyWithoutUserInput
    room_message?: RoomMessageCreateNestedManyWithoutUserInput
    password_resets?: PasswordResetCreateNestedManyWithoutUserInput
    member_transactions?: TransactionCreateNestedManyWithoutUserInput
    payouts?: PayoutCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOwner_transactionsInput = {
    id?: string
    name: string
    email: string
    password: string
    photo: string
    role_id: string
    room?: RoomUncheckedCreateNestedManyWithoutCreated_by_userInput
    room_members?: RoomMemberUncheckedCreateNestedManyWithoutUserInput
    room_message?: RoomMessageUncheckedCreateNestedManyWithoutUserInput
    password_resets?: PasswordResetUncheckedCreateNestedManyWithoutUserInput
    member_transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    payouts?: PayoutUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOwner_transactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOwner_transactionsInput, UserUncheckedCreateWithoutOwner_transactionsInput>
  }

  export type UserCreateWithoutMember_transactionsInput = {
    id?: string
    name: string
    email: string
    password: string
    photo: string
    role: RoleCreateNestedOneWithoutUsersInput
    room?: RoomCreateNestedManyWithoutCreated_by_userInput
    room_members?: RoomMemberCreateNestedManyWithoutUserInput
    room_message?: RoomMessageCreateNestedManyWithoutUserInput
    password_resets?: PasswordResetCreateNestedManyWithoutUserInput
    owner_transactions?: TransactionCreateNestedManyWithoutOwnerInput
    payouts?: PayoutCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMember_transactionsInput = {
    id?: string
    name: string
    email: string
    password: string
    photo: string
    role_id: string
    room?: RoomUncheckedCreateNestedManyWithoutCreated_by_userInput
    room_members?: RoomMemberUncheckedCreateNestedManyWithoutUserInput
    room_message?: RoomMessageUncheckedCreateNestedManyWithoutUserInput
    password_resets?: PasswordResetUncheckedCreateNestedManyWithoutUserInput
    owner_transactions?: TransactionUncheckedCreateNestedManyWithoutOwnerInput
    payouts?: PayoutUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMember_transactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMember_transactionsInput, UserUncheckedCreateWithoutMember_transactionsInput>
  }

  export type GroupCreateWithoutTransactionsInput = {
    id?: string
    name: string
    photo: string
    type: $Enums.GroupType
    about: string
    benefit?: GroupCreatebenefitInput | string[]
    price: number
    created_at?: Date | string
    assets?: GroupAssetCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutTransactionsInput = {
    id?: string
    name: string
    photo: string
    type: $Enums.GroupType
    about: string
    benefit?: GroupCreatebenefitInput | string[]
    price: number
    created_at?: Date | string
    assets?: GroupAssetUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutTransactionsInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutTransactionsInput, GroupUncheckedCreateWithoutTransactionsInput>
  }

  export type UserUpsertWithoutOwner_transactionsInput = {
    update: XOR<UserUpdateWithoutOwner_transactionsInput, UserUncheckedUpdateWithoutOwner_transactionsInput>
    create: XOR<UserCreateWithoutOwner_transactionsInput, UserUncheckedCreateWithoutOwner_transactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOwner_transactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOwner_transactionsInput, UserUncheckedUpdateWithoutOwner_transactionsInput>
  }

  export type UserUpdateWithoutOwner_transactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    room?: RoomUpdateManyWithoutCreated_by_userNestedInput
    room_members?: RoomMemberUpdateManyWithoutUserNestedInput
    room_message?: RoomMessageUpdateManyWithoutUserNestedInput
    password_resets?: PasswordResetUpdateManyWithoutUserNestedInput
    member_transactions?: TransactionUpdateManyWithoutUserNestedInput
    payouts?: PayoutUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOwner_transactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    role_id?: StringFieldUpdateOperationsInput | string
    room?: RoomUncheckedUpdateManyWithoutCreated_by_userNestedInput
    room_members?: RoomMemberUncheckedUpdateManyWithoutUserNestedInput
    room_message?: RoomMessageUncheckedUpdateManyWithoutUserNestedInput
    password_resets?: PasswordResetUncheckedUpdateManyWithoutUserNestedInput
    member_transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    payouts?: PayoutUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutMember_transactionsInput = {
    update: XOR<UserUpdateWithoutMember_transactionsInput, UserUncheckedUpdateWithoutMember_transactionsInput>
    create: XOR<UserCreateWithoutMember_transactionsInput, UserUncheckedCreateWithoutMember_transactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMember_transactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMember_transactionsInput, UserUncheckedUpdateWithoutMember_transactionsInput>
  }

  export type UserUpdateWithoutMember_transactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    room?: RoomUpdateManyWithoutCreated_by_userNestedInput
    room_members?: RoomMemberUpdateManyWithoutUserNestedInput
    room_message?: RoomMessageUpdateManyWithoutUserNestedInput
    password_resets?: PasswordResetUpdateManyWithoutUserNestedInput
    owner_transactions?: TransactionUpdateManyWithoutOwnerNestedInput
    payouts?: PayoutUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMember_transactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    role_id?: StringFieldUpdateOperationsInput | string
    room?: RoomUncheckedUpdateManyWithoutCreated_by_userNestedInput
    room_members?: RoomMemberUncheckedUpdateManyWithoutUserNestedInput
    room_message?: RoomMessageUncheckedUpdateManyWithoutUserNestedInput
    password_resets?: PasswordResetUncheckedUpdateManyWithoutUserNestedInput
    owner_transactions?: TransactionUncheckedUpdateManyWithoutOwnerNestedInput
    payouts?: PayoutUncheckedUpdateManyWithoutUserNestedInput
  }

  export type GroupUpsertWithoutTransactionsInput = {
    update: XOR<GroupUpdateWithoutTransactionsInput, GroupUncheckedUpdateWithoutTransactionsInput>
    create: XOR<GroupCreateWithoutTransactionsInput, GroupUncheckedCreateWithoutTransactionsInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutTransactionsInput, GroupUncheckedUpdateWithoutTransactionsInput>
  }

  export type GroupUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    type?: EnumGroupTypeFieldUpdateOperationsInput | $Enums.GroupType
    about?: StringFieldUpdateOperationsInput | string
    benefit?: GroupUpdatebenefitInput | string[]
    price?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    assets?: GroupAssetUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    type?: EnumGroupTypeFieldUpdateOperationsInput | $Enums.GroupType
    about?: StringFieldUpdateOperationsInput | string
    benefit?: GroupUpdatebenefitInput | string[]
    price?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    assets?: GroupAssetUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type UserCreateWithoutPayoutsInput = {
    id?: string
    name: string
    email: string
    password: string
    photo: string
    role: RoleCreateNestedOneWithoutUsersInput
    room?: RoomCreateNestedManyWithoutCreated_by_userInput
    room_members?: RoomMemberCreateNestedManyWithoutUserInput
    room_message?: RoomMessageCreateNestedManyWithoutUserInput
    password_resets?: PasswordResetCreateNestedManyWithoutUserInput
    owner_transactions?: TransactionCreateNestedManyWithoutOwnerInput
    member_transactions?: TransactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPayoutsInput = {
    id?: string
    name: string
    email: string
    password: string
    photo: string
    role_id: string
    room?: RoomUncheckedCreateNestedManyWithoutCreated_by_userInput
    room_members?: RoomMemberUncheckedCreateNestedManyWithoutUserInput
    room_message?: RoomMessageUncheckedCreateNestedManyWithoutUserInput
    password_resets?: PasswordResetUncheckedCreateNestedManyWithoutUserInput
    owner_transactions?: TransactionUncheckedCreateNestedManyWithoutOwnerInput
    member_transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPayoutsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPayoutsInput, UserUncheckedCreateWithoutPayoutsInput>
  }

  export type UserUpsertWithoutPayoutsInput = {
    update: XOR<UserUpdateWithoutPayoutsInput, UserUncheckedUpdateWithoutPayoutsInput>
    create: XOR<UserCreateWithoutPayoutsInput, UserUncheckedCreateWithoutPayoutsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPayoutsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPayoutsInput, UserUncheckedUpdateWithoutPayoutsInput>
  }

  export type UserUpdateWithoutPayoutsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    room?: RoomUpdateManyWithoutCreated_by_userNestedInput
    room_members?: RoomMemberUpdateManyWithoutUserNestedInput
    room_message?: RoomMessageUpdateManyWithoutUserNestedInput
    password_resets?: PasswordResetUpdateManyWithoutUserNestedInput
    owner_transactions?: TransactionUpdateManyWithoutOwnerNestedInput
    member_transactions?: TransactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPayoutsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    role_id?: StringFieldUpdateOperationsInput | string
    room?: RoomUncheckedUpdateManyWithoutCreated_by_userNestedInput
    room_members?: RoomMemberUncheckedUpdateManyWithoutUserNestedInput
    room_message?: RoomMessageUncheckedUpdateManyWithoutUserNestedInput
    password_resets?: PasswordResetUncheckedUpdateManyWithoutUserNestedInput
    owner_transactions?: TransactionUncheckedUpdateManyWithoutOwnerNestedInput
    member_transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyRoleInput = {
    id?: string
    name: string
    email: string
    password: string
    photo: string
  }

  export type RoomMemberCreateManyRoleInput = {
    id?: string
    room_id: string
    user_id: string
    joined_at?: Date | string
  }

  export type UserUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    room?: RoomUpdateManyWithoutCreated_by_userNestedInput
    room_members?: RoomMemberUpdateManyWithoutUserNestedInput
    room_message?: RoomMessageUpdateManyWithoutUserNestedInput
    password_resets?: PasswordResetUpdateManyWithoutUserNestedInput
    owner_transactions?: TransactionUpdateManyWithoutOwnerNestedInput
    member_transactions?: TransactionUpdateManyWithoutUserNestedInput
    payouts?: PayoutUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    room?: RoomUncheckedUpdateManyWithoutCreated_by_userNestedInput
    room_members?: RoomMemberUncheckedUpdateManyWithoutUserNestedInput
    room_message?: RoomMessageUncheckedUpdateManyWithoutUserNestedInput
    password_resets?: PasswordResetUncheckedUpdateManyWithoutUserNestedInput
    owner_transactions?: TransactionUncheckedUpdateManyWithoutOwnerNestedInput
    member_transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    payouts?: PayoutUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
  }

  export type RoomMemberUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutMembersNestedInput
    user?: UserUpdateOneRequiredWithoutRoom_membersNestedInput
  }

  export type RoomMemberUncheckedUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    room_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomMemberUncheckedUpdateManyWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    room_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomCreateManyCreated_by_userInput = {
    id?: string
    name?: string | null
    is_group?: boolean
    created_at?: Date | string
  }

  export type RoomMemberCreateManyUserInput = {
    id?: string
    room_id: string
    role_id: string
    joined_at?: Date | string
  }

  export type RoomMessageCreateManyUserInput = {
    id?: string
    room_id: string
    content: string
    type?: $Enums.MessageType | null
    created_at?: Date | string
  }

  export type PasswordResetCreateManyUserInput = {
    id?: string
    token: string
  }

  export type TransactionCreateManyOwnerInput = {
    id?: string
    user_id: string
    group_id: string
    price: number
    type?: $Enums.TransactionType | null
    created_at?: Date | string
  }

  export type TransactionCreateManyUserInput = {
    id?: string
    owner_id: string
    group_id: string
    price: number
    type?: $Enums.TransactionType | null
    created_at?: Date | string
  }

  export type PayoutCreateManyUserInput = {
    id?: string
    amount: number
    bank_name: string
    bank_account_number: string
    bank_account_name: string
    status?: $Enums.TransactionType | null
    proof?: string | null
    created_at?: Date | string
  }

  export type RoomUpdateWithoutCreated_by_userInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    is_group?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: RoomMemberUpdateManyWithoutRoomNestedInput
    messages?: RoomMessageUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutCreated_by_userInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    is_group?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: RoomMemberUncheckedUpdateManyWithoutRoomNestedInput
    messages?: RoomMessageUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateManyWithoutCreated_by_userInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    is_group?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomMemberUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutMembersNestedInput
    role?: RoleUpdateOneRequiredWithoutRoom_member_rolesNestedInput
  }

  export type RoomMemberUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    room_id?: StringFieldUpdateOperationsInput | string
    role_id?: StringFieldUpdateOperationsInput | string
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomMemberUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    room_id?: StringFieldUpdateOperationsInput | string
    role_id?: StringFieldUpdateOperationsInput | string
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomMessageUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: NullableEnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type RoomMessageUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    room_id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: NullableEnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomMessageUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    room_id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: NullableEnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
  }

  export type PasswordResetUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
  }

  export type PasswordResetUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    type?: NullableEnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMember_transactionsNestedInput
    group?: GroupUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    group_id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    type?: NullableEnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    group_id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    type?: NullableEnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    type?: NullableEnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwner_transactionsNestedInput
    group?: GroupUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    group_id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    type?: NullableEnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    group_id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    type?: NullableEnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayoutUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    bank_name?: StringFieldUpdateOperationsInput | string
    bank_account_number?: StringFieldUpdateOperationsInput | string
    bank_account_name?: StringFieldUpdateOperationsInput | string
    status?: NullableEnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType | null
    proof?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayoutUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    bank_name?: StringFieldUpdateOperationsInput | string
    bank_account_number?: StringFieldUpdateOperationsInput | string
    bank_account_name?: StringFieldUpdateOperationsInput | string
    status?: NullableEnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType | null
    proof?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayoutUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    bank_name?: StringFieldUpdateOperationsInput | string
    bank_account_number?: StringFieldUpdateOperationsInput | string
    bank_account_name?: StringFieldUpdateOperationsInput | string
    status?: NullableEnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType | null
    proof?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupAssetCreateManyGroupInput = {
    id?: string
    filename: string
  }

  export type TransactionCreateManyGroupInput = {
    id?: string
    owner_id: string
    user_id: string
    price: number
    type?: $Enums.TransactionType | null
    created_at?: Date | string
  }

  export type GroupAssetUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
  }

  export type GroupAssetUncheckedUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
  }

  export type GroupAssetUncheckedUpdateManyWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    type?: NullableEnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwner_transactionsNestedInput
    user?: UserUpdateOneRequiredWithoutMember_transactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    type?: NullableEnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    type?: NullableEnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomMemberCreateManyRoomInput = {
    id?: string
    user_id: string
    role_id: string
    joined_at?: Date | string
  }

  export type RoomMessageCreateManyRoomInput = {
    id?: string
    sender_id: string
    content: string
    type?: $Enums.MessageType | null
    created_at?: Date | string
  }

  export type RoomMemberUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRoom_membersNestedInput
    role?: RoleUpdateOneRequiredWithoutRoom_member_rolesNestedInput
  }

  export type RoomMemberUncheckedUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    role_id?: StringFieldUpdateOperationsInput | string
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomMemberUncheckedUpdateManyWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    role_id?: StringFieldUpdateOperationsInput | string
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomMessageUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: NullableEnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRoom_messageNestedInput
  }

  export type RoomMessageUncheckedUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    sender_id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: NullableEnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomMessageUncheckedUpdateManyWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    sender_id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: NullableEnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}