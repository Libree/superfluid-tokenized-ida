/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export declare namespace SubscriptionManager {
  export type SubscriptionStruct = {
    user: PromiseOrValue<string>;
    subscription: PromiseOrValue<string>;
    metadata: PromiseOrValue<string>;
    flowRate: PromiseOrValue<BigNumberish>;
  };

  export type SubscriptionStructOutput = [string, string, string, BigNumber] & {
    user: string;
    subscription: string;
    metadata: string;
    flowRate: BigNumber;
  };
}

export interface SubscriptionManagerInterface extends utils.Interface {
  functions: {
    "createSubscription(address,int96,string,string,uint256,string)": FunctionFragment;
    "getSubscriptions(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "createSubscription" | "getSubscriptions"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "createSubscription",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getSubscriptions",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "createSubscription",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSubscriptions",
    data: BytesLike
  ): Result;

  events: {
    "SubscriptionCreated(address,address,string)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "SubscriptionCreated"): EventFragment;
}

export interface SubscriptionCreatedEventObject {
  user: string;
  subscription: string;
  metadata: string;
}
export type SubscriptionCreatedEvent = TypedEvent<
  [string, string, string],
  SubscriptionCreatedEventObject
>;

export type SubscriptionCreatedEventFilter =
  TypedEventFilter<SubscriptionCreatedEvent>;

export interface SubscriptionManager extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SubscriptionManagerInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    createSubscription(
      _paymentToken: PromiseOrValue<string>,
      _flowRate: PromiseOrValue<BigNumberish>,
      _name: PromiseOrValue<string>,
      _symbol: PromiseOrValue<string>,
      _initialSupply: PromiseOrValue<BigNumberish>,
      metadata: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getSubscriptions(
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[SubscriptionManager.SubscriptionStructOutput[]]>;
  };

  createSubscription(
    _paymentToken: PromiseOrValue<string>,
    _flowRate: PromiseOrValue<BigNumberish>,
    _name: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    _initialSupply: PromiseOrValue<BigNumberish>,
    metadata: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getSubscriptions(
    _user: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<SubscriptionManager.SubscriptionStructOutput[]>;

  callStatic: {
    createSubscription(
      _paymentToken: PromiseOrValue<string>,
      _flowRate: PromiseOrValue<BigNumberish>,
      _name: PromiseOrValue<string>,
      _symbol: PromiseOrValue<string>,
      _initialSupply: PromiseOrValue<BigNumberish>,
      metadata: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    getSubscriptions(
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<SubscriptionManager.SubscriptionStructOutput[]>;
  };

  filters: {
    "SubscriptionCreated(address,address,string)"(
      user?: PromiseOrValue<string> | null,
      subscription?: PromiseOrValue<string> | null,
      metadata?: null
    ): SubscriptionCreatedEventFilter;
    SubscriptionCreated(
      user?: PromiseOrValue<string> | null,
      subscription?: PromiseOrValue<string> | null,
      metadata?: null
    ): SubscriptionCreatedEventFilter;
  };

  estimateGas: {
    createSubscription(
      _paymentToken: PromiseOrValue<string>,
      _flowRate: PromiseOrValue<BigNumberish>,
      _name: PromiseOrValue<string>,
      _symbol: PromiseOrValue<string>,
      _initialSupply: PromiseOrValue<BigNumberish>,
      metadata: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getSubscriptions(
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    createSubscription(
      _paymentToken: PromiseOrValue<string>,
      _flowRate: PromiseOrValue<BigNumberish>,
      _name: PromiseOrValue<string>,
      _symbol: PromiseOrValue<string>,
      _initialSupply: PromiseOrValue<BigNumberish>,
      metadata: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getSubscriptions(
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
