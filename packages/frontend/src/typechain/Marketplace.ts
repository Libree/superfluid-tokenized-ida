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

export declare namespace Marketplace {
  export type OpenOrderStruct = {
    amount: PromiseOrValue<BigNumberish>;
    pricePerToken: PromiseOrValue<BigNumberish>;
  };

  export type OpenOrderStructOutput = [BigNumber, BigNumber] & {
    amount: BigNumber;
    pricePerToken: BigNumber;
  };
}

export interface MarketplaceInterface extends utils.Interface {
  functions: {
    "buyOrder(address,uint256,uint256)": FunctionFragment;
    "getOpenOrders(address)": FunctionFragment;
    "getSubSelling()": FunctionFragment;
    "registerOrder(address,uint256,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "buyOrder"
      | "getOpenOrders"
      | "getSubSelling"
      | "registerOrder"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "buyOrder",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getOpenOrders",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getSubSelling",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "registerOrder",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;

  decodeFunctionResult(functionFragment: "buyOrder", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getOpenOrders",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSubSelling",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerOrder",
    data: BytesLike
  ): Result;

  events: {
    "OrderCreated(address,uint256,uint256)": EventFragment;
    "OrderFilled(address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OrderCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OrderFilled"): EventFragment;
}

export interface OrderCreatedEventObject {
  subscription: string;
  amount: BigNumber;
  pricePerToken: BigNumber;
}
export type OrderCreatedEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  OrderCreatedEventObject
>;

export type OrderCreatedEventFilter = TypedEventFilter<OrderCreatedEvent>;

export interface OrderFilledEventObject {
  subscription: string;
  amount: BigNumber;
  pricePerToken: BigNumber;
}
export type OrderFilledEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  OrderFilledEventObject
>;

export type OrderFilledEventFilter = TypedEventFilter<OrderFilledEvent>;

export interface Marketplace extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MarketplaceInterface;

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
    buyOrder(
      sub: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      pricePerToken: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getOpenOrders(
      _sub: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[Marketplace.OpenOrderStructOutput[]]>;

    getSubSelling(overrides?: CallOverrides): Promise<[string[]]>;

    registerOrder(
      sub: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      pricePerToken: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  buyOrder(
    sub: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    pricePerToken: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getOpenOrders(
    _sub: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<Marketplace.OpenOrderStructOutput[]>;

  getSubSelling(overrides?: CallOverrides): Promise<string[]>;

  registerOrder(
    sub: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    pricePerToken: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    buyOrder(
      sub: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      pricePerToken: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    getOpenOrders(
      _sub: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<Marketplace.OpenOrderStructOutput[]>;

    getSubSelling(overrides?: CallOverrides): Promise<string[]>;

    registerOrder(
      sub: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      pricePerToken: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "OrderCreated(address,uint256,uint256)"(
      subscription?: PromiseOrValue<string> | null,
      amount?: null,
      pricePerToken?: null
    ): OrderCreatedEventFilter;
    OrderCreated(
      subscription?: PromiseOrValue<string> | null,
      amount?: null,
      pricePerToken?: null
    ): OrderCreatedEventFilter;

    "OrderFilled(address,uint256,uint256)"(
      subscription?: PromiseOrValue<string> | null,
      amount?: null,
      pricePerToken?: null
    ): OrderFilledEventFilter;
    OrderFilled(
      subscription?: PromiseOrValue<string> | null,
      amount?: null,
      pricePerToken?: null
    ): OrderFilledEventFilter;
  };

  estimateGas: {
    buyOrder(
      sub: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      pricePerToken: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getOpenOrders(
      _sub: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSubSelling(overrides?: CallOverrides): Promise<BigNumber>;

    registerOrder(
      sub: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      pricePerToken: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    buyOrder(
      sub: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      pricePerToken: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getOpenOrders(
      _sub: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSubSelling(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    registerOrder(
      sub: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      pricePerToken: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}