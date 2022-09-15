import React from 'react';
import { Page, Text, Image, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';
import ticketBackground from "../assets/ticket.jpg";
import error from "../assets/error.png";

// Create styles
const styles = StyleSheet.create({
  viewer: {
    width: window.innerWidth,
    height: window.innerHeight,
  },
  page: {
    backgroundColor: '#212429',
    color: "white",
    height: 250,
    maxHeight: 250
  },
  pageBackground: {
    position: 'absolute',
    top: '0',
    minWidth: '100%',
    minHeight: '100%',
    display: 'block',
    width: '100%',
    height: 250,
    maxHeight: 250,
    objectFit: 'cover',
    objectPosition: '0%'
  },
  errorBackground: {
    position: 'absolute',
    top: '0',
    minWidth: '100%',
    minHeight: '100%',
    display: 'block',
    width: '100%',
    height: 250,
    maxHeight: 250,
    objectFit: 'cover',
    objectPosition: 'center',
    opacity: 0.4,
  },
  section: {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: 15,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: 850,
    height: 250,
    maxHeight: 250
  },
  contentHolder: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  colContent: {
    flex: '200px',
    maxWidth: '200px'
  },
  textCenter: {
    fontSize: '24px',
    margin: 'auto',
  },
  textCenterSmall: {
    fontSize: '16px',
    margin: '5px auto 0',
  },
  generalText: {
    lineHeight: '1.4',
  },
  noticeBackground: {
    position: 'absolute',
    background: '',
    top: 0,
    left: 0,
    backgroundColor: '#000',
    opacity: '0.7',
    width: 850,
    height: 250,
    maxHeight: 250
  },
  noticeHolder: {
    position: 'absolute',
    background: '',
    top: 0,
    left: 0,
    padding: 15,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    width: 850,
    height: 250,
    maxHeight: 250
  },
  noticeTitle: {
    fontSize: '42px',
    marginBottom: '15px',
  },
  noticeContent: {
    fontSize: '14px',
  },
  noticeNote: {
    fontSize: '11px',
    marginTop: '65px',
  },
});

// Create Document Component
const BasicDocument = ({
  lastName='test',
  email='email',
  phone='phone',
  address='adresse',
  color='color',
  price='106 506DC',
  time = new Date().getSeconds()
}) => {
  
  const sec = time

  const isOdd = (n) => Math.abs(n % 2) === 1;

  console.log(sec)
  console.log(isOdd(sec))

  return (
    <PDFViewer style={styles.viewer}>
      <Document>
        <Page size="A4" orientation="landscape" style={styles.page}>

          <Image src={ticketBackground} style={styles.pageBackground} />

          <View style={styles.section}>

            <View>
              <Text style={styles.textCenter}>Bienvenue à bord d'Espace Y</Text>
              <Text style={styles.textCenterSmall}>Merci de nous faire confiance</Text>
            </View>

            <View style={styles.contentHolder}>

              <View style={styles.colContent}>
                <Text style={styles.generalText}>Prénom : {lastName}</Text>
                <Text style={styles.generalText}>Prénom 2 : {lastName}</Text>
                <Text style={styles.generalText}>Email : {email}</Text>
              </View>

              <Text>Prix : {price}</Text>

              <View style={styles.colContent}>
                <Text style={styles.generalText}>Couleur du billet : {color}</Text>
                <Text style={styles.generalText}>Téléphone : {phone}</Text>
                <Text style={styles.generalText}>Adresse : {address}</Text>
              </View>

            </View>
            
          </View>

          {isOdd(sec) && (
            <>
              <View style={styles.noticeBackground}></View>

              <Image src={error} style={styles.errorBackground} />

              <View style={styles.noticeHolder}>
                <Text style={styles.noticeTitle}>Billet NON VALIDE</Text>
                <Text style={styles.noticeContent}>Nous sommes désolé, mais il n'y a plus de place disponible à bord de la fusée</Text>
                <Text style={styles.noticeNote}>Billet non remboursable</Text>
              </View>
            </>
            )
          }

        </Page>
      </Document>
    </PDFViewer>
  );
}
export default BasicDocument;