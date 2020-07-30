import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class PrivacyTexts extends Component {
    constructor(props) {
        super(props);
    }

    conditionsPersonalizationParagraphs = [
        'Pirmame žingsnyje turite padaryti savo veido nuotrauką. Veidas turi būti neuždengtas, gerai matomas. Ant galvos ir veido neturi būti pašalinių daiktų (kepurės, akinių). Atvaizde negali būti pašalinių asmenų. Nuotrauka yra užfiksuojama paspaudus „Fiksuoti vaizdą“. Užfiksavus veido atvaizdą, galite įvertinti nuotrauką bei padaryti ją pakartotinai arba pereiti prie sekančio žingsnio spausdamas “Sekantis žingsnis”.',
        'Antrame žingsnyje turite pasirinkti asmens dokumento tipą (asmens tapatybės kortelė ar pasas), spausti „Pradėti identifikaciją“ ir padaryti asmens tapatybę patvirtinančio dokumento pusės ar puslapio, kuriame yra asmens nuotrauka, nuotrauką. Dokumentas turi būti neuždengtas, tinkamai apšviestas ir gerai matomi visi jame esantys duomenys. Atvaizde neturi būti pašalinių daiktų ar asmenų. Dokumentas turi būti nepažeistas. Asmens tapatybę patvirtinančio dokumento vaizdas yra užfiksuojama paspaudus „Fiksuoti vaizdą“. Užfiksavus vaizdą, galite įvertinti nuotrauką bei padaryti ją pakartotinai arba pereiti prie sekančio žingsnio spausdamas “Sekantis žingsnis”.',
        'Trečiame žingsnyje turite padaryti asmens tapatybę patvirtinančio dokumento priekinės ir galinės pusės (jeigu tai yra asmens tapatybės kortelė) nuotrauką. Dokumentas turi būti neuždengtas, tinkamai apšviestas ir gerai matomi visi jame esantys duomenys. Atvaizde neturi būti pašalinių daiktų ar asmenų. Dokumentas turi būti nepažeistas. Asmens tapatybę patvirtinančio dokumento vaizdas yra užfiksuojama paspaudus „Fiksuoti vaizdą“. Užfiksavus vaizdą, galite įvertinti nuotrauką bei padaryti ją pakartotinai arba baigti identifikaciją spausdamas „Baigti identifikaciją“.',
        'Spausdami mygtuką “Baigti identifikaciją” patvirtinate perduodamų duomenų teisingumą.',
    ];

    conditionsDataProtectionParagraphs = [
        'Tapatybės nustatymo proceso metu padarytos Jūsų veido atvaizdo bei Jūsų asmens dokumento nuotraukos, vaizdo įrašai ir identifikavimo ataskaita bus tiesiogiai realiu laiku perduodami MarkID Jūsų asmens tapatybės nustatymo tikslu. MarkID užtikrina Jūsų asmens duomenų, skirtų Jūsų tapatybės nustatymui nuotoliniu būdu, saugumą, taip pat Jūsų asmens duomenų apsaugą nuo atsitiktinio ar neteisėto sunaikinimo, pakeitimo, atskleidimo, taip pat nuo bet kokio kito neteisėto tvarkymo.',
        'Duomenų valdytojas - MarkID, juridinio asmens kodas MarkID, buveinės adresas Žalgirio g. 90, elektroninio pašto adresas dyanovyanovsky@gmail.com, telefono Nr. +37069941454.',
        'Duomenų tvarkytojas – UAB Mark ID, juridinio asmens kodas 305098955, buveinės adresas Žalgirio g. 90, Vilnius, elektroninio pašto adresas info@markid.eu, telefono Nr. +370 672 89813.',
        'Duomenų tvarkymo tikslas - asmens tapatybės nustatymas, kaip tai reglamentuota Lietuvos Respublikos Pinigų plovimo ir teroristų finansavimo prevencijos įstatyme bei Finansinių nusikaltimų tyrimo tarnybos prie Lietuvos Respublikos Vidaus reikalų ministerijos direktoriaus 2016-11-30 įsakymu Nr. V-314 patvirtintuose Techniniuose reikalavimuose kliento tapatybės nustatymo procesui, kai tapatybė nustatoma nuotoliniu būdu, naudojantis elektroninėmis priemonėmis, leidžiančiomis tiesioginio vaizdo perdavimą.',
        'Duomenų saugojimo laikotarpis apibrėžiamas vadovaujantis Lietuvos Respublikos Pinigų plovimo ir teroristų finansavimo prevencijos įstatymu.',
    ];

    conditionsTitles = {
        conditionsModalTitle: 'Tapatybės nustatymo tvarka',
        conditionsModalTitleOne: 'Asmens duomenų apsauga',
    };

    render() {
        return (
            <View>
                <Text style={ styles.titleText }>
                    { this.conditionsTitles.conditionsModalTitle }
                </Text>
                {this.conditionsPersonalizationParagraphs.map( texts => (
                    <Text style={ styles.paragraph }>
                        { texts }
                        {"\n"}
                    </Text>
                ))}
                <Text style={ styles.titleText }>
                    { this.conditionsTitles.conditionsModalTitleOne }
                </Text>
                {this.conditionsDataProtectionParagraphs.map( texts => (
                    <Text style={ styles.paragraph }>
                        { texts }
                        {"\n"}
                    </Text>
                ))}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    titleText: {
        fontSize: 30,
        lineHeight: 32,
        fontWeight: 'bold',
        color: '#484848',
        paddingBottom: '15%'
    },
    paragraph: {
        fontSize: 16,
        lineHeight: 24,
        fontWeight: 'normal',
        overflow: 'scroll'
    }
});