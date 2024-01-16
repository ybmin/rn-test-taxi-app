import {StatusBar, SafeAreaView, ScrollView} from 'react-native';
import css from '@emotion/native';
import {DripsyProvider, View, Text} from 'dripsy';
import {useState} from 'react';

import Button from './src/components/Button';
import AdaptiveDiv from './src/components/AdaptiveDiv';
import WhiteContainer from './src/components/WhiteContainer';
import InputAcount from './src/components/Input/InputAccount';
import Select from 'components/Input/Select';
// import Footer from 'components/Footer';

import theme, {dripsyTheme} from './src/tools/theme';
import DottedLine from 'components/DottedLine';

const sortOptions = {
  time: '출발 시간 순',
  leftPeopleReverse: '남은 인원 많은 순',
  leftPeopleNatural: '남은 인원 적은 순',
};

function App(): React.JSX.Element {
  const [sortOption, setSortOption] = useState(sortOptions.time);
  const [account, setAccount] = useState('');
  return (
    <DripsyProvider theme={dripsyTheme}>
      <SafeAreaView>
        <StatusBar />
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <WhiteContainer>
            <AdaptiveDiv type="center">
              <Button type="gray">Button</Button>
            </AdaptiveDiv>

            <View sx={{gap: 10}}>
              <Select
                value={sortOption}
                options={Object.entries(sortOptions).map(([, value]) => ({
                  value,
                  label: value,
                }))}
                onChangeValue={setSortOption}
              />
              <View
                sx={{
                  flexDirection: 'row',
                  paddingHorizontal: 10,
                  gap: 10,
                  justifyContent: 'flex-start',
                  textAlign: 'center',
                  alignItems: 'center',
                }}>
                <Text>계좌번호</Text>
                <InputAcount value={account} onChangeValue={setAccount} />
              </View>
            </View>
            {/* <Footer /> */}
          </WhiteContainer>
        </ScrollView>
      </SafeAreaView>
    </DripsyProvider>
  );
}
export default App;
