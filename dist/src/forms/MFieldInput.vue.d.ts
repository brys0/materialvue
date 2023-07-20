declare const _sfc_main: import("vue").DefineComponent<{
    name: {
        type: StringConstructor;
        required: true;
    };
    modelValue: {
        type: StringConstructor;
        default: string;
    };
}, {
    props: any;
    nameRef: import("vue").Ref<string>;
    errorMessage: import("vue").Ref<string | undefined>;
    value: import("vue").Ref<unknown>;
    handleChange: (e: unknown, shouldValidate?: boolean | undefined) => void;
    listeners: import("vue").ComputedRef<{
        blur: (e: unknown, shouldValidate?: boolean | undefined) => void;
        change: (e: unknown, shouldValidate?: boolean | undefined) => void;
        input: (e: unknown, shouldValidate?: boolean | undefined) => void;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    name: {
        type: StringConstructor;
        required: true;
    };
    modelValue: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    modelValue: string;
}, {}>;
export default _sfc_main;
