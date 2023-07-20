import { FunctionalComponent } from 'vue';
export declare enum MBarDirection {
    horizontal = "horizontal",
    vertical = "vertical"
}
export type MBarProps = {
    direction?: MBarDirection;
};
export declare const MBar: FunctionalComponent<MBarProps>;
export default MBar;
