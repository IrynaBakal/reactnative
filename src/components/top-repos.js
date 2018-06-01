import React from 'react';
import {
  Image,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { styles } from '../styles/top-repos';

const TopRepos = ({reposData, fetchRepoDetailed}) => {
  console.log(reposData, fetchRepoDetailed);

  showDetailedRepo = () => {
    console.log('clicked');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headline}>{`Top ${reposData.length} repositories`.toUpperCase()}</Text>
      {
        reposData.map((repo,i) => {
          return (
            <View key={repo.id} style={styles.repoItem}>
              <View style={styles.repoWrapper}>
                <Text style={styles.title}>{`${i+1}. ${repo.name} `}</Text>
                <View style={styles.iconsContainer}>
                  <View style={styles.iconContainer}>
                    <Image
                      resizeMode="contain"
                      source={require('../assets/star.png')}
                      style={styles.icon}
                    />
                    <Text>{repo.stargazers_count}</Text>
                  </View>
                  <View style={styles.iconContainer}>
                    <Image
                      resizeMode="contain"
                      source={require('../assets/eye.png')}
                      style={styles.icon}
                    />
                    <Text>{repo.watchers_count}</Text>
                  </View>
                  <View style={styles.iconContainer}>
                    <Image
                      resizeMode="contain"
                      source={require('../assets/bug.png')}
                      style={styles.icon}
                    />
                    <Text>{repo.open_issues_count}</Text>
                  </View>
                </View>
              </View>
              <TouchableWithoutFeedback onPress={fetchRepoDetailed.bind(this, repo.full_name)}>
                <Image
                  resizeMode="contain"
                  source={require('../assets/next.png')}
                  style={styles.nextIcon}
                />
              </TouchableWithoutFeedback>
            </View>
          )
        })
      }
    });
    </ScrollView>
  );
};

export default TopRepos;
