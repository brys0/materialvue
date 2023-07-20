import { FunctionalComponent } from 'vue';
export declare enum MExtendedFabButtonVariant {
    surface = "surface",
    secondary = "secondary",
    tertiary = "tertiary"
}
export type MExtendedFabButtonProps = {
    lowered?: boolean;
    variant?: MExtendedFabButtonVariant;
};
export declare const MExtendedFabButton: FunctionalComponent<MExtendedFabButtonProps>;
export default MExtendedFabButton;
