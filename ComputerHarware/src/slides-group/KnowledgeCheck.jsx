import QuestionSlide from '../components/QuestionSlide'
import Section from '../components/Section'
import { useOutletContext } from 'react-router-dom';


const isDone = false;
const KnowledgeCheck = () => {
    const { question } = useOutletContext();
    return (
        <div>
            <QuestionSlide {...question} />
            {/* {content && <Section content={content} />} */}
        </div>
    )
}

export default KnowledgeCheck
