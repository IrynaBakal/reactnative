import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList
} from 'react-native';
import { styles } from '../styles/top-repos';

const TopRepos = ({reposData}) => {

  return (
    <View style={styles.container}>
      <Text style={styles.headline}>Top { reposData.length ? `${reposData.length}` : null } repositories</Text>
      <FlatList
        data={reposData}
        renderItem={(repo) => {
        console.log(repo.item);
          return (
            <View key={repo.item.id}>
              <Text>{repo.item.name}</Text>
            </View>
          )}
        }
      />

    });
    </View>
  );
};

export default TopRepos;
