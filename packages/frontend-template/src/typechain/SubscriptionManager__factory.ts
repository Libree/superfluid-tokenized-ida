/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "./common";
import type {
  SubscriptionManager,
  SubscriptionManagerInterface,
} from "./SubscriptionManager";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "DebtClaimed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "DebtMinted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "subscription",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "metadata",
        type: "bytes32",
      },
    ],
    name: "SubscriptionCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "Withdrawn",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_subscription",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "claimDebt",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ISuperToken",
        name: "_paymentToken",
        type: "address",
      },
      {
        internalType: "int96",
        name: "_flowRate",
        type: "int96",
      },
      {
        internalType: "bytes32",
        name: "metadata",
        type: "bytes32",
      },
    ],
    name: "createSubscription",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "getSubscriptions",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "user",
            type: "address",
          },
          {
            internalType: "address",
            name: "subscription",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "metadata",
            type: "bytes32",
          },
        ],
        internalType: "struct SubscriptionManager.Subscription[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_debtNFTAddress",
        type: "address",
      },
    ],
    name: "setDebtNFTAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_flowNFTAddress",
        type: "address",
      },
    ],
    name: "setFlowNFTAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_subscription",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "withdrawn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50611458806100206000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c80631840be65146100675780635d6a44131461007c5780636fb24f3a146100a557806399dccb16146100b8578063a0831f63146100e8578063ee2eb60014610118575b600080fd5b61007a6100753660046105a7565b61012b565b005b61008f61008a3660046105ef565b6103ad565b60405161009c9190610613565b60405180910390f35b61007a6100b3366004610683565b610452565b61007a6100c63660046105ef565b600180546001600160a01b0319166001600160a01b0392909216919091179055565b61007a6100f63660046105ef565b600080546001600160a01b0319166001600160a01b0392909216919091179055565b61007a610126366004610683565b6104ea565b600080546040516335313c2160e11b81523360048201526001600160a01b0390911690636a627842906024016020604051808303816000875af1158015610176573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061019a91906106af565b9050600084848333306040516101af90610582565b6001600160a01b039586168152600b9490940b6020850152604084019290925283166060830152909116608082015260a001604051809103906000f0801580156101fd573d6000803e3d6000fd5b50905060006040518060800160405280336001600160a01b03168152602001836001600160a01b03168152602001836001600160a01b031663010a38f56040518163ffffffff1660e01b8152600401602060405180830381865afa158015610269573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061028d91906106af565b8152602090810186905233600081815260028084526040808320805460018082018355918552938690208751600495860290910180546001600160a01b03199081166001600160a01b039384161782558989015193820180549091169383169390931790925587830151938201939093556060870151600390910155805163010a38f560e01b815290519596509087169492937fa60b503e624a8a102c01a557b7af223928430c791719a6989be26962afea9c8093869363010a38f593808201939291908290030181865afa15801561036a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061038e91906106af565b60408051918252602082018990520160405180910390a3505050505050565b6001600160a01b0381166000908152600260209081526040808320805482518185028101850190935280835260609492939192909184015b82821015610447576000848152602090819020604080516080810182526004860290920180546001600160a01b0390811684526001808301549091168486015260028201549284019290925260030154606083015290835290920191016103e5565b505050509050919050565b60005460405163053e071b60e41b81526001600160a01b03808516926353e071b09261048792869233929116906004016106c8565b600060405180830381600087803b1580156104a157600080fd5b505af11580156104b5573d6000803e3d6000fd5b50506040513392508391507f8c7cdad0d12a8db3e23561b42da6f10c8137914c97beff202213a410e1f520a390600090a35050565b6001546040516314cc296160e21b81526001600160a01b0380851692635330a5849261051f92869233929116906004016106c8565b600060405180830381600087803b15801561053957600080fd5b505af115801561054d573d6000803e3d6000fd5b50506040513392508391507fa7607424012986998524b4d1297b30dc747475825d352aae73d185ac69ba4e3090600090a35050565b610d3b806106e883390190565b6001600160a01b03811681146105a457600080fd5b50565b6000806000606084860312156105bc57600080fd5b83356105c78161058f565b92506020840135600b81900b81146105de57600080fd5b929592945050506040919091013590565b60006020828403121561060157600080fd5b813561060c8161058f565b9392505050565b602080825282518282018190526000919060409081850190868401855b8281101561067657815180516001600160a01b03908116865287820151168786015285810151868601526060908101519085015260809093019290850190600101610630565b5091979650505050505050565b6000806040838503121561069657600080fd5b82356106a18161058f565b946020939093013593505050565b6000602082840312156106c157600080fd5b5051919050565b9283526001600160a01b0391821660208401521660408201526060019056fe608060405234801561001057600080fd5b50604051610d3b380380610d3b83398101604081905261002f91610074565b50506001600160601b03909116600160a01b026001600160a01b03909216919091176000556003556100e6565b6001600160a01b038116811461007157600080fd5b50565b600080600080600060a0868803121561008c57600080fd5b85516100978161005c565b80955050602086015180600b0b81146100af57600080fd5b6040870151606088015191955093506100c78161005c565b60808701519092506100d88161005c565b809150509295509295909350565b610c46806100f56000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80637ff41241116100715780637ff4124114610115578063ca13bf651461011d578063d1c145ce14610144578063d41c3a6514610157578063daae6c4c14610168578063e1c6f3911461018b57600080fd5b8063010a38f5146100ae5780633013ce29146100c55780635330a584146100e557806353e071b0146100fa5780636d01875d1461010d575b600080fd5b6003545b6040519081526020015b60405180910390f35b6000546100d8906001600160a01b031681565b6040516100bc9190610a6e565b6100f86100f3366004610a9a565b61019d565b005b6100f8610108366004610a9a565b6103df565b6004546100b2565b6005546100b2565b60005461013190600160a01b9004600b0b81565b604051600b9190910b81526020016100bc565b6100b2610152366004610a9a565b610670565b6000546001600160a01b03166100d8565b61017b610176366004610adc565b610828565b60405190151581526020016100bc565b600054600160a01b9004600b0b610131565b6006546001600160a01b031633146101d05760405162461bcd60e51b81526004016101c790610b00565b60405180910390fd5b6003546040516331a9108f60e11b81526001600160a01b038085169290841691636352211e916102069160040190815260200190565b602060405180830381865afa158015610223573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102479190610b37565b6001600160a01b0316146102955760405162461bcd60e51b81526020600482015260156024820152744f6e6c79206c656e6465722063616e20636c61696d60581b60448201526064016101c7565b6004548311156102d95760405162461bcd60e51b815260206004820152600f60248201526e139bdd08195b9bdd59da081919589d608a1b60448201526064016101c7565b600080546040516370a0823160e01b81526001600160a01b03909116906370a082319061030a903090600401610a6e565b602060405180830381865afa158015610327573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061034b9190610b54565b9050600084821161035c578161035e565b845b60005460405163a9059cbb60e01b81526001600160a01b0387811660048301526024820184905292935091169063a9059cbb906044016020604051808303816000875af11580156103b3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103d79190610b6d565b505050505050565b6006546001600160a01b031633146104095760405162461bcd60e51b81526004016101c790610b00565b6003546040516331a9108f60e11b81526001600160a01b038085169290841691636352211e9161043f9160040190815260200190565b602060405180830381865afa15801561045c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104809190610b37565b6001600160a01b0316146104d15760405162461bcd60e51b815260206004820152601860248201527727b7363c9037bbb732b91031b0b7103bb4ba34323930bbb760411b60448201526064016101c7565b60045483106105115760405162461bcd60e51b815260206004820152600c60248201526b446562747320746f2070617960a01b60448201526064016101c7565b600080546040516370a0823160e01b81526001600160a01b03909116906370a0823190610542903090600401610a6e565b602060405180830381865afa15801561055f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105839190610b54565b905060045481116105cb5760405162461bcd60e51b81526020600482015260126024820152714e6f7420656e6f7567682062616c616e636560701b60448201526064016101c7565b6000600454826105db9190610b8f565b905060008582116105ec57816105ee565b855b60005460405163a9059cbb60e01b81526001600160a01b0388811660048301526024820184905292935091169063a9059cbb906044016020604051808303816000875af1158015610643573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106679190610b6d565b50505050505050565b6006546000906001600160a01b0316331461069d5760405162461bcd60e51b81526004016101c790610b00565b600454156106e15760405162461bcd60e51b8152602060048201526011602482015270105b1c9958591e481bdc195b881919589d607a1b60448201526064016101c7565b6003546040516331a9108f60e11b81526001600160a01b038086169290851691636352211e916107179160040190815260200190565b602060405180830381865afa158015610734573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107589190610b37565b6001600160a01b0316146107a95760405162461bcd60e51b815260206004820152601860248201527713db9b1e481bdddb995c8818d85b881b5a5b9d081919589d60421b60448201526064016101c7565b6040516335313c2160e11b81526001600160a01b03831690636a627842906107d5908690600401610a6e565b6020604051808303816000875af11580156107f4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108189190610b54565b6005556004939093555090919050565b60008054600160a01b8104600b0b9061084b906001600160a01b03168430610855565b600b0b1492915050565b600080610861856108ed565b604051631cd43d1160e31b81526001600160a01b03888116600483015287811660248301528681166044830152919350908316915063e6a1e88890606401608060405180830381865afa1580156108bc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108e09190610bb6565b5090979650505050505050565b7f65599bf746e17a00ea62e3610586992d88101b78eec3cf380706621fb97ea837547fb969d79d88acd02d04ed7ee7d43b949e7daf093d363abcfbbc43dfdfd1ce969a546001600160a01b038116610a3d576001600160a01b0382166109b257826001600160a01b03166320bc44256040518163ffffffff1660e01b8152600401602060405180830381865afa15801561098b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109af9190610b37565b91505b604051635b69006f60e11b81527fa9214cc96615e0085d3bb077758db69497dc2dce3b2b1e97bc93c3d18d83efd360048201526001600160a01b0383169063b6d200de90602401602060405180830381865afa158015610a16573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a3a9190610b37565b90505b6001600160a01b038216610a5357610a53610bfa565b6001600160a01b038116610a6957610a69610bfa565b915091565b6001600160a01b0391909116815260200190565b6001600160a01b0381168114610a9757600080fd5b50565b600080600060608486031215610aaf57600080fd5b833592506020840135610ac181610a82565b91506040840135610ad181610a82565b809150509250925092565b600060208284031215610aee57600080fd5b8135610af981610a82565b9392505050565b6020808252601e908201527f4f6e6c7920746865206d616e616765722063616e2063616c6c20746869730000604082015260600190565b600060208284031215610b4957600080fd5b8151610af981610a82565b600060208284031215610b6657600080fd5b5051919050565b600060208284031215610b7f57600080fd5b81518015158114610af957600080fd5b81810381811115610bb057634e487b7160e01b600052601160045260246000fd5b92915050565b60008060008060808587031215610bcc57600080fd5b84519350602085015180600b0b8114610be457600080fd5b6040860151606090960151949790965092505050565b634e487b7160e01b600052600160045260246000fdfea26469706673582212205a1998781f8b45c8725a142d7f88122635341ee0bcabe985fe5aeca4af2c02ac64736f6c63430008110033a2646970667358221220de9196165fec981f59289d89786a2731d688eff605ccc4170ae49cb9e67f7e9a64736f6c63430008110033";

type SubscriptionManagerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SubscriptionManagerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SubscriptionManager__factory extends ContractFactory {
  constructor(...args: SubscriptionManagerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SubscriptionManager> {
    return super.deploy(overrides || {}) as Promise<SubscriptionManager>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): SubscriptionManager {
    return super.attach(address) as SubscriptionManager;
  }
  override connect(signer: Signer): SubscriptionManager__factory {
    return super.connect(signer) as SubscriptionManager__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SubscriptionManagerInterface {
    return new utils.Interface(_abi) as SubscriptionManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SubscriptionManager {
    return new Contract(address, _abi, signerOrProvider) as SubscriptionManager;
  }
}
