import { PropType } from 'vue';
export declare enum MButtonState {
    enabled = "enabled",
    hovered = "hovered",
    focused = "focused",
    pressed = "pressed",
    disabled = "disabled"
}
export declare const MButton: import("vue").DefineComponent<{
    state: {
        type: PropType<MButtonState>;
        required: false;
    };
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    state: {
        type: PropType<MButtonState>;
        required: false;
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {}, {}>;
export default MButton;
