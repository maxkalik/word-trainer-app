import React, { useState } from 'react';
import { Text, View, FlatList, TouchableOpacity, SafeAreaView, Animated } from 'react-native';
import { useStateValue } from '../../state';
import { Message } from '../../components/common';
import { WordTypes } from '../../types';
import { styles } from './styles';

const TrainersScreen: React.FC = ({ navigation }): JSX.Element => {
  const [{ words }] = useStateValue();
  const wordsLength = words.length >= 10;
  const [searchBarOpacityAnim] = useState(new Animated.Value(1));
  console.log(searchBarOpacityAnim);
  const renderMessage = () => (
    <Message
      title={`${words.length}/10 words`}
      description="You have insufficient words amount to train"
      btnTitle="Add More Words"
      btnOnPress={(): void => navigation.navigate('Add Word')}
    />
  );

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item'
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item'
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item'
    }
  ];

  const renderTrainers = (wordItmes: WordTypes[]) => (
    <Animated.FlatList
      numColumns={2}
      style={styles.list}
      data={DATA}
      ListHeaderComponent={() => (
        <Animated.View
          style={[
            styles.header,
            {
              transform: [
                {
                  translateY: searchBarOpacityAnim.interpolate({
                    inputRange: [13, 15],
                    outputRange: [0, 1]
                  })
                }
              ]
            }
          ]}
        >
          <Text style={styles.headerTitle}>Word trainers</Text>
        </Animated.View>
      )}
      onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: searchBarOpacityAnim } } }], {
        useNativeDriver: true
      })}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.trainer} onPress={() => navigation.navigate('Word to Translate', wordItmes)}>
          <View style={styles.image}>
            <Text>Image</Text>
          </View>
          <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
      )}
      keyExtractor={({ id }) => id}
    />
  );

  return <SafeAreaView style={styles.container}>{wordsLength ? renderTrainers(words) : renderMessage()}</SafeAreaView>;
};

export default TrainersScreen;
