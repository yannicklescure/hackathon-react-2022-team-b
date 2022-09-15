import styled from 'styled-components';
import ComplaintBoxes from "../components/ComplaintBoxes";

const Complaint = () => {

    return (
            <Wrapper>
                <ComplaintBoxes />
            </Wrapper>
    );
}

const Wrapper = styled.div`
    max-width: 960px;
    padding: 100px 0;
    margin: auto;
`;

export default Complaint;
