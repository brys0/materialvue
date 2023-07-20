import { PropType } from 'vue';
export declare enum MListItemState {
    enabled = "enabled",
    hovered = "hovered",
    focused = "focused",
    pressed = "pressed",
    dragged = "dragged",
    disabled = "disabled"
}
export declare const MListItem: import("vue").DefineComponent<{
    state: {
        type: PropType<MListItemState>;
        required: false;
    };
    hasLeadingVideo: {
        type: BooleanConstructor;
        default: boolean;
    };
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    state: {
        type: PropType<MListItemState>;
        required: false;
    };
    hasLeadingVideo: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {
    hasLeadingVideo: boolean;
}, {}>;
export default MListItem;
