import {StyledImage} from "@/components/StyledImage";
import QRCode from '@/assets/images/QR.png';
import {useKeyboardStepper} from "@/hooks/useKeyboardStepper";
import {useRouter} from "next/router";

export const ThankYou = () => {
    const router = useRouter()
    useKeyboardStepper({
        onBack: () => router.push('/summary'),
    })
    return <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100vh',
    }}>
        <div>
            <h1>Thank you!</h1>
        </div>
        <div>
            <div style={{
                width: '500px',
                textAlign: 'center',
            }}>
                <h2>Slides are here</h2>
                <StyledImage src={QRCode} alt={'https://github.com/marik22312/nwd-motion-talk'}/>
            </div>
        </div>
        <div style={{
            width: '100%',
            textAlign: 'center',
            height: '100px',
            backgroundColor: '#445566',
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            fontSize: '20px',
        }}>
        <div>
            Twitter: <a href={'https://twitter.com/marik22312'}>@Marik_Sh</a>
        </div>
            <div>
                LinkedIn: <a href={'https://twitter.com/marik22312'}>@Marik_Sh</a>
            </div>
        </div>
    </div>
}

export default ThankYou