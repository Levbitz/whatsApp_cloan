import { useContext } from 'react';
import { ThemeContext } from '../../../assets/context/themeContext/theme';


const useTheme = () => useContext(ThemeContext);

export default useTheme;
