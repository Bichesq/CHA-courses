import QuestionSlide from '../components/QuestionSlide'
import Section from '../components/Section'
import { useSlideContext } from '../contexts/slidesContext'

const isDone = false;
const KnowledgeCheck = () => {
    const {question} = useSlideContext();
    return (
        <div>
            <QuestionSlide {...question} />
            {/* {content && <Section content={content} />} */}
        </div>
    )
}

export default KnowledgeCheck
