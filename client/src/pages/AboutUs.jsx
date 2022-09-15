import styled from "styled-components";
import { COLORS } from "../constants";
import {FAQquestions} from "../contents/faq";
import {useEffect, useState} from "react";

const AboutUs = () => {

    return (
        <>
          <Wrapper>
              <Title>À propos</Title>
              <Text>
                  Fondé en 2049, Espace Y est un programme spatial sénégalais et le leader mondial de voyage interplanétaire. L'agence compte un effectif diversifié d'un peu moins de 150 fonctionnaires et travaille avec de nombreuses PME, écoles secondaires et partenaires locaux.

                  Avec un budget annuel de 53 000$ (L’équivalent de 62 824 DogeCoin), l’agence a su gagner la confiance des voyageurs.
              </Text>
              <Title>Notre mission</Title>
              <Text>
                  Espace Y est un projet purement capitaliste, notre objectif est de faire un maximum de profit. Nos fusées sont construite avec les meilleurs matériaux possibles avec extrême minutie, pour ainsi s'assurer la sécurité de nos passagé, mais surtout pour que nos fusées puissent faire un maximum d'aller-retour pour que le projet soit rentable.
                  <Citation>« Vers l'infini et au-delà! Tant que ça revient dans nos poches », comme le dit si bien notre CEO.</Citation>
                  Nous avons également plusieurs objectifs secondaires, tel que:
                  <ul>
                      <ListElement>
                          Peupler Mars avant que la Terre soit frappé par l’astéroïde Vesta le 26 septembre 2054
                      </ListElement>
                      <ListElement>
                          Nos fusées sont munie de satellites qui vont se détacher au cours de l’envol pour se mettre en orbite autour de la Terre dans le but de faire pleuvoir de la nourriture
                      </ListElement>
                  </ul>
              </Text>
              <Title>Services à dispositions</Title>
              <Text>
                  Voici une liste de nos services à dispositions:
                  <ul>
                      <ListElement>
                          Un service de garderie directement à l’intérieur du vaisseau
                      </ListElement>
                      <ListElement>
                          Si la température le permet, nous pouvons faire un arrêt sur la lune lors des vols commerciaux
                      </ListElement>
                      <ListElement>
                          Nos bites bouchées, disponibles dans nos fusées !
                      </ListElement>
                      <ListElement>
                          Une couleur totalement personnalisable des billets
                      </ListElement>
                  </ul>
              </Text>
              <Title>Derniers mots</Title>
              <Text>
                  Nous voulons remercier nos agents de supports, qui améliorent sans cesse notre FAQ avec des questions toujours plus pertinentes les unes que les autres.Nous préférons être sans commentaire vis-à-vis de la compagnie Space X. Remercions également les designers de partout dans le monde qui nous ont aidé à construire une interface utilisateur reflétant parfaitement notre professionnalisme vis-à-vis de notre mission. À savoir que nous ne sommes aucunement responsables des accidents arrivant avant, pendant et après les vols.
                  <TextInSmallChars>Voyage du retour offert pour le double du prix</TextInSmallChars>
              </Text>
          </Wrapper>
        </>
    )
};

const Wrapper = styled.div`
    margin: 1rem;
`;

const Title = styled.h1`
    font-size: 1.5rem;
`;

const ListElement = styled.li`
    list-style: inside;
`;

const TextInSmallChars = styled.p `
    font-size: 8px;
`

const Text = styled.p `
    text-align: justify;
    margin-top: 1rem;
    margin-bottom: 1rem;
    line-height: 1.4rem;
`

const Citation = styled.p `
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-style: italic;
`

export default AboutUs;