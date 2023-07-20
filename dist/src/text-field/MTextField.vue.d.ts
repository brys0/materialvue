import { PropType } from 'vue';
import { MTextFieldState } from '../text-field/MTextFieldState';
declare const _sfc_main: import("vue").DefineComponent<{
    state: {
        type: PropType<MTextFieldState>;
        default: MTextFieldState;
    };
    hasError: {
        type: BooleanConstructor;
        default: boolean;
    };
    withoutLabelText: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    props: any;
    emit: (event: "click" | "blur" | "focus" | "autofill" | "update:state", ...args: any[]) => void;
    fieldRef: import("vue").Ref<HTMLElement | null>;
    inputRef: import("vue").Ref<HTMLInputElement | null>;
    stateRef: import("vue").Ref<MTextFieldState>;
    enabledRef: import("vue").Ref<boolean>;
    hoveredRef: import("vue").Ref<boolean>;
    focusedRef: import("vue").Ref<boolean>;
    disabledRef: import("vue").Ref<boolean>;
    withoutLabelTextRef: import("vue").Ref<boolean>;
    hasErrorRef: import("vue").Ref<boolean>;
    isMouseDown: import("vue").Ref<boolean>;
    isEmpty: () => boolean;
    classRef: import("vue").ComputedRef<{
        'm-text-field': boolean;
        'has-error': boolean;
        'without-label-text': boolean;
        'is-empty': boolean;
        enabled: boolean;
        hovered: boolean;
        focused: boolean;
        disabled: boolean;
    }>;
    updateState: (newState: MTextFieldState) => void;
    handleMouseDown: () => void;
    handleClick: (event: PointerEvent) => void;
    handleBlur: (event: FocusEvent) => void;
    handleFocus: (event: FocusEvent) => void;
    handleAnimationStart: (event: AnimationEvent) => void;
    listeners: import("vue").ComputedRef<{
        mousedown: () => void;
        click: (event: PointerEvent) => void;
    }>;
    readonly MField: import("vue").FunctionalComponent<import("../forms/MField").MFieldProps, {}, any>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "blur" | "focus" | "autofill" | "update:state")[], "click" | "blur" | "focus" | "autofill" | "update:state", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    state: {
        type: PropType<MTextFieldState>;
        default: MTextFieldState;
    };
    hasError: {
        type: BooleanConstructor;
        default: boolean;
    };
    withoutLabelText: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
    onFocus?: ((...args: any[]) => any) | undefined;
    onAutofill?: ((...args: any[]) => any) | undefined;
    "onUpdate:state"?: ((...args: any[]) => any) | undefined;
}, {
    state: MTextFieldState;
    hasError: boolean;
    withoutLabelText: boolean;
}, {}>;
export default _sfc_main;
