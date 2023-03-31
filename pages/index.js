/* eslint-disable @next/next/no-img-element */
import Hero from '../components/modules/Hero';
import Text from '../components/modules/Text';
import ImageWithParagraph from '../components/modules/ImageWithParagraph';
import TwoColText from '../components/modules/TwoColText';
import smoothscroll from 'smoothscroll-polyfill';
import { useEffect } from 'react';

import css from './index.module.scss';

const Index = () => {

  useEffect (() => {
    smoothscroll.polyfill();
  }, []);

  
  return (
    <div className={css.index}>
      <div className={css.content}>
      <div className={css.hero}>
        <Hero
          logo='/images/fazer_logo.png'
          heading="Muutos tehdään suomalaisilla pelloilla"
          paragraph='Kädet savessa, yhdessä viljelijöiden kanssa, uudistamme viljelytapoja luonnolle paremmiksi. Kutsumme tätä työtä Fazerin Viljavisioksi.'
          bgImageUrl="/images/hero.jpg"
          bgVeilColor="rgba(0, 0, 0, .3)"
          textColor="#ffffff"
        >
        </Hero>
      
      </div>

      <div className={css.modualsSection1}>
      
        <Text
        id='VILJAVISION'
        header='Näemme ruuan ratkaisuna'
        maxwidth='660px'
        >
          <p>Ruualla, sen tuotanto- ja kulutustavoilla on merkittävä vaikutus ympäristöömme ja vesistöihimme. Teemme pitkäjänteisesti työtä yhdessä suomalaisten viljelijöiden kanssa muuttaaksemme viljanviljelyn käytäntöjä kestävämmiksi. Näin pyrimme vähentämään hiilidioksidipäästöjä, turvaamaan suomalaista ruuantuotantoa sekä edistämään luonnon monimuotoisuutta. </p>
        </Text>
        
        <ImageWithParagraph
            image= '/images/fazer2.jpg'
            heading= 'Tähtäämme vesistöjen rehevöitymisen vähenemiseen pelto kerrallaan'
            paragraph1= 'Pelloilla käytettävillä lannoitteilla on suuri merkitys vesistöjen rehevöitymisen kannalta. Kestävien viljanviljelymenetelmien avulla pyritään saamaan ravinteet paremmin kasvien käyttöön ja näin vähentämään ravinnevalumista aiheutuvaa rehevöitymistä.'
            bgColor= '#C3AA7E'
            direction= 'rtl'
        >
        </ImageWithParagraph>
        <ImageWithParagraph
            image= '/images/fazer4.jpg'
            heading= 'Kylvämme tulevaisuuden satoa'
            paragraph1= 'Katseemme on pitkällä tulevaisuudessa. Tavoitteenamme on, että vuoteen 2025 mennessä kaikki Suomessa ja Ruotsissa kuluttajatuotteissa käyttämämme vilja täyttää Fazerin kestävän viljelyn periaatteet.'
            bgColor= '#F2B33E'
            direction= 'ltr'
        >
        </ImageWithParagraph>
        <ImageWithParagraph
            image= '/images/fazer12.jpg'
            heading= 'Tulevaisuuden tavoitteenamme on muuttaa hiililähteet nieluiksi pelto pellolta'
            paragraph1= 'Hyväkuntoinen maaperä tukee hiilensidontaa. Hiiliviljelyn tavoitteena on varastoida hiiltä maahan, jolloin samalla pelto pysyy multavana ja pieneliöstö monimuotoisena.'
            bgColor= '#67ADB6'
            direction= 'rtl'
        >
        </ImageWithParagraph>
       
      
      </div>

      <section className={css.modualsSection2}>
         
          <TwoColText
          mainHeading='Yhteistyössä viljelijöiden kanssa'
          col1paragraph1='Olemme päivittäin yhteydessä sopimusviljelijöidemme kanssa ja pidämme viljelijämme ajan tasalla mm. uutiskirjeiden avulla. Vuosittain järjestämme kaksi koulutusseminaaria ja lisäksi pidämme eri tilaisuuksissa puheenvuoroja sekä järjestämme pellonpiennartilaisuuksia yhdessä yhteistyökumppaneiden kanssa. Kestävän viljelyn menetelmien edistäminen on oleellinen osa näitä koulutuksia. Kolmella edelläkävijätilallemme pilotoidaan jatkuvasti uusia viljelymenetelmiä. Pilottitiloilla on iso merkitys sopimusviljelijäyhteistyössä, sillä niiden kokemuksia jaetaan aktiivisesti myös muille sopimusviljelytiloille.'
          col2paragraph1='Kestävän viljelyn auditoinnit ovat tärkeä osa viljelijäyhteistyötä, olemme auditoineet lähemmäs kaksi sataa maatilaa vuodesta 2014 alkaen, Tero Hirvi kertoo käytössä olevista Viljavision yhteistyömalleista.'
          col2paragraph2='Viljelijöiden käytössä on myös maksuton uudistavan viljelyn e-opisto. Verkkokurssina toteutettavan kattavan ja monipuolisen koulutuksen tarkoituksena on lisätä tietoa uudistavasta hiiliviljelystä, jonka voit aloittaa vaikka peltolohko kerrallaan. Maksuton kurssi sisältää noin 60 tuntia opiskelua. Kurssi on saatavilla myös äänikirjana.'  
          >
          </TwoColText>
      </section>


      <section className={css.modualsSection3}>

          <ImageWithParagraph
            image= '/images/fazer9.jpg'
            quot='”Fazerin sopimusviljelijänä käytössäni on tärkeitä työkaluja, jotka helpottavat viljelemään mahdollisimman kestävästi ja joilla Viljavisiota viedään käytäntöön päivittäisillä valinnoilla.”'
            quotee='– Jussi Joutsiniemi, Fazerin sopimusviljelijä, Kangasala'
            bgColor= '#E5A9B8'
            direction= 'ltr'
        >
        </ImageWithParagraph>
          <ImageWithParagraph
            image= '/images/fazer11.jpg'
            quot='”Fazer on tehnyt jo viisi vuosikymmentä tiivistä yhteistyötä viljelijöiden kanssa.
            Yhteisenä päämääränämme on, että puhdasta ja laadukasta kotimaista viljaa riittää myös tulevaisuudessa. Viljavisio on pitkäjänteistä yhteistyötä.”'
            quotee='– Tero Hirvi, Fazer Myllyn viljanhankintajohtaja'
            bgColor= '#67ADB6'
            direction= 'rtl'
        >
        </ImageWithParagraph>
      </section >


      <section className={css.modualsSection2}>

          <Text
        id='VILJAVISION'
        header='Kestävän viljanviljelyn periaatteet'
        maxwidth='1380px'
        className= {css.textAlign}
        >
          <p><b>Kestävä viljanviljely pohjaa tarkkaan suunnitteluun</b></p>
          <p><b>Vuosittain: </b>Viljelysuunnitelma   <b>5 v. välein (tai useammin):</b> Viljelykiertosuunnitelma, ravinnetaseiden tarkistus ja maa–analyysit </p>
          <img src="/images/fazer10.png" alt="" />
        </Text>
      </section>

      <section className={css.modualsSection3}>
      
        <div>
          <img className={css.headImage} src="/images/fazer5.jpg" alt="weat image" style={{marginBottom: -4 + 'px'}}/>
        </div>

        <Text
          maxwidth='1120px'
          header='10 kestävän viljelyn menetelmää'
          paragraph='Olemme luoneet yhdessä viljelijöiden, tuottaja- ja ympäristöjärjestöjen sekä muiden sidosryhmien kanssa kymmenen kestävän viljanviljelyn menetelmää, joita noudattamalla pyrimme saavuttamaan Viljavisiomme tavoitteet.'
          paragraphMaxwidth= '630px'
        >
          <div className={css.listContainer}>
            <ul>
              <li>
                <span>1.</span>
                <p>Viljelijä laskee maaperän ravinnetaseen, josta selviää, kuinka hyvin ravinteet on saatu hyödynnettyä.</p>
              </li>
              <li>
                <span>2.</span>
                <p>Viljelysuunnitelmaa tehdessä viljelijä valitsee maaperään sekä viljelykiertoon sopivan kasvin ja kasville tarvittavan lannoitemäärän.</p>
              </li>
              <li>
                <span>3.</span>
                <p>Viljelykiertosuunnitelmalla viljelijä pitkäjänteisesti suunnittelee kasvien vuorotusta niin, että lannoitteita ja kasvinsuojeluaineita tarvitaan vähemmän.</p>
              </li>
              <li>
                <span>4.</span>
                <p>Maanäytteiden avulla viljelijä selvittää maaperän kasvukuntoa ja ravinnepitoisuutta, jotta lannoitteita käytetään juuri oikea määrä.</p>
              </li>
              <li>
                <span>5.</span>
                <p>Täsmäviljelyn keinoin viljelijä kohdentaa lannoituksen ja muut toimenpiteet tarkasti niihin kohtiin peltolohkoa, jossa niitä tarvitaan.</p>
              </li>
              
            </ul>
            <ul>
              <li>
                <span>6.</span>
                <p>Syysviljoilla, kerääjäkasveilla ja muulla talviajan kasvipeitteisyydellä estetään mahdollisia ravinnevalumia sekä pidennetään kasvien yhteyttämisaikaa.</p>
              </li>
              <li>
                <span>7.</span>
                <p>Haitta-aineettomien kierrätysravinteiden (mm. karjan lanta) käyttöä pyritään hyödyntämään mahdollisimman tehokkaasti.</p>
              </li>
              <li>
                <span>8.</span>
                <p>Viljelemättömiä ja ruiskuttamattomia alueita jätetään tukemaan luonnon monimuotoisuutta.</p>
              </li>
              <li>
                <span>9.</span>
                <p>Viljelijä valitsee ympäristön ja talouden kannalta kulloinkin parhaan kasvinsuojelumenetelmän, tätä kutsutaan integroiduksi kasvinsuojeluksi.</p>
              </li>
              <li>
                <span>10.</span>
                <p>Viljelijä minimoi kasvunsääteiden käyttöä.</p>
              </li>
              
            </ul>
          </div>
        </Text>
      
        <ImageWithParagraph
            image= '/images/fazer7.png'
            heading= 'Viljavision ensimmäinen tavoite on vuodessa 2025'
            paragraph1= 'Viljavisio kylvää tulevaisuuden satoa. Yhteisenä tavoitteenamme on rehevöitymisen minimoiminen, luonnon monimuotoisuuden suojelu, kemikaalien käytön minimointi sekä hiilen sitominen maaperään. Tavoitteemme on, että vuoteen 2025 mennessä kaikki Suomessa ja Ruotsissa kuluttajatuotteissa käyttämämme vilja täyttää Fazerin kestävän viljelyn periaatteet.'
            bgColor= '#67ADB6'
            direction= 'ltr'
        >
        </ImageWithParagraph>
     

      </section>

      </div>
    </div>
  );
};

export default Index;
