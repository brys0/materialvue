import { FunctionalComponent } from 'vue';
import { MTextFieldState } from '../text-field';
export type MFilledTextFieldProps = {
    state?: MTextFieldState;
    hasError?: boolean;
    withoutLabelText?: boolean;
};
export declare const MFilledTextField: FunctionalComponent<MFilledTextFieldProps>;
export default MFilledTextField;
