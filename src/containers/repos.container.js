import React, { Component } from 'react';
import {
  Image,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
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
  }

  render() {
    let { repos, isLoading, hasErrored } = this.props;
    console.log('PROPS', repos, isLoading, hasErrored);
    let content = null;

    if (isLoading) {
      content = <Text style={styles.headline}>Loading…</Text>;
    }
    if (hasErrored) {
      content = <Text style={styles.headline}>Sorry! There was an error loading the repositories info</Text>;
    }
    if (repos && repos.length) {
      content = <TopRepos reposData={repos}/>;
    }
    //console.log(repos);

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
        { content }
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
