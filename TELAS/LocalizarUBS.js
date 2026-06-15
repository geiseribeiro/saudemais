import React, { useState } from 'react';

import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

export default function App() {

  const [tela, setTela] = useState('lista');

  const [ubsSelecionada, setUbsSelecionada] = useState(null);

  const [diaSelecionado, setDiaSelecionado] = useState(15);

  const ubs = [

    {
      nome: 'UBS MOACIR BRAGA ( MANAUS DA BEIRA )',
      endereco: 'São José do Gurupi, Viseu - PA',
      cor: '#2563EB',
    },

    {
      nome: 'UBS SÃO LOURENÇO',
      endereco: 'Rua de Nazaré, Carutapera - MA',
      cor: '#22C55E',
    },

    {
      nome: 'UBS MANOEL HENRIQUE DE QUEIROZ',
      endereco: 'Livramento - Carutapera',
      cor: '#F97316',
    },

    {
      nome: 'UBS FRANCISCO PLÁCIDO DE SOUSA',
      endereco: 'São José - Carutapera',
      cor: '#8B5CF6',
    },

    {
      nome: 'UBS MARIA RIBEIRO DE ALMEIDA LOPES',
      endereco: 'Santa Rita - Carutapera',
      cor: '#EC4899',
    },

    {
      nome: 'CENTRO DE SAÚDE SUZETE BORGES',
      endereco: 'Centro - Carutapera',
      cor: '#06B6D4',
    },

    {
      nome: 'UBS CARANANDIUA',
      endereco: 'Caranandíua',
      cor: '#EAB308',
    },

    {
      nome: 'UBS JAIME ENRIQUE BASSANINI',
      endereco: 'Santa Luzia',
      cor: '#6366F1',
    },

    {
      nome: 'UBS ROSA ALMEIDA DE ARAÚJO',
      endereco: 'Aparecida',
      cor: '#14B8A6',
    },

  ];

  const eventos = {

    5: {
      titulo: 'Vacinação Infantil',
      cor: '#DBEAFE',
      emoji: '💉',
    },

    10: {
      titulo: 'Pré-Natal',
      cor: '#E9D5FF',
      emoji: '🤰',
    },

    15: {
      titulo: 'Consulta Médica',
      cor: '#DCFCE7',
      emoji: '🩺',
    },

    22: {
      titulo: 'Odontologia',
      cor: '#FED7AA',
      emoji: '🦷',
    },

    28: {
      titulo: 'Hipertensão e Diabetes',
      cor: '#DBEAFE',
      emoji: '❤️',
    },

  };

  const abrirUBS = (ubs) => {
    setUbsSelecionada(ubs);
    setTela('cronograma');
  };

  const voltar = () => {
    setTela('lista');
    setUbsSelecionada(null);
  };

  if (tela === 'lista') {

  return (

    <SafeAreaView style={styles.container}>

      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={styles.headerLista}>

          <Text style={styles.tituloLista}>
            CRONOGRAMAS
          </Text>

          <Text style={styles.subtituloLista}>
            Escolha uma UBS para visualizar o cronograma mensal.
          </Text>

          <Ionicons
            name="calendar"
            size={70}
            color="#2563EB"
            style={styles.iconeCalendario}
          />

        </View>

        <View style={styles.searchContainer}>

          <Ionicons
            name="search"
            size={22}
            color="#22C55E"
          />

          <TextInput
            placeholder="Buscar UBS..."
            style={styles.searchInput}
          />

        </View>

        {ubs.map((item, index) => (

          <TouchableOpacity
            key={index}
            style={styles.cardUBS}
            onPress={() => abrirUBS(item)}
          >

            <View
              style={[
                styles.iconCard,
                {
                  backgroundColor: item.cor,
                },
              ]}
            >

              <Ionicons
                name="medical"
                size={28}
                color="#FFFFFF"
              />

            </View>

            <View style={styles.infoCard}>

              <Text style={styles.nomeUBS}>
                {item.nome}
              </Text>

              <Text style={styles.enderecoUBS}>
                {item.endereco}
              </Text>

            </View>

            <Ionicons
              name="chevron-forward"
              size={24}
              color="#2563EB"
            />

          </TouchableOpacity>

        ))}

      </ScrollView>

    </SafeAreaView>

  );

}

const eventoAtual = eventos[diaSelecionado];

return (

  <SafeAreaView style={styles.container}>

    <ScrollView showsVerticalScrollIndicator={false}>

      <View
        style={[
          styles.headerCronograma,
          {
            backgroundColor: ubsSelecionada.cor,
          },
        ]}
      >

        <TouchableOpacity
          onPress={voltar}
          style={styles.botaoVoltar}
        >

          <Ionicons
            name="arrow-back"
            size={28}
            color="#FFFFFF"
          />

        </TouchableOpacity>

        <Text style={styles.tituloCronograma}>
          Cronograma da UBS
        </Text>

        <Text style={styles.subtituloCronograma}>
          {ubsSelecionada.nome}
        </Text>

      </View>

      <View style={styles.cardPrincipal}>

        <Text style={styles.nomeCronograma}>
          {ubsSelecionada.nome}
        </Text>

        <Text style={styles.enderecoCronograma}>
          {ubsSelecionada.endereco}
        </Text>

        <View style={styles.statusAberta}>

          <Text style={styles.textoStatus}>
            ● Aberta
          </Text>

        </View>

      </View>

      <Text style={styles.tituloSecao}>
        Junho 2026
      </Text>

      <View style={styles.calendario}>

        {Array.from({ length: 30 }, (_, i) => i + 1).map((dia) => (

          <TouchableOpacity
            key={dia}
            onPress={() => setDiaSelecionado(dia)}
            style={[
              styles.dia,

              diaSelecionado === dia &&
              styles.diaSelecionado,

              eventos[dia] &&
              styles.diaComEvento,
            ]}
          >

            <Text
              style={[
                styles.numeroDia,

                diaSelecionado === dia &&
                styles.numeroDiaSelecionado,
              ]}
            >
              {dia}
            </Text>

          </TouchableOpacity>

        ))}

      </View>

      <Text style={styles.tituloSecao}>
        Evento do Dia
      </Text>

      {eventoAtual ? (

        <View
          style={[
            styles.cardEvento,
            {
              backgroundColor: eventoAtual.cor,
            },
          ]}
        >

          <Text style={styles.dataEvento}>
            Dia {diaSelecionado}
          </Text>

          <Text style={styles.tituloEvento}>
            {eventoAtual.emoji} {eventoAtual.titulo}
          </Text>

        </View>

      ) : (

        <View style={styles.cardSemEvento}>

          <Ionicons
            name="calendar-outline"
            size={40}
            color="#94A3B8"
          />

          <Text style={styles.textoSemEvento}>
            Nenhum atendimento programado neste dia.
          </Text>

        </View>

      )}

      <View style={styles.cardImportante}>

        <Ionicons
          name="information-circle"
          size={40}
          color="#F59E0B"
        />

        <Text style={styles.textoImportante}>
          Os horários podem sofrer alterações. Consulte a UBS para confirmação.
        </Text>

      </View>

    </ScrollView>

  </SafeAreaView>

);

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },

  /* LISTA */

  headerLista: {
    backgroundColor: '#FFFFFF',
    margin: 20,
    borderRadius: 30,
    padding: 25,
    elevation: 4,
  },

  tituloLista: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#0F172A',
  },

  subtituloLista: {
    marginTop: 10,
    color: '#64748B',
    fontSize: 15,
    width: '70%',
  },

  iconeCalendario: {
    position: 'absolute',
    right: 20,
    top: 20,
  },

  searchContainer: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: '#4ADE80',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    height: 60,
  },

  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },

  cardUBS: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginBottom: 14,
    borderRadius: 24,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 3,
  },

  iconCard: {
    width: 65,
    height: 65,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },

  infoCard: {
    flex: 1,
    marginLeft: 15,
  },

  nomeUBS: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0F172A',
  },

  enderecoUBS: {
    marginTop: 4,
    color: '#64748B',
  },

  /* CRONOGRAMA */

  headerCronograma: {
    paddingTop: 55,
    paddingBottom: 30,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },

  botaoVoltar: {
    marginBottom: 15,
  },

  tituloCronograma: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  subtituloCronograma: {
    color: '#E0E7FF',
    marginTop: 6,
  },

  cardPrincipal: {
    backgroundColor: '#FFFFFF',
    margin: 20,
    borderRadius: 24,
    padding: 20,
    elevation: 4,
  },

  nomeCronograma: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0F172A',
  },

  enderecoCronograma: {
    marginTop: 8,
    color: '#64748B',
  },

  statusAberta: {
    marginTop: 15,
    backgroundColor: '#DCFCE7',
    alignSelf: 'flex-start',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 12,
  },

  textoStatus: {
    color: '#16A34A',
    fontWeight: 'bold',
  },

  tituloSecao: {
    marginHorizontal: 20,
    marginBottom: 15,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0F172A',
  },

  /* CALENDÁRIO */

  calendario: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    backgroundColor: '#fffff',
    borderRadius: 24,
    padding: 15,
    marginBottom: 20,
    elevation: 3,
  },

  dia: {
    width: '12%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 50,
  },

  diaComEvento: {
    backgroundColor: 'lightgreen',
  },

  diaSelecionado: {
    backgroundColor: '#2563EB',
  },

  numeroDia: {
    color: '#0F172A',
    fontWeight: 'bold',
  },

  numeroDiaSelecionado: {
    color: 'black',
  },

  /* EVENTOS */

  cardEvento: {
    marginHorizontal: 20,
    borderRadius: 20,
    padding: 20,
    marginBottom: 15,
  },

  dataEvento: {
    color: '#475569',
    fontWeight: 'bold',
  },

  tituloEvento: {
    marginTop: 8,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0F172A',
  },

  cardSemEvento: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    marginBottom: 15,
  },

  textoSemEvento: {
    marginTop: 10,
    textAlign: 'center',
    color: '#64748B',
  },

  cardImportante: {
    backgroundColor: '#FEF3C7',
    margin: 20,
    borderRadius: 20,
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },

  textoImportante: {
    flex: 1,
    marginLeft: 12,
    color: '#92400E',
    fontWeight: 'bold',
  },

});