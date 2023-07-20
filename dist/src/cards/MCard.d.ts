import { PropType } from 'vue';
export declare enum MCardState {
    enabled = "enabled",
    hovered = "hovered",
    focused = "focused",
    pressed = "pressed",
    dragged = "dragged",
    disabled = "disabled"
}
export declare const MCard: import("vue").DefineComponent<{
    state: {
        type: PropType<MCardState>;
        required: false;
    };
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    state: {
        type: PropType<MCardState>;
        required: false;
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {}, {}>;
export default MCard;
