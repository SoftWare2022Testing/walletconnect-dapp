"use strict";
exports.id = 137;
exports.ids = [137];
exports.modules = {

/***/ 6819:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZN": () => (/* binding */ getChainMetadata),
/* harmony export */   "nH": () => (/* binding */ EIP155ChainData)
/* harmony export */ });
/* unused harmony exports EIP155Colors, EIP155Metadata, getChainRequestRender */
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7200);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_helpers__WEBPACK_IMPORTED_MODULE_0__]);
_helpers__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const EIP155Colors = {
    ethereum: "99, 125, 234",
    optimism: "233, 1, 1",
    goerli: "189, 174, 155",
    xdai: "73, 169, 166",
    polygon: "130, 71, 229",
    celo: "60, 203, 132",
    arbitrum: "44, 55, 75"
};
const EIP155ChainData = {
    "1": {
        name: "Ethereum Mainnet",
        id: "eip155:1",
        rpc: [
            "https://api.mycryptoapi.com/eth"
        ],
        slip44: 60,
        testnet: false
    },
    "5": {
        name: "Ethereum Goerli",
        id: "eip155:5",
        rpc: [
            "https://rpc.goerli.mudit.blog"
        ],
        slip44: 60,
        testnet: true
    },
    "10": {
        name: "Optimism Mainnet",
        id: "eip155:10",
        rpc: [
            "https://mainnet.optimism.io"
        ],
        slip44: 60,
        testnet: false
    },
    "42": {
        name: "Ethereum Kovan",
        id: "eip155:42",
        rpc: [
            "https://kovan.poa.network"
        ],
        slip44: 60,
        testnet: true
    },
    "69": {
        name: "Optimism Kovan",
        id: "eip155:69",
        rpc: [
            "https://kovan.optimism.io"
        ],
        slip44: 60,
        testnet: true
    },
    "100": {
        name: "xDAI",
        id: "eip155:100",
        rpc: [
            "https://dai.poa.network"
        ],
        slip44: 60,
        testnet: false
    },
    "280": {
        name: "zkSync Era Testnet",
        id: "eip155:280",
        rpc: [
            "https://testnet.era.zksync.dev"
        ],
        slip44: 60,
        testnet: true
    },
    "324": {
        name: "zkSync Era",
        id: "eip155:324",
        rpc: [
            "https://mainnet.era.zksync.io"
        ],
        slip44: 60,
        testnet: false
    },
    "137": {
        name: "Polygon Mainnet",
        id: "eip155:137",
        rpc: [
            "https://rpc-mainnet.matic.network"
        ],
        slip44: 60,
        testnet: false
    },
    "420": {
        name: "Optimism Goerli",
        id: "eip155:420",
        rpc: [
            "https://goerli.optimism.io"
        ],
        slip44: 60,
        testnet: true
    },
    "42161": {
        name: "Arbitrum One",
        id: "eip155:42161",
        rpc: [
            "https://arb1.arbitrum.io/rpc"
        ],
        slip44: 60,
        testnet: false
    },
    "42220": {
        name: "Celo Mainnet",
        id: "eip155:42220",
        rpc: [
            "https://forno.celo.org"
        ],
        slip44: 52752,
        testnet: false
    },
    "44787": {
        name: "Celo Alfajores",
        id: "eip155:44787",
        rpc: [
            "https://alfajores-forno.celo-testnet.org"
        ],
        slip44: 52752,
        testnet: true
    },
    "80001": {
        name: "Polygon Mumbai",
        id: "eip155:80001",
        rpc: [
            "https://rpc-mumbai.matic.today"
        ],
        slip44: 60,
        testnet: true
    },
    "421611": {
        name: "Arbitrum Rinkeby",
        id: "eip155:421611",
        rpc: [
            "https://rinkeby.arbitrum.io/rpc"
        ],
        slip44: 60,
        testnet: true
    }
};
const EIP155Metadata = {
    "1": {
        name: "Ethereum",
        logo: "/assets/" + "eip155-1.png",
        rgb: EIP155Colors.ethereum
    },
    "5": {
        logo: "/assets/" + "eip155-5.png",
        rgb: EIP155Colors.goerli
    },
    "10": {
        name: "Optimism",
        logo: "/assets/" + "eip155-10.png",
        rgb: EIP155Colors.optimism
    },
    "42": {
        logo: "/assets/" + "eip155-42.png",
        rgb: EIP155Colors.ethereum
    },
    "69": {
        logo: "/assets/" + "eip155-69.png",
        rgb: EIP155Colors.optimism
    },
    "100": {
        logo: "/assets/" + "eip155-100.png",
        rgb: EIP155Colors.xdai
    },
    "137": {
        name: "Polygon",
        logo: "/assets/" + "eip155-137.png",
        rgb: EIP155Colors.polygon
    },
    "80001": {
        logo: "/assets/" + "eip155-80001.png",
        rgb: EIP155Colors.polygon
    },
    "42161": {
        name: "Arbitrum",
        logo: "/assets/" + "eip155-42161.png",
        rgb: EIP155Colors.arbitrum
    },
    "42220": {
        name: "Celo",
        logo: "/assets/" + "eip155-42220.png",
        rgb: EIP155Colors.celo
    },
    "44787": {
        logo: "/assets/" + "eip155-44787.png",
        rgb: EIP155Colors.celo
    },
    "421611": {
        logo: "/assets/" + "eip155-421611.png",
        rgb: EIP155Colors.arbitrum
    }
};
function getChainMetadata(chainId) {
    const reference = chainId.split(":")[1];
    const metadata = EIP155Metadata[reference];
    if (typeof metadata === "undefined") {
        throw new Error(`No chain metadata found for chainId: ${chainId}`);
    }
    return metadata;
}
function getChainRequestRender(request) {
    let params = [
        {
            label: "Method",
            value: request.method
        }
    ];
    switch(request.method){
        case "eth_sendTransaction":
        case "eth_signTransaction":
            params = [
                ...params,
                {
                    label: "From",
                    value: request.params[0].from
                },
                {
                    label: "To",
                    value: request.params[0].to
                },
                {
                    label: "Gas Limit",
                    value: request.params[0].gas ? convertHexToNumber(request.params[0].gas) : request.params[0].gasLimit ? convertHexToNumber(request.params[0].gasLimit) : ""
                },
                {
                    label: "Gas Price",
                    value: convertHexToNumber(request.params[0].gasPrice)
                },
                {
                    label: "Nonce",
                    value: convertHexToNumber(request.params[0].nonce)
                },
                {
                    label: "Value",
                    value: request.params[0].value ? convertHexToNumber(request.params[0].value) : ""
                },
                {
                    label: "Data",
                    value: request.params[0].data
                }, 
            ];
            break;
        case "eth_sign":
            params = [
                ...params,
                {
                    label: "Address",
                    value: request.params[0]
                },
                {
                    label: "Message",
                    value: request.params[1]
                }, 
            ];
            break;
        case "personal_sign":
            params = [
                ...params,
                {
                    label: "Address",
                    value: request.params[1]
                },
                {
                    label: "Message",
                    value: convertHexToUtf8(request.params[0])
                }, 
            ];
            break;
        default:
            params = [
                ...params,
                {
                    label: "params",
                    value: JSON.stringify(request.params, null, "	")
                }, 
            ];
            break;
    }
    return params;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3116:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Uu": () => (/* reexport */ DEFAULT_APP_METADATA),
  "TM": () => (/* reexport */ DEFAULT_CHAINS),
  "NT": () => (/* reexport */ DEFAULT_LOGGER),
  "zY": () => (/* reexport */ DEFAULT_MAIN_CHAINS),
  "O_": () => (/* reexport */ DEFAULT_PROJECT_ID),
  "DX": () => (/* reexport */ DEFAULT_RELAY_URL),
  "mn": () => (/* reexport */ DEFAULT_TEST_CHAINS)
});

