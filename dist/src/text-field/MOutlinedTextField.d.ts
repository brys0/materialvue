import { FunctionalComponent } from 'vue';
import { MTextFieldState } from '../text-field';
export type MOutlinedTextFieldProps = {
    state?: MTextFieldState;
    hasError?: boolean;
    withoutLabelText?: boolean;
};
export declare const MOutlinedTextField: FunctionalComponent<MOutlinedTextFieldProps>;
export default MOutlinedTextField;
