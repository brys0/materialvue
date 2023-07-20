import { PropType } from 'vue';
export declare enum MRailListItemState {
    enabled = "enabled",
    hovered = "hovered",
    focused = "focused",
    pressed = "pressed"
}
export declare const MRailListItem: import("vue").DefineComponent<{
    state: {
        type: PropType<MRailListItemState>;
        default: MRailListItemState;
    };
    selected: {
        type: BooleanConstructor;
        default: boolean;
    };
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    state: {
        type: PropType<MRailListItemState>;
        default: MRailListItemState;
    };
    selected: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {
    state: MRailListItemState;
    selected: boolean;
}, {}>;
export default MRailListItem;
