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
  state = { searchInput: '' };

  componentWillReceiveProps(nextProps){
    console.log('nextProps',nextProps);
    console.log('currProps',this.props);

    if (nextProps.repos !== this.props.repos ||
        nextProps.isLoading !== this.props.isLoading) {
      console.log('nextProps',nextProps);
       this.setState({
         repos: nextProps.repos,
         isLoading: nextProps.isLoading,
       })
    }
  }

  cancelSearchHandler = (e) => {
    this.setState({ searchInput: '' });
    console.log('cancel', e, this.state.searchInput);
    this.updateTopRepos('');
  };

  changeSearchHandler = (query) => {
    console.log('query', query);
    this.setState({ searchInput: query });
    this.updateTopRepos(query);
  };

  updateTopRepos = (query) => {
    let repos = [...this.props.repos];
    let searchedRepos = query.length ? repos.filter(item => {
      return item.name.toLowerCase().includes(query);
    }) : repos;
    console.log(searchedRepos);
    this.setState({repos: searchedRepos});

  };

  componentDidMount() {
    this.props.dispatch(fetchRepos());
  }

  render() {
    console.log('state after constructor in render ', this.state);

    let { isLoading, hasErrored } = this.props;
    console.log('PROPS', isLoading, hasErrored);
    let content = null;

    if (this.state.repos && this.state.repos.length) {
      content = <TopRepos reposData={this.state.repos}/>;
    } else {
      content = (<View style={{ alignItems: 'center' }}>
        <Text style={styles.headline}>Sorry, no results were found!</Text>
        <Image
          source={require('../assets/no_results.png')}
          resizeMode={'contain'}
        />
      </View>);
    }
    if (isLoading) {
      content = <Text style={styles.headline}>Loading…</Text>;
    }
    if (hasErrored) {
      content = <Text style={styles.headline}>Sorry! There was an error loading the repositories info</Text>;
    }
    //console.log(repos);

    return (
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <Image
            resizeMode="contain"
            source={require('../assets/search.png')}
            style={styles.searchIcon}
          />
          {console.log(this.state.searchInput,'RENDER')}
          <TextInput
            placeholder={'search'}
            style={styles.searchField}
            value={this.state.searchInput}
            underlineColorAndroid="transparent"
            onChangeText={(searchInput) => this.changeSearchHandler(searchInput.toLowerCase())}
            editable={!this.state.isLoading}
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
  console.log('mapStateToProps', state);
  return {
    repos: state.repos,
    isLoading: state.reposIsLoading,
    hasErrored: state.reposHasErrored,
  };
};

export default connect(mapStateToProps)(ReposContainer);