// UNUSED EXPORTS: DEFAULT_EIP155_METHODS, DEFAULT_EIP_155_EVENTS

;// CONCATENATED MODULE: ./src/constants/default.ts
const DEFAULT_MAIN_CHAINS = [
    // mainnets
    "eip155:1",
    "eip155:10",
    "eip155:100",
    "eip155:137",
    "eip155:42161",
    "eip155:42220", 
];
const DEFAULT_TEST_CHAINS = [
    // testnets
    "eip155:5",
    "eip155:69",
    "eip155:80001",
    "eip155:421611",
    "eip155:44787", 
];
const DEFAULT_CHAINS = [
    ...DEFAULT_MAIN_CHAINS,
    ...DEFAULT_TEST_CHAINS
];
const DEFAULT_PROJECT_ID = "b25f37d83d1c41f8882595c4c7f5b5d8";
const DEFAULT_RELAY_URL = "wss://relay.walletconnect.com";
const DEFAULT_EIP155_METHODS = (/* unused pure expression or super */ null && ([
    "eth_sendTransaction",
    "personal_sign",
    "eth_signTypedData"
]));
var DEFAULT_EIP_155_EVENTS;
(function(DEFAULT_EIP_155_EVENTS) {
    DEFAULT_EIP_155_EVENTS["ETH_CHAIN_CHANGED"] = "chainChanged";
    DEFAULT_EIP_155_EVENTS["ETH_ACCOUNTS_CHANGED"] = "accountsChanged";
})(DEFAULT_EIP_155_EVENTS || (DEFAULT_EIP_155_EVENTS = {}));
const DEFAULT_LOGGER = "debug";
const DEFAULT_APP_METADATA = {
    name: "React App with ethers",
    description: "React App for WalletConnect",
    url: "https://walletconnect.com/",
    icons: [
        "https://avatars.githubusercontent.com/u/37784886"
    ]
};

;// CONCATENATED MODULE: ./src/constants/index.ts



/***/ }),

/***/ 40:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pe": () => (/* binding */ ClientContextProvider),
/* harmony export */   "V": () => (/* binding */ useWalletConnectClient)
/* harmony export */ });
/* unused harmony export ClientContext */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _web3modal_standalone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6897);
/* harmony import */ var _walletconnect_universal_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(835);
/* harmony import */ var _walletconnect_universal_provider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_walletconnect_universal_provider__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3116);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1982);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7200);
/* harmony import */ var _chains_eip155__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6819);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_web3modal_standalone__WEBPACK_IMPORTED_MODULE_2__, _helpers__WEBPACK_IMPORTED_MODULE_6__, _chains_eip155__WEBPACK_IMPORTED_MODULE_7__]);
([_web3modal_standalone__WEBPACK_IMPORTED_MODULE_2__, _helpers__WEBPACK_IMPORTED_MODULE_6__, _chains_eip155__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








/**
 * Context
 */ const ClientContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});
