import styled from 'styled-components';
import ComplaintBoxes from "../components/ComplaintBoxes";
import BasicDocument from "../components/PdfTicket";

const Complaint = () => {

    var sec = new Date().getSeconds();

    return (
        <>
            <BasicDocument
                lastName='test'
                email='email'
                phone='phone'
                address='adresse'
                color='color'
                price='106 506DC'
                time={sec} />
            <Wrapper>
                <ComplaintBoxes />
            </Wrapper>
        </>
    );
}

const Wrapper = styled.div`
    max-width: 960px;
    padding: 100px 0;
    margin: auto;
`;

export default Complaint;
