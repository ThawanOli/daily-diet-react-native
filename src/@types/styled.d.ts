import 'styled-components/native';
import theme from '../theme';

declare module 'styled-components/native' {
  type ThemeType = typeof theme;

    export interface DefaultTheme extends ThemeType {}
    export declare global {
        namespace ReactNavigation {
            interface RootParamList {
            home: undefined;
            statistics: undefined;
            feedback: {
                isItemInDiet: boolean;
            };
            details: {
                meal: MealStorageDTO; 
            };
            newmeal: {
                meal?: MealStorageDTO; 
            };
            }
        }
    }
}