/**
 * Provider
 */ /**
 * Provider
 */ function ClientContextProvider({ children  }) {
    const { 0: client , 1: setClient  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: pairings , 1: setPairings  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: session , 1: setSession  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: ethereumProvider , 1: setEthereumProvider  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: web3Provider , 1: setWeb3Provider  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: isFetchingBalances , 1: setIsFetchingBalances  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: isInitializing , 1: setIsInitializing  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: hasCheckedPersistedSession , 1: setHasCheckedPersistedSession  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: balances , 1: setBalances  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const { 0: accounts , 1: setAccounts  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: chainData , 1: setChainData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const { 0: chain , 1: setChain  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: web3Modal , 1: setWeb3Modal  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const resetApp = ()=>{
        setPairings([]);
        setSession(undefined);
        setBalances({});
        setAccounts([]);
        setChain("");
    };
    const loadChainData = async ()=>{
        const namespaces = (0,_helpers__WEBPACK_IMPORTED_MODULE_6__/* .getAllChainNamespaces */ .JP)();
        const chainData = {};
        await Promise.all(namespaces.map(async (namespace)=>{
            let chains;
            switch(namespace){
                case "eip155":
                    chains = _chains_eip155__WEBPACK_IMPORTED_MODULE_7__/* .EIP155ChainData */ .nH;
                    break;
                default:
                    console.error("Unknown chain namespace: ", namespace);
            }
            if (typeof chains !== "undefined") {
                chainData[namespace] = chains;
            }
        }));
        setChainData(chainData);
    };
    const disconnect = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ()=>{
        if (typeof ethereumProvider === "undefined") {
            throw new Error("ethereumProvider is not initialized");
        }
        await ethereumProvider.disconnect();
        resetApp();
    }, [
        ethereumProvider
    ]);
    const _subscribeToProviderEvents = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async (_client)=>{
        if (typeof _client === "undefined") {
            throw new Error("WalletConnect is not initialized");
        }
        _client.on("display_uri", async (uri)=>{
            console.log("EVENT", "QR Code Modal open");
            web3Modal?.openModal({
                uri
            });
        });
        // Subscribe to session ping
        _client.on("session_ping", ({ id , topic  })=>{
            console.log("EVENT", "session_ping");
            console.log(id, topic);
        });
        // Subscribe to session event
        _client.on("session_event", ({ event , chainId  })=>{
            console.log("EVENT", "session_event");
            console.log(event, chainId);
        });
        // Subscribe to session update
        _client.on("session_update", ({ topic , session  })=>{
            console.log("EVENT", "session_updated");
            setSession(session);
        });
        // Subscribe to session delete
        _client.on("session_delete", ({ id , topic  })=>{
            console.log("EVENT", "session_deleted");
            console.log(id, topic);
            resetApp();
        });
    }, [
        web3Modal
    ]);
    const createClient = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ()=>{
        try {
            setIsInitializing(true);
            if (!_constants__WEBPACK_IMPORTED_MODULE_4__/* .DEFAULT_PROJECT_ID */ .O_) return;
            const provider = await _walletconnect_universal_provider__WEBPACK_IMPORTED_MODULE_3___default().init({
                projectId: _constants__WEBPACK_IMPORTED_MODULE_4__/* .DEFAULT_PROJECT_ID */ .O_,
                logger: _constants__WEBPACK_IMPORTED_MODULE_4__/* .DEFAULT_LOGGER */ .NT,
                relayUrl: _constants__WEBPACK_IMPORTED_MODULE_4__/* .DEFAULT_RELAY_URL */ .DX
            });
            const web3Modal = new _web3modal_standalone__WEBPACK_IMPORTED_MODULE_2__.Web3Modal({
                projectId: _constants__WEBPACK_IMPORTED_MODULE_4__/* .DEFAULT_PROJECT_ID */ .O_,
                walletConnectVersion: 2
            });
            setEthereumProvider(provider);
            setClient(provider.client);
            setWeb3Modal(web3Modal);
        } catch (err) {
            throw err;
        } finally{
            setIsInitializing(false);
        }
    }, []);
    const createWeb3Provider = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((ethereumProvider)=>{
        const web3Provider = new ethers__WEBPACK_IMPORTED_MODULE_5__.providers.Web3Provider(ethereumProvider);
        setWeb3Provider(web3Provider);
    }, []);
    const connect = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async (caipChainId, pairing)=>{
        if (!ethereumProvider) {
            throw new ReferenceError("WalletConnect Client is not initialized.");
        }
        const chainId = caipChainId.split(":").pop();
        console.log("Enabling EthereumProvider for chainId: ", chainId);
        const session = await ethereumProvider.connect({
            namespaces: {
                eip155: {
                    methods: [
                        "eth_sendTransaction",
                        "eth_signTransaction",
                        "eth_sign",
                        "personal_sign",
                        "eth_signTypedData", 
                    ],
                    chains: [
                        `eip155:${chainId}`
                    ],
                    events: [
                        "chainChanged",
                        "accountsChanged"
                    ],
                    rpcMap: {
                        chainId: `https://rpc.walletconnect.com?chainId=eip155:${chainId}&projectId=${_constants__WEBPACK_IMPORTED_MODULE_4__/* .DEFAULT_PROJECT_ID */ .O_}`
                    }
                }
            },
            pairingTopic: pairing?.topic
        });
        createWeb3Provider(ethereumProvider);
        const _accounts = await ethereumProvider.enable();
        console.log("_accounts", _accounts);
        setAccounts(_accounts);
        setSession(session);
        setChain(caipChainId);
        web3Modal?.closeModal();
    }, [
        ethereumProvider,
        chainData.eip155,
        createWeb3Provider,
        web3Modal
    ]);
    const onSessionConnected = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async (_session)=>{
        if (!ethereumProvider) {
            throw new ReferenceError("EthereumProvider is not initialized.");
        }
        const allNamespaceAccounts = Object.values(_session.namespaces).map((namespace)=>namespace.accounts).flat();
        const allNamespaceChains = Object.keys(_session.namespaces);
        const chainData = allNamespaceAccounts[0].split(":");
        const caipChainId = `${chainData[0]}:${chainData[1]}`;
        console.log("restored caipChainId", caipChainId);
        setChain(caipChainId);
        setSession(_session);
        setAccounts(allNamespaceAccounts.map((account)=>account.split(":")[2]));
        console.log("RESTORED", allNamespaceChains, allNamespaceAccounts);
        createWeb3Provider(ethereumProvider);
    }, [
        ethereumProvider,
        createWeb3Provider
    ]);
    const _checkForPersistedSession = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async (provider)=>{
        if (typeof provider === "undefined") {
            throw new Error("WalletConnect is not initialized");
        }
        const pairings = provider.client.pairing.getAll({
            active: true
        });
        // populates existing pairings to state
        setPairings(pairings);
        console.log("RESTORED PAIRINGS: ", pairings);
        if (typeof session !== "undefined") return;
        // populates (the last) existing session to state
        if (ethereumProvider?.session) {
            const _session = ethereumProvider?.session;
            console.log("RESTORED SESSION:", _session);
            await onSessionConnected(_session);
            return _session;
        }
    }, [
        session,
        ethereumProvider,
        onSessionConnected
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        loadChainData();
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!client) {
            createClient();
        }
    }, [
        client,
        createClient
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (ethereumProvider && web3Modal) _subscribeToProviderEvents(ethereumProvider);
    }, [
        _subscribeToProviderEvents,
        ethereumProvider,
        web3Modal
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const fetchBalances = async ()=>{
            if (!web3Provider || !accounts) return;
            try {
                setIsFetchingBalances(true);
                const _balances = await Promise.all(accounts.map(async (account)=>{
                    const balance = await web3Provider.getBalance(account);
                    return {
                        account,
                        symbol: "ETH",
                        balance: ethers__WEBPACK_IMPORTED_MODULE_5__.utils.formatEther(balance),
                        contractAddress: ""
                    };
                }));
                const balancesByAccount = _balances.reduce((obj, balance)=>{
                    obj[balance.account] = balance;
                    return obj;
                }, {});
                setBalances(balancesByAccount);
            } catch (error) {
                throw new Error(error);
            } finally{
                setIsFetchingBalances(false);
            }
        };
        fetchBalances();
    }, [
        web3Provider,
        accounts
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const getPersistedSession = async ()=>{
            if (!ethereumProvider) return;
            await _checkForPersistedSession(ethereumProvider);
            setHasCheckedPersistedSession(true);
        };
        if (ethereumProvider && chainData && !hasCheckedPersistedSession) {
            getPersistedSession();
        }
    }, [
        ethereumProvider,
        chainData,
        _checkForPersistedSession,
        hasCheckedPersistedSession
    ]);
    const value = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({
            pairings,
            isInitializing,
            balances,
            isFetchingBalances,
            accounts,
            chain,
            client,
            session,
            disconnect,
            connect,
            chainData,
            web3Provider
        }), [
        pairings,
        isInitializing,
        balances,
        isFetchingBalances,
        accounts,
        chain,
        client,
        session,
        disconnect,
        connect,
        chainData,
        web3Provider, 
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ClientContext.Provider, {
        value: {
            ...value
        },
        children: children
    });
}
function useWalletConnectClient() {
    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ClientContext);
    if (context === undefined) {
        throw new Error("useWalletConnectClient must be used within a ClientContextProvider");
    }
    return context;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3612:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HS": () => (/* binding */ apiGetGasPrice),
