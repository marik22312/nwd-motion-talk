import { AnimatedPage } from "@/components/AnimatedPage";
import { StyledImage } from "@/components/StyledImage";
import TwitterLike from '@/assets/images/twitter.gif';
import { AbsoluteDiv } from "@/components/AbsoluteDiv";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useKeyboardNavigation } from "@/hooks/useKeyboardNavigation";
import { useRouter } from "next/router";

const SlideThree = () => {
    const [listItem, setListItem] = useState(0);
    const router = useRouter();

    useKeyboardNavigation({
        steps: [
            () => setListItem(item => item +1),
            () => setListItem(item => item +1),
            () => setListItem(item => item +1),
            () => router.push('/slide4'),
        ]
    })
    return (
        <AnimatedPage>
            <div style={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
            }}>
                <div style={{
                    maxWidth: '50%',
                    'textAlign': 'center',
                }}>
                    <h1>Why do we want animations?</h1>
                </div>
                <div style={{
                    fontSize: '40px',
                    minWidth: '50%',
                }}>
                    <ol>
                        <AnimatePresence>
                        {listItem >= 1 && <motion.li initial={{opacity: 0, marginLeft: -150}} animate={{opacity: 1, marginLeft: 0}}>Enhance UX and make loading more bearable</motion.li>}
                        {listItem >= 2 && <motion.li initial={{opacity: 0, marginLeft: -150}} animate={{opacity: 1, marginLeft: 0}}>Visually confirm to a user that the action succesfully completed</motion.li>}
                        {listItem >= 3 && <motion.li initial={{opacity: 0, marginLeft: -150}} animate={{opacity: 1, marginLeft: 0}}>And sometimes just for fun and general beauty</motion.li>}
                        </AnimatePresence>
                    </ol>
                </div>
            </div>
            <AbsoluteDiv top="10%" left="10%">
                <StyledImage src={TwitterLike} alt="twitter" />
            </AbsoluteDiv>
        </AnimatedPage>
    )
}

export default SlideThree;