/// <reference types="react" />
interface useForming {
    input(name: string): {
        value: string;
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => any;
    };
    val(name: string, value?: string): string | void;
    get(name: string): any;
    set(name: string, value: any): any;
    state: {
        [key: string]: any;
    };
}
export default function useForm(e?: {
    [key: string]: any;
}): useForming;
export {};
//# sourceMappingURL=useForm.d.ts.map