/* harmony export */   "aW": () => (/* binding */ apiGetAccountNonce)
/* harmony export */ });
/* unused harmony export rpcProvidersByChainId */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const WALLETCONNECT_RPC_BASE_URL = `https://rpc.walletconnect.com/v1?projectId=${"b25f37d83d1c41f8882595c4c7f5b5d8"}`;
const rpcProvidersByChainId = {
    1: {
        name: "Ethereum Mainnet",
        baseURL: WALLETCONNECT_RPC_BASE_URL + "&chainId=eip155:1",
        token: {
            name: "Ether",
            symbol: "ETH"
        }
    },
    5: {
        name: "Ethereum Goerli",
        baseURL: WALLETCONNECT_RPC_BASE_URL + "&chainId=eip155:5",
        token: {
            name: "Ether",
            symbol: "ETH"
        }
    },
    137: {
        name: "Polygon Mainnet",
        baseURL: WALLETCONNECT_RPC_BASE_URL + "&chainId=eip155:137",
        token: {
            name: "Matic",
            symbol: "MATIC"
        }
    },
    280: {
        name: "zkSync Era Testnet",
        baseURL: WALLETCONNECT_RPC_BASE_URL + "&chainId=eip155:280",
        token: {
            name: "Ether",
            symbol: "ETH"
        }
    },
    324: {
        name: "zkSync Era",
        baseURL: WALLETCONNECT_RPC_BASE_URL + "&chainId=eip155:324",
        token: {
            name: "Ether",
            symbol: "ETH"
        }
    },
    80001: {
        name: "Polygon Mumbai",
        baseURL: WALLETCONNECT_RPC_BASE_URL + "&chainId=eip155:80001",
        token: {
            name: "Matic",
            symbol: "MATIC"
        }
    },
    10: {
        name: "Optimism",
        baseURL: WALLETCONNECT_RPC_BASE_URL + "&chainId=eip155:10",
        token: {
            name: "Ether",
            symbol: "ETH"
        }
    },
    420: {
        name: "Optimism Goerli",
        baseURL: WALLETCONNECT_RPC_BASE_URL + "&chainId=eip155:420",
        token: {
            name: "Ether",
            symbol: "ETH"
        }
    },
    42161: {
        name: "Arbitrum",
        baseURL: WALLETCONNECT_RPC_BASE_URL + "&chainId=eip155:42161",
        token: {
            name: "Ether",
            symbol: "ETH"
        }
    },
    421611: {
        name: "Arbitrum Rinkeby",
        baseURL: "https://rinkeby.arbitrum.io/rpc",
        token: {
            name: "Ether",
            symbol: "ETH"
        }
    },
    100: {
        name: "xDAI",
        baseURL: "https://xdai-archive.blockscout.com",
        token: {
            name: "xDAI",
            symbol: "xDAI"
        }
    },
    42220: {
        name: "Celo",
        baseURL: "https://rpc.walletconnect.com/v1",
        token: {
            name: "CELO",
            symbol: "CELO"
        }
    },
    44787: {
        name: "Celo Alfajores",
        baseURL: "https://alfajores-forno.celo-testnet.org",
        token: {
            name: "CELO",
            symbol: "CELO"
        }
    }
};
const api = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
    baseURL: "https://rpc.walletconnect.com/v1",
    timeout: 10000,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    }
});
const apiGetAccountNonce = async (address, chainId)=>{
    const ethChainId = chainId.split(":")[1];
    const { baseURL  } = rpcProvidersByChainId[Number(ethChainId)];
    const response = await api.post(baseURL, {
        jsonrpc: "2.0",
        method: "eth_getTransactionCount",
        params: [
            address,
            "latest"
        ],
        id: 1
    });
    const { result  } = response.data;
    const nonce = parseInt(result, 16);
    return nonce;
};
const apiGetGasPrice = async (chainId)=>{
    const ethChainId = chainId.split(":")[1];
    const { baseURL  } = rpcProvidersByChainId[Number(ethChainId)];
    const response = await api.post(baseURL, {
        jsonrpc: "2.0",
        method: "eth_gasPrice",
        params: [],
        id: 1
    });
    const { result  } = response.data;
    return result;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3024:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ eip1271)
