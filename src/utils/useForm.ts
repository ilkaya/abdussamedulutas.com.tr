import { useState } from "react";

interface useForming
{
    input(name:string) : {value:string,onChange:(e:React.ChangeEvent<HTMLInputElement>) => any};
    val(name:string,value?:string) : string|void;
    get(name:string) : any;
    set(name:string,value:any);
    state: {[key:string]:any};
    reset(): void;
}

export default function useForm(e?:{[key:string]:any}) : useForming
{
    let [data,setData] = useState<{[key:string]:any}>(e);
    function set(name:string,value:any)
    {
        setData(old => ({
            ...old,
            [name]: value
        }));
    }
    function get(name:string) : any
    {
        return data[name]
    }
    function reset(){
        setData(e);
    }
    function val(name:string,value?:string) : string|void
    {
        if(value === undefined)
        {
            return get(name);
        }else{
            return set(name,value);
        }
    }
    function input(name:string) : {value:string,onChange:(e:React.ChangeEvent<HTMLInputElement>) => any}
    {
        return {
            value: get(name),
            onChange: (e) => set(name, e.target.value)
        }
    }
    return {
        input,
        val,
        get,
        set,
        state:data,
        reset
    }
}