import { FunctionalComponent } from 'vue';
export declare enum MListLines {
    one = 1,
    two = 2,
    three = 3
}
export type MListProps = {
    lines?: MListLines;
};
export declare const MList: FunctionalComponent<MListProps>;
export default MList;