/* harmony export */ });
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1982);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_0__);

const spec = {
    magicValue: "0x1626ba7e",
    abi: [
        {
            constant: true,
            inputs: [
                {
                    name: "_hash",
                    type: "bytes32"
                },
                {
                    name: "_sig",
                    type: "bytes"
                }, 
            ],
            name: "isValidSignature",
            outputs: [
                {
                    name: "magicValue",
                    type: "bytes4"
                }, 
            ],
            payable: false,
            stateMutability: "view",
            type: "function"
        }, 
    ]
};
async function isValidSignature(address, sig, data, provider, abi = eip1271.spec.abi, magicValue = eip1271.spec.magicValue) {
    let returnValue;
    try {
        returnValue = await new ethers__WEBPACK_IMPORTED_MODULE_0__.Contract(address, abi, provider).isValidSignature(ethers__WEBPACK_IMPORTED_MODULE_0__.utils.arrayify(data), sig);
    } catch (e) {
        return false;
    }
    return returnValue.toLowerCase() === magicValue.toLowerCase();
}
const eip1271 = {
    spec,
    isValidSignature
};


/***/ }),

/***/ 2155:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ eip712)
/* harmony export */ });
// From spec: https://eips.ethereum.org/EIPS/eip-712
const example = {
    types: {
        EIP712Domain: [
            {
                name: "name",
                type: "string"
            },
            {
                name: "version",
                type: "string"
            },
            {
                name: "chainId",
                type: "uint256"
            },
            {
                name: "verifyingContract",
                type: "address"
            }, 
        ],
        Person: [
            {
                name: "name",
                type: "string"
            },
            {
                name: "wallet",
                type: "address"
            }, 
        ],
        Mail: [
            {
                name: "from",
                type: "Person"
            },
            {
                name: "to",
                type: "Person"
            },
            {
                name: "contents",
                type: "string"
            }, 
        ]
    },
    primaryType: "Mail",
    domain: {
        name: "Ether Mail",
        version: "1",
        chainId: 1,
        verifyingContract: "0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC"
    },
    message: {
        from: {
            name: "Cow",
            wallet: "0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826"
        },
        to: {
            name: "Bob",
            wallet: "0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB"
        },
        contents: "Hello, Bob!"
    }
};
const eip712 = {
    example
};


/***/ }),

