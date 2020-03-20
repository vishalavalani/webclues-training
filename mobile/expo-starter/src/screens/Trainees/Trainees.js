import React from 'react';
import { SafeAreaView, Text, View, ScrollView } from 'react-native';
import { trainees } from '../../../shared/trainees';
import { styles } from './styles';

export default function Trainees() {
  const { container, traineeView, idView, idText, nameText } = styles;
  const traineesObj = trainees.map(trainee => {
    const { id, name } = trainee;
    return (
      <View key={id} style={traineeView}>
        <View style={idView}>
          <Text style={idText}>{id}</Text>
        </View>
        <Text style={nameText}>{name}</Text>
      </View>
    );
  });
  return <ScrollView style={container}>{traineesObj}</ScrollView>;
}
