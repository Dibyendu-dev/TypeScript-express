import { AsyncLocalStorage } from "async_hooks";

type AsyncLocalStorageType ={
    corelationId:string
}

export const asyncLocalStorage = new AsyncLocalStorage<AsyncLocalStorageType>()

export const getCorelationId = ()=>{
    const asyncStore = asyncLocalStorage.getStore()
    return  asyncStore?.corelationId || "unknown-error-while-creating-corelationid"
}