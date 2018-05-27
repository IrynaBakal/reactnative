import React, { Component } from 'react';
import {
  Platform,
  Text,
  View,
  TextInput,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import { styles } from '../styles/index';
import TopRepos from '../components/top-repos';
import { connect } from 'react-redux';
import { fetchRepos } from '../actions/repos';

class ReposContainer extends Component {

  cancelSearchHandler = (e) => {
    //this.setState({ searchInput: '' });
    console.log('cancel', e);
  };

  componentDidMount() {
    this.props.dispatch(fetchRepos());
    //this.props.fetchData('https://api.github.com/search/repositories?q=stars:>=10000+language:js&sort=stars&order=desc');
  }

  render() {
    let {repos} = this.props;
    console.log('PROPS',this.props);
    if (this.props.hasErrored) {
      return <Text>Sorry! There was an error loading the repositories info</Text>;
    }
    if (this.props.isLoading) {
      return <Text>Loading…</Text>;
    }

    console.log(repos);

    {/* onChangeText={(searchInput) => this.setState({ searchInput })} */}
    return (
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <Image
            resizeMode="contain"
            source={require('../assets/search.png')}
            style={styles.searchIcon}
          />
          <TextInput
            placeholder={'search'}
            style={styles.searchField}
            value={this.props.searchInput}
            underlineColorAndroid="transparent"
          />
          <TouchableWithoutFeedback onPress={this.cancelSearchHandler}>
            <Image
              resizeMode="contain"
              source={require('../assets/cancel.png')}
              style={styles.cancelIcon}
            />
          </TouchableWithoutFeedback>
        </View>
        {/*<Text>{Platform.OS === 'ios' ? 'iosios' : 'android'}</Text>*/}
        {/*<TopRepos searchQuery={this.state.searchInput} reposData={this.state.repos}/>*/}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    repos: state.repos,
    isLoading: state.reposIsLoading,
    hasErrored: state.reposHasErrored,
  };
};

export default connect(mapStateToProps)(ReposContainer);
