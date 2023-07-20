import { FunctionalComponent } from 'vue';
export declare enum MTypographySize {
    small = "small",
    medium = "medium",
    large = "large"
}
export type MTypographyProps = {
    size?: MTypographySize;
};
export declare const MTypography: FunctionalComponent<MTypographyProps>;
export default MTypography;
