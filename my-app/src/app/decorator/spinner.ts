import { WritableSignal } from "@angular/core"

export function spinner(){
    return function(target:any, propertyKey: string, descriptor: PropertyDescriptor){
        const oldFuntion = descriptor.value
        descriptor.value = async function (... args:[]) {
            const Spinner = this as ISpinner

            try{
                Spinner.active.set(true)
                return await oldFuntion.apply(this,args)
            }
            catch(err)
            {
                Spinner.error()
            }
            finally{
                Spinner.active.set(false)
            }
            
        }
    }
}

export interface ISpinner{
    active:WritableSignal<boolean>;
    error():void;
}