/***/ 7200:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HU": () => (/* reexport safe */ _eip712__WEBPACK_IMPORTED_MODULE_1__.H),
/* harmony export */   "JP": () => (/* reexport safe */ _utilities__WEBPACK_IMPORTED_MODULE_4__.JP),
/* harmony export */   "N2": () => (/* reexport safe */ _utilities__WEBPACK_IMPORTED_MODULE_4__.N2),
/* harmony export */   "VE": () => (/* reexport safe */ _utilities__WEBPACK_IMPORTED_MODULE_4__.VE),
/* harmony export */   "i2": () => (/* reexport safe */ _utilities__WEBPACK_IMPORTED_MODULE_4__.i2),
/* harmony export */   "q3": () => (/* reexport safe */ _tx__WEBPACK_IMPORTED_MODULE_3__.q),
/* harmony export */   "s": () => (/* reexport safe */ _utilities__WEBPACK_IMPORTED_MODULE_4__.s),
/* harmony export */   "uM": () => (/* reexport safe */ _utilities__WEBPACK_IMPORTED_MODULE_4__.uM),
/* harmony export */   "zN": () => (/* reexport safe */ _utilities__WEBPACK_IMPORTED_MODULE_4__.zN)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3612);
/* harmony import */ var _eip712__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2155);
/* harmony import */ var _eip1271__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3024);
/* harmony import */ var _tx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5401);
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8543);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api__WEBPACK_IMPORTED_MODULE_0__, _tx__WEBPACK_IMPORTED_MODULE_3__]);
([_api__WEBPACK_IMPORTED_MODULE_0__, _tx__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5401:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ formatTestTransaction)
/* harmony export */ });
/* unused harmony export getGasPrice */
/* harmony import */ var _walletconnect_encoding__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2082);
/* harmony import */ var _walletconnect_encoding__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_walletconnect_encoding__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3612);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api__WEBPACK_IMPORTED_MODULE_1__]);
_api__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


async function getGasPrice(chainId) {
    const gasPrice = await (0,_api__WEBPACK_IMPORTED_MODULE_1__/* .apiGetGasPrice */ .HS)(chainId);
    return gasPrice;
}
async function formatTestTransaction(account) {
    const [namespace, reference, address] = account.split(":");
    const chainId = `${namespace}:${reference}`;
    // nonce
    const _nonce = await (0,_api__WEBPACK_IMPORTED_MODULE_1__/* .apiGetAccountNonce */ .aW)(address, chainId);
    const nonce = _walletconnect_encoding__WEBPACK_IMPORTED_MODULE_0__.sanitizeHex(_walletconnect_encoding__WEBPACK_IMPORTED_MODULE_0__.numberToHex(_nonce));
    // gasPrice
    const _gasPrice = await getGasPrice(chainId);
    const gasPrice = _walletconnect_encoding__WEBPACK_IMPORTED_MODULE_0__.sanitizeHex(_gasPrice);
    // gasLimit
    const _gasLimit = 21000;
    const gasLimit = _walletconnect_encoding__WEBPACK_IMPORTED_MODULE_0__.sanitizeHex(_walletconnect_encoding__WEBPACK_IMPORTED_MODULE_0__.numberToHex(_gasLimit));
    // value
    const _value = 0;
    const value = _walletconnect_encoding__WEBPACK_IMPORTED_MODULE_0__.sanitizeHex(_walletconnect_encoding__WEBPACK_IMPORTED_MODULE_0__.numberToHex(_value));
    const tx = {
        from: address,
        to: address,
        data: "0x",
        nonce,
        gasPrice,
        gasLimit,
        value
    };
    return tx;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8543:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JP": () => (/* binding */ getAllChainNamespaces),
/* harmony export */   "N2": () => (/* binding */ setLocaleStorageTestnetFlag),
/* harmony export */   "VE": () => (/* binding */ hashPersonalMessage),
/* harmony export */   "i2": () => (/* binding */ getLocalStorageTestnetFlag),
/* harmony export */   "s": () => (/* binding */ hashTypedDataMessage),
/* harmony export */   "uM": () => (/* binding */ verifySignature),
/* harmony export */   "zN": () => (/* binding */ ellipseAddress)
/* harmony export */ });
/* unused harmony exports capitalize, ellipseText, getDataString, isMobile, encodePersonalMessage, encodeTypedDataMessage, recoverAddress, recoverPersonalSignature, recoverTypedMessage, convertHexToNumber, convertHexToUtf8, sanitizeDecimals, toWad, fromWad, LOCALSTORAGE_KEY_TESTNET, INITIAL_STATE_TESTNET_DEFAULT */
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1982);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _walletconnect_encoding__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2082);
/* harmony import */ var _walletconnect_encoding__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_walletconnect_encoding__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var eth_sig_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9685);
/* harmony import */ var eth_sig_util__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(eth_sig_util__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ethereumjs_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7567);
/* harmony import */ var ethereumjs_util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ethereumjs_util__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _eip1271__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3024);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3116);






