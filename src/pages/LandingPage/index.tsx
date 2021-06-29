import { useHistory } from 'react-router-dom';
import { MyButton } from '../../components/Button';
import { landingStyle } from '../../styles/landing.styles';
import { Slider } from '../../components/Slider';
import { useTheme } from '../../hooks/useTheme';
import colors from '../../styles/colors.json';

export const LandingPage = () => {
    const {
        landingContainer,
        innerContainer,
        titleContainer,
        button,
        paragraph,
        span
    }  = landingStyle();
    const { push } = useHistory();
    const { theme } = useTheme();
    
    return(
        <div
          className={landingContainer}
          style={{backgroundColor: theme==='light'?colors.background.light:colors.background.dark}}
        >
            <Slider />
            <img src="/svgs/logo.svg" alt="Ask a dev" />
            <div className={innerContainer}>
                <div className={titleContainer}>
                    <p className={paragraph}>Create Q&A rooms</p>
                    <span className={span}>Start answering or making questions today!</span>
                </div>
                <MyButton className={button} onClick={()=>push('/auth')}>
                    <span>Get Started</span>
                </MyButton>
            </div>
        </div>
    )
}