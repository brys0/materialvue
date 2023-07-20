import { PropType } from 'vue';
export declare enum MDrawerListItemState {
    enabled = "enabled",
    hovered = "hovered",
    focused = "focused",
    pressed = "pressed"
}
export declare const MDrawerListItem: import("vue").DefineComponent<{
    state: {
        type: PropType<MDrawerListItemState>;
        default: MDrawerListItemState;
    };
    selected: {
        type: BooleanConstructor;
        default: boolean;
    };
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    state: {
        type: PropType<MDrawerListItemState>;
        default: MDrawerListItemState;
    };
    selected: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {
    state: MDrawerListItemState;
    selected: boolean;
}, {}>;
export default MDrawerListItem;