function capitalize(string) {
    return string.split(" ").map((word)=>word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
}
function ellipseText(text = "", maxLength = 9999) {
    if (text.length <= maxLength) {
        return text;
    }
    const _maxLength = maxLength - 3;
    let ellipse = false;
    let currentLength = 0;
    const result = text.split(" ").filter((word)=>{
        currentLength += word.length;
        if (ellipse || currentLength >= _maxLength) {
            ellipse = true;
            return false;
        } else {
            return true;
        }
    }).join(" ") + "...";
    return result;
}
function ellipseAddress(address = "", width = 10) {
    return `${address.slice(0, width)}...${address.slice(-width)}`;
}
function getDataString(func, arrVals) {
    let val = "";
    for(let i = 0; i < arrVals.length; i++){
        val += encoding.padLeft(arrVals[i], 64);
    }
    const data = func + val;
    return data;
}
function isMobile() {
    let mobile = false;
    function hasTouchEvent() {
        try {
            document.createEvent("TouchEvent");
            return true;
        } catch (e) {
            return false;
        }
    }
    function hasMobileUserAgent() {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(navigator.userAgent.substr(0, 4))) {
            return true;
        } else if (hasTouchEvent()) {
            return true;
        }
        return false;
    }
    mobile = hasMobileUserAgent();
    return mobile;
}
function encodePersonalMessage(msg) {
    const data = _walletconnect_encoding__WEBPACK_IMPORTED_MODULE_1__.utf8ToBuffer(msg);
    const buf = Buffer.concat([
        Buffer.from("\x19Ethereum Signed Message:\n" + data.length.toString(), "utf8"),
        data, 
    ]);
    return ethereumjs_util__WEBPACK_IMPORTED_MODULE_3__.bufferToHex(buf);
}
function hashPersonalMessage(msg) {
    const data = encodePersonalMessage(msg);
    const buf = ethereumjs_util__WEBPACK_IMPORTED_MODULE_3__.toBuffer(data);
    const hash = ethereumjs_util__WEBPACK_IMPORTED_MODULE_3__.keccak256(buf);
    return ethereumjs_util__WEBPACK_IMPORTED_MODULE_3__.bufferToHex(hash);
}
function encodeTypedDataMessage(msg) {
    const data = eth_sig_util__WEBPACK_IMPORTED_MODULE_2__.TypedDataUtils.sanitizeData(JSON.parse(msg));
    const buf = Buffer.concat([
        Buffer.from("1901", "hex"),
        eth_sig_util__WEBPACK_IMPORTED_MODULE_2__.TypedDataUtils.hashStruct("EIP712Domain", data.domain, data.types),
        eth_sig_util__WEBPACK_IMPORTED_MODULE_2__.TypedDataUtils.hashStruct(data.primaryType, data.message, data.types), 
    ]);
    return ethereumjs_util__WEBPACK_IMPORTED_MODULE_3__.bufferToHex(buf);
}
function hashTypedDataMessage(msg) {
    const data = encodeTypedDataMessage(msg);
    const buf = ethereumjs_util__WEBPACK_IMPORTED_MODULE_3__.toBuffer(data);
    const hash = ethereumjs_util__WEBPACK_IMPORTED_MODULE_3__.keccak256(buf);
    return ethereumjs_util__WEBPACK_IMPORTED_MODULE_3__.bufferToHex(hash);
}
function recoverAddress(sig, hash) {
    const params = ethereumjs_util__WEBPACK_IMPORTED_MODULE_3__.fromRpcSig(sig);
    const result = ethereumjs_util__WEBPACK_IMPORTED_MODULE_3__.ecrecover(ethereumjs_util__WEBPACK_IMPORTED_MODULE_3__.toBuffer(hash), params.v, params.r, params.s);
    const signer = ethereumjs_util__WEBPACK_IMPORTED_MODULE_3__.bufferToHex(ethereumjs_util__WEBPACK_IMPORTED_MODULE_3__.publicToAddress(result));
    return signer;
}
function recoverPersonalSignature(sig, msg) {
    const hash = hashPersonalMessage(msg);
    const signer = recoverAddress(sig, hash);
    return signer;
}
function recoverTypedMessage(sig, msg) {
    const hash = hashTypedDataMessage(msg);
    const signer = recoverAddress(sig, hash);
    return signer;
}
async function verifySignature(address, sig, hash, provider) {
    const bytecode = await provider.getCode(address);
    if (!bytecode || bytecode === "0x" || bytecode === "0x0" || bytecode === "0x00") {
        const signer = recoverAddress(sig, hash);
        return signer.toLowerCase() === address.toLowerCase();
    } else {
        return _eip1271__WEBPACK_IMPORTED_MODULE_4__/* .eip1271.isValidSignature */ .p.isValidSignature(address, sig, hash, provider);
    }
}
function convertHexToNumber(hex) {
    try {
        return encoding.hexToNumber(hex);
    } catch (e) {
        return hex;
    }
}
function convertHexToUtf8(hex) {
    try {
        return encoding.hexToUtf8(hex);
    } catch (e) {
        return hex;
    }
}
const sanitizeDecimals = (value, decimals = 18)=>{
    const [integer, fractional] = value.split(".");
    const _fractional = fractional ? fractional.substring(0, decimals).replace(/0+$/gi, "") : undefined;
    return _fractional ? [
        integer,
        _fractional
    ].join(".") : integer;
};
const toWad = (amount, decimals = 18)=>{
    return utils.parseUnits(sanitizeDecimals(amount, decimals), decimals);
};
const fromWad = (wad, decimals = 18)=>{
    return sanitizeDecimals(utils.formatUnits(wad, decimals), decimals);
};
const LOCALSTORAGE_KEY_TESTNET = "TESTNET";
const INITIAL_STATE_TESTNET_DEFAULT = true;
function setLocaleStorageTestnetFlag(value) {
    window.localStorage.setItem(LOCALSTORAGE_KEY_TESTNET, `${value}`);
}
function getLocalStorageTestnetFlag() {
    if (true) return false;
    let value = INITIAL_STATE_TESTNET_DEFAULT;
    const persisted = window.localStorage.getItem(LOCALSTORAGE_KEY_TESTNET);
    if (!persisted) {
        setLocaleStorageTestnetFlag(value);
    } else {
        value = persisted === "true" ? true : false;
    }
    return value;
}
const getAllChainNamespaces = ()=>{
    const namespaces = [];
    _constants__WEBPACK_IMPORTED_MODULE_5__/* .DEFAULT_CHAINS.forEach */ .TM.forEach((chainId)=>{
        const [namespace] = chainId.split(":");
        if (!namespaces.includes(namespace)) {
            namespaces.push(namespace);
        }
    });
    return namespaces;
};


