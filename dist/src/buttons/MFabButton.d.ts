import { FunctionalComponent } from 'vue';
export declare enum MFabButtonVariant {
    surface = "surface",
    secondary = "secondary",
    tertiary = "tertiary"
}
export declare enum MFabButtonSize {
    small = "small",
    large = "large"
}
export type MFabButtonProps = {
    lowered?: boolean;
    size?: MFabButtonSize;
    variant?: MFabButtonVariant;
};
export declare const MFabButton: FunctionalComponent<MFabButtonProps>;
export default MFabButton;
