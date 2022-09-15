import styled from 'styled-components';

const PolicyContent = (props) => {

  switch(props.lang) {
    case 'french':

      return (
        <>
          <Title>Politique de confidentialité</Title>
          <TitleH2>Quels types d’informations recueillons-nous ?</TitleH2>
          <Paragraph>En fonction des Services auxquels vous avez recours, nous recueillons différents types d’informations vous concernant ou venant de vous.</Paragraph>
          <Paragraph>Vos activités et les informations que vous fournissez.</Paragraph>
          <Paragraph>Nous recueillons le contenu ainsi que d’autres types d’informations que vous fournissez lorsque vous avez recours à nos Services, notamment lorsque vous créez un compte, créez ou partagez du contenu ou encore lorsque vous communiquez avec d’autres personnes. Ceci peut comprendre des informations concernant le contenu que vous partagez, telles que le lieu d’une photo ou encore la date à laquelle un fichier a été créé. Nous recueillons également des informations concernant la manière dont vous utilisez nos Services, telles que les types de contenu que vous consultez ou avec lesquels vous interagissez, ou encore la fréquence et la durée de vos activités.</Paragraph>
          <Paragraph>Les activités des autres personnes et les informations qu’elles fournissent.</Paragraph>
          <Paragraph>Nous recueillons également les contenus et informations que les autres personnes fournissent lorsqu’elles ont recours à nos Services, notamment des informations vous concernant, par exemple lorsqu’elles partagent une photo de vous, vous envoient un message ou encore lorsqu’elles téléchargent, synchronisent ou importent vos coordonnées.</Paragraph>
          <Paragraph>Vos réseaux de contacts.</Paragraph>
          <Paragraph>Nous recueillons des informations sur les personnes et les groupes avec lesquels vous êtes en contact, ainsi que la manière dont vous interagissez avec eux (par exemple, les personnes avec qui vous communiquez le plus ou encore les groupes au sein desquels vous aimez vous exprimer). Nous recueillons également les coordonnées que vous téléchargez, synchronisez ou importez (un carnet d’adresses, par exemple) à partir d’un appareil.</Paragraph>
        </>
      );
      break;

    case 'english':
      
      return (
        <>
          <Title>Privacy Policy</Title>
          <TitleH2>What types of information do we collect?</TitleH2>
          <Paragraph>Depending on the Services you use, we collect different types of information about you or from you.</Paragraph>
          <Paragraph>Your activities and the information you provide.</Paragraph>
          <Paragraph>We collect content and other types of information that you provide when you use our Services, including when you create an account, create or share content, or when you communicate with others. This may include information about the content you share, such as the location of a photo or the date a file was created. We also collect information about how you use our Services, such as the types of content you view or interact with, and the frequency and duration of your activities.</Paragraph>
          <Paragraph>The activities of other people and the information they provide.</Paragraph>
          <Paragraph>We also collect the content and information that other people provide when they use our Services, including information about you, for example when they share a photo of you, send you a message or when they download, synchronize or import your details.</Paragraph>
          <Paragraph>Your contact networks.</Paragraph>
          <Paragraph>We collect information about the people and groups with whom you are in contact, as well as the way in which you interact with them (for example, the people with whom you communicate the most or the groups in which you like to express yourself) . We also collect contact information that you download, sync or import (e.g. an address book) from a device.</Paragraph>
        </>
      );
      break;

    case 'norwegian':

      return (
        <>
          <Title>Personvernerklæring</Title>
          <TitleH2>Hvilke typer informasjon samler vi inn?</TitleH2>
          <Paragraph>Avhengig av tjenestene du bruker, samler vi inn ulike typer informasjon om deg eller fra deg.</Paragraph>
          <Paragraph>Dine aktiviteter og informasjonen du gir.</Paragraph>
          <Paragraph>Vi samler inn innhold og annen type informasjon som du oppgir når du bruker tjenestene våre, inkludert når du oppretter en konto, oppretter eller deler innhold, eller når du kommuniserer med andre. Dette kan inkludere informasjon om innholdet du deler, for eksempel plasseringen av et bilde eller datoen en fil ble opprettet. Vi samler også inn informasjon om hvordan du bruker tjenestene våre, for eksempel hvilke typer innhold du ser på eller samhandler med, og frekvensen og varigheten av aktivitetene dine.</Paragraph>
          <Paragraph>Andre menneskers aktiviteter og informasjonen de gir.</Paragraph>
          <Paragraph>Vi samler også inn innholdet og informasjonen som andre mennesker gir når de bruker tjenestene våre, inkludert informasjon om deg, for eksempel når de deler et bilde av deg, sender deg en melding eller når de laster ned, synkroniserer eller importerer detaljene dine.</Paragraph>
          <Paragraph>Dine kontaktnettverk</Paragraph>
          <Paragraph>Vi samler inn informasjon om personene og gruppene du er i kontakt med, samt måten du samhandler med dem på (for eksempel personene du kommuniserer mest med eller gruppene du liker å uttrykke deg i). Vi samler også inn kontaktinformasjon som du laster ned, synkroniserer eller importerer (f.eks. en adressebok) fra en enhet.</Paragraph>
        </>
      );
      break;

    case 'mandarin':

      return (
        <>
          <Title>隐私政策</Title>
          <TitleH2>我们收集哪些类型的信息？</TitleH2>
          <Paragraph>根据您使用的服务，我们会收集关于您或您的不同类型的信息</Paragraph>
          <Paragraph>您的活动和您提供的信息</Paragraph>
          <Paragraph>我们会收集您在使用我们的服务时提供的内容和其他类型的信息，包括在您创建帐户、创建或共享内容或与他人交流时提供的信息。这可能包括有关您共享的内容的信息，例如照片的位置或文件的创建日期。我们还收集有关您如何使用我们的服务的信息，例如您查看或与之互动的内容类型，以及您的活动的频率和持续时间。
          其他人的活动和他们提供的信息。</Paragraph>
          <Paragraph>我们还收集其他人在使用我们的服务时提供的内容和信息，包括关于您的信息，例如当他们分享您的照片、向您发送消息或下载、同步或导入您的详细信息时。
          您的联系网络。</Paragraph>
          <Paragraph>我们收集有关与您联系的人和团体的信息，以及您与他们互动的方式（例如，与您交流最多的人或您喜欢在其中表达自己的团体）。我们还会收集您从设备下载、同步或导入的联系信息（例如地址簿）</Paragraph>
        </>
      );
      break;

    case 'russian':

      return (
        <>
          <Title>Политика конфиденциальности</Title>
          <TitleH2>Какие виды информации мы собираем?</TitleH2>
          <Paragraph>В зависимости от используемых вами Услуг мы собираем различные типы информации о вас или от вас.</Paragraph>
          <Paragraph>Ваша деятельность и информация, которую вы предоставляете.</Paragraph>
          <Paragraph>Мы собираем контент и другие типы информации, которые вы предоставляете, когда используете наши Сервисы, в том числе когда вы создаете учетную запись, создаете или делитесь контентом или когда вы общаетесь с другими. Это может включать информацию о содержимом, которым вы делитесь, например местонахождение фотографии или дату создания файла. Мы также собираем информацию о том, как вы используете наши Сервисы, например, о типах контента, который вы просматриваете или с которым взаимодействуете, а также о частоте и продолжительности ваших действий.</Paragraph>
          <Paragraph>Деятельность других людей и информация, которую они предоставляют.</Paragraph>
          <Paragraph>Мы также собираем контент и информацию, которые другие люди предоставляют при использовании наших Сервисов, включая информацию о вас, например, когда они делятся вашей фотографией, отправляют вам сообщение или когда загружают, синхронизируют или импортируют ваши данные.</Paragraph>
          <Paragraph>Ваши контактные сети.</Paragraph>
          <Paragraph>Мы собираем информацию о людях и группах, с которыми вы общаетесь, а также о том, как вы с ними взаимодействуете (например, о людях, с которыми вы общаетесь больше всего, или о группах, в которых вам нравится самовыражаться). Мы также собираем контактную информацию, которую вы загружаете, синхронизируете или импортируете (например, адресную книгу) с устройства.</Paragraph>
        </>
      );
      break;

    default:
      // code block
  }
}

const Title = styled.h1`
    font-size: 32px;
    margin-bottom: 35px;
`;
const TitleH2 = styled.h2`
    font-size: 26px;
    margin-bottom: 25px;
`;
const Paragraph = styled.p`
    line-height: 1.6;
    margin-bottom: 35px;
`;

export default PolicyContent;