/***/ }),

/***/ 7461:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KP": () => (/* binding */ globalStyle),
/* harmony export */   "O9": () => (/* binding */ colors),
/* harmony export */   "Rq": () => (/* binding */ fonts),
/* harmony export */   "jW": () => (/* binding */ responsive),
/* harmony export */   "pB": () => (/* binding */ transitions),
/* harmony export */   "q": () => (/* binding */ shadows)
/* harmony export */ });
const colors = {
    white: "255, 255, 255",
    black: "0, 0, 0",
    dark: "12, 12, 13",
    grey: "169, 169, 188",
    darkGrey: "113, 119, 138",
    lightGrey: "212, 212, 212",
    blue: "101, 127, 230",
    lightBlue: "64, 153, 255",
    yellow: "250, 188, 45",
    orange: "246, 133, 27",
    green: "84, 209, 146",
    pink: "255, 51, 102",
    red: "214, 75, 71",
    purple: "110, 107, 233"
};
const fonts = {
    size: {
        tiny: "10px",
        small: "14px",
        medium: "16px",
        large: "18px",
        h1: "60px",
        h2: "50px",
        h3: "40px",
        h4: "32px",
        h5: "24px",
        h6: "20px"
    },
    weight: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800
    },
    family: {
        OpenSans: `"Open Sans", sans-serif`
    }
};
const transitions = {
    short: "all 0.1s ease-in-out",
    base: "all 0.2s ease-in-out",
    long: "all 0.3s ease-in-out",
    button: "all 0.15s ease-in-out"
};
const shadows = {
    soft: "0 4px 6px 0 rgba(50, 50, 93, 0.11), 0 1px 3px 0 rgba(0, 0, 0, 0.08), inset 0 0 1px 0 rgba(0, 0, 0, 0.06)",
    medium: "0 3px 6px 0 rgba(0, 0, 0, 0.06), 0 0 1px 0 rgba(50, 50, 93, 0.02), 0 5px 10px 0 rgba(59, 59, 92, 0.08)",
    big: "0 15px 35px 0 rgba(50, 50, 93, 0.06), 0 5px 15px 0 rgba(50, 50, 93, 0.15)",
    hover: "0 7px 14px 0 rgba(50, 50, 93, 0.1), 0 3px 6px 0 rgba(0, 0, 0, 0.08), inset 0 0 1px 0 rgba(0, 0, 0, 0.06)"
};
const responsive = {
    xs: {
        min: "min-width: 467px",
        max: "max-width: 468px"
    },
    sm: {
        min: "min-width: 639px",
        max: "max-width: 640px"
    },
    md: {
        min: "min-width: 959px",
        max: "max-width: 960px"
    },
    lg: {
        min: "min-width: 1023px",
        max: "max-width: 1024px"
    },
    xl: {
        min: "min-width: 1399px",
        max: "max-width: 1400px"
    }
};
const globalStyle = `

  html, body, #root {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${fonts.family.OpenSans};
    font-style: normal;
    font-stretch: normal;
    font-weight: ${fonts.weight.normal};
    font-size: ${fonts.size.medium};
    background-color: rgb(${colors.white});
    color: rgb(${colors.dark});
    overflow-y:auto;
    text-rendering: optimizeLegibility;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  	-webkit-text-size-adjust: 100%;
    -webkit-overflow-scrolling: touch;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;  
  }

  button {
    border-style: none;
    line-height: 1em;
    background-image: none;
    outline: 0;
    -webkit-box-shadow: none;
            box-shadow: none;
  }

  [tabindex] {
    outline: none;
    width: 100%;
    height: 100%;
  }

  a, p, h1, h2, h3, h4, h5, h6 {
  	text-decoration: none;
  	margin: 0;
    padding: 0;
    margin: 0.7em 0;
  }

  h1 {
    font-size: ${fonts.size.h1}
  }
  h2 {
    font-size: ${fonts.size.h2}
  }
  h3 {
    font-size: ${fonts.size.h3}
  }
  h4 {
    font-size: ${fonts.size.h4}
  }
  h5 {
    font-size: ${fonts.size.h5}
  }
  h6 {
    font-size: ${fonts.size.h6}
  }

  a {
    background-color: transparent;
    -webkit-text-decoration-skip: objects;  
    text-decoration: none;
    color: inherit;
    outline: none;
  }

  b,
  strong {
    font-weight: inherit;
    font-weight: bolder;
  }

  ul, li {
  	list-style: none;
  	margin: 0;
  	padding: 0;
  }

  * {
    box-sizing: border-box !important;
  }


  input {
    -webkit-appearance: none;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  main,
  menu,
  nav,
  section,
  summary {
    display: block;
  }
  audio,
  canvas,
  progress,
  video {
    display: inline-block;
  }

  input[type="color"],
  input[type="date"],
  input[type="datetime"],
  input[type="datetime-local"],
  input[type="email"],
  input[type="month"],
  input[type="number"],
  input[type="password"],
  input[type="search"],
  input[type="tel"],
  input[type="text"],
  input[type="time"],
  input[type="url"],
  input[type="week"],
  select:focus,
  textarea {
    font-size: 16px;
  }
`;


/***/ })

};
;